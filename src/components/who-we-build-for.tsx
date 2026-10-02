"use client";

import { useState } from "react";
import { ArrowRight, Check, X, ArrowDown } from "lucide-react";

interface Scenario {
  num: string;
  tag: string;
  title: string;
  before: {
    title: string;
    description: string;
    painPoints: string[];
    cost: string;
  };
  after: {
    title: string;
    description: string;
    solutionPoints: string[];
    outcome: string;
  };
}

const scenarios: Scenario[] = [
  {
    num: "01",
    tag: "Trade Contractors · Roofing & HVAC",
    title: "Losing high-ticket after-hours emergency calls to voicemail",
    before: {
      title: "Current Reality: Voicemail & Lost Revenue",
      description:
        "Emergency calls ring at 9:30 PM after a hail storm or cold snap. The call rolls to voicemail. The homeowner hangs up immediately and hires the competitor down the street who answers.",
      painPoints: [
        "35% of high-ticket emergency calls happen after 5:00 PM",
        "Homeowners never leave voicemails during active leaks or freezes",
        "Field crew dispatch must be manually organized via late-night text chains",
      ],
      cost: "Estimated $4,000–$12,000/mo in lost emergency mobilization fees",
    },
    after: {
      title: "CustomCore: 24/7 AI Voice Dispatch Engine",
      description:
        "Low-latency (<1.2s) AI voice receptionist answers every inbound call, qualifies the address and emergency severity, and reserves a calendar slot directly in your dispatch board.",
      solutionPoints: [
        "Instant response on the first ring, 24 hours a day, 365 days a year",
        "Captures address, urgency tier, and baseline mobilization approval",
        "Direct SMS routing sent to on-call technician with GPS coordinates",
      ],
      outcome: "100% call capture · Average 1.2s pick-up · Zero human night-shift cost",
    },
  },
  {
    num: "02",
    tag: "Multi-Crew Field Operations",
    title: "Operations team drowning in spreadsheet copy-pasting",
    before: {
      title: "Current Reality: Fragile Google Sheets & Zapier Glue",
      description:
        "Field crews, estimators, and office admins each maintain separate spreadsheets. Invoices get missed, inventory counts desynchronize, and customers wait days for estimates.",
      painPoints: [
        "12–18 hours/week spent manually re-typing invoice and job data",
        "Spreadsheet formulas break without warning or audit logs",
        "Dispatched crews arrive at job sites with outdated work orders",
      ],
      cost: "Hundreds of admin hours wasted annually on double data entry",
    },
    after: {
      title: "CustomCore: Unified Real-Time Operations Platform",
      description:
        "A centralized web and mobile operations hub connecting field crew schedules, mobile estimates, and two-way QuickBooks ledger sync into a single source of truth.",
      solutionPoints: [
        "Real-time WebSocket dispatch board with live technician status",
        "Instant mobile estimate generator calibrated to your exact formulas",
        "Automated two-way invoice synchronization without re-keying",
      ],
      outcome: "Eliminates 15+ hours/wk of manual admin · 100% ledger accuracy",
    },
  },
  {
    num: "03",
    tag: "High-Scale B2B SaaS",
    title: "A proven startup idea throttled by brittle prototype scripts",
    before: {
      title: "Current Reality: Fragile No-Code Prototype",
      description:
        "Customer demand is proven and prospective clients are ready to onboard. But the MVP is held together with Airtable and Zapier workflows that fail under multi-user concurrency.",
      painPoints: [
        "Airtable rate limits cause silent transaction drops during peak traffic",
        "Zero multi-tenant security or role-based access control (RBAC)",
        "Enterprise buyers reject security questionnaires due to lack of isolation",
      ],
      cost: "Stalled enterprise deals and inability to scale paying seats",
    },
    after: {
      title: "CustomCore: Production Next.js + PostgreSQL Backend",
      description:
        "Engineered production architecture featuring isolated PostgreSQL databases, Stripe billing, Redis queues, and Docker containers with full code ownership handed to you.",
      solutionPoints: [
        "Sub-30ms API gateway latency with Type-Safe Zod validation",
        "Multi-tenant row-level security meeting enterprise compliance standards",
        "Clean, documented TypeScript codebase ready for investor due diligence",
      ],
      outcome: "Full IP ownership · 99.98% availability · Zero technical debt",
    },
  },
  {
    num: "04",
    tag: "Growing Enterprises · $3M–$30M",
    title: "Choked by per-seat SaaS licensing fees that penalize growth",
    before: {
      title: "Current Reality: Exorbitant Per-Seat Rent",
      description:
        "As your company hires more technicians, subcontractors, and support staff, off-the-shelf software vendors bump you into punitive enterprise pricing tiers.",
      painPoints: [
        "$150–$350/user/month adds up to massive recurring overhead",
        "You pay for hundreds of bloated features your team never uses",
        "Your proprietary data is locked inside a third-party vendor's silo",
      ],
      cost: "$50,000–$120,000/year paid forever to SaaS vendors",
    },
    after: {
      title: "CustomCore: 100% Owned Internal Operating System",
      description:
        "A proprietary software asset built around your specific workflow. Add unlimited users and subcontractors with zero license fees forever.",
      solutionPoints: [
        "Zero monthly per-seat licensing penalties as head-count scales",
        "Tailored strictly to your operational workflows and KPIs",
        "The system becomes a balance-sheet asset that increases enterprise value",
      ],
      outcome: "Zero per-seat recurring fees · 100% data sovereignty and ownership",
    },
  },
];

