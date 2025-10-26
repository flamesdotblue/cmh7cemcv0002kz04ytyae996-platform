import React from 'react';
import Spline from '@splinetool/react-spline';
import { CheckCircle, GitBranch, Clock, Bot } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] rounded-full bg-gradient-to-r from-fuchsia-600/20 via-purple-600/10 to-blue-600/20 blur-3xl pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-14 pb-10 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Ship faster with an AI‑powered Jira alternative
          </h1>
          <p className="mt-5 text-neutral-300 text-lg md:text-xl leading-relaxed">
            Backlogs, sprints, workflows, and releases—supercharged with on-device intelligence and cloud AI: auto‑summaries, deadline predictions, smart assignees, and a built‑in chatbot.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <li className="flex items-center gap-3"><CheckCircle className="text-green-400" size={18} /> Custom workflows & automation</li>
            <li className="flex items-center gap-3"><GitBranch className="text-blue-400" size={18} /> GitHub & GitLab integrations</li>
            <li className="flex items-center gap-3"><Clock className="text-amber-400" size={18} /> ETA prediction & workload balance</li>
            <li className="flex items-center gap-3"><Bot className="text-fuchsia-400" size={18} /> Natural language project queries</li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#ai" className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-5 py-3 font-medium hover:bg-neutral-200 transition">Try AI demo</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md border border-neutral-800 px-5 py-3 font-medium text-white hover:bg-neutral-900 transition">Explore features</a>
          </div>
        </div>

        <div className="relative h-[420px] w-full rounded-xl border border-neutral-800 bg-neutral-900/30 overflow-hidden">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-neutral-950/20" />
        </div>
      </div>
    </section>
  );
}
