import { ArrowRight, Check, X, ArrowDown } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="editorial-section relative bg-[#08090D] overflow-hidden">
      {/* ── Architectural Faded Square Grid Lines ── */}
      <div className="absolute inset-0 pointer-events-none faded-square-grid opacity-40" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">

        {/* ── Visual Hero Moment: Massive Statement ── */}
        <div className="reveal max-w-4xl mb-14 md:mb-20">
          <span className="eyebrow block mb-5">The Operational Reality</span>
          <h2 className="display-xl text-white tracking-tight uppercase">
            Your business <br />
            <span className="text-slate-400">isn&apos;t generic.</span> <br />
            Your software <br />
            <span className="text-[#B4F33C]">shouldn&apos;t be either.</span>
          </h2>
          <p className="text-[18px] sm:text-[21px] mt-8 text-slate-300 max-w-2xl leading-relaxed">
            Generic software forces your workflow into someone else&apos;s assumptions. Custom software does the opposite.
          </p>
        </div>

        {/* ── Visual Transformation Diagram (Before → After Flow) ── */}
        <div className="reveal space-y-6">

          {/* 01: BEFORE — Fragmented Reality */}
          <div className="rounded-2xl p-6 sm:p-8 bg-[#0C0E15] border border-red-500/20 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="font-mono text-[12px] font-bold tracking-widest text-red-400 uppercase">
                  Before: Fragile Tool Sprawl
                </span>
              </div>
              <span className="font-mono text-[11px] text-slate-400">
                12–18 hours/wk lost to manual re-typing &amp; sync errors
              </span>
            </div>

            {/* Fragmented Architecture Pipeline */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
              {[
                { title: "CRM", note: "Outdated contact records" },
                { title: "Spreadsheets", note: "Fragile glue between teams" },
                { title: "Phone / Voicemail", note: "After-hours leads lost" },
                { title: "Accounting", note: "Manually re-typed invoices" },
              ].map((node, i) => (
                <div
                  key={node.title}
                  className="rounded-xl p-4 bg-[#111420] border border-white/5 relative"
                >
                  <div className="font-mono text-[13px] font-bold text-slate-300 mb-1">
                    {node.title}
                  </div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {node.note}
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-600 font-mono text-xs">
                      ⇢
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Transition Indicator */}
          <div className="flex justify-center py-2">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[11px] text-slate-400">
              <ArrowDown className="w-3.5 h-3.5 text-[#B4F33C]" />
              <span>Engineered into a single source of truth</span>
            </div>
          </div>

          {/* 02: AFTER — The CustomCore Operating System */}
          <div className="rounded-2xl p-6 sm:p-8 bg-[#0D121F] border border-[#B4F33C]/40 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B4F33C] animate-pulse" />
                <span className="font-mono text-[12px] font-bold tracking-widest text-[#B4F33C] uppercase">
                  After: CustomCore Unified Operating System
                </span>
              </div>
              <span className="font-mono text-[11px] text-slate-300">
                100% Owned IP · 0 Monthly Per-Seat Fees
              </span>
            </div>

            {/* Unified Architecture Pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-[#131828] border border-white/10">
                <div className="font-mono text-[12px] font-bold text-[#B4F33C] uppercase mb-1">
                  1. Unified Intake &amp; Voice
                </div>
                <p className="text-[13px] text-slate-300">
                  AI voice agent answers in &lt;1.2s, qualifies emergencies, and captures full customer scope 24/7.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#131828] border border-white/10">
                <div className="font-mono text-[12px] font-bold text-white uppercase mb-1">
                  2. Centralized Postgres Core
                </div>
                <p className="text-[13px] text-slate-300">
                  One real-time database runs scheduling, field dispatch, work orders, and billing without middleware.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#131828] border border-white/10">
                <div className="font-mono text-[12px] font-bold text-white uppercase mb-1">
                  3. Automated Two-Way Sync
                </div>
                <p className="text-[13px] text-slate-300">
                  Direct ledger sync to QuickBooks, Stripe payments, and automated SMS updates sent to crews and clients.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ── 3 Crisp Contrast Takeaways ── */}
        <div className="reveal mt-16 pt-12 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {[
            {
              num: "01",
              title: "Endless Tool Subscriptions",
              body: "Instead of paying 5 distinct SaaS vendors per employee every month, you own the system outright.",
            },
            {
              num: "02",
              title: "Zero Lost Revenue",
              body: "Never lose a high-value customer to voicemail while your team is on a job site or asleep.",
            },
            {
              num: "03",
              title: "Workflow Fidelity",
              body: "Software tailored precisely to your estimators, dispatchers, and crew leaders—not generic defaults.",
            },
          ].map((point) => (
            <div key={point.num} className="space-y-2">
              <span className="font-mono text-[13px] font-bold text-[#B4F33C]">
                {point.num}
              </span>
              <h3 className="text-[17px] font-bold text-white">{point.title}</h3>
              <p className="text-[14px] leading-relaxed text-slate-400">{point.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
