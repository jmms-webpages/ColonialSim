import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { doc, getDoc, setDoc, updateDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../firebase';
import { useAuth } from './AuthContext';
import { 
  GameProgress, 
  PlayerStats, 
  PoliticalIdentity, 
  DecisionHistoryItem, 
  HistoricalEvent, 
  EventOption, 
  Question, 
  Colony,
  NewspaperArticle,
  PrimarySourceDoc
} from '../types';
import { CHAPTERS } from '../data/chapters';
import { HISTORICAL_EVENTS, getEventById } from '../data/events';
import { QUESTIONS_BANK, getQuestionById } from '../data/questions';
import { COLONIES } from '../data/colonies';
import { ACHIEVEMENTS } from '../data/achievements';
import confetti from 'canvas-confetti';

export const CHAPTER_1_CRISIS_IDS = [
  'evt_treaty_paris',
  'evt_proclamation_1763',
  'evt_pontiac_rebellion',
  'evt_assemblies_power',
  'evt_ch1_challenge'
];

interface GameContextType {
  progress: GameProgress;
  activeEvent: HistoricalEvent | null;
  activeQuestion: Question | null;
  activeNewspaper: NewspaperArticle | null;
  activeSourceDoc: PrimarySourceDoc | null;
  selectedColony: Colony | null;
  colonyAlignments: Record<string, { patriot: number; loyalist: number; neutral: number }>;
  consequenceFeedback: {
    eventTitle: string;
    immediateConsequence: string;
    statChanges: Partial<PlayerStats>;
    alignmentImpact: 'patriot' | 'loyalist' | 'neutral';
    followUpQuestion?: Question;
  } | null;
  questionResult: {
    isCorrect: boolean;
    explanation: string;
    pointsAwarded: number;
  } | null;
  chapterCompleteModal: boolean;
  unlockedAchievement: string | null;
  saving: boolean;
  
  // Chapter 1 Gazette Prerequisites
  isChapter1CrisesComplete: boolean;
  isChapter1GazetteComplete: boolean;
  isGazetteLocked: boolean;
  completeChapter1Gazette: () => void;
  advanceFromChapter1: () => boolean;

  // Actions
  selectColony: (colony: Colony | null) => void;
  openEvent: (event: HistoricalEvent) => void;
  closeEvent: () => void;
  makeDecision: (event: HistoricalEvent, option: EventOption) => void;
  openQuestion: (question: Question) => void;
  closeQuestion: () => void;
  answerQuestion: (question: Question, selectedIndex: number) => { isCorrect: boolean; explanation: string };
  openNewspaper: (paper: NewspaperArticle | null) => void;
  openSourceDoc: (doc: PrimarySourceDoc | null) => void;
  useHint: () => string | null;
  dismissConsequenceFeedback: () => void;
  dismissQuestionResult: () => void;
  dismissChapterComplete: () => void;
  advanceCheckpoint: () => void;
  unlockChapter: (chapterNum: number) => void;
  resetGame: () => Promise<void>;
  saveReflection: (text: string) => Promise<void>;
}

const DEFAULT_STATS: PlayerStats = {
  influence: 50,
  wealth: 50,
  colonialSupport: 50,
  britishRelations: 50,
  historicalKnowledge: 40
};

function calculatePoliticalIdentity(patriot: number, loyalist: number, neutral: number): PoliticalIdentity {
  const patriotDiff = patriot - loyalist;
  if (patriotDiff >= 8) return 'PATRIOT';
  if (patriotDiff >= 3) return 'LEANING PATRIOT';
  if (patriotDiff <= -8) return 'LOYALIST';
  if (patriotDiff <= -3) return 'LEANING LOYALIST';
  return 'NEUTRAL';
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, userProfile } = useAuth();

  const [progress, setProgress] = useState<GameProgress>(() => {
    const saved = localStorage.getItem('rtr_game_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // use default
      }
    }
    return {
      userId: 'guest',
      name: 'Colonist',
      email: '',
      currentChapter: 1,
      currentCheckpoint: 1,
      politicalIdentity: 'NEUTRAL',
      patriotScore: 0,
      loyalistScore: 0,
      neutralScore: 0,
      ...DEFAULT_STATS,
      hintsRemaining: 3,
      completedEvents: [],
      completedQuestions: [],
      achievements: [],
      decisionHistory: [],
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString()
    };
  });

  const [activeEvent, setActiveEvent] = useState<HistoricalEvent | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  const [activeNewspaper, setActiveNewspaper] = useState<NewspaperArticle | null>(null);
  const [activeSourceDoc, setActiveSourceDoc] = useState<PrimarySourceDoc | null>(null);
  const [selectedColony, setSelectedColony] = useState<Colony | null>(null);
  const [consequenceFeedback, setConsequenceFeedback] = useState<{
    eventTitle: string;
    immediateConsequence: string;
    statChanges: Partial<PlayerStats>;
    alignmentImpact: 'patriot' | 'loyalist' | 'neutral';
    followUpQuestion?: Question;
  } | null>(null);
  const [questionResult, setQuestionResult] = useState<{
    isCorrect: boolean;
    explanation: string;
    pointsAwarded: number;
  } | null>(null);
  const [chapterCompleteModal, setChapterCompleteModal] = useState(false);
  const [unlockedAchievement, setUnlockedAchievement] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Colony alignments state
  const [colonyAlignments, setColonyAlignments] = useState<Record<string, { patriot: number; loyalist: number; neutral: number }>>(() => {
    const initial: Record<string, { patriot: number; loyalist: number; neutral: number }> = {};
    COLONIES.forEach(c => {
      initial[c.id] = { patriot: c.patriotSupport, loyalist: c.loyalistSupport, neutral: c.neutralSupport };
    });
    return initial;
  });

  // Load progress from Firestore when user authenticates
  useEffect(() => {
    if (!userProfile) return;

    const loadRemoteProgress = async () => {
      try {
        const docRef = doc(db, 'gameProgress', userProfile.userId);
        const snap = await getDoc(docRef);
        if (snap.exists()) {
          const remoteData = snap.data() as GameProgress;
          setProgress(remoteData);
          localStorage.setItem('rtr_game_progress', JSON.stringify(remoteData));
        } else {
          // Initialize progress for this user
          const initialProg: GameProgress = {
            ...progress,
            userId: userProfile.userId,
            name: userProfile.displayName,
            email: userProfile.email,
            studentCode: userProfile.studentCode,
            isAnonymous: userProfile.isAnonymous,
            updatedAt: new Date().toISOString()
          };
          setProgress(initialProg);
          localStorage.setItem('rtr_game_progress', JSON.stringify(initialProg));
          await setDoc(docRef, initialProg);
        }
      } catch (err) {
        console.warn('Could not load remote progress; running in local storage mode:', err);
      }
    };

    loadRemoteProgress();
  }, [userProfile?.userId]);

  // Save to Firestore and localStorage
  const persistProgress = useCallback(async (updated: GameProgress) => {
    setProgress(updated);
    localStorage.setItem('rtr_game_progress', JSON.stringify(updated));

    if (userProfile?.userId && userProfile.userId !== 'guest') {
      setSaving(true);
      try {
        const docRef = doc(db, 'gameProgress', userProfile.userId);
        await setDoc(docRef, { 
          ...updated, 
          studentCode: userProfile.studentCode || updated.studentCode,
          isAnonymous: userProfile.isAnonymous ?? updated.isAnonymous,
          updatedAt: new Date().toISOString() 
        }, { merge: true });
      } catch (err) {
        console.warn('Error saving to Firestore:', err);
      } finally {
        setSaving(false);
      }
    }
  }, [userProfile?.userId, userProfile?.studentCode, userProfile?.isAnonymous]);

  // Check achievements
  const checkAchievements = useCallback((prog: GameProgress) => {
    const newAchievements = [...prog.achievements];
    let justUnlocked: string | null = null;

    if (prog.completedQuestions.length >= 15 && !newAchievements.includes('ach_historian_25')) {
      newAchievements.push('ach_historian_25');
      justUnlocked = 'Colonial Historian';
    }
    if (prog.wealth >= 70 && !newAchievements.includes('ach_colonial_merchant')) {
      newAchievements.push('ach_colonial_merchant');
      justUnlocked = 'Colonial Merchant';
    }
    if (prog.influence >= 75 && !newAchievements.includes('ach_community_leader')) {
      newAchievements.push('ach_community_leader');
      justUnlocked = 'Community Leader';
    }
    if (prog.politicalIdentity === 'PATRIOT' && !newAchievements.includes('ach_patriot_badge')) {
      newAchievements.push('ach_patriot_badge');
      justUnlocked = 'Son / Daughter of Liberty';
    }
    if (prog.politicalIdentity === 'LOYALIST' && !newAchievements.includes('ach_loyalist_badge')) {
      newAchievements.push('ach_loyalist_badge');
      justUnlocked = 'King & Constitution';
    }
    if (prog.politicalIdentity === 'NEUTRAL' && prog.currentChapter >= 3 && !newAchievements.includes('ach_neutral_badge')) {
      newAchievements.push('ach_neutral_badge');
      justUnlocked = 'Steadfast Neutral';
    }
    if (prog.currentChapter >= 5 && !newAchievements.includes('ach_first_shot')) {
      newAchievements.push('ach_first_shot');
      justUnlocked = 'The Road to Lexington';
    }
    if (prog.currentChapter >= 6 && prog.currentCheckpoint >= 5 && !newAchievements.includes('ach_revolutionary_scholar')) {
      newAchievements.push('ach_revolutionary_scholar');
      justUnlocked = 'Revolutionary Scholar';
    }

    if (justUnlocked) {
      setUnlockedAchievement(justUnlocked);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
      setTimeout(() => setUnlockedAchievement(null), 4500);
    }

    return newAchievements;
  }, []);

  const makeDecision = useCallback((event: HistoricalEvent, option: EventOption) => {
    // 1. Calculate new alignment scores
    const newPatriot = progress.patriotScore + option.patriotDelta;
    const newLoyalist = progress.loyalistScore + option.loyalistDelta;
    const newNeutral = progress.neutralScore + option.neutralDelta;
    const newIdentity = calculatePoliticalIdentity(newPatriot, newLoyalist, newNeutral);

    // 2. Calculate new stats with 0-100 clamping
    const clamp = (val: number) => Math.max(0, Math.min(100, Math.round(val)));
    const newStats: PlayerStats = {
      influence: clamp(progress.influence + (option.statChanges.influence || 0)),
      wealth: clamp(progress.wealth + (option.statChanges.wealth || 0)),
      colonialSupport: clamp(progress.colonialSupport + (option.statChanges.colonialSupport || 0)),
      britishRelations: clamp(progress.britishRelations + (option.statChanges.britishRelations || 0)),
      historicalKnowledge: clamp(progress.historicalKnowledge + (option.statChanges.historicalKnowledge || 0))
    };

    // 3. Record decision history
    const historyItem: DecisionHistoryItem = {
      id: `dec_${Date.now()}`,
      year: event.year,
      eventId: event.id,
      eventTitle: event.title,
      choiceText: option.text,
      alignmentImpact: option.alignment,
      consequenceSummary: option.immediateConsequence,
      timestamp: Date.now()
    };

    // 4. Update colony alignment visually on map
    if (event.colonyId && colonyAlignments[event.colonyId]) {
      setColonyAlignments(prev => {
        const curr = prev[event.colonyId];
        const pDelta = option.patriotDelta * 2;
        const lDelta = option.loyalistDelta * 2;
        const total = 100;
        const newP = Math.max(10, Math.min(80, curr.patriot + pDelta));
        const newL = Math.max(10, Math.min(80, curr.loyalist + lDelta));
        const newN = Math.max(5, total - newP - newL);
        return {
          ...prev,
          [event.colonyId]: { patriot: newP, loyalist: newL, neutral: newN }
        };
      });
    }

    const updatedEvents = progress.completedEvents.includes(event.id)
      ? progress.completedEvents
      : [...progress.completedEvents, event.id];

    let followUpQ: Question | undefined;
    if (event.followUpQuestionId) {
      followUpQ = getQuestionById(event.followUpQuestionId);
    }

    const nextProgress: GameProgress = {
      ...progress,
      patriotScore: newPatriot,
      loyalistScore: newLoyalist,
      neutralScore: newNeutral,
      politicalIdentity: newIdentity,
      ...newStats,
      completedEvents: updatedEvents,
      decisionHistory: [historyItem, ...progress.decisionHistory]
    };

    nextProgress.achievements = checkAchievements(nextProgress);
    persistProgress(nextProgress);

    // Close active event and show consequences modal
    setActiveEvent(null);
    setConsequenceFeedback({
      eventTitle: event.title,
      immediateConsequence: option.immediateConsequence,
      statChanges: option.statChanges,
      alignmentImpact: option.alignment,
      followUpQuestion: followUpQ
    });
  }, [progress, colonyAlignments, persistProgress, checkAchievements]);

  const answerQuestion = useCallback((question: Question, selectedIndex: number) => {
    const isCorrect = selectedIndex === question.correctAnswerIndex;
    const points = isCorrect ? 6 : 2;

    const newKnowledge = Math.min(100, progress.historicalKnowledge + points);
    const updatedQuestions = progress.completedQuestions.includes(question.id)
      ? progress.completedQuestions
      : [...progress.completedQuestions, question.id];

    // Award extra hint after 5 correct questions
    const hintsBonus = isCorrect && updatedQuestions.length % 4 === 0 ? 1 : 0;

    const nextProgress: GameProgress = {
      ...progress,
      historicalKnowledge: newKnowledge,
      hintsRemaining: progress.hintsRemaining + hintsBonus,
      completedQuestions: updatedQuestions
    };

    nextProgress.achievements = checkAchievements(nextProgress);
    persistProgress(nextProgress);

    // Record question attempt in Firestore for teacher analytics
    if (userProfile?.userId) {
      try {
        addDoc(collection(db, 'questionAttempts'), {
          attemptId: `att_${Date.now()}`,
          userId: userProfile.userId,
          studentName: userProfile.displayName,
          questionId: question.id,
          standardId: question.standardId,
          chapter: question.chapter,
          isCorrect,
          selectedOption: question.options[selectedIndex] || '',
          timestamp: new Date().toISOString(),
          serverTimestamp: serverTimestamp()
        }).catch(e => console.warn('Could not save attempt:', e));
      } catch {
        // silent
      }
    }

    setQuestionResult({
      isCorrect,
      explanation: question.explanation,
      pointsAwarded: points
    });

    return { isCorrect, explanation: question.explanation };
  }, [progress, userProfile, persistProgress, checkAchievements]);

  const useHint = useCallback(() => {
    if (progress.hintsRemaining <= 0 || !activeQuestion) return null;
    const nextProg = {
      ...progress,
      hintsRemaining: progress.hintsRemaining - 1
    };
    persistProgress(nextProg);
    return activeQuestion.hint;
  }, [progress, activeQuestion, persistProgress]);

  // Check if all Chapter 1 crises have been decided
  const isChapter1CrisesComplete = CHAPTER_1_CRISIS_IDS.every(id => 
    progress.completedEvents.includes(id)
  );

  // Check if Chapter 1 Colonial Gazette analysis has been completed
  const isChapter1GazetteComplete = (progress.gazetteCompletedChapters || []).includes(1);

  // Colonial Gazette is strictly locked while in Chapter 1 until all 5 crises are decided
  const isGazetteLocked = progress.currentChapter === 1 && !isChapter1CrisesComplete;

  const completeChapter1Gazette = useCallback(() => {
    const currentList = progress.gazetteCompletedChapters || [];
    if (!currentList.includes(1)) {
      const nextProg: GameProgress = {
        ...progress,
        gazetteCompletedChapters: [...currentList, 1],
        historicalKnowledge: Math.min(100, progress.historicalKnowledge + 8)
      };
      persistProgress(nextProg);
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [progress, persistProgress]);

  const advanceFromChapter1 = useCallback(() => {
    // Both all Chapter 1 crises and the Colonial Gazette must be completed
    if (!isChapter1CrisesComplete || !(progress.gazetteCompletedChapters || []).includes(1)) {
      return false;
    }

    setChapterCompleteModal(true);
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 }
    });

    const nextProg: GameProgress = {
      ...progress,
      currentChapter: 2,
      currentCheckpoint: 1,
      influence: Math.min(100, progress.influence + 5),
      wealth: Math.min(100, progress.wealth + 5)
    };
    persistProgress(nextProg);
    return true;
  }, [isChapter1CrisesComplete, progress, persistProgress]);

  const advanceCheckpoint = useCallback(() => {
    const currentChap = CHAPTERS.find(c => c.number === progress.currentChapter);
    if (!currentChap) return;

    if (progress.currentCheckpoint < currentChap.checkpoints.length) {
      const nextProg: GameProgress = {
        ...progress,
        currentCheckpoint: progress.currentCheckpoint + 1
      };
      persistProgress(nextProg);
    } else {
      // Reached the end of checkpoints for the current chapter
      // Enforce Chapter 1 Rule: Cannot advance to Chapter 2 without completing the Colonial Gazette
      if (progress.currentChapter === 1) {
        if (!(progress.gazetteCompletedChapters || []).includes(1)) {
          // Block advancing to Chapter 2; student must complete Colonial Gazette first
          return;
        }
      }

      // Chapter Complete!
      if (progress.currentChapter < 6) {
        setChapterCompleteModal(true);
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 }
        });
        const nextProg: GameProgress = {
          ...progress,
          currentChapter: progress.currentChapter + 1,
          currentCheckpoint: 1,
          influence: Math.min(100, progress.influence + 5),
          wealth: Math.min(100, progress.wealth + 5)
        };
        persistProgress(nextProg);
      }
    }
  }, [progress, persistProgress]);

  const unlockChapter = useCallback((chapterNum: number) => {
    if (chapterNum < 1 || chapterNum > 6) return;
    const nextProg: GameProgress = {
      ...progress,
      currentChapter: chapterNum,
      currentCheckpoint: 1
    };
    persistProgress(nextProg);
  }, [progress, persistProgress]);

  const resetGame = useCallback(async () => {
    const fresh: GameProgress = {
      userId: userProfile?.userId || 'guest',
      name: userProfile?.displayName || 'Colonist',
      email: userProfile?.email || '',
      currentChapter: 1,
      currentCheckpoint: 1,
      politicalIdentity: 'NEUTRAL',
      patriotScore: 0,
      loyalistScore: 0,
      neutralScore: 0,
      ...DEFAULT_STATS,
      hintsRemaining: 3,
      completedEvents: [],
      completedQuestions: [],
      achievements: [],
      decisionHistory: [],
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString()
    };
    await persistProgress(fresh);
    setActiveEvent(null);
    setActiveQuestion(null);
    setConsequenceFeedback(null);
    setQuestionResult(null);
    setChapterCompleteModal(false);
  }, [userProfile, persistProgress]);

  const saveReflection = useCallback(async (text: string) => {
    const updated: GameProgress = {
      ...progress,
      reflection: text,
      updatedAt: new Date().toISOString()
    };
    await persistProgress(updated);
  }, [progress, persistProgress]);

  return (
    <GameContext.Provider
      value={{
        progress,
        activeEvent,
        activeQuestion,
        activeNewspaper,
        activeSourceDoc,
        selectedColony,
        colonyAlignments,
        consequenceFeedback,
        questionResult,
        chapterCompleteModal,
        unlockedAchievement,
        saving,
        isChapter1CrisesComplete,
        isChapter1GazetteComplete,
        isGazetteLocked,
        completeChapter1Gazette,
        advanceFromChapter1,
        selectColony: setSelectedColony,
        openEvent: setActiveEvent,
        closeEvent: () => setActiveEvent(null),
        makeDecision,
        openQuestion: setActiveQuestion,
        closeQuestion: () => setActiveQuestion(null),
        answerQuestion,
        openNewspaper: setActiveNewspaper,
        openSourceDoc: setActiveSourceDoc,
        useHint,
        dismissConsequenceFeedback: () => setConsequenceFeedback(null),
        dismissQuestionResult: () => setQuestionResult(null),
        dismissChapterComplete: () => setChapterCompleteModal(false),
        advanceCheckpoint,
        unlockChapter,
        resetGame,
        saveReflection
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
