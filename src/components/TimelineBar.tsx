import React from 'react';
import { CHAPTERS } from '../data/chapters';
import { useGame } from '../context/GameContext';
import { CheckCircle2, Circle, Lock, ChevronRight, BookOpen } from 'lucide-react';

export const TimelineBar: React.FC = () => {
  const { progress, unlockChapter } = useGame();

  return (
    <div className="bg-[#1c1917] border-y border-[#383330] py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 flex items-center space-x-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Chronological Campaign (1763–1776)</span>
          </span>
          <span className="text-xs text-[#a8a29e] font-serif">
            Chapter {progress.currentChapter} of 6 &bull; Checkpoint {progress.currentCheckpoint} of 5
          </span>
        </div>

        {/* 6-Chapter Horizontal Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {CHAPTERS.map(chapter => {
            const isCompleted = chapter.number < progress.currentChapter;
            const isCurrent = chapter.number === progress.currentChapter;
            const isLocked = chapter.number > progress.currentChapter;

            return (
              <div
                key={chapter.number}
                id={`timeline-chapter-${chapter.number}`}
                onClick={() => {
                  if (!isLocked) unlockChapter(chapter.number);
                }}
                className={`p-2.5 rounded-sm border transition-all cursor-pointer text-left ${
                  isCurrent
                    ? 'bg-amber-950/70 border-amber-500 shadow-md ring-1 ring-amber-500/30'
                    : isCompleted
                    ? 'bg-[#241e1b] border-emerald-900/60 hover:border-emerald-700'
                    : 'bg-[#141211] border-[#292524] opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="font-mono font-bold text-amber-300">
                    CH. {chapter.number}
                  </span>
                  <span>
                    {isCompleted ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : isCurrent ? (
                      <Circle className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ) : (
                      <Lock className="w-3 h-3 text-[#78716c]" />
                    )}
                  </span>
                </div>

                <div className="font-serif font-semibold text-xs text-[#f5f5f4] truncate">
                  {chapter.title}
                </div>

                <div className="text-[10px] font-mono text-[#a8a29e] mt-0.5">
                  {chapter.timePeriod}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
