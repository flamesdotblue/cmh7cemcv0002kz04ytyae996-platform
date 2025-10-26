import React from 'react';
import { Shield, Database, GitBranch, Slack, Settings } from 'lucide-react';

const features = [
  {
    icon: <Settings size={18} />, title: 'Workflow engine',
    desc: 'Custom states, guards, and automation triggers with notifications.'
  },
  {
    icon: <GitBranch size={18} />, title: 'Code-aware issues',
    desc: 'Link commits and PRs, auto-create issues from webhooks, smart references.'
  },
  {
    icon: <Slack size={18} />, title: 'Team comms',
    desc: 'Slack + email alerts for transitions, reviews, and release notes.'
  },
  {
    icon: <Database size={18} />, title: 'Search & analytics',
    desc: 'Elasticsearch-powered global search, burndown, and velocity insights.'
  },
  {
    icon: <Shield size={18} />, title: 'Enterprise-grade security',
    desc: 'RBAC, SSO, JWT, audit logs, rate limiting, and encrypted storage.'
  },
];

export default function FeatureGrid() {
  return (
    <div id="features" className="grid sm:grid-cols-2 gap-4">
      {features.map((f, i) => (
        <div key={i} className="group relative rounded-xl border border-neutral-800 bg-neutral-900/30 p-5 hover:border-neutral-700 transition">
          <div className="flex items-start gap-4">
            <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-600/20 via-violet-600/20 to-blue-600/20 border border-neutral-800 text-white">
              {f.icon}
            </div>
            <div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-300 leading-relaxed">{f.desc}</p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-tr from-fuchsia-500/0 via-transparent to-blue-500/0 group-hover:from-fuchsia-500/5 group-hover:to-blue-500/5" />
        </div>
      ))}
    </div>
  );
}
