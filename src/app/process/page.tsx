import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Calendar,
  Search,
  Layers,
  Code2,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Process | CustomCoreAI — Predictable 5-Phase Delivery",
  description:
    "From discovery to production deployment in 6–12 weeks. CustomCoreAI's 5-phase engineering process is designed for zero surprises and complete transparency.",
};

const phases = [
  {
    number: "01",
    icon: Search,
    name: "Discovery & Audit",
    duration: "Week 1",
    description:
      "We begin with a structured 90-minute audit of your existing stack, workflows, and bottlenecks. We map where money is leaking, where staff time is wasted, and what a custom system could reclaim.",
    deliverables: [
      "Operations Bottleneck Map",
      "Current Tool & Integration Inventory",
      "Automation Opportunity Report",
      "Rough ROI Projection",
    ],
  },
  {
    number: "02",
    icon: Layers,
    name: "Architecture Design",
    duration: "Week 2",
    description:
      "Before a single line of code is written, we deliver a complete technical specification. Data models, API contracts, third-party integrations, infrastructure topology, and security posture — all documented.",
    deliverables: [
      "Database Schema & ERD",
      "API Contract Specification",
      "System Architecture Diagram",
      "Third-Party Integration Map",
    ],
  },
  {
    number: "03",
    icon: Code2,
    name: "Iterative Engineering",
    duration: "Weeks 3–8",
    description:
      "Development happens in structured 2-week sprints with a working demo delivered at each milestone. You see the system being built, test it live, and provide feedback continuously — no month-long blackouts.",
    deliverables: [
      "Sprint 1: Core Backend & Data Layer",
      "Sprint 2: Integrations & Automation Pipelines",
      "Sprint 3: Frontend & Admin Dashboard",
      "Weekly Code Reviews & Demos",
    ],
  },
  {
    number: "04",
    icon: ShieldCheck,
    name: "QA & Hardening",
    duration: "Week 9–10",
    description:
      "We run comprehensive end-to-end tests, load simulations, and security audits before any real data or production traffic touches the system. This is non-negotiable regardless of project scope.",
    deliverables: [
      "End-to-End Integration Test Suite",
      "Load & Stress Testing Report",
      "Security & Data Access Audit",
      "Staff Onboarding & Training Session",
    ],
  },
  {
    number: "05",
    icon: Rocket,
    name: "Production Launch & Support",
    duration: "Week 11–12+",
    description:
      "Zero-downtime production deployment to your infrastructure. You receive full documentation, source code ownership, and 60 days of included engineering support for any adjustments post-launch.",
    deliverables: [
      "Zero-Downtime Production Deploy",
      "Complete Source Code Transfer",
      "Infrastructure & Runbook Documentation",
      "60-Day Post-Launch Engineering Support",
    ],
  },
];

const guarantees = [
  { label: "Fixed-scope milestones", description: "No scope creep surprises mid-project" },
  { label: "Weekly progress demos", description: "See working software every 14 days" },
  { label: "100% code ownership", description: "All IP transfers to you at launch" },
  { label: "No offshore handoffs", description: "Senior US engineers, start to finish" },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-[#08090D] relative">
      {/* Hero */}
      <section className="pt-36 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[320px] bg-gradient-to-b from-[#B4F33C]/6 to-transparent blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#B4F33C]/10 border border-[#B4F33C]/20 text-[#B4F33C] text-xs font-mono font-medium tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B4F33C] animate-pulse" />
            DELIVERY METHODOLOGY
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mt-1 max-w-4xl leading-tight">
            From Discovery to Production.{" "}
            <span className="text-white/40">No Black Boxes.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Every project follows the same predictable 5-phase engineering process. You always know what we are building, when it will be done, and exactly what you own at the end.
          </p>

          {/* Timeline Summary Strip */}
          <div className="mt-8 inline-flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-[#0D1017]/90 border border-white/10 text-xs font-mono text-slate-300">
            <Clock className="w-4 h-4 text-[#B4F33C] shrink-0" />
            <span>Typical delivery: <strong className="text-white font-bold">6 – 12 weeks</strong> from signed contract to production launch.</span>
          </div>
        </div>
      </section>

      {/* Phase Timeline */}
      <section className="pb-24 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[27px] top-10 bottom-10 w-px bg-white/10 hidden md:block" />

            <div className="space-y-6">
              {phases.map((phase) => {
                const Icon = phase.icon;
                return (
                  <div key={phase.number} className="flex gap-8 items-start">
                    {/* Phase Number Circle */}
                    <div className="shrink-0 w-14 h-14 rounded-full bg-[#0D1017] border border-white/15 flex flex-col items-center justify-center relative z-10 hidden md:flex shadow-lg shadow-black/40">
                      <span className="text-[10px] font-mono text-slate-500 font-bold">{phase.number}</span>
                      <Icon className="w-4 h-4 text-[#B4F33C] mt-0.5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 rounded-2xl bg-[#0D1017] border border-white/10 hover:border-[#B4F33C]/30 transition-colors p-7 sm:p-8 shadow-xl">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="md:hidden w-8 h-8 rounded-lg bg-[#08090D] border border-white/15 flex items-center justify-center">
                            <Icon className="w-4 h-4 text-[#B4F33C]" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                              Phase {phase.number}
                            </span>
                            <h2 className="text-xl font-bold text-white leading-tight">{phase.name}</h2>
                          </div>
                        </div>
                        <span className="text-xs font-mono px-3 py-1 rounded-md bg-[#B4F33C]/10 border border-[#B4F33C]/30 text-[#B4F33C] font-semibold self-start">
                          {phase.duration}
                        </span>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed mb-6">{phase.description}</p>

                      <div className="pt-5 border-t border-white/10">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                          Key Deliverables
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {phase.deliverables.map((d) => (
                            <div key={d} className="flex items-start gap-2.5 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F33C] mt-0.5 shrink-0" />
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Strip */}
      <section className="border-t border-white/10 py-16 bg-[#08090D] relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white mb-8 text-center font-mono uppercase tracking-wider">
            Every Project. Every Time.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guarantees.map((g) => (
              <div
                key={g.label}
                className="p-5 rounded-xl bg-[#0D1017] border border-white/10 text-center hover:border-white/20 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-[#B4F33C] mx-auto mb-2.5" />
                <div className="text-sm font-bold text-white">{g.label}</div>
                <div className="text-xs text-slate-400 mt-1">{g.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-24 bg-[#08090D] relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to start Phase 01?
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            The Discovery Audit is where every project starts. Tell us what's broken and we'll map the custom system to solve it.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-[#08090D] bg-[#B4F33C] hover:bg-[#a3dc33] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(180,243,60,0.25)]"
            >
              <span>Send Project Brief</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-a-call"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#B4F33C]" />
              <span>Book Architecture Audit</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
