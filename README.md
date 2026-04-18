# 💍 Sophie's Bachelorette — Nardinho's Quiz

> Interactive quiz for Sophie's Bachelorette Party — Nardinho answers on video!

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-live-6b8f5e?logo=github)](https://beatrizsaoliveira.github.io/DespedidaSophie2/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📖 About

**Sophie's Bachelorette — Nardinho's Quiz** is a static site hosted on GitHub Pages. Sophie answers each question about the couple out loud, then watches Nardinho's video response. The group decides if she got it right or wrong — and at the end there are consequences!

**Visual theme:** matcha green · flowers · romance · wedding 💍🌸💕

---

## 🎮 How It Works

### Game flow

| Phase       | Description                                                                        |
| ----------- | ---------------------------------------------------------------------------------- |
| **Question** | A question appears on screen. Sophie answers out loud.                            |
| **Video**   | Click "Watch Nardinho's Answer" and play his video response.                       |
| **Result**  | The group decides: **✅ Correct** (+1 Sophie) or **❌ Wrong** (+1 Team Bride).     |
| **End**     | Final score, winner announced and consequences revealed!                           |

### Scoring & consequences

| Winner           | Consequence                                                                         |
| ---------------- | ----------------------------------------------------------------------------------- |
| **Sophie** 💅    | Picks as many people from the group as she wants to take a shot and do a dare.     |
| **Team Bride** 💒 | Sophie takes a shot and the group picks the dare.                                  |
| **Tie** 🤝       | Everyone takes a shot and the dare is decided together.                             |

### Questions (29 total)

| Category               | No. |
| ---------------------- | --- |
| 💕 Romantic & Cute     | 8   |
| 😂 Funny               | 10  |
| 🥹 Emotional           | 5   |
| 🔥 Mildly Spicy        | 6   |

---

## 🖥️ Screens

| Screen      | Description                                                                          |
| ----------- | ------------------------------------------------------------------------------------ |
| **Intro**   | Cover image, title, description and "Let's go! 🎬" button                           |
| **Question** | Category badge, counter, question text and button to watch the video                |
| **Video**   | Nardinho's video (no native controls) — tap to pause/play, ↺ to replay + Correct / Wrong buttons |
| **Result**  | Immediate feedback, point awarded, updated score — auto-advances after 2.5s  |
| **End**     | Confetti, final scoreboard, winner and consequence message + restart button          |

---

## 🛠️ Tech Stack

| Technology                        | Purpose                                       |
| --------------------------------- | --------------------------------------------- |
| **TypeScript 5.5**                | Typed source code                             |
| **esbuild**                       | Bundler → `public/app.bundle.js`              |
| **Animate.css (CDN)**             | CSS enter/exit animations                     |
| **ESLint 9 + @typescript-eslint** | Code linting                                  |
| **Prettier**                      | Automatic formatting                          |
| **Husky + Commitlint**            | Conventional commit validation                |
| **Vanilla CSS**                   | Design system with CSS custom properties      |
| **localStorage**                  | Progress persistence                          |
| **HTML5 Video**                   | Nardinho's video playback                     |
| **GitHub Pages**                  | Static site hosting                           |

---

## 📁 Project Structure

```
DespedidaSophie2/
├── public/                  # Files served by GitHub Pages
│   ├── index.html           # App entry point + modal markup
│   ├── styles.css           # Full design system (light/dark, responsive)
│   ├── app.bundle.js        # esbuild output — do not edit directly
│   ├── images/
│   │   └── start.jpg        # Cover image for the intro screen
│   └── videos/              # Nardinho's videos (add here)
│       ├── question_01.mp4  # Answer to question 1
│       ├── question_02.mp4  # Answer to question 2
│       └── …                # question_03.mp4 … question_36.mp4
├── src/                     # TypeScript source code
│   ├── main.ts              # Bootstrap: wires all modules, mobile menu
│   ├── types/
│   │   ├── index.ts         # Shared interfaces and types
│   │   └── globals.d.ts     # Ambient global declarations
│   ├── i18n/
│   │   ├── types.ts         # Translations interface contract
│   │   ├── pt-PT.ts         # Active locale — Portuguese (Portugal)
│   │   └── index.ts         # Re-exports active locale as `t`
│   ├── game/
│   │   ├── questions.ts     # 29 questions organised by category (7 unanswered ones commented out)
│   │   ├── gameState.ts     # State manager + localStorage persistence
│   │   └── engine.ts        # Game logic and winner determination
│   └── ui/
│       ├── screen.ts        # Renders all screens (intro, question, video, end)
│       ├── theme.ts         # Light/dark toggle
│       ├── help.ts          # Help modal (how to play)
│       ├── confirm.ts       # Custom confirm dialog
│       └── animations.ts    # Confetti + micro-animations (shake, pulse)
├── .github/
│   └── workflows/
│       └── deploy.yml       # Automatic deploy to GitHub Pages
├── .husky/
│   ├── commit-msg           # commitlint hook
│   └── pre-commit           # Prettier auto-format hook
├── tsconfig.json
├── eslint.config.mjs
├── .prettierrc
├── .commitlintrc.json
├── .gitignore
├── LICENSE                  # MIT
└── package.json
```

---

## 🎬 Adding Videos

Place Nardinho's videos in `public/videos/` with the following names:

```
question_01.mp4   ← How did you realise you were in love with her?
question_02.mp4   ← What was the moment you thought: "She's the one"?
…
question_36.mp4   ← Who is the clingier one?
```

Videos are referenced automatically by the game in question order.

---

## 🚀 Local Development

### Prerequisites

- Node.js ≥ 18 (recommended: v20.x via nvm)
- npm ≥ 10

### Install dependencies

```bash
npm install
```

### Development mode (watch)

```bash
npm run dev
```

Open `public/index.html` directly in the browser. The bundle rebuilds automatically on every change.

### Production build

```bash
npm run build
```

Generates the minified `public/app.bundle.js`.

### Type check

```bash
npm run typecheck
```

### Linting

```bash
npm run lint        # check
npm run lint:fix    # auto-fix
```

### Formatting

```bash
npm run format
```

Runs Prettier over all TypeScript, HTML, and CSS source files.

---

## 📦 Deploy (GitHub Pages)

The repository is configured for automatic deployment from the `main` branch. After making changes:

1. Build: `npm run build`
2. Commit the changes including `public/app.bundle.js`
3. Push to `main`

```bash
npm run build
git add public/app.bundle.js
git commit -m "build: update bundle"
git push origin main
```

The site will be available at: `https://beatrizsaoliveira.github.io/DespedidaSophie2/`

---

## 📝 Conventional Commits

This project uses [Conventional Commits](https://www.conventionalcommits.org/) validated by Husky:

```
feat:     new feature
fix:      bug fix
build:    build system changes
style:    CSS / visual changes
docs:     documentation
refactor: code refactoring
chore:    miscellaneous tasks
```

---

## 📄 License

MIT — see [LICENSE](LICENSE)

---

_With love, your besties 💕_
