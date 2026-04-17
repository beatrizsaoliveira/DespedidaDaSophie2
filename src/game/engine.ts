// Game engine – answer recording and winner logic

import { Question, Winner } from '../types/index.js';
import { GameState } from './gameState.js';
import { QUESTIONS } from './questions.js';

export class GameEngine {
    private gameState: GameState;

    constructor(gameState: GameState) {
        this.gameState = gameState;
    }

    /** Returns the current question, or null if finished */
    getCurrentQuestion(): Question | null {
        const idx = this.gameState.currentQuestionIndex;
        if (idx >= QUESTIONS.length) return null;
        return QUESTIONS[idx] ?? null;
    }

    /** Records whether the Sophie acertou (true) or errou (false) */
    recordAnswer(acertou: boolean): void {
        const question = this.getCurrentQuestion();
        if (!question) return;
        this.gameState.recordAnswer(question.id, acertou);
    }

    /** Returns the winner after all questions are answered */
    getWinner(): Winner {
        const sophie = this.gameState.sophieScore;
        const bride = this.gameState.teamBrideScore;
        if (sophie > bride) return 'sophie';
        if (bride > sophie) return 'teamBride';
        return 'tie';
    }
}
