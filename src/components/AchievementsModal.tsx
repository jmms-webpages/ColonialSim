import React from 'react';
import { ACHIEVEMENTS } from '../data/achievements';
import { useGame } from '../context/GameContext';
import { 
  Award, 
  X, 
  CheckCircle2, 
  Lock, 
  BookOpen, 
  Search, 
  Coins, 
  Crown, 
  Feather, 
  Flame, 
  Shield, 
  Scale, 
  Compass 
} from 'lucide-react';

interface AchievementsModalProps {
  onClose: () => void;
}

export const AchievementsModal: React.FC<AchievementsModalProps> = ({ onClose }) => {
  const { progress } = useGame();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-amber-400" />;
      case 'Search': return <Search className="w-5 h-5 text-sky-400" />;
      case 'Coins': return <Coins className="w-5 h-5 text-yellow-400" />;
      case 'Crown': return <Crown className="w-5 h-5 text-purple-400" />;
      case 'Feather': return <Feather className="w-5 h-5 text-emerald-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-500" />;
      case 'Shield': return <Shield className="w-5 h-5 text-red-400" />;
      case 'Scale': return <Scale className="w-5 h-5 text-stone-300" />;
      case 'Compass': return <Compass className="w-5 h-5 text-indigo-400" />;
      default: return <Award className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs overflow-y-auto">
      <div 
        id="achievements-modal-container"
        className="relative w-full max-w-3xl bg-[#1c1917] text-[#f5f5f4] rounded-sm shadow-2xl border-2 border-amber-600/60 overflow-hidden my-6"
      >
        {/* Header */}
        <div className="bg-[#292524] px-6 py-4 border-b border-[#44403c] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-sm bg-amber-900/60 border border-amber-600 flex items-center justify-center text-amber-300">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold font-serif text-[#fef3c7] font-['Cinzel']">
                Historical Accolades & Badges
              </h2>
              <p className="text-xs text-[#a8a29e] font-serif">
                Earned through decisive actions, standards mastery, and principled leadership ({progress.achievements.length} of {ACHIEVEMENTS.length} Unlocked)
              </p>
            </div>
          </div>

          <button
            id="achievements-modal-close"
            onClick={onClose}
            className="p-1 rounded text-[#a8a29e] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ACHIEVEMENTS.map(ach => {
              const isUnlocked = progress.achievements.includes(ach.id);

              return (
                <div
                  key={ach.id}
                  className={`p-4 rounded-sm border flex items-start space-x-3.5 transition-all ${
                    isUnlocked
                      ? 'bg-[#241e1b] border-amber-600/60 shadow-sm'
                      : 'bg-[#171514] border-[#292524] opacity-50'
                  }`}
                >
                  <div className={`p-2 rounded-sm border shrink-0 ${
                    isUnlocked ? 'bg-amber-950/80 border-amber-700' : 'bg-[#1c1917] border-[#383330]'
                  }`}>
                    {isUnlocked ? getIcon(ach.iconName) : <Lock className="w-5 h-5 text-[#78716c]" />}
                  </div>

                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif font-bold text-sm text-[#fef3c7]">
                        {ach.title}
                      </h4>
                      {isUnlocked && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-[#d6d3d1] font-serif leading-relaxed">
                      {ach.description}
                    </p>
                    <span className="text-[10px] font-mono text-[#a8a29e] uppercase tracking-wider block pt-0.5">
                      Category: {ach.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#292524] px-6 py-3.5 border-t border-[#44403c] flex justify-end">
          <button
            id="achievements-modal-done"
            onClick={onClose}
            className="px-5 py-2 bg-amber-700 hover:bg-amber-600 text-white rounded-sm text-xs font-serif font-bold uppercase tracking-wider"
          >
            Return to Simulation
          </button>
        </div>
      </div>
    </div>
  );
};