export function WhoWeBuildFor() {
  const [activeTab, setActiveTab] = useState(0);
  const scenario = scenarios[activeTab];

  return (
    <section className="editorial-section relative bg-[#08090D] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="reveal mb-12 md:mb-16 max-w-3xl">
          <span className="eyebrow block mb-4">Target Engagements</span>
          <h2 className="display-lg text-white">
            We solve operational bottlenecks,{" "}
            <span className="text-slate-400">not industry clichés.</span>
          </h2>
          <p className="text-[17px] sm:text-[19px] mt-4 text-slate-300 leading-relaxed">
            Select a scenario to explore the transformation from off-the-shelf friction to custom systems:
          </p>
        </div>

        {/* ── Interactive 01 / 02 / 03 / 04 Selector Tabs ── */}
        <div className="reveal flex flex-wrap gap-2.5 mb-10">
          {scenarios.map((s, idx) => (
            <button
              key={s.num}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-[12px] font-semibold transition-all border ${
                activeTab === idx
                  ? "bg-[#B4F33C] text-[#08090D] border-[#B4F33C] shadow-md font-bold"
                  : "bg-white/[0.03] text-slate-400 border-white/10 hover:text-white hover:bg-white/[0.06]"
              }`}
            >
              <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                activeTab === idx ? "bg-[#08090D] text-[#B4F33C]" : "bg-white/10 text-slate-300"
              }`}>
                {s.num}
              </span>
              <span>{s.tag.split("·")[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* ── Active Transformation Canvas ── */}
        <div className="reveal rounded-2xl bg-[#0B0D14] border border-white/10 shadow-2xl p-6 sm:p-10">
          
          {/* Header of Active Scenario */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-8 border-b border-white/[0.08]">
            <div>
              <span className="font-mono text-[11px] font-bold text-[#B4F33C] tracking-wider uppercase block mb-1">
                {scenario.tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {scenario.title}
              </h3>
            </div>
            <span className="font-mono text-[12px] text-slate-400 shrink-0">
              Scenario {scenario.num} of 04
            </span>
          </div>

          {/* Interactive Before vs After Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* ── BEFORE Box (Friction) ── */}
            <div className="lg:col-span-6 rounded-xl p-6 sm:p-7 bg-[#10121B] border border-red-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="font-mono text-[11px] font-bold tracking-wider text-red-400 uppercase">
                      Before CustomCore
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">Fragile Setup</span>
                </div>

                <h4 className="text-[16px] font-semibold text-white mb-3">
                  {scenario.before.title}
                </h4>

                <p className="text-[14px] leading-relaxed text-slate-300 mb-6">
                  {scenario.before.description}
                </p>

                <ul className="space-y-3">
                  {scenario.before.painPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[13px] text-slate-400">
                      <div className="w-4 h-4 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-2.5 h-2.5 text-red-400" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 font-mono text-[11px] text-red-300/80">
                {scenario.before.cost}
              </div>
            </div>

            {/* ── AFTER Box (Engineered Solution) ── */}
            <div className="lg:col-span-6 rounded-xl p-6 sm:p-7 bg-[#0E1322] border border-[#B4F33C]/40 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B4F33C] animate-pulse" />
                    <span className="font-mono text-[11px] font-bold tracking-wider text-[#B4F33C] uppercase">
                      After CustomCore
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#B4F33C] font-semibold">100% Owned</span>
                </div>

                <h4 className="text-[16px] font-semibold text-white mb-3">
                  {scenario.after.title}
                </h4>

                <p className="text-[14px] leading-relaxed text-slate-300 mb-6">
                  {scenario.after.description}
                </p>

                <ul className="space-y-3">
                  {scenario.after.solutionPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-[13px] text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-[#B4F33C]/15 border border-[#B4F33C]/30 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#B4F33C]" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 font-mono text-[11px] text-[#B4F33C] font-medium">
                {scenario.after.outcome}
              </div>
            </div>

          </div>

          {/* Action Link */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-[13px] text-slate-400">
              Facing this operational bottleneck? We can audit and demo an architecture plan.
            </span>
            <a href="#contact" className="btn-primary text-xs py-2.5">
              <span>Discuss This Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
