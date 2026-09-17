import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useGame, CHAPTER_1_CRISIS_IDS } from '../context/GameContext';
import { CHAPTERS } from '../data/chapters';
import { AnonymousLoginModal } from './AnonymousLoginModal';
import { 
  Scroll, 
  MapPin, 
  BookOpen, 
  Newspaper, 
  GraduationCap, 
  Award, 
  LogIn, 
  LogOut, 
  User, 
  HelpCircle,
  Coins,
  Shield,
  Flame,
  Scale,
  Lock,
  AlertCircle,
  ShieldCheck,
  Key,
  Copy,
  Check
} from 'lucide-react';

interface HeaderProps {
  activeTab: 'simulation' | 'map' | 'sources' | 'gazette' | 'teacher' | 'standards';
  setActiveTab: (tab: 'simulation' | 'map' | 'sources' | 'gazette' | 'teacher' | 'standards') => void;
  onOpenAchievements: () => void;
  onOpenStandards: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenAchievements,
  onOpenStandards
}) => {
  const { 
    userProfile, 
    currentUser, 
    signInWithGoogle, 
    signInAsDemoUser, 
    signOut, 
    isTeacher, 
    isAdmin,
    isAnonymous,
    studentCode
  } = useAuth();
  const { progress, isChapter1CrisesComplete, isChapter1GazetteComplete, isGazetteLocked } = useGame();
  const [showLockedNotice, setShowLockedNotice] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const currentChapter = CHAPTERS.find(c => c.number === progress.currentChapter) || CHAPTERS[0];

  // Identity styling
  const getIdentityBadge = (identity: string) => {
    switch (identity) {
      case 'PATRIOT':
        return {
          label: 'PATRIOT',
          bg: 'bg-amber-900/90 text-amber-100 border-amber-700',
          icon: <Flame className="w-3.5 h-3.5 text-amber-300" />
        };
      case 'LEANING PATRIOT':
        return {
          label: 'LEANING PATRIOT',
          bg: 'bg-amber-800/80 text-amber-100 border-amber-600',
          icon: <Flame className="w-3.5 h-3.5 text-amber-300" />
        };
      case 'LOYALIST':
        return {
          label: 'LOYALIST',
          bg: 'bg-red-950/90 text-red-100 border-red-800',
          icon: <Shield className="w-3.5 h-3.5 text-red-300" />
        };
      case 'LEANING LOYALIST':
        return {
          label: 'LEANING LOYALIST',
          bg: 'bg-red-900/80 text-red-100 border-red-700',
          icon: <Shield className="w-3.5 h-3.5 text-red-300" />
        };
      default:
        return {
          label: 'NEUTRAL',
          bg: 'bg-stone-800/90 text-stone-200 border-stone-600',
          icon: <Scale className="w-3.5 h-3.5 text-stone-300" />
        };
    }
  };

  const identityInfo = getIdentityBadge(progress.politicalIdentity);

  return (
    <header className="sticky top-0 z-40 bg-[#1c1917] text-[#f5f5f4] border-b border-[#44403c] shadow-lg">
      {/* Top Banner with Historical Title and User Status */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-2.5 gap-2 border-b border-[#292524]">
          {/* Logo & Historical Setting */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-sm bg-[#78350f] border border-[#d97706]/40 flex items-center justify-center text-[#fef3c7] shadow-sm">
              <Scroll className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-serif text-lg font-bold tracking-wide text-[#fef3c7] font-['Cinzel']">
                  ROAD TO REVOLUTION
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#292524] text-[#a8a29e] border border-[#44403c] font-mono">
                  1763–1776
                </span>
              </div>
              <p className="text-xs text-[#d6d3d1] font-serif">
                8th Grade Social Studies Simulation &bull; Ohio Standards Aligned
              </p>
            </div>
          </div>

          {/* Player Identity & Stats Ribbon */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            {/* Political Identity Chip */}
            <div className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-sm border shadow-xs ${identityInfo.bg}`}>
              {identityInfo.icon}
              <span className="font-semibold tracking-wider font-mono text-[11px]">
                {identityInfo.label}
              </span>
            </div>

            {/* Vitals */}
            <div className="flex items-center bg-[#292524] px-2.5 py-1 rounded-sm border border-[#44403c] space-x-3">
              <div className="flex items-center space-x-1" title="Influence in colonial assemblies and town meetings">
                <span className="text-[#a8a29e]">Influence:</span>
                <span className="font-bold text-amber-200">{progress.influence}%</span>
              </div>
              <div className="flex items-center space-x-1" title="Wealth and merchant standing">
                <Coins className="w-3.5 h-3.5 text-yellow-500" />
                <span className="font-bold text-yellow-200">{progress.wealth}%</span>
              </div>
              <div className="flex items-center space-x-1" title="Historical Knowledge Score">
                <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
                <span className="font-bold text-sky-200">{progress.historicalKnowledge}%</span>
              </div>
            </div>

            {/* Achievements & Standards Quick Launchers */}
            <button
              id="header-achievements-btn"
              onClick={onOpenAchievements}
              className="flex items-center space-x-1 px-2 py-1 bg-[#292524] hover:bg-[#383330] rounded-sm border border-[#44403c] text-[#e7e5e4] transition-colors"
              title="View Badges & Accolades"
            >
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Accolades ({progress.achievements.length})</span>
            </button>

            {/* Auth / Profile Area */}
            <div className="flex items-center space-x-2 pl-1 border-l border-[#44403c]">
              {userProfile ? (
                <div className="flex items-center space-x-2">
                  <div className="text-right hidden lg:block">
                    <div className="flex items-center justify-end space-x-1">
                      {isAnonymous && <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />}
                      <p className="text-[11px] font-semibold text-[#f5f5f4] truncate max-w-[130px]">
                        {userProfile.displayName}
                      </p>
                    </div>
                    <div className="flex items-center justify-end space-x-1.5 text-[10px] text-[#a8a29e] uppercase tracking-wider font-mono">
                      <span>{isAnonymous ? 'Anonymous' : userProfile.role}</span>
                      {studentCode && (
                        <button
                          onClick={() => copyCode(studentCode)}
                          className="text-amber-400 hover:text-amber-300 inline-flex items-center space-x-0.5 cursor-pointer"
                          title="Click to copy your Student Code"
                        >
                          <span>{studentCode}</span>
                          {copiedCode ? <Check className="w-2.5 h-2.5 text-emerald-400" /> : <Copy className="w-2.5 h-2.5" />}
                        </button>
                      )}
                    </div>
                  </div>

                  <button
                    id="header-profile-modal-btn"
                    onClick={() => setShowLoginModal(true)}
                    className="px-2 py-1 bg-[#292524] hover:bg-[#383330] rounded-sm text-amber-200 border border-[#44403c] text-xs font-mono flex items-center space-x-1 cursor-pointer"
                    title="View Account / Student Code"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="hidden sm:inline">Code</span>
                  </button>

                  <button
                    id="header-signout-btn"
                    onClick={() => signOut()}
                    className="p-1.5 bg-[#292524] hover:bg-[#383330] rounded-sm text-[#d6d3d1] hover:text-white border border-[#44403c] cursor-pointer"
                    title="Sign Out"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-1.5">
                  <button
                    id="header-anonymous-signin-btn"
                    onClick={() => setShowLoginModal(true)}
                    className="flex items-center space-x-1 px-2.5 py-1 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-sm text-xs transition-colors shadow-xs cursor-pointer"
                    title="Anonymous Login (Zero Personal Data • Auto-Saves to Cloud)"
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Anonymous Sign-In</span>
                  </button>

                  <button
                    id="header-google-signin-btn"
                    onClick={() => signInWithGoogle()}
                    className="hidden sm:flex items-center space-x-1 px-2 py-1 bg-[#292524] hover:bg-[#383330] text-[#d6d3d1] rounded-sm text-[11px] border border-[#44403c] transition-colors cursor-pointer"
                    title="Sign in with Bearworks Google Account"
                  >
                    <LogIn className="w-3 h-3" />
                    <span>School Login</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Nav Bar */}
        <div className="flex items-center justify-between overflow-x-auto py-1.5 scrollbar-none">
          <nav className="flex items-center space-x-1 sm:space-x-2">
            <button
              id="nav-simulation-tab"
              onClick={() => setActiveTab('simulation')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
                activeTab === 'simulation'
                  ? 'bg-amber-900/60 text-[#fef3c7] border border-amber-600/50 shadow-xs'
                  : 'text-[#d6d3d1] hover:bg-[#292524] hover:text-white'
              }`}
            >
              <Scroll className="w-4 h-4 text-amber-400" />
              <span>Timeline Simulation</span>
            </button>

            <button
              id="nav-map-tab"
              onClick={() => setActiveTab('map')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
                activeTab === 'map'
                  ? 'bg-amber-900/60 text-[#fef3c7] border border-amber-600/50 shadow-xs'
                  : 'text-[#d6d3d1] hover:bg-[#292524] hover:text-white'
              }`}
            >
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>13 Colonies Map</span>
            </button>

            <button
              id="nav-sources-tab"
              onClick={() => setActiveTab('sources')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
                activeTab === 'sources'
                  ? 'bg-amber-900/60 text-[#fef3c7] border border-amber-600/50 shadow-xs'
                  : 'text-[#d6d3d1] hover:bg-[#292524] hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>Primary Source Desk</span>
            </button>

            <button
              id="nav-gazette-tab"
              onClick={() => {
                if (isGazetteLocked && !isTeacher && !isAdmin) {
                  setShowLockedNotice(true);
                  return;
                }
                setActiveTab('gazette');
              }}
              className={`relative flex items-center space-x-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
                activeTab === 'gazette'
                  ? 'bg-amber-900/60 text-[#fef3c7] border border-amber-600/50 shadow-xs'
                  : isGazetteLocked && !isTeacher && !isAdmin
                  ? 'text-stone-500 hover:text-stone-300 hover:bg-[#201d1b]'
                  : 'text-[#d6d3d1] hover:bg-[#292524] hover:text-white'
              }`}
            >
              {isGazetteLocked && !isTeacher && !isAdmin ? (
                <Lock className="w-3.5 h-3.5 text-stone-500" />
              ) : (
                <Newspaper className="w-4 h-4 text-yellow-400" />
              )}
              <span>Colonial Gazette</span>
              {isGazetteLocked && !isTeacher && !isAdmin ? (
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-stone-900 text-stone-400 border border-stone-700">
                  Locked
                </span>
              ) : progress.currentChapter === 1 && isChapter1CrisesComplete && !isChapter1GazetteComplete ? (
                <span className="px-1.5 py-0.2 rounded-xs bg-amber-500 text-stone-950 text-[10px] font-bold uppercase tracking-wider animate-pulse">
                  Required
                </span>
              ) : null}
            </button>

            <button
              id="nav-teacher-tab"
              onClick={() => setActiveTab('teacher')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-sm text-xs font-medium transition-colors ${
                activeTab === 'teacher'
                  ? 'bg-amber-900/60 text-[#fef3c7] border border-amber-600/50 shadow-xs'
                  : 'text-[#d6d3d1] hover:bg-[#292524] hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>Teacher Dashboard</span>
              {(isTeacher || isAdmin) && (
                <span className="w-2 h-2 rounded-full bg-emerald-400" title="Teacher Access Verified" />
              )}
            </button>
          </nav>

          <div className="flex items-center space-x-2 pl-3">
            <button
              id="header-standards-link"
              onClick={onOpenStandards}
              className="flex items-center space-x-1 text-xs text-[#a8a29e] hover:text-[#fef3c7] transition-colors"
              title="View Ohio 8th Grade Standards Alignment"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
              <span className="hidden md:inline">Ohio Standards</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lock Notice Modal */}
      {showLockedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
          <div className="w-full max-w-md bg-[#fbf5e6] text-[#292524] rounded-sm shadow-2xl border-4 border-[#78350f] p-6 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex items-center space-x-3 text-[#78350f]">
              <div className="p-2.5 rounded-full bg-amber-100 border border-amber-300">
                <Lock className="w-6 h-6 text-[#78350f]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg text-[#1c1917]">
                  The Colonial Gazette is Locked
                </h3>
                <span className="text-xs font-mono uppercase tracking-wider text-amber-800">
                  Chapter 1 Prerequisite
                </span>
              </div>
            </div>
            <p className="font-serif text-sm text-[#44403c] leading-relaxed">
              The printing presses at the Gazette office only publish after major colonial events unfold! You must resolve all <strong>5 historical crises</strong> for Chapter 1 before accessing The Colonial Gazette.
            </p>
            <div className="p-3 bg-[#ebd9b8] rounded-sm border border-[#b45309]/30 text-xs font-mono text-[#78350f] flex justify-between items-center">
              <span>Chapter 1 Crises Resolved:</span>
              <span className="font-bold text-sm">
                {CHAPTER_1_CRISIS_IDS.filter(id => progress.completedEvents.includes(id)).length} of 5
              </span>
            </div>
            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={() => setShowLockedNotice(false)}
                className="px-5 py-2 bg-[#78350f] hover:bg-[#92400e] text-[#fef3c7] font-serif text-xs font-bold uppercase rounded-sm shadow-md"
              >
                Return to Simulation
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Anonymous Login & Account Recovery Modal */}
      <AnonymousLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </header>
  );
};
