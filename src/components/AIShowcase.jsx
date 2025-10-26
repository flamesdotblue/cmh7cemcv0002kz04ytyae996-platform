import React, { useState } from 'react';
import { Bot, User, Clock, CheckCircle } from 'lucide-react';

export default function AIShowcase() {
  const [bugText, setBugText] = useState(
    'Payments: 500 on /charge when amount has decimals. Steps: create card, submit 12.34. Expected: 200 and capture. Actual: 500 with stacktrace in AmountParser. Logs show float to int conversion.'
  );

  const generated = generateSummary(bugText);

  return (
    <section id="ai" className="relative py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Built‑in AI assistants</h2>
            <p className="mt-3 text-neutral-300">Summaries from commits and bug reports, assignee suggestions, and deadline predictions.</p>
          </div>
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <div className="inline-flex items-center gap-2"><CheckCircle className="text-green-400" size={14} /> Private by default</div>
            <div className="inline-flex items-center gap-2"><Clock className="text-amber-400" size={14} /> Sub‑second UX</div>
          </div>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-4">
            <label className="text-sm text-neutral-400">Paste a commit message or bug report</label>
            <textarea
              value={bugText}
              onChange={(e) => setBugText(e.target.value)}
              className="mt-2 w-full h-44 resize-none rounded-md border border-neutral-800 bg-neutral-950/60 focus:outline-none focus:ring-2 focus:ring-fuchsia-600 px-3 py-2 text-sm"
            />
            <div className="mt-3 text-right">
              <button className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-200 transition">
                <Bot size={16} /> Generate summary
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900/30 p-4">
            <div className="text-sm text-neutral-400">AI output</div>
            <div className="mt-3 grid gap-4">
              <div>
                <div className="text-xs uppercase tracking-wide text-neutral-400">Title</div>
                <div className="mt-1 font-semibold">{generated.title}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-neutral-400">Description</div>
                <p className="mt-1 text-neutral-200 leading-relaxed">{generated.description}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-neutral-800 p-3">
                  <div className="text-xs text-neutral-400">Recommended Assignee</div>
                  <div className="mt-1 inline-flex items-center gap-2">
                    <User size={16} className="text-fuchsia-400" /> <span className="font-medium">Alice (Payments)</span>
                  </div>
                </div>
                <div className="rounded-lg border border-neutral-800 p-3">
                  <div className="text-xs text-neutral-400">Predicted ETA</div>
                  <div className="mt-1 font-medium">8–12 hours</div>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-800 p-3">
                <div className="text-xs text-neutral-400">Reproduction Steps</div>
                <ol className="mt-1 list-decimal list-inside space-y-1 text-neutral-200">
                  {generated.reproduction_steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function generateSummary(text) {
  const title = '500 error on decimal amounts in Payments /charge';
  const description = 'Requests to /charge fail with a 500 when amount has decimals (e.g., 12.34). Likely caused by float-to-int conversion in AmountParser. Fix by preserving cents as integers and adding validation tests.';
  const reproduction_steps = [
    'Create a test card and authorize',
    'POST /charge with amount=12.34',
    'Observe 500 and stacktrace in AmountParser',
  ];

  if (!text || text.length < 40) {
    return { title: 'Issue summary', description: 'Enter a detailed commit or bug report on the left to preview an AI-generated summary, assignee, and ETA.', reproduction_steps: ['Add details to generate output'] };
  }

  return { title, description, reproduction_steps };
}
