"use client";

import PortfolioCarousel from "../components/PortfolioCarousel";

const PROJECTS = [
  {
    title: "Hangman Game",
    href: "https://lyuk523137.github.io/Hangman/",
    image: "./previews/Hangman.png", // put your static thumbnail in /public/previews
    tech: ["Vite.js", "Tailwind"],
  },
  {
    title: "First Portfolio",
    href: "https://lyuk523137.github.io/Final_Project/",
    image: "./previews/FirstApp.png",
    tech: ["Sass", "Css", "HTML", "JavaScript"],
  },
  {
    title: "Weather App",
    href: "https://lyuk523137.github.io/my-weather/",
    image: "./previews/Weather.png",
    tech: ["React", "API"],
  },
  {
    title: "Music School",
    href: "https://lyuk523137.github.io/Franc/",
    image: "./previews/Franc.png",
    tech: ["Vite", "React"],
  },
];
// const Portfolio = () => {
//     return <div className="">PortfolioPage</div>;
// };

// export default Portfolio;
// // app/portfolio/page.tsx

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        <header className="mb-10">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <p className="text-neutral-300 mt-2">
            Swipe or use the arrows. Click a card to open the live site.
          </p>
        </header>

        <PortfolioCarousel items={PROJECTS} />
      </section>
    </main>
  );
}
