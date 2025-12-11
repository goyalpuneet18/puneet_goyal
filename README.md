# Puneet Goyal - Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, and professional background. Built with performance and user experience in mind, featuring smooth animations and an interactive design.


## 🚀 Tech Stack

-   **Frontend Framework:** [React](https://reactjs.org/) (v19)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [SCSS](https://sass-lang.com/) for modular and advanced styling.
-   **Animations:** [Framer Motion](https://www.framer.com/motion/) for complex, declarative animations.
-   **Smooth Scroll:** [Lenis](https://github.com/studio-freight/lenis) for luxurious scrolling experiences.
-   **Deployment:** GitHub Pages

## ✨ Features

-   **Responsive Design:** Fully fluid layout adapting to mobile, tablet, and desktop screens.
-   **Interactive Background:** Custom particle system responding to mouse movement.
-   **Navigation Dock:** Mac-style floating navigation dock for easy access to sections.
-   **Animated Sections:** Scroll-triggered entry animations for all content.
-   **Glassmorphism UI:** Modern frosted glass aesthetic (glassmorphism) throughout the design.
-   **Dynamic Grids:** Fluid grid layouts for projects and skills that auto-adjust without hard breakpoints.

## 🛠️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/goyalpuneet18/puneet_goyal.git
    cd puneet_goyal
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run development server:**
    ```bash
    npm run dev
    ```
    The site will be available at `http://localhost:5173`.

## 📦 Building & Deployment

This project is configured to deploy directly to GitHub Pages.

1.  **Build for production:**
    ```bash
    npm run build
    ```

2.  **Deploy to GitHub Pages:**
    ```bash
    npm run deploy
    ```
    This script builds the project and pushes the `dist` folder to the `gh-pages` branch.

## 📁 Project Structure

```
src/
├── core/               # Core business logic and interfaces
│   ├── application/    # Application services (e.g., BackgroundService, ScrollService)
│   └── domain/         # Domain models and interfaces
├── infrastructure/     # Implementation details (e.g., specific particle logic)
└── presentation/       # UI Components and Styles
    ├── components/     # React components (Hero, About, Projects, etc.)
    └── styles/         # Global SCSS styles
```