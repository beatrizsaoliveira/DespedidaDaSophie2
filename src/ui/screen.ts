// ============================================================
// Screen manager – renders all quiz screens
// ============================================================

import { GameEngine } from '../game/engine.js';
import { GameState } from '../game/gameState.js';
import { t } from '../i18n/index.js';
import { launchConfetti, pulseElement } from './animations.js';
import { showConfirm } from './confirm.js';

type Phase = 'question' | 'video' | 'result';

export class ScreenManager {
    private gameState: GameState;
    private engine: GameEngine;
    private root: HTMLElement;
    private phase: Phase = 'question';

    constructor(
        gameState: GameState,
        engine: GameEngine,
        rootId = 'game-root'
    ) {
        this.gameState = gameState;
        this.engine = engine;
        const root = document.getElementById(rootId);
        if (!root) throw new Error(`#${rootId} not found`);
        this.root = root;
    }

    render(): void {
        if (!this.gameState.hasStarted) {
            this.renderIntro();
            this.renderScoreBar(false);
            return;
        }
        if (this.gameState.isFinished) {
            this.renderFim();
            this.renderScoreBar(false);
            return;
        }
        this.renderScoreBar(true);
        if (this.phase === 'question') {
            this.renderQuestion();
        } else if (this.phase === 'video') {
            this.renderVideo();
        }
    }

    // ── Score bar ─────────────────────────────────────────────

    private renderScoreBar(show: boolean, questionIndex?: number): void {
        const bar = document.getElementById('progress-bar');
        if (!bar) return;
        if (!show) {
            bar.innerHTML = '';
            return;
        }
        const sophie = this.gameState.sophieScore;
        const bride = this.gameState.teamBrideScore;
        const current =
            (questionIndex ?? this.gameState.currentQuestionIndex) + 1;
        const total = this.gameState.totalQuestions;

        bar.innerHTML = `
      <div class="score-bar">
        <div class="score-team score-team--sophie ${sophie > bride ? 'score-team--leading' : ''}">
          <span class="score-label">${t.scores.sophieLabel}</span>
          <span class="score-value">${sophie}</span>
        </div>
        <div class="score-counter">
          <span class="score-counter-text">${t.scores.questionCounter(current, total)}</span>
        </div>
        <div class="score-team score-team--bride ${bride > sophie ? 'score-team--leading' : ''}">
          <span class="score-label">${t.scores.teamBrideLabel}</span>
          <span class="score-value">${bride}</span>
        </div>
      </div>
    `;
    }

    // ── Intro screen ──────────────────────────────────────────

    private renderIntro(): void {
        this.root.innerHTML = `
      <div class="intro-card fade-in" id="intro-card" role="main">
        <div class="intro-image-wrap">
          <img
            src="images/start.jpg"
            alt="${t.intro.imgAlt}"
            class="intro-image"
            draggable="false"
          />
        </div>
        <div class="intro-body">
          <h2 class="intro-title">
            <span class="intro-title-pre">${t.intro.titlePre}</span>
            <span class="intro-title-name">${t.intro.titleName}</span>
          </h2>
          <p class="intro-subtitle">${t.intro.subtitle}</p>
          <p class="intro-desc">${t.intro.description}</p>
          <button class="btn btn-primary btn-start" id="start-btn" aria-label="${t.intro.startAriaLabel}">
            ${t.intro.startBtn}
          </button>
        </div>
      </div>
    `;
        document.getElementById('start-btn')?.addEventListener('click', () => {
            this.gameState.startGame();
            this.phase = 'question';
            this.render();
        });
    }

    // ── Question screen ───────────────────────────────────────

    private renderQuestion(): void {
        const question = this.engine.getCurrentQuestion();
        if (!question) return;

        const current = this.gameState.currentQuestionIndex + 1;
        const total = this.gameState.totalQuestions;
        const categoryLabel = t.question.categoryLabel(question.category);

        this.root.innerHTML = `
      <div class="quiz-card fade-in" id="quiz-card" role="main">
        <div class="question-header">
          <span class="question-category-badge">${categoryLabel}</span>
          <span class="question-counter">${t.question.counter(current, total)}</span>
        </div>

        <div class="question-body">
          <p class="question-text" id="question-text">${this.escapeHtml(question.text)}</p>
        </div>

        <div class="question-hint">
          <p>A Sophie responde em voz alta — e depois vê a resposta do Nardinho!</p>
        </div>

        <button
          class="btn btn-primary btn-see-answer"
          id="see-answer-btn"
          aria-label="${t.question.seeAnswerAriaLabel}"
        >
          ${t.question.seeAnswerBtn}
        </button>
      </div>
    `;

        document
            .getElementById('see-answer-btn')
            ?.addEventListener('click', () => {
                this.phase = 'video';
                this.render();
            });
    }

