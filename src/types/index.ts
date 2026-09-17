export type PoliticalIdentity = 
  | 'PATRIOT' 
  | 'LEANING PATRIOT' 
  | 'NEUTRAL' 
  | 'LEANING LOYALIST' 
  | 'LOYALIST';

export type ColonialRegion = 'new_england' | 'middle' | 'southern';
export type ColonyRegion = ColonialRegion;

export interface PlayerStats {
  influence: number;
  wealth: number;
  colonialSupport: number;
  britishRelations: number;
  historicalKnowledge: number;
}

export interface DecisionHistoryItem {
  id: string;
  year: number;
  eventId: string;
  eventTitle: string;
  choiceText: string;
  alignmentImpact: 'patriot' | 'loyalist' | 'neutral';
  consequenceSummary: string;
  timestamp: number;
}

export interface GameProgress {
  userId: string;
  name: string;
  email: string;
  currentChapter: number;
  currentCheckpoint: number;
  politicalIdentity: PoliticalIdentity;
  patriotScore: number;
  loyalistScore: number;
  neutralScore: number;
  influence: number;
  wealth: number;
  colonialSupport: number;
  britishRelations: number;
  historicalKnowledge: number;
  hintsRemaining: number;
  completedEvents: string[];
  completedQuestions: string[];
  achievements: string[];
  decisionHistory: DecisionHistoryItem[];
  gazetteCompletedChapters?: number[];
  reflection?: string;
  classCode?: string;
  studentCode?: string;
  isAnonymous?: boolean;
  updatedAt: string;
  createdAt: string;
}

export type UserRole = 'student' | 'teacher' | 'admin';

export interface UserProfile {
  userId: string;
  email: string;
  displayName: string;
  role: UserRole;
  classCode?: string;
  studentCode?: string;
  isAnonymous?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface EventOption {
  id: string;
  text: string;
  alignment: 'patriot' | 'loyalist' | 'neutral';
  patriotDelta: number;
  loyalistDelta: number;
  neutralDelta: number;
  statChanges: Partial<PlayerStats>;
  immediateConsequence: string;
  delayedConsequenceNote?: string;
  tradeOff?: string;
}

export interface HistoricalEvent {
  id: string;
  chapter: number;
  checkpoint: number;
  year: number;
  dateString: string;
  location: string;
  colonyId: string;
  role: string;
  title: string;
  historicalContext: string;
  narrative: string;
  description?: string;
  primarySourceText?: string;
  primarySourceAuthor?: string;
  options: EventOption[];
  curriculumTags: string[];
  standardId: string;
  followUpQuestionId?: string;
}

export type QuestionType = 
  | 'multiple_choice' 
  | 'primary_source' 
  | 'secondary_source' 
  | 'map' 
  | 'chronology' 
  | 'cause_effect' 
  | 'perspective' 
  | 'decision';

export interface Question {
  id: string;
  chapter: number;
  year: string | number;
  topic: string;
  standardId: string;
  elaStandardId?: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  questionType: QuestionType;
  prompt: string;
  sourceExcerpt?: {
    title: string;
    author: string;
    date: string;
    text: string;
    citation?: string;
  };
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  hint: string;
  active?: boolean;
}

export interface QuestionAttempt {
  attemptId: string;
  userId: string;
  studentName: string;
  questionId: string;
  standardId: string;
  chapter: number;
  isCorrect: boolean;
  selectedOption: string;
  timestamp: string;
}

export interface Colony {
  id: string;
  name: string;
  abbreviation: string;
  region: ColonialRegion;
  keyConcepts: string[];
  majorFigures: string[];
  patriotSupport: number; // 0-100 base
  loyalistSupport: number;
  neutralSupport: number;
  economicFocus: string;
  description: string;
  svgPath: string;
  capital: string;
  majorPort?: string;
  economicBasis?: string;
  keyLocations?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'knowledge' | 'alignment' | 'influence' | 'sources' | 'campaign';
}

export interface OhioStandard {
  id: string;
  code: string;
  title: string;
  description: string;
  strand: string;
  testedInChapters: number[];
}

export interface ChapterInfo {
  id?: string;
  number: number;
  title: string;
  timePeriod: string;
  summary: string;
  description?: string;
  yearStart?: number;
  yearEnd?: number;
  learningGoals: string[];
  checkpoints: {
    id: number;
    title: string;
    description: string;
    eventId: string;
    questionId: string;
  }[];
}

export interface CustomQuestion {
  id?: string;
  teacherId: string;
  standardId: string;
  chapter: number;
  year: number;
  topic: string;
  difficulty: number;
  questionType: QuestionType;
  prompt: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  hint: string;
  isApproved: boolean;
  createdAt: string;
}

export interface NewspaperArticle {
  id: string;
  paperName: string;
  editionDate: string;
  headline: string;
  subtitle: string;
  location: string;
  articleText: string;
  perspective: 'Patriot' | 'Loyalist' | 'Crown Authority';
  analysisQuestions: Question[];
}

export interface PrimarySourceDoc {
  id: string;
  title: string;
  author: string;
  date: string;
  category: 'speech' | 'newspaper' | 'law' | 'letter' | 'pamphlet' | 'declaration';
  originalText: string;
  simplifiedText: string;
  historicalSignificance: string;
}

export interface ClassRoom {
  classId: string;
  name: string;
  teacherId: string;
  teacherName: string;
  code: string;
  createdAt: string;
}

export interface ClassroomStats {
  classCode: string;
  colonyStats: Record<string, { patriot: number; loyalist: number; neutral: number; count: number }>;
  totalDecisions: number;
  updatedAt: string;
}
