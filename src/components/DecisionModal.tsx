import React, { useState } from 'react';
import { HistoricalEvent, EventOption } from '../types';
import { useGame } from '../context/GameContext';
import { useAuth } from '../context/AuthContext';
import { 
  Scroll, 
  X, 
  AlertTriangle, 
  HelpCircle, 
  ChevronRight, 
  Building, 
  Coins, 
  Crown, 
  Flame, 
  Shield, 
  Scale,
  Eye,
  EyeOff
} from 'lucide-react';

interface DecisionModalProps {
  event: HistoricalEvent;
  onClose: () => void;
}

export const DecisionModal: React.FC<DecisionModalProps> = ({ event, onClose }) => {
  const { makeDecision } = useGame();
  const { isTeacher, isAdmin } = useAuth();
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showTeacherKey, setShowTeacherKey] = useState<boolean>(false);

  const selectedOption = event.options.find(o => o.id === selectedOptionId);

  const getAlignmentTag = (align: 'patriot' | 'loyalist' | 'neutral') => {
    switch (align) {
      case 'patriot':
        return {
          label: 'Patriot Leaning',
          color: 'bg-amber-950/70 text-amber-200 border-amber-800',
          icon: <Flame className="w-3.5 h-3.5 text-amber-400" />
        };
      case 'loyalist':
        return {
          label: 'Loyalist Leaning',
          color: 'bg-red-950/70 text-red-200 border-red-800',
          icon: <Shield className="w-3.5 h-3.5 text-red-400" />
        };
      case 'neutral':
        return {
          label: 'Moderate / Neutral',
          color: 'bg-stone-900/80 text-stone-200 border-stone-700',
          icon: <Scale className="w-3.5 h-3.5 text-stone-300" />
        };
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs overflow-y-auto">
      <div 
        id="decision-modal-container"
        className="relative w-full max-w-3xl bg-[#fbf5e6] text-[#292524] rounded-sm shadow-2xl border-4 border-[#78350f] overflow-hidden my-6"
      >
        {/* Parchment Header / Broadside Header */}
        <div className="bg-[#451a03] text-[#fef3c7] px-6 py-4 border-b-2 border-[#78350f] flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-sm bg-[#78350f] border border-[#d97706]/50 flex items-center justify-center">
              <Scroll className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-amber-300 uppercase">
                <span>Anno Domini {event.year}</span>
                <span>&bull;</span>
                <span>{event.location}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif font-['Cinzel'] tracking-wide">
                {event.title}
              </h2>
            </div>
          </div>
          <button
            id="decision-modal-close"
            onClick={onClose}
            className="p-1 rounded text-amber-200 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Parchment Sub-header Details */}
        <div className="bg-[#ebd9b8] px-6 py-2.5 border-b border-[#d6d3d1] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#78350f]">
          <div className="flex items-center space-x-2">
            <span className="font-semibold uppercase tracking-wider">Your Persona / Role:</span>
            <span className="font-bold font-serif text-[#1c1917] bg-[#fbf5e6] px-2 py-0.5 rounded-xs border border-[#d6d3d1]">
              {event.role}
            </span>
          </div>
          <div>
            <span className="bg-[#451a03] text-amber-200 px-2 py-0.5 rounded-xs text-[11px] font-bold">
              {event.standardId}
            </span>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Situation Briefing */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#78350f] font-mono border-b border-[#d6d3d1] pb-1">
              Historical Crisis
            </h3>
            <p className="text-base sm:text-lg font-serif text-[#1c1917] leading-relaxed">
              {event.narrative || event.historicalContext}
            </p>
          </div>

          {/* Primary Source or Eyewitness Excerpt if present */}
          {event.primarySourceText && (
            <div className="bg-[#f2e8cf] p-4 rounded-sm border-l-4 border-[#78350f] italic text-sm text-[#44403c] font-serif shadow-inner">
              <p className="font-semibold text-xs not-italic text-[#78350f] uppercase tracking-wider mb-1 font-mono">
                Voices of the Era &bull; {event.primarySourceAuthor || 'Contemporary Account'}
              </p>
              &ldquo;{event.primarySourceText}&rdquo;
            </div>
          )}

          {/* Options Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#d6d3d1] pb-1">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#78350f] font-mono">
                Choose Your Course of Action ({event.options.length} Paths)
              </h3>

              {/* Teacher Answer Key Toggle (Visible strictly to teachers/administrators) */}
              {(isTeacher || isAdmin) && (
                <button
                  type="button"
                  id="teacher-key-toggle-btn"
                  onClick={() => setShowTeacherKey(!showTeacherKey)}
                  className="flex items-center space-x-1 text-[11px] font-mono px-2 py-0.5 rounded border border-[#78350f] text-[#78350f] hover:bg-[#ebd9b8] transition-colors"
                  title="Toggle educator answer key to preview alignment and outcome impacts"
                >
                  {showTeacherKey ? (
                    <>
                      <EyeOff className="w-3 h-3 text-[#78350f]" />
                      <span>Hide Teacher Key</span>
                    </>
                  ) : (
                    <>
                      <Eye className="w-3 h-3 text-[#78350f]" />
                      <span>Teacher Key: Preview Alignment & Outcomes</span>
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="space-y-3">
              {event.options.map((option, idx) => {
                const isSelected = selectedOptionId === option.id;
                const alignTag = getAlignmentTag(option.alignment);
                const letter = String.fromCharCode(65 + idx);

                return (
                  <div
                    key={option.id}
                    id={`event-option-${option.id}`}
                    onClick={() => setSelectedOptionId(option.id)}
                    className={`p-4 rounded-sm border-2 cursor-pointer transition-all ${
                      isSelected
                        ? 'border-[#78350f] bg-[#f2e8cf] ring-2 ring-[#78350f]/30 shadow-md'
                        : 'border-[#d6d3d1] bg-white/70 hover:bg-white hover:border-[#b45309]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-start space-x-3">
                          {/* Letter Badge */}
                          <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 font-mono ${
                            isSelected ? 'border-[#78350f] bg-[#78350f] text-white' : 'border-[#78716c] text-[#78716c] bg-white'
                          }`}>
                            {isSelected ? '✓' : letter}
                          </span>

                          <div className="flex-1">
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#78350f] block mb-0.5">
                              Course of Action {letter}
                            </span>
                            <h4 className="font-serif font-bold text-base text-[#1c1917] leading-snug">
                              {option.text}
                            </h4>
                          </div>
                        </div>

                        {/* Teacher Key Reveal (Only visible when educator deliberately enables teacher preview) */}
                        {showTeacherKey && (
                          <div className="mt-2 pl-9 pt-2 border-t border-dashed border-[#d6d3d1] space-y-1 bg-amber-50/80 p-2 rounded text-xs font-serif">
                            <div className="flex items-center space-x-2 font-mono text-[11px] font-semibold text-[#78350f]">
                              <span>Alignment Shift:</span>
                              <span className={`flex items-center space-x-1 px-1.5 py-0.5 rounded-xs border text-[10px] ${alignTag.color}`}>
                                {alignTag.icon}
                                <span>{alignTag.label}</span>
                              </span>
                            </div>
                            <div className="text-[#57534e]">
                              <span className="font-semibold">Projected Outcome:</span>{' '}
                              {option.immediateConsequence || option.tradeOff || option.delayedConsequenceNote}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#ebd9b8] px-6 py-4 border-t-2 border-[#b45309] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#78350f] font-serif italic">
            * Weigh your choice with care. Consequences and colonial standing shifts will unfold upon sealing your decision.
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              id="decision-cancel-btn"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 border border-[#78350f] rounded-sm text-xs font-serif font-semibold text-[#78350f] hover:bg-[#dfc8a0] transition-colors cursor-pointer"
            >
              Ponder Longer
            </button>
            <button
              id="decision-confirm-btn"
              disabled={!selectedOption}
              onClick={() => {
                if (selectedOption) {
                  makeDecision(event, selectedOption);
                }
              }}
              className={`w-full sm:w-auto px-6 py-2 rounded-sm text-xs font-serif font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all ${
                selectedOption
                  ? 'bg-[#78350f] hover:bg-[#92400e] text-white shadow-md cursor-pointer'
                  : 'bg-[#a8a29e] text-[#57534e] cursor-not-allowed opacity-60'
              }`}
            >
              <span>Seal Decision</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
