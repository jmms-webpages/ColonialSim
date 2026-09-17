import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  ShieldCheck, 
  UserCheck, 
  Sparkles, 
  Key, 
  Copy, 
  Check, 
  ArrowRight, 
  X, 
  AlertCircle,
  LogIn,
  RotateCw,
  Lock,
  CloudCheck
} from 'lucide-react';

interface AnonymousLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HISTORICAL_PREFIXES = [
  'Colonist',
  'Patriot',
  'Minuteman',
  'Bostonian',
  'LibertySon',
  'Continental',
  'FrontierScout',
  'Correspondent'
];

export const AnonymousLoginModal: React.FC<AnonymousLoginModalProps> = ({
  isOpen,
  onClose
}) => {
  const { 
    signInAnonymouslyUser, 
    signInWithAnonymousCode, 
    signInWithGoogle, 
    userProfile,
    isAnonymous,
    studentCode,
    signOut
  } = useAuth();

  const [activeTab, setActiveTab] = useState<'quick' | 'code' | 'google'>('quick');
  
  // Quick anonymous state
  const getRandomName = () => {
    const prefix = HISTORICAL_PREFIXES[Math.floor(Math.random() * HISTORICAL_PREFIXES.length)];
    const num = Math.floor(100 + Math.random() * 900);
    return `${prefix} #${num}`;
  };

  const [customCodename, setCustomCodename] = useState(getRandomName());
  
  // Code resume state
  const [inputCode, setInputCode] = useState('');
  const [inputPin, setInputPin] = useState('1776');
  
  // UI state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [successCode, setSuccessCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleQuickAnonymousLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const code = await signInAnonymouslyUser(customCodename);
      setSuccessCode(code);
    } catch (err: any) {
      setError(err?.message || 'Failed to create anonymous session');
    } finally {
      setLoading(false);
    }
  };

  const handleCodeLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) {
      setError('Please enter your Student Code');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const code = await signInWithAnonymousCode(inputCode, inputPin);
      setSuccessCode(code);
    } catch (err: any) {
      setError(err?.message || 'Unable to log in with that Student Code');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithGoogle();
      onClose();
    } catch (err: any) {
      setError(err?.message || 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#1c1917] border-2 border-amber-800/80 rounded-sm shadow-2xl overflow-hidden font-serif"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#292524] p-4 sm:p-5 border-b border-[#44403c] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xs bg-amber-950/80 border border-amber-600/50 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold font-['Cinzel'] text-[#fef3c7] uppercase tracking-wide">
                Colonial Identity &amp; Sign-In
              </h2>
              <p className="text-xs text-[#a8a29e] font-mono">
                100% Anonymous &bull; Zero Personal Data Required
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-xs hover:bg-[#383330] text-[#a8a29e] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Zero-PII Compliance Badge */}
        <div className="bg-emerald-950/50 border-b border-emerald-800/40 px-4 py-2 flex items-center space-x-2 text-xs text-emerald-300">
          <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
          <span>
            <strong>Student Privacy Guaranteed:</strong> No email, password, phone, or personal data collected. All progress saves to the cloud database under an anonymous code.
          </span>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {error && (
            <div className="p-3 rounded-xs bg-red-950/60 border border-red-700/60 text-xs text-red-200 flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* If already logged in anonymously or just succeeded */}
          {(userProfile?.isAnonymous || successCode) ? (
            <div className="space-y-4 text-center py-2 animate-in fade-in duration-300">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-950/80 border-2 border-emerald-500/60 flex items-center justify-center text-emerald-400">
                <Check className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                  Active Anonymous Account
                </span>
                <h3 className="text-xl font-bold text-[#fef3c7]">
                  {userProfile?.displayName || customCodename}
                </h3>
                <p className="text-xs text-[#d6d3d1] max-w-sm mx-auto">
                  Your simulation progress, quiz scores, and accolades are automatically saving to the cloud.
                </p>
              </div>

              {/* Student Code Recovery Card */}
              <div className="bg-[#292524] border border-amber-600/50 rounded-xs p-4 space-y-2 text-left">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#a8a29e] uppercase">Your Anonymous Student Code:</span>
                  <span className="text-[11px] text-amber-400 font-bold">Save this to resume!</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-[#141211] border border-[#44403c] px-3 py-2 text-center font-mono font-bold text-amber-300 tracking-wider text-base select-all">
                    {studentCode || successCode || 'COLONIST-1776'}
                  </div>
                  <button
                    onClick={() => copyToClipboard(studentCode || successCode || '')}
                    className="px-3 py-2 bg-amber-700 hover:bg-amber-600 text-white rounded-xs text-xs font-mono flex items-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>
                <p className="text-[11px] text-[#a8a29e] font-sans">
                  💡 Switching Chromebooks? Use this code on any computer to load your exact checkpoint!
                </p>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => signOut()}
                  className="px-3 py-1.5 text-xs text-stone-400 hover:text-red-400 font-mono transition-colors cursor-pointer"
                >
                  Switch / Sign Out
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-amber-700 hover:bg-amber-600 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xs shadow-md transition-all hover:scale-105 cursor-pointer"
                >
                  Continue Simulation
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Tab navigation */}
              <div className="grid grid-cols-3 gap-1 bg-[#292524] p-1 rounded-xs border border-[#44403c] text-xs font-mono">
                <button
                  onClick={() => { setActiveTab('quick'); setError(null); }}
                  className={`py-2 px-2 text-center rounded-xs transition-colors cursor-pointer ${
                    activeTab === 'quick'
                      ? 'bg-amber-800 text-amber-100 font-bold border border-amber-600'
                      : 'text-[#a8a29e] hover:text-white'
                  }`}
                >
                  1-Click Play
                </button>
                <button
                  onClick={() => { setActiveTab('code'); setError(null); }}
                  className={`py-2 px-2 text-center rounded-xs transition-colors cursor-pointer ${
                    activeTab === 'code'
                      ? 'bg-amber-800 text-amber-100 font-bold border border-amber-600'
                      : 'text-[#a8a29e] hover:text-white'
                  }`}
                >
                  Resume Code
                </button>
                <button
                  onClick={() => { setActiveTab('google'); setError(null); }}
                  className={`py-2 px-2 text-center rounded-xs transition-colors cursor-pointer ${
                    activeTab === 'google'
                      ? 'bg-amber-800 text-amber-100 font-bold border border-amber-600'
                      : 'text-[#a8a29e] hover:text-white'
                  }`}
                >
                  School Google
                </button>
              </div>

              {/* Tab 1: 1-Click Anonymous Play */}
              {activeTab === 'quick' && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono uppercase text-[#a8a29e] block">
                      Choose Your Historical Codename:
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={customCodename}
                        onChange={e => setCustomCodename(e.target.value)}
                        maxLength={24}
                        placeholder="e.g. Colonist #412"
                        className="flex-1 bg-[#292524] border border-[#44403c] focus:border-amber-500 rounded-xs px-3 py-2 text-sm text-[#fef3c7] font-serif focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setCustomCodename(getRandomName())}
                        title="Randomize name"
                        className="p-2 bg-[#292524] hover:bg-[#383330] border border-[#44403c] text-amber-400 rounded-xs transition-colors cursor-pointer"
                      >
                        <RotateCw className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-[11px] text-[#78716c]">
                      No real name required. A unique student code will be assigned to save your game.
                    </span>
                  </div>

                  <button
                    id="btn-confirm-anonymous-signin"
                    disabled={loading || !customCodename.trim()}
                    onClick={handleQuickAnonymousLogin}
                    className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:bg-stone-700 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xs shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>Connecting Anonymous Session...</span>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Start Anonymous Game (Auto-Saves to Cloud)</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Tab 2: Resume with Student Code & PIN */}
              {activeTab === 'code' && (
                <form onSubmit={handleCodeLogin} className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs font-mono uppercase text-[#a8a29e] block mb-1">
                        Anonymous Student Code:
                      </label>
                      <input
                        type="text"
                        value={inputCode}
                        onChange={e => setInputCode(e.target.value.toUpperCase())}
                        placeholder="e.g. COLONIST-8412"
                        className="w-full bg-[#292524] border border-[#44403c] focus:border-amber-500 rounded-xs px-3 py-2 text-sm text-amber-300 font-mono tracking-wider focus:outline-none"
                      />
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <label className="text-xs font-mono uppercase text-[#a8a29e]">
                          Secret 4-Digit PIN:
                        </label>
                        <span className="text-[10px] text-[#78716c] font-mono">(Default: 1776)</span>
                      </div>
                      <input
                        type="password"
                        value={inputPin}
                        onChange={e => setInputPin(e.target.value)}
                        placeholder="1776"
                        maxLength={8}
                        className="w-full bg-[#292524] border border-[#44403c] focus:border-amber-500 rounded-xs px-3 py-2 text-sm text-[#fef3c7] font-mono tracking-widest focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !inputCode.trim()}
                    className="w-full py-3 bg-amber-600 hover:bg-amber-500 disabled:bg-stone-700 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xs shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {loading ? (
                      <span>Retrieving Saved Game...</span>
                    ) : (
                      <>
                        <Key className="w-4 h-4" />
                        <span>Log In &amp; Restore Progress</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Tab 3: School Google Login */}
              {activeTab === 'google' && (
                <div className="space-y-4 text-center py-2">
                  <p className="text-xs text-[#d6d3d1] font-serif leading-relaxed">
                    If you are a teacher or student using your Bearworks school Google account, you can sign in with 1-click Google authentication.
                  </p>

                  <button
                    type="button"
                    disabled={loading}
                    onClick={handleGoogleLogin}
                    className="w-full py-3 bg-amber-700 hover:bg-amber-600 text-amber-50 font-bold text-xs uppercase tracking-wider rounded-xs shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Sign In with School Google Account</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-[#141211] px-5 py-3 border-t border-[#292524] flex items-center justify-between text-[11px] font-mono text-[#78716c]">
          <span className="flex items-center space-x-1">
            <Lock className="w-3 h-3 text-amber-500/70" />
            <span>Encrypted Cloud Storage</span>
          </span>
          <span className="flex items-center space-x-1 text-emerald-500">
            <CloudCheck className="w-3.5 h-3.5" />
            <span>Firestore Synced</span>
          </span>
        </div>
      </div>
    </div>
  );
};
