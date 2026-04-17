// Game state manager – loads/saves to localStorage

import { QuestionResult, SavedState, Theme } from '../types/index.js';
import { QUESTIONS } from './questions.js';

const STORAGE_KEY = 'despedida_sophie_quizz_v1';
const SCHEMA_VERSION = 1;

function makeDefaultState(): SavedState {
    return {
        version: SCHEMA_VERSION,
        currentQuestionIndex: 0,
        sophieScore: 0,
        teamBrideScore: 0,
        results: [],
        theme: 'light',
        hasStarted: false,
        isFinished: false,
    };
}

export class GameState {
    private state: SavedState;

    constructor() {
        this.state = this.load();
    }

    private load(): SavedState {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return makeDefaultState();
            const parsed = JSON.parse(raw) as SavedState;
            if (parsed.version !== SCHEMA_VERSION) return makeDefaultState();
            return parsed;
        } catch {
            return makeDefaultState();
        }
    }

    save(): void {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        } catch {
            // Storage may be unavailable (e.g. private mode)
        }
    }

    reset(): void {
        localStorage.removeItem(STORAGE_KEY);
        this.state = makeDefaultState();
    }

    // ── Getters ───────────────────────────────────────────────

    get currentQuestionIndex(): number {
        return this.state.currentQuestionIndex;
    }

    get sophieScore(): number {
        return this.state.sophieScore;
    }

    get teamBrideScore(): number {
        return this.state.teamBrideScore;
    }

    get results(): QuestionResult[] {
        return this.state.results;
    }

    get theme(): Theme {
        return this.state.theme;
    }

    get hasStarted(): boolean {
        return this.state.hasStarted;
    }

    get isFinished(): boolean {
        return this.state.isFinished;
    }

    get totalQuestions(): number {
        return QUESTIONS.length;
    }

    // ── Mutations ─────────────────────────────────────────────

    startGame(): void {
        this.state.hasStarted = true;
        this.save();
    }

    recordAnswer(questionId: number, acertou: boolean): void {
        this.state.results.push({ questionId, acertou });
        if (acertou) {
            this.state.sophieScore += 1;
        } else {
            this.state.teamBrideScore += 1;
        }

        const nextIndex = this.state.currentQuestionIndex + 1;
        if (nextIndex >= QUESTIONS.length) {
            this.state.isFinished = true;
        } else {
            this.state.currentQuestionIndex = nextIndex;
        }
        this.save();
    }

    setTheme(theme: Theme): void {
        this.state.theme = theme;
        this.save();
    }
}
