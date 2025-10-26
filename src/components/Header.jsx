import React from 'react';
import { Rocket, Github, Slack, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-fuchsia-500 via-violet-500 to-blue-500 shadow-lg shadow-fuchsia-500/20">
            <Rocket size={18} />
          </span>
          <span className="text-lg font-semibold tracking-tight group-hover:opacity-90">NovaTrack</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#ai" className="hover:text-white transition">AI</a>
          <a href="#workflows" className="hover:text-white transition">Workflows</a>
          <a href="#integrations" className="hover:text-white transition">Integrations</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#integrations"
            className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900 transition"
            title="Integrations"
          >
            <Github size={16} />
            <Slack size={16} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition"
          >
            <Settings size={16} />
            Launch App
          </a>
        </div>
      </div>
    </header>
  );
}
