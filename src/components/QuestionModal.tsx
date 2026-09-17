import React, { useState } from 'react';
import { Question } from '../types';
import { useGame } from '../context/GameContext';
import { 
  GraduationCap, 
  HelpCircle, 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  Lightbulb, 
  X,
  Award,
  Newspaper,
  AlertCircle
} from 'lucide-react';

interface QuestionModalProps {
  question: Question;
  onClose: () => void;
}

export const QuestionModal: React.FC<QuestionModalProps> = ({ question, onClose }) => {
  const { answerQuestion, progress, useHint, advanceCheckpoint } = useGame();
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [hintRevealed, setHintRevealed] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<{ isCorrect: boolean; explanation: string } | null>(null);

  const handleRevealHint = () => {
    const hint = useHint();
    if (hint) {
      setHintRevealed(hint);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswerIndex === null) return;
    const res = answerQuestion(question, selectedAnswerIndex);
    setResult(res);
    setSubmitted(true);
  };

  const handleFinish = () => {
    onClose();
    advanceCheckpoint();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs overflow-y-auto">
      <div 
        id="question-modal-container"
        className="relative w-full max-w-2xl bg-[#1c1917] text-[#f5f5f4] rounded-sm shadow-2xl border-2 border-[#78350f] overflow-hidden my-6"
      >
        {/* Header */}
        <div className="bg-[#292524] px-6 py-4 border-b border-[#44403c] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-sm bg-[#78350f] border border-[#d97706]/40 flex items-center justify-center text-[#fef3c7]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  Historical Knowledge Check
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-sm bg-[#1c1917] text-sky-300 border border-sky-800 font-mono">
                  {question.standardId}
                </span>
                {question.elaStandardId && (
                  <span className="text-[11px] px-2 py-0.5 rounded-sm bg-[#1c1917] text-purple-300 border border-purple-800 font-mono">
                    {question.elaStandardId}
                  </span>
                )}
              </div>
              <h3 className="font-serif text-base font-semibold text-[#f5f5f4] mt-0.5">
                Topic: {question.topic} &bull; Year {question.year}
              </h3>
            </div>
          </div>

          <button
            id="question-modal-close"
            onClick={onClose}
            className="p-1 rounded text-[#a8a29e] hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Primary / Secondary Source Excerpt if included */}
          {question.sourceExcerpt && (
            <div className="bg-[#241e1b] p-4 rounded-sm border border-amber-900/60 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-amber-400 border-b border-[#383330] pb-1">
                <span className="font-bold flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Document Analysis: {question.sourceExcerpt.title}</span>
                </span>
                <span className="text-[#a8a29e]">
                  {question.sourceExcerpt.author} ({question.sourceExcerpt.date})
                </span>
              </div>
              <p className="text-sm font-serif italic text-[#e7e5e4] leading-relaxed pl-2 border-l-2 border-amber-600">
                &ldquo;{question.sourceExcerpt.text}&rdquo;
              </p>
            </div>
          )}

          {/* Prompt */}
          <div className="text-base sm:text-lg font-serif text-[#fef3c7] leading-snug">
            {question.prompt}
          </div>

          {/* Hint Area */}
          {!submitted && (
            <div className="flex items-center justify-between text-xs">
              {hintRevealed ? (
                <div className="bg-amber-950/40 border border-amber-700/60 p-2.5 rounded-sm text-amber-200 flex items-start space-x-2 w-full">
                  <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span className="font-serif text-xs leading-relaxed">{hintRevealed}</span>
                </div>
              ) : (
                <button
                  id="question-reveal-hint-btn"
                  onClick={handleRevealHint}
                  disabled={progress.hintsRemaining <= 0}
                  className="flex items-center space-x-1.5 text-xs text-amber-400 hover:text-amber-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Consult Scholar Hint ({progress.hintsRemaining} remaining)</span>
                </button>
              )}
            </div>
          )}

          {/* Options */}
          <div className="space-y-2.5">
            {question.options.map((option, idx) => {
              const isSelected = selectedAnswerIndex === idx;
              const isCorrectAnswer = idx === question.correctAnswerIndex;

              let optionStyle = 'border-[#383330] bg-[#241e1b] hover:border-amber-700 hover:bg-[#292524]';
              if (submitted) {
                if (isCorrectAnswer) {
                  optionStyle = 'border-emerald-600 bg-emerald-950/40 text-emerald-100 ring-1 ring-emerald-500';
                } else if (isSelected && !isCorrectAnswer) {
                  optionStyle = 'border-red-600 bg-red-950/40 text-red-100 ring-1 ring-red-500';
                } else {
                  optionStyle = 'border-[#292524] bg-[#1c1917] opacity-60';
                }
              } else if (isSelected) {
                optionStyle = 'border-amber-500 bg-amber-950/50 text-[#fef3c7] ring-1 ring-amber-500';
              }

              return (
                <div
                  key={idx}
                  id={`question-option-${idx}`}
                  onClick={() => !submitted && setSelectedAnswerIndex(idx)}
                  className={`p-3.5 rounded-sm border cursor-pointer transition-all flex items-start space-x-3 ${optionStyle}`}
                >
                  <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <div className="flex-1 font-serif text-sm sm:text-base leading-relaxed">
                    {option}
                  </div>
                  {submitted && isCorrectAnswer && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {submitted && isSelected && !isCorrectAnswer && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Submitted Feedback / Explanation */}
          {submitted && result && (
            <div className={`p-4 rounded-sm border space-y-2 animate-in fade-in duration-200 ${
              result.isCorrect ? 'bg-emerald-950/30 border-emerald-800' : 'bg-red-950/30 border-red-800'
            }`}>
              <div className="flex items-center space-x-2">
                {result.isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="font-serif font-bold text-emerald-300">
                      Historically Accurate! (+6 Historical Knowledge)
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-red-400" />
                    <span className="font-serif font-bold text-red-300">
                      Insight Gained (+2 Historical Knowledge)
                    </span>
                  </>
                )}
              </div>
              <p className="text-xs sm:text-sm font-serif text-[#d6d3d1] leading-relaxed pl-7">
                {result.explanation}
              </p>
            </div>
          )}

          {submitted && progress.currentChapter === 1 && progress.currentCheckpoint === 5 && (
            <div className="p-3 bg-amber-950/50 border border-amber-500/70 rounded-sm text-xs text-amber-200 flex items-start space-x-2 animate-in fade-in duration-200">
              <Newspaper className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">All 5 Chapter 1 Crises Resolved!</strong> The Colonial Gazette printing presses are now unlocked. You must complete the Gazette primary source analysis before advancing to Chapter 2.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#292524] px-6 py-4 border-t border-[#44403c] flex items-center justify-between">
          <span className="text-xs font-mono text-[#a8a29e]">
            {submitted ? 'Checkpoint knowledge recorded' : 'Select the most accurate historical answer'}
          </span>

          {!submitted ? (
            <button
              id="question-submit-btn"
              disabled={selectedAnswerIndex === null}
              onClick={handleSubmit}
              className={`px-6 py-2 rounded-sm text-xs font-serif font-bold uppercase tracking-wider transition-all ${
                selectedAnswerIndex !== null
                  ? 'bg-amber-700 hover:bg-amber-600 text-white cursor-pointer shadow-md'
                  : 'bg-[#383330] text-[#78716c] cursor-not-allowed'
              }`}
            >
              Verify Answer
            </button>
          ) : (
            <button
              id="question-continue-btn"
              onClick={handleFinish}
              className="px-6 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-sm text-xs font-serif font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-md cursor-pointer"
            >
              <span>{progress.currentChapter === 1 && progress.currentCheckpoint === 5 ? 'Continue to Simulation' : 'Advance Simulation'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
