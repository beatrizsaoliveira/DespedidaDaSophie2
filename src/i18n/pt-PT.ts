// i18n – Português (Portugal)

import type { Translations } from './types.js';

const CATEGORY_LABELS: Record<string, string> = {
    romanticas: '💕 Fofas & Românticas',
    engracadas: '😂 Engraçadas',
    emocionais: '🥹 Emocionais',
    picantes: '🔥 Levemente Picantes',
};

export const ptPT: Translations = {
    intro: {
        imgAlt: 'Despedida de Solteira da Sophie',
        titlePre: 'Despedida da',
        titleName: 'Sophie',
        subtitle: '18 de Abril · O Nardinho responde! 💍',
        description:
            'A Sophie responde em voz alta — e depois vê a resposta do Nardinho em vídeo. Acertou ou errou? O grupo decide!',
        startAriaLabel: 'Iniciar o quizz',
        startBtn: 'Vamos a isso! 🎬',
    },

    scores: {
        sophieLabel: '💅 Sophie',
        teamBrideLabel: '💒 Team Bride',
        questionCounter: (current, total) => `${current} / ${total}`,
    },

    question: {
        categoryLabel: (cat) => CATEGORY_LABELS[cat] ?? cat,
        counter: (current, total) => `Pergunta ${current} de ${total}`,
        seeAnswerBtn: 'Ver Resposta do Nardinho 🎬',
        seeAnswerAriaLabel: 'Ver a resposta do Nardinho em vídeo',
    },

    video: {
        nowWatching: '🎬 Resposta do Nardinho',
        acertouBtn: '✅ Acertou!',
        errouBtn: '❌ Errou!',
        acertouAriaLabel: 'A Sophie acertou — ponto para a Sophie',
        errouAriaLabel: 'A Sophie errou — ponto para o Team Bride',
        videoError:
            '⚠️ Vídeo não disponível. Coloca o ficheiro na pasta videos/.',
    },

    result: {
        acertouFeedback: '✅ Acertou! Ponto para a Sophie!',
        errouFeedback: '❌ Errou! Ponto para o Team Bride!',
        sophiePoint: '+1 para a Sophie 💅',
        teamBridePoint: '+1 para o Team Bride 💒',
        nextBtn: 'Próxima Pergunta →',
        nextAriaLabel: 'Avançar para a próxima pergunta',
        finishBtn: 'Ver Resultado Final 🏆',
        finishAriaLabel: 'Ver o resultado final do quizz',
    },

    fim: {
        confettiEmoji: '🎉',
        title: 'Fim do Quizz!',
        scoreLabel: 'Pontuação final',
        sophieScoreLabel: '💅 Sophie',
        teamBrideScoreLabel: '💒 Team Bride',
        sophieWinsTitle: '👑 A Sophie ganhou!',
        sophieWinsDesc:
            'A Sophie conhece o Nardinho melhor do que ele pensa! Ela escolhe quantas pessoas quiser do grupo para beber um shot e pagar um mico à escolha dela. 💅🥂',
        teamBrideWinsTitle: '💒 O Team Bride ganhou!',
        teamBrideWinsDesc:
            'O Team Bride conhece o Nardinho melhor do que a Sophie! A Sophie bebe um shot e o grupo escolhe o mico que ela vai pagar. 😈🥂',
        tieTitle: '🤝 Empate!',
        tieDesc:
            'Ninguém ganhou — ou ganharam os dois! Bebem todos um shot e o mico é decidido em conjunto pelo grupo. 🥂',
        resetAriaLabel: 'Recomeçar o quizz',
        resetBtn: '↺ Recomeçar',
    },

    confirm: {
        resetHeader:
            'Tens a certeza de que queres apagar todo o progresso e recomeçar o quizz?',
        okBtn: 'Sim, recomeçar',
        cancelBtn: 'Cancelar',
    },
};
