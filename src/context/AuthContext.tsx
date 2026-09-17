import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signInAnonymously,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut as fbSignOut, 
  User as FirebaseUser 
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db, googleProvider, handleFirestoreError, OperationType, testFirestoreConnection } from '../firebase';
import { UserProfile, UserRole } from '../types';

interface AuthContextType {
  currentUser: FirebaseUser | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInAnonymouslyUser: (customCodename?: string) => Promise<string>;
  signInWithAnonymousCode: (code: string, pin: string) => Promise<string>;
  signInAsDemoUser: (role: UserRole, name?: string) => void;
  signOut: () => Promise<void>;
  updateUserRole: (newRole: UserRole) => Promise<void>;
  isTeacher: boolean;
  isAdmin: boolean;
  isAnonymous: boolean;
  studentCode: string | null;
  dbConnected: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ADMIN_EMAIL = 'jaf2jc@bearworks.jackson.sparcc.org';
const SCHOOL_DOMAIN = '@bearworks.jackson.sparcc.org';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [dbConnected, setDbConnected] = useState(true);

  useEffect(() => {
    // Test Firestore connection on app boot
    testFirestoreConnection().then(connected => {
      setDbConnected(connected);
    });

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        await loadOrCreateUserProfile(user);
      } else {
        // Check for saved local demo profile
        const savedDemo = localStorage.getItem('rtr_demo_user');
        if (savedDemo) {
          try {
            setUserProfile(JSON.parse(savedDemo));
          } catch {
            setUserProfile(null);
          }
        } else {
          setUserProfile(null);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const loadOrCreateUserProfile = async (user: FirebaseUser, customCodename?: string, providedCode?: string) => {
    const userDocRef = doc(db, 'users', user.uid);
    try {
      const snap = await getDoc(userDocRef);
      if (snap.exists()) {
        const data = snap.data() as UserProfile;
        setUserProfile(data);
      } else {
        // Initial registration
        const isBootstrapAdmin = user.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();
        const role: UserRole = isBootstrapAdmin ? 'admin' : 'student';

        const isAnon = user.isAnonymous || !user.email;
        const codeSuffix = user.uid.replace(/[^a-zA-Z0-9]/g, '').slice(0, 5).toUpperCase() || Math.floor(1000 + Math.random() * 9000).toString();
        const sCode = providedCode || (isAnon ? `COLONIST-${codeSuffix}` : undefined);
        const displayName = customCodename || user.displayName || (isAnon ? `Colonist #${codeSuffix}` : user.email?.split('@')[0] || 'Colonist');

        const newProfile: UserProfile = {
          userId: user.uid,
          email: user.email || '',
          displayName: displayName,
          role: role,
          studentCode: sCode,
          isAnonymous: isAnon,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };

        await setDoc(userDocRef, {
          ...newProfile,
          serverCreatedAt: serverTimestamp()
        });
        setUserProfile(newProfile);
      }
    } catch (error) {
      console.warn('Using local profile fallback for user:', error);
      // Fallback profile for guest or offline mode
      const isBootstrapAdmin = user.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();
      const isAnon = user.isAnonymous || !user.email;
      const codeSuffix = user.uid.slice(0, 5).toUpperCase();
      const fallback: UserProfile = {
        userId: user.uid,
        email: user.email || '',
        displayName: customCodename || user.displayName || (isAnon ? `Colonist #${codeSuffix}` : 'Colonist'),
        role: isBootstrapAdmin ? 'admin' : 'student',
        studentCode: providedCode || (isAnon ? `COLONIST-${codeSuffix}` : undefined),
        isAnonymous: isAnon
      };
      setUserProfile(fallback);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const email = result.user.email || '';
      
      // If user logs in with a different school domain, inform them but allow access in simulation
      if (!email.endsWith(SCHOOL_DOMAIN) && email !== ADMIN_EMAIL) {
        console.info('Signed in from external domain:', email);
      }
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      throw error;
    }
  };

  const signInAnonymouslyUser = async (customCodename?: string): Promise<string> => {
    try {
      const cred = await signInAnonymously(auth);
      const codeSuffix = cred.user.uid.replace(/[^a-zA-Z0-9]/g, '').slice(0, 5).toUpperCase() || Math.floor(1000 + Math.random() * 9000).toString();
      const code = `COLONIST-${codeSuffix}`;
      const name = customCodename?.trim() || `Colonist #${codeSuffix}`;
      await loadOrCreateUserProfile(cred.user, name, code);
      return code;
    } catch (err) {
      console.warn('Firebase Anonymous Auth fallback to local profile:', err);
      const randomId = Math.floor(1000 + Math.random() * 9000).toString();
      const code = `COLONIST-${randomId}`;
      const name = customCodename?.trim() || `Colonist #${randomId}`;
      const localProfile: UserProfile = {
        userId: `anon_${Date.now().toString(36)}_${randomId}`,
        email: '',
        displayName: name,
        role: 'student',
        studentCode: code,
        isAnonymous: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setUserProfile(localProfile);
      localStorage.setItem('rtr_demo_user', JSON.stringify(localProfile));
      return code;
    }
  };

  const signInWithAnonymousCode = async (code: string, pin: string): Promise<string> => {
    const cleanCode = code.trim().toUpperCase().replace(/[^A-Z0-9_-]/g, '');
    if (!cleanCode) throw new Error('Please enter a valid Student Code');
    
    // Synthetic zero-PII email format (never requires a real email)
    const anonEmail = `${cleanCode.toLowerCase().replace(/[^a-z0-9]/g, '')}@anon.roadtorevolution.internal`;
    const cleanPin = pin.trim() || '1776';

    try {
      let user: FirebaseUser;
      try {
        const cred = await signInWithEmailAndPassword(auth, anonEmail, cleanPin);
        user = cred.user;
      } catch (signInErr: any) {
        if (signInErr.code === 'auth/user-not-found' || signInErr.code === 'auth/invalid-credential') {
          const newCred = await createUserWithEmailAndPassword(auth, anonEmail, cleanPin);
          user = newCred.user;
          await updateProfile(user, { displayName: cleanCode });
        } else {
          throw signInErr;
        }
      }
      await loadOrCreateUserProfile(user, cleanCode, cleanCode);
      return cleanCode;
    } catch (err: any) {
      console.warn('Anonymous code cloud auth, fallback to anonymous session or local mode:', err);
      try {
        const anonCred = await signInAnonymously(auth);
        await loadOrCreateUserProfile(anonCred.user, cleanCode, cleanCode);
        return cleanCode;
      } catch {
        const localProfile: UserProfile = {
          userId: `anon_code_${cleanCode.toLowerCase()}`,
          email: '',
          displayName: cleanCode,
          role: 'student',
          studentCode: cleanCode,
          isAnonymous: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        setUserProfile(localProfile);
        localStorage.setItem('rtr_demo_user', JSON.stringify(localProfile));
        return cleanCode;
      }
    }
  };

  const signInAsDemoUser = (role: UserRole, name?: string) => {
    const demoProfile: UserProfile = {
      userId: `demo_${role}_${Date.now().toString(36)}`,
      email: role === 'admin' ? ADMIN_EMAIL : `${name ? name.toLowerCase().replace(/\s+/g, '') : 'student'}@bearworks.jackson.sparcc.org`,
      displayName: name || (role === 'admin' ? 'Teacher Administrator' : role === 'teacher' ? 'Mr. Jackson (History)' : 'Thomas (Student)'),
      role: role,
      isAnonymous: false
    };
    setUserProfile(demoProfile);
    localStorage.setItem('rtr_demo_user', JSON.stringify(demoProfile));
  };

  const signOut = async () => {
    localStorage.removeItem('rtr_demo_user');
    setUserProfile(null);
    if (auth.currentUser) {
      await fbSignOut(auth);
    }
  };

  const updateUserRole = async (newRole: UserRole) => {
    if (!userProfile) return;
    const updated: UserProfile = { ...userProfile, role: newRole };
    setUserProfile(updated);
    localStorage.setItem('rtr_demo_user', JSON.stringify(updated));

    if (currentUser) {
      try {
        await setDoc(doc(db, 'users', currentUser.uid), { role: newRole, updatedAt: new Date().toISOString() }, { merge: true });
      } catch (err) {
        console.warn('Could not persist role to Firestore:', err);
      }
    }
  };

  const isTeacher = userProfile?.role === 'teacher' || userProfile?.role === 'admin';
  const isAdmin = userProfile?.role === 'admin' || userProfile?.email?.toLowerCase() === ADMIN_EMAIL.toLowerCase();
  const isAnonymous = Boolean(userProfile?.isAnonymous || currentUser?.isAnonymous);
  const studentCode = userProfile?.studentCode || (isAnonymous ? userProfile?.displayName || null : null);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userProfile,
        loading,
        signInWithGoogle,
        signInAnonymouslyUser,
        signInWithAnonymousCode,
        signInAsDemoUser,
        signOut,
        updateUserRole,
        isTeacher,
        isAdmin,
        isAnonymous,
        studentCode,
        dbConnected
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