    // ── Video screen ──────────────────────────────────────────

    private renderVideo(): void {
        const question = this.engine.getCurrentQuestion();
        if (!question) return;

        const current = this.gameState.currentQuestionIndex + 1;
        const total = this.gameState.totalQuestions;
        const categoryLabel = t.question.categoryLabel(question.category);

        this.root.innerHTML = `
      <div class="quiz-card fade-in" id="quiz-card" role="main">
        <div class="question-header">
          <span class="question-category-badge">${categoryLabel}</span>
          <span class="question-counter">${t.question.counter(current, total)}</span>
        </div>

        <p class="question-text question-text--small">${this.escapeHtml(question.text)}</p>

        <div class="video-section">
          <p class="video-label">${t.video.nowWatching}</p>
          <div class="video-wrap" id="video-wrap">
            <video
              id="quiz-video"
              class="quiz-video"
              playsinline
              preload="metadata"
              aria-label="Resposta do Nardinho"
            >
              <source src="${this.escapeHtml(question.videoSrc)}" type="video/mp4" />
              ${t.video.videoError}
            </video>
            <button class="video-overlay-btn" id="video-overlay-btn" data-state="hidden" aria-label="Reproduzir vídeo">
              <span class="video-overlay-icon" id="video-overlay-icon"></span>
            </button>
            <div class="video-error-msg" id="video-error-msg" hidden>
              <span>${t.video.videoError}</span>
            </div>
          </div>
        </div>

        <div class="result-actions" id="result-actions">
          <p class="result-question">A Sophie acertou?</p>
          <div class="result-buttons">
            <button
              class="btn btn-acertou"
              id="btn-acertou"
              aria-label="${t.video.acertouAriaLabel}"
            >
              ${t.video.acertouBtn}
            </button>
            <button
              class="btn btn-errou"
              id="btn-errou"
              aria-label="${t.video.errouAriaLabel}"
            >
              ${t.video.errouBtn}
            </button>
          </div>
        </div>

        <div class="result-feedback fade-in" id="result-feedback" hidden>
          <p class="result-feedback-text" id="result-feedback-text"></p>
          <p class="result-point-text" id="result-point-text"></p>
        </div>
      </div>
    `;

        this.bindVideoEvents();
    }

    private bindVideoEvents(): void {
        const video = document.getElementById(
            'quiz-video'
        ) as HTMLVideoElement | null;
        const errorMsg = document.getElementById('video-error-msg');
        const overlayBtn = document.getElementById(
            'video-overlay-btn'
        ) as HTMLButtonElement | null;
        const overlayIcon = document.getElementById('video-overlay-icon');

        if (!video || !errorMsg) return;

        const setOverlay = (
            icon: string,
            state: 'visible' | 'flash' | 'hidden'
        ) => {
            if (!overlayIcon || !overlayBtn) return;
            overlayIcon.textContent = icon;
            overlayBtn.dataset.state = state;
        };

        video.addEventListener('error', () => {
            video.hidden = true;
            if (overlayBtn) overlayBtn.hidden = true;
            errorMsg.hidden = false;
        });

        video.addEventListener('play', () => {
            setOverlay('', 'hidden');
        });

        video.addEventListener('ended', () => {
            setOverlay('↺', 'visible');
            if (overlayBtn)
                overlayBtn.setAttribute('aria-label', 'Repetir vídeo');
        });

        overlayBtn?.addEventListener('click', () => {
            if (video.ended) {
                video.currentTime = 0;
                video.play().catch(() => {});
            } else if (video.paused) {
                video.play().catch(() => {});
            } else {
                video.pause();
                setOverlay('⏸', 'flash');
                if (overlayBtn)
                    overlayBtn.setAttribute('aria-label', 'Reproduzir vídeo');
                setTimeout(() => {
                    if (video.paused && !video.ended) {
                        setOverlay('▶', 'visible');
                    }
                }, 600);
            }
        });

        // No autoplay — always start with the play button visible
        setOverlay('▶', 'visible');

        const btnAcertou = document.getElementById('btn-acertou');
        const btnErrou = document.getElementById('btn-errou');

        btnAcertou?.addEventListener('click', () => this.handleAnswer(true));
        btnErrou?.addEventListener('click', () => this.handleAnswer(false));
    }

