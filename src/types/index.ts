// Shared TypeScript types & enums for the Despedida da Sophie — Quizz

export type Theme = 'light' | 'dark';
export type CategoryKey =
    | 'romanticas'
    | 'engracadas'
    | 'emocionais'
    | 'picantes';
export type Winner = 'sophie' | 'teamBride';

export interface Question {
    id: number;
    category: CategoryKey;
    text: string;
    /** Placeholder path – e.g. "videos/question_01.mp4". Replace with the real file. */
    videoSrc: string;
}

export interface QuestionResult {
    questionId: number;
    /** true = Sophie acertou (Sophie +1), false = errou (Team Bride +1) */
    acertou: boolean;
}

export interface SavedState {
    /** Schema version for future migrations */
    version: number;
    currentQuestionIndex: number;
    sophieScore: number;
    teamBrideScore: number;
    results: QuestionResult[];
    theme: Theme;
    hasStarted: boolean;
    isFinished: boolean;
}
