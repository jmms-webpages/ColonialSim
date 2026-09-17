import React, { useState } from 'react';
import { useGame, CHAPTER_1_CRISIS_IDS } from '../context/GameContext';
import { CHAPTERS } from '../data/chapters';
import { HISTORICAL_EVENTS } from '../data/events';
import { QUESTIONS_BANK } from '../data/questions';
import { NEWSPAPER_ARTICLES } from '../data/newspapers';
import { 
  Scroll, 
  MapPin, 
  Calendar, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Newspaper, 
  History, 
  ArrowRight,
  Shield,
  Flame,
  Scale,
  RotateCcw,
  Lock,
  AlertCircle
} from 'lucide-react';

interface SimulationDashboardProps {
  onOpenMap: () => void;
  onOpenSources: () => void;
  onOpenGazette: () => void;
}

export const SimulationDashboard: React.FC<SimulationDashboardProps> = ({
  onOpenMap,
  onOpenSources,
  onOpenGazette
}) => {
  const { 
    progress, 
    openEvent, 
    openQuestion, 
    openNewspaper, 
    resetGame,
    advanceCheckpoint,
    isChapter1CrisesComplete,
    isChapter1GazetteComplete,
    isGazetteLocked,
    advanceFromChapter1
  } = useGame();

  const [showGazetteLockedModal, setShowGazetteLockedModal] = useState(false);

  const currentChapter = CHAPTERS.find(c => c.number === progress.currentChapter) || CHAPTERS[0];
  const chapterEvents = HISTORICAL_EVENTS.filter(e => e.chapter === progress.currentChapter);
  const currentCheckpointData = currentChapter.checkpoints[progress.currentCheckpoint - 1] || currentChapter.checkpoints[0];

  const chapter1CrisesDone = CHAPTER_1_CRISIS_IDS.filter(id => progress.completedEvents.includes(id)).length;

  // Available questions for this chapter
  const chapterQuestions = QUESTIONS_BANK.filter(q => q.chapter === progress.currentChapter);
  const uncompletedQuestion = chapterQuestions.find(q => !progress.completedQuestions.includes(q.id)) || chapterQuestions[0];

  // Associated newspaper for this period if any
  const chapterNewspaper = NEWSPAPER_ARTICLES.find(n => 
    (progress.currentChapter === 1 && n.id.includes('1763')) ||
    (progress.currentChapter === 2 && n.id.includes('1765')) ||
    (progress.currentChapter >= 3 && progress.currentChapter <= 4 && n.id.includes('1774')) ||
    (progress.currentChapter >= 5 && n.id.includes('1776'))
  );

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Chapter Overview Hero Banner */}
      <div className="relative rounded-sm border border-[#78350f]/60 bg-linear-to-r from-[#29170f] via-[#241e1b] to-[#1c1917] p-6 sm:p-8 shadow-xl overflow-hidden">
        {/* Subtle decorative watermark */}
        <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none text-amber-100">
          <Scroll className="w-64 h-64" />
        </div>

        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <span className="px-2.5 py-1 rounded-sm bg-amber-900/60 text-amber-200 border border-amber-600 font-mono text-xs font-bold uppercase tracking-wider">
                Chapter {currentChapter.number} of 6
              </span>
              <span className="text-xs font-mono text-[#a8a29e]">
                {currentChapter.timePeriod}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-amber-300">
              <span>Checkpoint {progress.currentCheckpoint} / 5:</span>
              <span className="font-semibold text-white">{currentCheckpointData?.title}</span>
            </div>
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-[#fef3c7] font-['Cinzel'] tracking-wide">
              {currentChapter.title}
            </h1>
            <p className="text-sm sm:text-base font-serif text-[#d6d3d1] mt-2 max-w-4xl leading-relaxed">
              {currentChapter.summary}
            </p>
          </div>

          {/* 5-Checkpoint Progression Bar */}
          <div className="pt-2">
            <div className="flex items-center justify-between text-[11px] font-mono text-[#a8a29e] mb-1.5">
              <span>Chapter Timeline Progress</span>
              <span>{Math.round(((progress.currentCheckpoint - 1) / 5) * 100)}% Completed</span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {currentChapter.checkpoints.map((cp, idx) => {
                const stepNum = idx + 1;
                const isPassed = stepNum < progress.currentCheckpoint;
                const isCurrent = stepNum === progress.currentCheckpoint;

                return (
                  <div
                    key={cp.id}
                    className={`h-2 rounded-full transition-all ${
                      isPassed
                        ? 'bg-emerald-500'
                        : isCurrent
                        ? 'bg-amber-500 ring-2 ring-amber-400/40 animate-pulse'
                        : 'bg-[#383330]'
                    }`}
                    title={`Checkpoint ${stepNum}: ${cp.title}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Chapter 1 Capstone Gate: Crises completed, Gazette required */}
      {progress.currentChapter === 1 && isChapter1CrisesComplete && !isChapter1GazetteComplete && (
        <div 
          id="ch1-capstone-required-banner"
          className="bg-linear-to-r from-amber-950 via-[#2a170e] to-stone-900 border-2 border-amber-500 rounded-sm p-5 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-3 duration-300"
        >
          <div className="flex items-start space-x-3.5">
            <div className="p-3 bg-amber-500/20 border border-amber-400 rounded-sm text-amber-300 shrink-0 mt-0.5">
              <Newspaper className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  Chapter 1 Capstone Prerequisite
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 font-bold uppercase tracking-wider">
                  Action Required
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#fef3c7] mt-1 font-['Cinzel']">
                All 5 Chapter 1 Crises Resolved — Open The Colonial Gazette
              </h3>
              <p className="text-xs sm:text-sm font-serif text-[#d6d3d1] mt-1 max-w-2xl leading-relaxed">
                You have steered through all 5 historical crises of Chapter 1. To conclude this chapter and unlock <strong>Chapter 2: Taxation Without Representation</strong>, you must now read the contemporary 1763 broadsides in The Colonial Gazette and complete the primary source reading challenge.
              </p>
            </div>
          </div>
          <button
            id="banner-open-gazette-btn"
            onClick={onOpenGazette}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-serif font-bold text-xs uppercase tracking-wider rounded-sm shadow-xl flex items-center justify-center space-x-2 shrink-0 transition-all hover:scale-105 cursor-pointer"
          >
            <Newspaper className="w-4 h-4" />
            <span>Enter Colonial Gazette</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Chapter 1 Capstone Gate: Both Crises and Gazette completed, ready to advance */}
      {progress.currentChapter === 1 && isChapter1CrisesComplete && isChapter1GazetteComplete && (
        <div 
          id="ch1-capstone-completed-banner"
          className="bg-linear-to-r from-emerald-950 via-[#0d2818] to-stone-900 border-2 border-emerald-500 rounded-sm p-5 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-top-3 duration-300"
        >
          <div className="flex items-start space-x-3.5">
            <div className="p-3 bg-emerald-500/20 border border-emerald-400 rounded-sm text-emerald-300 shrink-0 mt-0.5">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                  Chapter 1 Capstone Completed
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500 text-stone-950 font-bold uppercase tracking-wider">
                  Ready to Advance
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#fef3c7] mt-1 font-['Cinzel']">
                Chapter 1 Concluded: All Crises & Newspaper Analysis Completed!
              </h3>
              <p className="text-xs sm:text-sm font-serif text-[#d6d3d1] mt-1 max-w-2xl leading-relaxed">
                You have completed all 5 crises and analyzed the public response to the Proclamation of 1763 in The Colonial Gazette. You may now advance to Chapter 2.
              </p>
            </div>
          </div>
          <button
            id="banner-advance-chapter1-btn"
            onClick={() => advanceFromChapter1()}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-serif font-bold text-xs uppercase tracking-wider rounded-sm shadow-xl flex items-center justify-center space-x-2 shrink-0 transition-all hover:scale-105 cursor-pointer"
          >
            <span>Conclude Chapter 1 & Advance</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Two-Column Layout: Active Events & Colonial Ledger */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Primary Events & Actions (2 Columns) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Section: Historical Decisions Awaiting */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Scroll className="w-5 h-5 text-amber-400" />
                <h2 className="font-serif text-lg font-bold text-[#fef3c7] font-['Cinzel']">
                  Historical Crises & Choices
                </h2>
              </div>
              <span className="text-xs text-[#a8a29e] font-serif">
                {chapterEvents.filter(e => progress.completedEvents.includes(e.id)).length} of {chapterEvents.length} Decided
              </span>
            </div>

            <div className="space-y-3">
              {chapterEvents.map(event => {
                const isDone = progress.completedEvents.includes(event.id);

                return (
                  <div
                    key={event.id}
                    id={`event-card-${event.id}`}
                    className={`rounded-sm border p-4 sm:p-5 transition-all ${
                      isDone
                        ? 'bg-[#1c1917]/80 border-[#383330] opacity-85'
                        : 'bg-[#241e1b] border-amber-600/50 hover:border-amber-500 shadow-md ring-1 ring-amber-500/10'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center space-x-2 text-xs font-mono text-amber-400">
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{event.year}</span>
                          </span>
                          <span>&bull;</span>
                          <span className="flex items-center space-x-1 text-[#d6d3d1]">
                            <MapPin className="w-3.5 h-3.5 text-amber-500" />
                            <span>{event.location}</span>
                          </span>
                          {isDone && (
                            <span className="flex items-center space-x-1 text-emerald-400 ml-2">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              <span>Decision Recorded</span>
                            </span>
                          )}
                        </div>

                        <h3 className="font-serif text-lg font-bold text-[#fef3c7]">
                          {event.title}
                        </h3>

                        <p className="text-xs sm:text-sm font-serif text-[#d6d3d1] line-clamp-2">
                          {event.narrative || event.historicalContext}
                        </p>
                      </div>

                      <button
                        id={`btn-engage-event-${event.id}`}
                        onClick={() => openEvent(event)}
                        className={`self-start sm:self-center px-4 py-2 rounded-sm text-xs font-serif font-bold uppercase tracking-wider flex items-center space-x-1.5 transition-colors shrink-0 ${
                          isDone
                            ? 'bg-[#292524] text-[#a8a29e] hover:bg-[#383330] hover:text-white border border-[#44403c]'
                            : 'bg-amber-700 hover:bg-amber-600 text-white shadow-md'
                        }`}
                      >
                        <span>{isDone ? 'Review Decision' : 'Enter Crisis'}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Learning Portals: Primary Source Desk & Colonial Gazette */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div
              id="dash-source-desk-card"
              onClick={onOpenSources}
              className="bg-[#1c1917] border border-[#383330] hover:border-sky-600/70 p-4 rounded-sm cursor-pointer transition-all hover:bg-[#241e1b] group"
            >
              <div className="flex items-center space-x-2 text-sky-400 mb-1.5">
                <BookOpen className="w-4 h-4" />
                <h4 className="font-serif font-bold text-sm text-[#f5f5f4] group-hover:text-sky-300">
                  Primary Source Desk
                </h4>
              </div>
              <p className="text-xs text-[#a8a29e] font-serif">
                Read authentic 18th-century speeches, pamphlets, and laws alongside modern student translations.
              </p>
              <div className="mt-3 flex items-center text-xs text-sky-400 font-medium">
                <span>Inspect Historical Documents</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>

            <div
              id="dash-gazette-card"
              onClick={() => {
                if (isGazetteLocked) {
                  setShowGazetteLockedModal(true);
                  return;
                }
                onOpenGazette();
              }}
              className={`border p-4 rounded-sm transition-all group ${
                isGazetteLocked
                  ? 'bg-[#171514] border-stone-800 cursor-not-allowed opacity-80'
                  : progress.currentChapter === 1 && isChapter1CrisesComplete && !isChapter1GazetteComplete
                  ? 'bg-[#26150b] border-amber-500 ring-1 ring-amber-500/50 cursor-pointer shadow-lg shadow-amber-950/40 hover:bg-[#311b0e]'
                  : 'bg-[#1c1917] border-[#383330] hover:border-yellow-600/70 cursor-pointer hover:bg-[#241e1b]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center space-x-2 text-yellow-400">
                  {isGazetteLocked ? (
                    <Lock className="w-4 h-4 text-stone-500" />
                  ) : (
                    <Newspaper className="w-4 h-4" />
                  )}
                  <h4 className="font-serif font-bold text-sm text-[#f5f5f4] group-hover:text-yellow-300">
                    The Colonial Gazette
                  </h4>
                </div>
                {isGazetteLocked ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-900 text-stone-400 border border-stone-700">
                    Locked ({chapter1CrisesDone}/5 Crises)
                  </span>
                ) : progress.currentChapter === 1 && isChapter1CrisesComplete && !isChapter1GazetteComplete ? (
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500 text-stone-950 uppercase tracking-wider animate-pulse">
                    Required to Advance
                  </span>
                ) : isChapter1GazetteComplete ? (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-700">
                    Analysis Completed
                  </span>
                ) : null}
              </div>
              <p className="text-xs text-[#a8a29e] font-serif">
                {isGazetteLocked
                  ? `The Gazette broadsides remain sealed until all 5 historical crises for Chapter 1 are resolved (${chapter1CrisesDone} of 5 resolved).`
                  : progress.currentChapter === 1 && isChapter1CrisesComplete && !isChapter1GazetteComplete
                  ? 'All 5 Chapter 1 crises resolved! Complete the newspaper source analysis challenge to unlock Chapter 2.'
                  : 'Analyze competing Patriot and Loyalist newspaper broadsides published in Boston, New York, and Philadelphia.'}
              </p>
              <div className={`mt-3 flex items-center text-xs font-medium ${
                isGazetteLocked ? 'text-stone-500' : 'text-yellow-400'
              }`}>
                <span>{isGazetteLocked ? 'Locked &bull; Resolve Chapter Crises First' : 'Read Era Newsprint'}</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: Colonial Standing & Decision History Ledger (1 Column) */}
        <div className="space-y-6">
          {/* Political Identity Spectrum Card */}
          <div className="bg-[#1c1917] rounded-sm border border-[#383330] p-5 space-y-4">
            <div className="border-b border-[#292524] pb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400">
                Colonial Stance & Alliances
              </span>
              <h3 className="text-base font-bold font-serif text-[#fef3c7] mt-0.5">
                Current Stance: {progress.politicalIdentity}
              </h3>
            </div>

            {/* Visual alignment meter */}
            <div className="space-y-2 text-xs font-serif">
              <div className="flex justify-between text-[#a8a29e] font-mono text-[11px]">
                <span className="text-amber-300 flex items-center space-x-1">
                  <Flame className="w-3 h-3" />
                  <span>Patriot</span>
                </span>
                <span className="text-stone-300 flex items-center space-x-1">
                  <Scale className="w-3 h-3" />
                  <span>Neutral</span>
                </span>
                <span className="text-red-300 flex items-center space-x-1">
                  <Shield className="w-3 h-3" />
                  <span>Loyalist</span>
                </span>
              </div>

              {/* Progress indicator */}
              <div className="w-full h-3 rounded-full bg-[#292524] border border-[#44403c] overflow-hidden flex">
                <div 
                  style={{ width: `${Math.max(10, Math.min(80, 33 + progress.patriotScore * 4))}%` }} 
                  className="bg-amber-600 transition-all duration-500" 
                  title="Patriot Lean"
                />
                <div 
                  style={{ width: `${Math.max(10, Math.min(80, 34 + progress.neutralScore * 2))}%` }} 
                  className="bg-stone-500 transition-all duration-500" 
                  title="Neutral Lean"
                />
                <div 
                  style={{ width: `${Math.max(10, Math.min(80, 33 + progress.loyalistScore * 4))}%` }} 
                  className="bg-red-700 transition-all duration-500" 
                  title="Loyalist Lean"
                />
              </div>

              <p className="text-[11px] text-[#a8a29e] pt-1">
                Your actions determine whether you are viewed as a steadfast defender of English liberties, a faithful subject of the King, or a prudent neutral.
              </p>
            </div>

            {/* Quick Challenge Action */}
            {uncompletedQuestion && (
              <div className="pt-2 border-t border-[#292524]">
                <button
                  id="dash-quick-question-btn"
                  onClick={() => openQuestion(uncompletedQuestion)}
                  className="w-full py-2.5 px-3 bg-sky-900/40 hover:bg-sky-900/60 text-sky-200 border border-sky-700/60 rounded-sm text-xs font-serif font-semibold flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span>Checkpoint Knowledge Check</span>
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Decision Ledger */}
          <div className="bg-[#1c1917] rounded-sm border border-[#383330] p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-[#292524] pb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 flex items-center space-x-1.5">
                <History className="w-3.5 h-3.5" />
                <span>Colonial Ledger ({progress.decisionHistory.length})</span>
              </span>
            </div>

            {progress.decisionHistory.length === 0 ? (
              <p className="text-xs text-[#a8a29e] font-serif py-3 text-center italic">
                No decisions sealed yet. Enter an active crisis to begin shaping history.
              </p>
            ) : (
              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {progress.decisionHistory.map(item => (
                  <div
                    key={item.id}
                    className="p-2.5 bg-[#241e1b] rounded-sm border border-[#383330] space-y-1 text-xs"
                  >
                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-amber-400 font-bold">Anno {item.year}</span>
                      <span className={`uppercase px-1.5 py-0.2 rounded-xs ${
                        item.alignmentImpact === 'patriot' ? 'bg-amber-950 text-amber-300' :
                        item.alignmentImpact === 'loyalist' ? 'bg-red-950 text-red-300' :
                        'bg-stone-900 text-stone-300'
                      }`}>
                        {item.alignmentImpact}
                      </span>
                    </div>
                    <div className="font-serif font-medium text-[#f5f5f4] text-xs">
                      {item.eventTitle}
                    </div>
                    <div className="font-serif text-[#a8a29e] text-[11px] italic">
                      &ldquo;{item.choiceText}&rdquo;
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Reset Simulation button */}
            <div className="pt-2 border-t border-[#292524]">
              <button
                id="dash-reset-simulation-btn"
                onClick={() => {
                  if (window.confirm('Restart the Road to Revolution campaign from 1763? Your previous history will be cleared.')) {
                    resetGame();
                  }
                }}
                className="flex items-center space-x-1.5 text-xs text-[#78716c] hover:text-amber-400 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restart Simulation (1763)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Locked Notice Dialog for Dashboard Gazette Card */}
      {showGazetteLockedModal && (
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
              The printing presses at the Gazette office only publish after major colonial events unfold! You must decide all <strong>5 historical crises</strong> for Chapter 1 before accessing The Colonial Gazette.
            </p>
            <div className="p-3 bg-[#ebd9b8] rounded-sm border border-[#b45309]/30 text-xs font-mono text-[#78350f] flex justify-between items-center">
              <span>Chapter 1 Crises Resolved:</span>
              <span className="font-bold text-sm">
                {chapter1CrisesDone} of 5
              </span>
            </div>
            <div className="flex justify-end space-x-2 pt-2">
              <button
                onClick={() => setShowGazetteLockedModal(false)}
                className="px-5 py-2 bg-[#78350f] hover:bg-[#92400e] text-[#fef3c7] font-serif text-xs font-bold uppercase rounded-sm shadow-md"
              >
                Return to Crises
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