    private handleAnswer(acertou: boolean): void {
        const resultActions = document.getElementById('result-actions');
        const resultFeedback = document.getElementById('result-feedback');
        const feedbackText = document.getElementById('result-feedback-text');
        const pointText = document.getElementById('result-point-text');
        const btnAcertou = document.getElementById(
            'btn-acertou'
        ) as HTMLButtonElement | null;
        const btnErrou = document.getElementById(
            'btn-errou'
        ) as HTMLButtonElement | null;

        if (!resultActions || !resultFeedback || !feedbackText || !pointText)
            return;

        // Disable both buttons immediately to prevent double-clicks
        if (btnAcertou) btnAcertou.disabled = true;
        if (btnErrou) btnErrou.disabled = true;

        // Capture index before recordAnswer increments it
        const questionIndex = this.gameState.currentQuestionIndex;

        // Record the answer
        this.engine.recordAnswer(acertou);

        // Keep buttons visible but disabled; show feedback
        resultFeedback.hidden = false;

        feedbackText.textContent = acertou
            ? t.result.acertouFeedback
            : t.result.errouFeedback;
        feedbackText.className = `result-feedback-text ${acertou ? 'result-feedback-text--acertou' : 'result-feedback-text--errou'}`;
        pointText.textContent = acertou
            ? t.result.sophiePoint
            : t.result.teamBridePoint;

        // Update scores but keep the counter on the current question
        this.renderScoreBar(true, questionIndex);

        // Pulse the card
        const card = document.getElementById('quiz-card');
        if (card) pulseElement(card);

        if (acertou) {
            launchConfetti(2500);
        }

        // Auto-advance after showing feedback
        setTimeout(() => {
            this.phase = 'question';
            this.render();
        }, 2500);
    }

    // ── Final screen ──────────────────────────────────────────

    private renderFim(): void {
        const sophieScore = this.gameState.sophieScore;
        const brideScore = this.gameState.teamBrideScore;
        const winner = this.engine.getWinner();

        const winnerTitle =
            winner === 'sophie'
                ? t.fim.sophieWinsTitle
                : winner === 'teamBride'
                  ? t.fim.teamBrideWinsTitle
                  : t.fim.tieTitle;

        const winnerDesc =
            winner === 'sophie'
                ? t.fim.sophieWinsDesc
                : winner === 'teamBride'
                  ? t.fim.teamBrideWinsDesc
                  : t.fim.tieDesc;

        const winnerClass =
            winner === 'sophie'
                ? 'winner-sophie'
                : winner === 'teamBride'
                  ? 'winner-bride'
                  : 'winner-tie';

        this.root.innerHTML = `
      <div class="fim-card fade-in" id="fim-card" role="main">
        <div class="fim-confetti-text">${t.fim.confettiEmoji}</div>
        <h2 class="fim-title">${t.fim.title}</h2>

        <div class="fim-scores">
          <div class="fim-score-block fim-score-block--sophie ${winner === 'sophie' ? 'fim-score-block--winner' : ''}">
            <span class="fim-score-name">${t.fim.sophieScoreLabel}</span>
            <span class="fim-score-value">${sophieScore}</span>
          </div>
          <span class="fim-score-vs">vs</span>
          <div class="fim-score-block fim-score-block--bride ${winner === 'teamBride' ? 'fim-score-block--winner' : ''}">
            <span class="fim-score-name">${t.fim.teamBrideScoreLabel}</span>
            <span class="fim-score-value">${brideScore}</span>
          </div>
        </div>

        <div class="fim-winner ${winnerClass}">
          <h3 class="fim-winner-title">${winnerTitle}</h3>
          <p class="fim-winner-desc">${winnerDesc}</p>
        </div>

        <button
          class="btn btn-outline btn-reset"
          id="reset-btn"
          aria-label="${t.fim.resetAriaLabel}"
        >
          ${t.fim.resetBtn}
        </button>
      </div>
    `;

        launchConfetti(6000);
        this.bindFimActions();
    }

    private bindFimActions(): void {
        const resetBtn = document.getElementById('reset-btn');
        resetBtn?.addEventListener('click', () => {
            void showConfirm(t.confirm.resetHeader).then((ok) => {
                if (ok) {
                    this.gameState.reset();
                    this.phase = 'question';
                    this.render();
                }
            });
        });
    }

    // ── Utilities ─────────────────────────────────────────────

    /** Escapes user-facing text before injecting into innerHTML */
    private escapeHtml(text: string): string {
        return text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
}
