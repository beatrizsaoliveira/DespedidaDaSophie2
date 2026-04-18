// All quiz questions for Despedida da Sophie — Quizz do Nardinho
// Videos: place files named question_01.mp4 … question_36.mp4 in public/videos/

import { Question } from '../types/index.js';

export const QUESTIONS: Question[] = [
    // ──────────────────────────────────────────────────────────
    // 💕 Fofas e românticas
    // ──────────────────────────────────────────────────────────
    {
        id: 1,
        category: 'romanticas',
        text: 'Como percebeste que estavas apaixonado por ela?',
        videoSrc: 'videos/question_01.mp4',
    },
    {
        id: 2,
        category: 'romanticas',
        text: 'Qual foi o momento em que pensaste: "É ela"?',
        videoSrc: 'videos/question_02.mp4',
    },
    {
        id: 3,
        category: 'romanticas',
        text: 'O que mais admiras nela?',
        videoSrc: 'videos/question_03.mp4',
    },
    {
        id: 4,
        category: 'romanticas',
        text: 'Qual foi o encontro favorito de vocês?',
        videoSrc: 'videos/question_04.mp4',
    },
    {
        id: 5,
        category: 'romanticas',
        text: 'O que ela faz que te deixa sempre feliz?',
        videoSrc: 'videos/question_05.mp4',
    },
    {
        id: 6,
        category: 'romanticas',
        text: 'Se pudesses descrevê-la numa palavra, qual seria?',
        videoSrc: 'videos/question_06.mp4',
    },
    // Question not answered.
    // {
    //     id: 7,
    //     category: 'romanticas',
    //     text: 'Qual foi o primeiro pensamento quando a viste pela primeira vez?',
    //     videoSrc: 'videos/question_07.mp4',
    // },
    {
        id: 8,
        category: 'romanticas',
        text: 'O que mais amas na personalidade dela?',
        videoSrc: 'videos/question_08.mp4',
    },
    {
        id: 9,
        category: 'romanticas',
        text: 'Como imaginas os dois daqui a 10 anos?',
        videoSrc: 'videos/question_09.mp4',
    },
    // Question not answered.
    // {
    //     id: 10,
    //     category: 'romanticas',
    //     text: 'O que te faz ter a certeza de que queres casar com ela?',
    //     videoSrc: 'videos/question_10.mp4',
    // },

    // ──────────────────────────────────────────────────────────
    // 😂 Engraçadas
    // ──────────────────────────────────────────────────────────
    {
        id: 11,
        category: 'engracadas',
        text: 'Quem pediu quem em namoro — e como foi?',
        videoSrc: 'videos/question_11.mp4',
    },
    {
        id: 12,
        category: 'engracadas',
        text: 'Quem é mais teimoso?',
        videoSrc: 'videos/question_12.mp4',
    },
    {
        id: 13,
        category: 'engracadas',
        text: 'Quem demora mais a arranjar-se?',
        videoSrc: 'videos/question_13.mp4',
    },
    {
        id: 14,
        category: 'engracadas',
        text: 'Quem pede desculpa primeiro?',
        videoSrc: 'videos/question_14.mp4',
    },
    {
        id: 15,
        category: 'engracadas',
        text: 'Quem é mais ciumento?',
        videoSrc: 'videos/question_15.mp4',
    },
    {
        id: 16,
        category: 'engracadas',
        text: 'Quem gasta mais dinheiro?',
        videoSrc: 'videos/question_16.mp4',
    },
    {
        id: 17,
        category: 'engracadas',
        text: 'Quem cozinha melhor?',
        videoSrc: 'videos/question_17.mp4',
    },
    {
        id: 18,
        category: 'engracadas',
        text: 'Quem ressona mais? 😂',
        videoSrc: 'videos/question_18.mp4',
    },
    {
        id: 19,
        category: 'engracadas',
        text: 'Qual foi a maior "discussão" de vocês?',
        videoSrc: 'videos/question_19.mp4',
    },
    {
        id: 20,
        category: 'engracadas',
        text: 'Quem é mais dramático?',
        videoSrc: 'videos/question_20.mp4',
    },
    // Question not answered.
    // {
    //     id: 21,
    //     category: 'engracadas',
    //     text: 'Quem manda na relação? 👀',
    //     videoSrc: 'videos/question_21.mp4',
    // },

    // ──────────────────────────────────────────────────────────
    // 🥹 Emocionais
    // ──────────────────────────────────────────────────────────
    {
        id: 22,
        category: 'emocionais',
        text: 'Qual foi o momento mais difícil que passaram juntos?',
        videoSrc: 'videos/question_22.mp4',
    },
    {
        id: 23,
        category: 'emocionais',
        text: 'O que aprendeste com ela?',
        videoSrc: 'videos/question_23.mp4',
    },
    // Question not answered.
    // {
    //     id: 24,
    //     category: 'emocionais',
    //     text: 'O que ela te ensinou sobre o amor?',
    //     videoSrc: 'videos/question_24.mp4',
    // },
    {
        id: 25,
        category: 'emocionais',
        text: 'Qual foi o momento mais feliz da relação até hoje?',
        videoSrc: 'videos/question_25.mp4',
    },
    {
        id: 26,
        category: 'emocionais',
        text: 'O que dirias a ela no altar (resumo)?',
        videoSrc: 'videos/question_26.mp4',
    },
    {
        id: 27,
        category: 'emocionais',
        text: 'O que mais admiras na forma como ela cuida das pessoas?',
        videoSrc: 'videos/question_27.mp4',
    },
    // Question not answered.
    // {
    //     id: 28,
    //     category: 'emocionais',
    //     text: 'O que sentes quando imaginas o casamento?',
    //     videoSrc: 'videos/question_28.mp4',
    // },

    // ──────────────────────────────────────────────────────────
    // 🔥 Levemente picantes
    // ──────────────────────────────────────────────────────────
    {
        id: 29,
        category: 'picantes',
        text: 'Quem deu o primeiro beijo?',
        videoSrc: 'videos/question_29.mp4',
    },
    {
        id: 30,
        category: 'picantes',
        text: 'Onde foi o primeiro beijo?',
        videoSrc: 'videos/question_30.mp4',
    },
    {
        id: 31,
        category: 'picantes',
        text: 'Quem se apaixonou primeiro?',
        videoSrc: 'videos/question_31.mp4',
    },
    {
        id: 32,
        category: 'picantes',
        text: 'Quem tomou mais iniciativa no início?',
        videoSrc: 'videos/question_32.mp4',
    },
    // Question not answered.
    // {
    //     id: 33,
    //     category: 'picantes',
    //     text: 'Qual foi o momento mais "inesquecível" só de vocês? 👀',
    //     videoSrc: 'videos/question_33.mp4',
    // },
    {
        id: 34,
        category: 'picantes',
        text: 'Quem é mais carinhoso?',
        videoSrc: 'videos/question_34.mp4',
    },
    {
        id: 35,
        category: 'picantes',
        text: 'Quem faz mais surpresas?',
        videoSrc: 'videos/question_35.mp4',
    },
    // Question not answered.
    // {
    //     id: 36,
    //     category: 'picantes',
    //     text: 'Quem é mais "grudinho"?',
    //     videoSrc: 'videos/question_36.mp4',
    // },
];

export const TOTAL_QUESTIONS = QUESTIONS.length;
