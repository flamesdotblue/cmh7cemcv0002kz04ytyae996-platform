import React from 'react';
import Header from './components/Header.jsx';
import HeroSpline from './components/HeroSpline.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import AIShowcase from './components/AIShowcase.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Header />

      <main>
        <HeroSpline />

        <section className="relative mx-auto max-w-7xl px-6 pt-16 pb-8">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">AI-first project management</h2>
              <p className="mt-4 text-neutral-300 leading-relaxed">
                Plan sprints, manage backlogs, ship releases. Let AI summarize issues from commits, predict ETAs, recommend assignees, and answer queries like “Show me all tasks in review for Payments.”
              </p>
            </div>
            <div className="lg:col-span-6">
              <FeatureGrid />
            </div>
          </div>
        </section>

        <AIShowcase />
      </main>

      <footer className="border-t border-neutral-800 py-10 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} NovaTrack • AI-powered project management</p>
          <nav className="flex items-center gap-6">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#ai" className="hover:text-white transition">AI</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
