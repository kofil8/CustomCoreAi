import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const phases = [
  {
    num: "01",
    name: "Discovery & Audit",
    duration: "Week 1",
    summary: "Deep architectural audit of your workflows, existing software APIs, and data models.",
  },
  {
    num: "02",
    name: "System Design",
    duration: "Week 2",
    summary: "Complete blueprint: ER diagrams, API schemas, UI wireframes, and fixed-milestone scope.",
  },
  {
    num: "03",
    name: "Active Engineering",
    duration: "Weeks 3–6",
    summary: "Two-week agile sprints with functioning staging builds at each milestone. Zero blackout periods.",
  },
  {
    num: "04",
    name: "Testing & Deploy",
    duration: "Weeks 7–8",
    summary: "Load testing, staff security provisioning, and zero-downtime production cutover.",
  },
  {
    num: "05",
    name: "Transfer & Support",
    duration: "Ongoing",
    summary: "Complete repository and IP transfer. 60 days of included post-launch engineering support.",
  },
];

const guarantees = [
  "Fixed-scope milestones with zero billing surprises",
  "Working staging deployment demoed every 14 days",
  "100% intellectual property & source code handoff",
  "Direct communication with senior engineers on Slack",
];

export function ProcessSection() {
  return (
    <section className="editorial-section relative bg-[#08090D] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="reveal mb-20 md:mb-28 max-w-3xl">
          <span className="eyebrow block mb-5">Predictable Delivery</span>
          <h2 className="display-lg text-white">
            From architecture audit to production handoff.{" "}
            <span className="text-slate-400">No black boxes.</span>
          </h2>
          <p className="body-lg mt-6 text-slate-300">
            Every engagement follows a structured 5-phase delivery model. You always know what is being built, when each milestone ships, and that you own the code at the end.
          </p>
        </div>

        {/* Horizontal Timeline (Desktop) */}
        <div className="reveal hidden lg:block mb-20">
          <div className="grid grid-cols-5 gap-6">
            {phases.map((p, i) => (
              <div key={p.num} className="relative">
                {/* Circle badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-[12px] font-bold bg-white text-[#08090D] shadow-md">
                    {p.num}
                  </div>
                  <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {p.duration}
                  </span>
                </div>

                <h3 className="text-[16px] font-bold text-white mb-2">
                  {p.name}
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-300">
                  {p.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vertical Stack (Mobile) */}
        <div className="reveal lg:hidden space-y-8 mb-16">
          {phases.map((p) => (
            <div key={p.num} className="p-6 rounded-xl bg-[#0E121C] border border-white/[0.08]">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-bold bg-white text-black">
                  {p.num}
                </span>
                <div>
                  <div className="text-[15px] font-bold text-white">{p.name}</div>
                  <div className="font-mono text-[11px] text-slate-400">{p.duration}</div>
                </div>
              </div>
              <p className="text-[14px] leading-relaxed text-slate-300">{p.summary}</p>
            </div>
          ))}
        </div>

        {/* Active Engineering Lab Workbench Visual */}
        <div className="reveal mb-16 rounded-2xl overflow-hidden border border-white/10 bg-[#0C0F17] grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 relative h-64 sm:h-80 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Desk.webp"
              alt="CustomCore Development Workspace"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0C0F17] hidden lg:block" />
          </div>
          <div className="lg:col-span-6 p-8 sm:p-12">
            <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded bg-[#B4F33C]/10 text-[#B4F33C] border border-[#B4F33C]/30 uppercase tracking-wider inline-block mb-4">
              Phase 03 · Active Engineering
            </span>
            <h3 className="text-2xl font-bold text-white mb-3">
              Bi-weekly working builds. Never a 3-month blackout.
            </h3>
            <p className="text-[15px] leading-relaxed text-slate-300 mb-6">
              You don&apos;t wait until the end of the contract to see if the software works. Every 14 days, you log into a functioning staging build, review pull requests, and test real user flows alongside the senior engineering team.
            </p>
            <div className="flex items-center gap-6 font-mono text-[12px] text-slate-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B4F33C]" />
                Live Staging Demos
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-white" />
                Continuous CI/CD
              </span>
            </div>
          </div>
        </div>

        {/* Guarantees Strip */}
        <div className="reveal pt-16 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <span className="text-[14px] leading-relaxed text-slate-300 font-medium">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
