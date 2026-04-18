// i18n – Translation contract for DespedidaSophie2

import type { CategoryKey } from '../types/index.js';

export interface Translations {
    intro: {
        imgAlt: string;
        titlePre: string;
        titleName: string;
        subtitle: string;
        description: string;
        startAriaLabel: string;
        startBtn: string;
    };
    scores: {
        sophieLabel: string;
        teamBrideLabel: string;
        questionCounter: (current: number, total: number) => string;
    };
    question: {
        categoryLabel: (cat: CategoryKey) => string;
        counter: (current: number, total: number) => string;
        seeAnswerBtn: string;
        seeAnswerAriaLabel: string;
    };
    video: {
        nowWatching: string;
        acertouBtn: string;
        errouBtn: string;
        acertouAriaLabel: string;
        errouAriaLabel: string;
        videoError: string;
    };
    result: {
        acertouFeedback: string;
        errouFeedback: string;
        sophiePoint: string;
        teamBridePoint: string;
        nextBtn: string;
        nextAriaLabel: string;
        finishBtn: string;
        finishAriaLabel: string;
    };
    fim: {
        confettiEmoji: string;
        title: string;
        scoreLabel: string;
        sophieScoreLabel: string;
        teamBrideScoreLabel: string;
        sophieWinsTitle: string;
        sophieWinsDesc: string;
        teamBrideWinsTitle: string;
        teamBrideWinsDesc: string;
        tieTitle: string; // kept for safety — not reachable with 29 questions
        tieDesc: string;
        resetAriaLabel: string;
        resetBtn: string;
    };
    confirm: {
        resetHeader: string;
        okBtn: string;
        cancelBtn: string;
    };
}
