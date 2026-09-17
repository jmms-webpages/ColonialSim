import React, { useState } from 'react';
import { useGame } from '../context/GameContext';
import { CHAPTERS } from '../data/chapters';
import { 
  Scroll, 
  Award, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  Feather,
  Flame,
  Shield,
  Scale
} from 'lucide-react';

export const ChapterCompleteModal: React.FC = () => {
  const { chapterCompleteModal, dismissChapterComplete, progress, saveReflection } = useGame();
  const [reflectionInput, setReflectionInput] = useState('');
  const [savedNote, setSavedNote] = useState(false);

  if (!chapterCompleteModal) return null;

  // The chapter just completed is progress.currentChapter - 1
  const completedChapterNum = Math.max(1, progress.currentChapter - 1);
  const completedChapter = CHAPTERS.find(c => c.number === completedChapterNum) || CHAPTERS[0];
  const nextChapter = CHAPTERS.find(c => c.number === progress.currentChapter);

  const handleSaveReflection = async () => {
    if (reflectionInput.trim()) {
      await saveReflection(reflectionInput);
      setSavedNote(true);
      setTimeout(() => {
        dismissChapterComplete();
      }, 1000);
    } else {
      dismissChapterComplete();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs overflow-y-auto">
      <div 
        id="chapter-complete-modal-container"
        className="relative w-full max-w-2xl bg-[#1c1917] text-[#f5f5f4] rounded-sm shadow-2xl border-4 border-amber-600 overflow-hidden my-6 animate-in zoom-in-95 duration-200"
      >
        {/* Header Banner */}
        <div className="bg-linear-to-r from-[#451a03] via-[#78350f] to-[#451a03] px-6 py-6 text-center border-b-2 border-amber-600 space-y-2">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-400 text-amber-200 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Chapter {completedChapter.number} Completed</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-[#fef3c7] font-['Cinzel'] tracking-wide">
            {completedChapter.title}
          </h2>
          <p className="text-xs sm:text-sm font-serif text-amber-100/90 max-w-lg mx-auto">
            You have successfully navigated this epoch of the American Revolution.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-5 max-h-[65vh] overflow-y-auto">
          {/* Summary & Stats */}
          <div className="bg-[#241e1b] p-4 rounded-sm border border-[#383330] space-y-3">
            <div className="flex items-center justify-between text-xs border-b border-[#383330] pb-2">
              <span className="font-mono text-[#a8a29e] uppercase">Your Political Standing</span>
              <span className="font-bold text-amber-300 font-serif text-sm">
                {progress.politicalIdentity}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2 bg-[#1c1917] rounded-sm border border-[#383330]">
                <div className="text-[#a8a29e]">Influence</div>
                <div className="text-base font-bold text-amber-300">{progress.influence}%</div>
              </div>
              <div className="p-2 bg-[#1c1917] rounded-sm border border-[#383330]">
                <div className="text-[#a8a29e]">Wealth</div>
                <div className="text-base font-bold text-yellow-300">{progress.wealth}%</div>
              </div>
              <div className="p-2 bg-[#1c1917] rounded-sm border border-[#383330]">
                <div className="text-[#a8a29e]">Knowledge</div>
                <div className="text-base font-bold text-sky-300">{progress.historicalKnowledge}%</div>
              </div>
            </div>
          </div>

          {/* Student Historical Reflection Prompt */}
          <div className="space-y-2">
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 flex items-center space-x-1.5">
              <Feather className="w-4 h-4" />
              <span>Colonial Reflection (Ohio ELA & Social Studies Prompt)</span>
            </label>
            <p className="text-xs text-[#a8a29e] font-serif">
              Looking back at your choices in this chapter, how did your decisions reflect the tensions between colonial liberty and imperial loyalty?
            </p>
            <textarea
              rows={3}
              placeholder="Write your 2–3 sentence historical reflection here..."
              value={reflectionInput}
              onChange={e => setReflectionInput(e.target.value)}
              className="w-full p-3 bg-[#241e1b] border border-[#383330] rounded-sm text-xs sm:text-sm text-[#f5f5f4] font-serif placeholder-[#78716c] focus:outline-hidden focus:border-amber-500"
            />
          </div>

          {/* Next Chapter Preview */}
          {nextChapter && (
            <div className="bg-amber-950/30 p-4 rounded-sm border border-amber-800/60 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  Next Chapter Unlocked
                </span>
                <h4 className="font-serif font-bold text-sm text-[#fef3c7]">
                  Chapter {nextChapter.number}: {nextChapter.title}
                </h4>
                <p className="text-xs text-[#a8a29e] font-serif">
                  Era: {nextChapter.timePeriod}
                </p>
              </div>
              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#292524] px-6 py-4 border-t border-[#44403c] flex items-center justify-between">
          <span className="text-xs font-serif text-[#a8a29e]">
            {savedNote ? 'Reflection saved to portfolio!' : 'Advance to the next historical era'}
          </span>
          <button
            id="chapter-complete-advance-btn"
            onClick={handleSaveReflection}
            className="px-6 py-2.5 bg-amber-700 hover:bg-amber-600 text-white rounded-sm text-xs font-serif font-bold uppercase tracking-wider flex items-center space-x-2 transition-colors shadow-md"
          >
            <span>Begin Next Chapter</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
