import React from 'react';
import { useGame } from '../context/GameContext';
import { 
  Scroll, 
  ArrowUpRight, 
  ArrowDownRight, 
  Award, 
  HelpCircle, 
  ChevronRight, 
  Flame, 
  Shield, 
  Scale 
} from 'lucide-react';

export const ConsequenceModal: React.FC = () => {
  const { consequenceFeedback, dismissConsequenceFeedback, openQuestion } = useGame();

  if (!consequenceFeedback) return null;

  const { eventTitle, immediateConsequence, statChanges, alignmentImpact, followUpQuestion } = consequenceFeedback;

  const getAlignmentBadge = (align: string) => {
    switch (align) {
      case 'patriot':
        return {
          text: 'Shifted Patriot',
          bg: 'bg-amber-950/80 text-amber-200 border-amber-700',
          icon: <Flame className="w-4 h-4 text-amber-400" />
        };
      case 'loyalist':
        return {
          text: 'Shifted Loyalist',
          bg: 'bg-red-950/80 text-red-200 border-red-700',
          icon: <Shield className="w-4 h-4 text-red-400" />
        };
      default:
        return {
          text: 'Preserved Neutrality',
          bg: 'bg-stone-900/80 text-stone-200 border-stone-600',
          icon: <Scale className="w-4 h-4 text-stone-300" />
        };
    }
  };

  const alignBadge = getAlignmentBadge(alignmentImpact);

  const handleProceed = () => {
    dismissConsequenceFeedback();
    if (followUpQuestion) {
      openQuestion(followUpQuestion);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div 
        id="consequence-modal-container"
        className="w-full max-w-2xl bg-[#fbf5e6] text-[#292524] rounded-sm shadow-2xl border-4 border-[#78350f] overflow-hidden animate-in fade-in zoom-in duration-200"
      >
        {/* Header */}
        <div className="bg-[#451a03] text-[#fef3c7] px-6 py-4 border-b-2 border-[#78350f] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Scroll className="w-5 h-5 text-amber-400" />
            <span className="font-serif font-bold text-lg tracking-wide font-['Cinzel']">
              The Ink is Dry: Consequences Unfold
            </span>
          </div>
          <span className={`flex items-center space-x-1.5 px-2.5 py-0.5 rounded-sm border text-xs font-mono ${alignBadge.bg}`}>
            {alignBadge.icon}
            <span>{alignBadge.text}</span>
          </span>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#78350f]">
              Report of the Aftermath
            </span>
            <h3 className="text-xl font-serif font-bold text-[#1c1917] mt-0.5">
              {eventTitle}
            </h3>
            <p className="mt-3 text-base font-serif text-[#292524] leading-relaxed bg-[#f2e8cf] p-4 rounded-sm border border-[#d6d3d1]">
              {immediateConsequence}
            </p>
          </div>

          {/* Stat Adjustments */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#78350f]">
              Colonial Standing & Repercussions
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              {statChanges.influence !== undefined && statChanges.influence !== 0 && (
                <div className={`p-2 rounded-sm border flex items-center justify-between ${
                  statChanges.influence > 0 ? 'bg-emerald-950/20 border-emerald-700 text-emerald-900' : 'bg-red-950/20 border-red-700 text-red-900'
                }`}>
                  <span className="font-semibold">Influence:</span>
                  <span className="font-mono font-bold flex items-center">
                    {statChanges.influence > 0 ? `+${statChanges.influence}` : statChanges.influence}
                    {statChanges.influence > 0 ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  </span>
                </div>
              )}

              {statChanges.wealth !== undefined && statChanges.wealth !== 0 && (
                <div className={`p-2 rounded-sm border flex items-center justify-between ${
                  statChanges.wealth > 0 ? 'bg-emerald-950/20 border-emerald-700 text-emerald-900' : 'bg-red-950/20 border-red-700 text-red-900'
                }`}>
                  <span className="font-semibold">Wealth:</span>
                  <span className="font-mono font-bold flex items-center">
                    {statChanges.wealth > 0 ? `+${statChanges.wealth}` : statChanges.wealth}
                    {statChanges.wealth > 0 ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  </span>
                </div>
              )}

              {statChanges.colonialSupport !== undefined && statChanges.colonialSupport !== 0 && (
                <div className={`p-2 rounded-sm border flex items-center justify-between ${
                  statChanges.colonialSupport > 0 ? 'bg-emerald-950/20 border-emerald-700 text-emerald-900' : 'bg-red-950/20 border-red-700 text-red-900'
                }`}>
                  <span className="font-semibold">Colonial Favor:</span>
                  <span className="font-mono font-bold flex items-center">
                    {statChanges.colonialSupport > 0 ? `+${statChanges.colonialSupport}` : statChanges.colonialSupport}
                    {statChanges.colonialSupport > 0 ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  </span>
                </div>
              )}

              {statChanges.britishRelations !== undefined && statChanges.britishRelations !== 0 && (
                <div className={`p-2 rounded-sm border flex items-center justify-between ${
                  statChanges.britishRelations > 0 ? 'bg-emerald-950/20 border-emerald-700 text-emerald-900' : 'bg-red-950/20 border-red-700 text-red-900'
                }`}>
                  <span className="font-semibold">British Crown:</span>
                  <span className="font-mono font-bold flex items-center">
                    {statChanges.britishRelations > 0 ? `+${statChanges.britishRelations}` : statChanges.britishRelations}
                    {statChanges.britishRelations > 0 ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#ebd9b8] px-6 py-4 border-t-2 border-[#b45309] flex items-center justify-between">
          <span className="text-xs text-[#78350f] font-serif">
            {followUpQuestion ? 'A historical knowledge challenge awaits...' : 'Continue your colonial path'}
          </span>
          <button
            id="consequence-proceed-btn"
            onClick={handleProceed}
            className="px-6 py-2.5 bg-[#78350f] hover:bg-[#92400e] text-white rounded-sm text-xs font-serif font-bold uppercase tracking-wider flex items-center space-x-2 transition-colors shadow-md"
          >
            <span>{followUpQuestion ? 'Take Knowledge Challenge' : 'Proceed to Ledger'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
