import React, { useState } from 'react';
import { NEWSPAPER_ARTICLES } from '../data/newspapers';
import { NewspaperArticle } from '../types';
import { useGame, CHAPTER_1_CRISIS_IDS } from '../context/GameContext';
import { HISTORICAL_EVENTS } from '../data/events';
import { 
  Newspaper, 
  MapPin, 
  Calendar, 
  Flame, 
  Shield, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  XCircle,
  GraduationCap,
  Lock,
  ArrowRight,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

interface ColonialGazetteProps {
  onReturnToSimulation?: () => void;
  onAdvanceChapter?: () => void;
}

export const ColonialGazette: React.FC<ColonialGazetteProps> = ({
  onReturnToSimulation,
  onAdvanceChapter
}) => {
  const { 
    answerQuestion, 
    progress,
    isChapter1CrisesComplete,
    isChapter1GazetteComplete,
    isGazetteLocked,
    completeChapter1Gazette,
    advanceFromChapter1
  } = useGame();

  // Find suitable initial article for current chapter
  const defaultArticle = NEWSPAPER_ARTICLES.find(a => {
    if (progress.currentChapter === 1) return a.id.includes('1763');
    if (progress.currentChapter === 2) return a.id.includes('1765');
    if (progress.currentChapter >= 3 && progress.currentChapter <= 4) return a.id.includes('1774');
    return a.id.includes('1776');
  }) || NEWSPAPER_ARTICLES[0];

  const [selectedArticle, setSelectedArticle] = useState<NewspaperArticle>(defaultArticle);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submittedAnswers, setSubmittedAnswers] = useState<Record<string, boolean>>({});

  const chapter1CrisesDone = CHAPTER_1_CRISIS_IDS.filter(id => progress.completedEvents.includes(id)).length;
  const chapter1Events = HISTORICAL_EVENTS.filter(e => e.chapter === 1);

  // If Gazette is locked, show rich educational lock screen
  if (isGazetteLocked) {
    return (
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 space-y-6 animate-in fade-in duration-300">
        <div className="bg-[#1c1917] border-2 border-amber-800/70 rounded-sm p-8 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 mx-auto rounded-full bg-amber-950/70 border-2 border-amber-600/60 flex items-center justify-center text-amber-400">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-400">
              Prerequisite Required &bull; Chapter 1 (1763)
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fef3c7] font-['Cinzel']">
              The Printing Presses Await Your Frontier Decisions
            </h2>
            <p className="text-sm font-serif text-[#d6d3d1] max-w-xl mx-auto leading-relaxed">
              In 1763, the printers at the Boston and London gazette offices can only set their lead type and publish broadsides once colonial crisis events unfold. You must resolve all <strong>5 historical crises</strong> in Chapter 1 before the printing presses open.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="max-w-md mx-auto bg-[#292524] p-4 rounded-sm border border-[#44403c] space-y-2">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-[#a8a29e]">Chapter 1 Crises Resolved:</span>
              <span className="font-bold text-amber-400">{chapter1CrisesDone} of 5 Completed</span>
            </div>
            <div className="w-full h-3 bg-[#141211] rounded-full overflow-hidden border border-[#44403c]">
              <div 
                className="h-full bg-amber-500 transition-all duration-500 rounded-full"
                style={{ width: `${(chapter1CrisesDone / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Crisis Checklist */}
          <div className="max-w-md mx-auto text-left space-y-2 pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-[#a8a29e] block border-b border-[#292524] pb-1">
              Chapter 1 Crisis Checklist
            </span>
            {chapter1Events.map(evt => {
              const isDone = progress.completedEvents.includes(evt.id);
              return (
                <div 
                  key={evt.id}
                  className={`flex items-center justify-between p-2 rounded-xs text-xs font-serif ${
                    isDone ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/40' : 'bg-[#292524]/60 text-stone-400 border border-[#383330]'
                  }`}
                >
                  <span className="truncate pr-2">{evt.title} ({evt.year})</span>
                  {isDone ? (
                    <span className="flex items-center space-x-1 text-emerald-400 font-mono text-[11px] shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Decided</span>
                    </span>
                  ) : (
                    <span className="text-stone-500 font-mono text-[11px] shrink-0">
                      Pending
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {onReturnToSimulation && (
            <div className="pt-4">
              <button
                id="btn-return-simulation"
                onClick={onReturnToSimulation}
                className="px-6 py-3 bg-amber-600 hover:bg-amber-500 text-stone-950 font-serif font-bold text-xs uppercase tracking-wider rounded-sm shadow-xl inline-flex items-center space-x-2 cursor-pointer transition-all hover:scale-105"
              >
                <span>Return to Simulation Crises</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  const handleSelectOption = (questionId: string, optionIdx: number) => {
    if (submittedAnswers[questionId]) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  const handleVerifyQuestion = (question: any) => {
    const selectedIdx = selectedAnswers[question.id];
    if (selectedIdx === undefined) return;
    answerQuestion(question, selectedIdx);
    setSubmittedAnswers(prev => ({ ...prev, [question.id]: true }));

    // If this is Chapter 1 Gazette question, mark Gazette completed for Chapter 1
    if (progress.currentChapter === 1 || question.chapter === 1 || selectedArticle.id.includes('1763')) {
      completeChapter1Gazette();
    }
  };

  const handleAdvanceChapter = () => {
    const success = advanceFromChapter1();
    if (success && onAdvanceChapter) {
      onAdvanceChapter();
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Chapter 1 Capstone Requirement Banner */}
      {progress.currentChapter === 1 && !isChapter1GazetteComplete && (
        <div className="bg-amber-950/60 border-2 border-amber-500/80 rounded-sm p-4 text-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block">
                Chapter 1 Capstone Requirement
              </span>
              <p className="text-xs sm:text-sm font-serif text-[#fef3c7] mt-0.5">
                All 5 historical crises are resolved! To complete Chapter 1 and unlock Chapter 2, submit your primary source analysis for the 1763 broadside below.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Chapter 1 Capstone Completed Banner with Advancement Button */}
      {progress.currentChapter === 1 && isChapter1GazetteComplete && (
        <div className="bg-emerald-950/70 border-2 border-emerald-500 rounded-sm p-4 text-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl animate-in fade-in duration-300">
          <div className="flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 block">
                Chapter 1 Complete!
              </span>
              <p className="text-xs sm:text-sm font-serif text-[#fef3c7] mt-0.5">
                You have decided all 5 crises and analyzed the 1763 public newsprint reaction. You are ready to advance to Chapter 2: Taxation Without Representation!
              </p>
            </div>
          </div>
          <button
            id="btn-advance-from-gazette"
            onClick={handleAdvanceChapter}
            className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-serif font-bold text-xs uppercase tracking-wider rounded-sm shadow-md flex items-center justify-center space-x-1.5 shrink-0 transition-all hover:scale-105 cursor-pointer"
          >
            <span>Advance to Chapter 2</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Header */}
      <div className="bg-[#292524] rounded-sm border border-[#44403c] p-4 sm:p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center space-x-2">
              <Newspaper className="w-5 h-5 text-yellow-500" />
              <h2 className="text-xl font-bold font-serif text-[#fef3c7] font-['Cinzel']">
                The Colonial Gazette (18th Century Broadsides)
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#d6d3d1] mt-1 font-serif">
              Examine contemporary print media: discover how Boston Patriot printers and London Loyalist editors framed the exact same events to sway public sentiment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {NEWSPAPER_ARTICLES.map(paper => (
              <button
                key={paper.id}
                id={`btn-select-paper-${paper.id}`}
                onClick={() => setSelectedArticle(paper)}
                className={`px-3 py-1.5 text-xs rounded-sm font-serif transition-colors ${
                  selectedArticle.id === paper.id
                    ? 'bg-amber-800 text-amber-100 font-bold border border-amber-600 shadow-xs'
                    : 'bg-[#1c1917] text-[#a8a29e] hover:text-white border border-[#383330]'
                }`}
              >
                {paper.paperName.split(' ')[0]} ({paper.perspective})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Realistic 18th-Century Newspaper Broadside Card */}
      <div className="bg-[#fcf8ed] text-[#1c1917] rounded-xs border-4 border-[#292524] shadow-2xl p-6 sm:p-10 font-serif max-w-4xl mx-auto space-y-6">
        {/* Newspaper Masthead */}
        <div className="text-center border-b-4 border-double border-[#1c1917] pb-4 space-y-1">
          <div className="text-xs uppercase font-mono tracking-widest text-[#44403c] flex items-center justify-center space-x-3">
            <span>Published in {selectedArticle.location}</span>
            <span>&bull;</span>
            <span>{selectedArticle.editionDate}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black font-['Cinzel'] tracking-wider uppercase text-[#0c0a09] mt-2">
            {selectedArticle.paperName}
          </h1>

          <div className="flex items-center justify-between border-t border-b border-[#1c1917] py-1 text-[11px] font-mono uppercase tracking-widest text-[#57534e]">
            <span>Vol. XII &bull; Num. 642</span>
            <span>Containing the Freshest Advices, Foreign & Domestick</span>
            <span className={`px-2 py-0.2 rounded-xs font-bold ${
              selectedArticle.perspective === 'Patriot' ? 'bg-amber-200 text-amber-950' : 'bg-red-200 text-red-950'
            }`}>
              {selectedArticle.perspective} Press
            </span>
          </div>
        </div>

        {/* Headlines */}
        <div className="space-y-2 border-b border-[#a8a29e] pb-4">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#0c0a09] leading-tight">
            {selectedArticle.headline}
          </h2>
          <h3 className="text-sm sm:text-base italic text-[#44403c] font-serif">
            {selectedArticle.subtitle}
          </h3>
        </div>

        {/* Multi-column Article Layout */}
        <div className="columns-1 md:columns-2 gap-8 text-justify text-sm sm:text-base leading-relaxed text-[#1c1917] first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-2 first-letter:font-['Cinzel']">
          {selectedArticle.articleText}
        </div>

        {/* Interactive Source Analysis Question */}
        {selectedArticle.analysisQuestions.map(q => {
          const isSubmitted = submittedAnswers[q.id];
          const selectedIdx = selectedAnswers[q.id];
          const isCorrect = selectedIdx === q.correctAnswerIndex;

          return (
            <div
              key={q.id}
              className="mt-8 pt-6 border-t-2 border-dashed border-[#a8a29e] space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#78350f] flex items-center space-x-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>Document Analysis & ELA Reading Challenge</span>
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#e7e5e4] text-[#44403c]">
                  {q.standardId} &bull; {q.elaStandardId}
                </span>
              </div>

              <p className="font-bold text-sm sm:text-base text-[#1c1917]">
                {q.prompt}
              </p>

              <div className="space-y-2">
                {q.options.map((opt: string, idx: number) => {
                  const isOptionSelected = selectedIdx === idx;
                  const isThisCorrect = idx === q.correctAnswerIndex;

                  let style = 'bg-white border-[#d6d3d1] hover:border-[#78350f]';
                  if (isSubmitted) {
                    if (isThisCorrect) style = 'bg-emerald-50 border-emerald-600 text-emerald-950 font-semibold';
                    else if (isOptionSelected) style = 'bg-red-50 border-red-600 text-red-950';
                    else style = 'bg-white/50 border-[#e7e5e4] opacity-60';
                  } else if (isOptionSelected) {
                    style = 'bg-[#f2e8cf] border-[#78350f] ring-1 ring-[#78350f]';
                  }

                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectOption(q.id, idx)}
                      className={`p-3 rounded-xs border text-xs sm:text-sm cursor-pointer transition-all flex items-start space-x-2.5 ${style}`}
                    >
                      <span className="font-mono font-bold">{String.fromCharCode(65 + idx)}.</span>
                      <span className="flex-1">{opt}</span>
                      {isSubmitted && isThisCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />}
                      {isSubmitted && isOptionSelected && !isThisCorrect && <XCircle className="w-4 h-4 text-red-600 shrink-0" />}
                    </div>
                  );
                })}
              </div>

              {!isSubmitted ? (
                <button
                  id={`btn-verify-news-${q.id}`}
                  disabled={selectedIdx === undefined}
                  onClick={() => handleVerifyQuestion(q)}
                  className={`px-5 py-2 rounded-xs text-xs font-serif font-bold uppercase tracking-wider transition-all ${
                    selectedIdx !== undefined
                      ? 'bg-[#78350f] hover:bg-[#92400e] text-white shadow-md cursor-pointer'
                      : 'bg-[#d6d3d1] text-[#78716c] cursor-not-allowed'
                  }`}
                >
                  Submit Analysis
                </button>
              ) : (
                <div className="space-y-3">
                  <div className={`p-3 rounded-xs text-xs sm:text-sm ${
                    isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'
                  }`}>
                    <span className="font-bold">{isCorrect ? 'Accurate reading!' : 'Historical Context:'}</span>{' '}
                    {q.explanation}
                  </div>

                  {progress.currentChapter === 1 && (
                    <div className="p-3 bg-amber-50 border border-amber-300 rounded-xs flex items-center justify-between text-xs text-amber-950">
                      <span>Chapter 1 Gazette Reading Milestone Recorded!</span>
                      <button
                        onClick={handleAdvanceChapter}
                        className="px-3 py-1 bg-amber-800 hover:bg-amber-700 text-amber-100 font-serif font-bold text-xs uppercase rounded-xs"
                      >
                        Advance to Chapter 2 ➔
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
