"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ArrowDown, 
  PhoneCall, 
  Database, 
  Calendar, 
  Sparkles, 
  Check, 
  Activity,
  Layers,
  Terminal,
  ShieldCheck
} from "lucide-react";

interface TelemetryEvent {
  id: string;
  time: string;
  badge: string;
  badgeColor: string;
  title: string;
  detail: string;
}

const telemetryEvents: TelemetryEvent[] = [
  {
    id: "1",
    time: "10:42:18",
    badge: "CALL CAPTURED",
    badgeColor: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    title: "Inbound Emergency Call",
    detail: "Travis County, TX · Twilio SIP",
  },
  {
    id: "2",
    time: "10:42:21",
    badge: "AI QUALIFIED",
    badgeColor: "text-[#B4F33C] border-[#B4F33C]/30 bg-[#B4F33C]/10",
    title: "Active Hail Leak Triaged",
    detail: "$250 diagnostic fee approved",
  },
  {
    id: "3",
    time: "10:42:25",
    badge: "POSTGRES SYNC",
    badgeColor: "text-sky-400 border-sky-400/30 bg-sky-400/10",
    title: "WorkOrder #WO-8942 Created",
    detail: "Row-Level Security isolated",
  },
  {
    id: "4",
    time: "10:42:31",
    badge: "CALENDAR BOOKED",
    badgeColor: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    title: "Dispatch Slot Confirmed",
    detail: "Today @ 4:00 PM · Senior Tech assigned",
  },
  {
    id: "5",
    time: "10:43:05",
    badge: "DISPATCHED",
    badgeColor: "text-[#B4F33C] border-[#B4F33C]/30 bg-[#B4F33C]/10",
    title: "SMS En-Route Sent to Tech",
    detail: "GPS client location attached",
  },
];

export function Hero() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeTab, setActiveTab] = useState<"pipeline" | "telemetry">("pipeline");
  const [tickerIndex, setTickerIndex] = useState(0);

  // Silky-smooth step progression
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  // Smooth live telemetry ticker
  useEffect(() => {
    const tickerTimer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % telemetryEvents.length);
    }, 3400);
    return () => clearInterval(tickerTimer);
  }, []);

  const currentEvent = telemetryEvents[tickerIndex];

  return (
    <section className="relative min-h-[88vh] md:min-h-[92vh] flex flex-col justify-between pt-24 pb-6 md:pt-32 md:pb-8 overflow-hidden bg-[#08090D]">
      {/* ── Architectural Faded Square Grid Lines (Linear / Blueprint Style) ── */}
      <div className="absolute inset-0 pointer-events-none faded-square-grid" />
      <div className="absolute inset-0 pointer-events-none faded-square-grid-lg" />

      {/* Subtle Blueprint Square Accent Highlight */}
      <div 
        className="absolute top-1/4 right-1/3 w-64 h-64 pointer-events-none opacity-20 border border-[#B4F33C]/20 bg-[#B4F33C]/[0.015]"
        style={{
          maskImage: "radial-gradient(circle at center, #000 30%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, #000 30%, transparent 80%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* ── Left Column: Editorial Value Proposition ──── */}
          <div className="lg:col-span-6 space-y-6">

            {/* High-Contrast Technical Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full font-mono text-[11px] font-bold tracking-widest text-[#B4F33C] bg-[#B4F33C]/10 border border-[#B4F33C]/25 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B4F33C] animate-pulse" />
              Custom Software • AI • Automation
            </div>

            {/* Dominant Optically Balanced Headline */}
            <h1 className="display-xl text-white tracking-tight leading-[1.05]">
              Software Built <br />
              <span className="text-[#B4F33C]">Around Your Business.</span>
            </h1>

            {/* Clean, unburdened value proposition */}
            <p className="text-[17px] sm:text-[19px] leading-relaxed max-w-lg text-slate-300 font-normal">
              When off-the-shelf software doesn&apos;t fit the way you work, we design and engineer the system around your actual operations.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a href="#contact" className="btn-primary">
                <span>Build Your System</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-white/[0.08] hover:bg-white/[0.16] border border-white/25 hover:border-white/40 transition-all shadow-sm backdrop-blur-sm"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-300" />
              </a>
            </div>

            {/* Elevated Trust Micro-Proof Directly Beneath CTAs */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 pt-1 text-[12px] font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#B4F33C] shrink-0" />
                <span className="text-slate-200">100% Owned IP</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#B4F33C] shrink-0" />
                <span className="text-slate-200">Zero Per-Seat Fees</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#B4F33C] shrink-0" />
                <span className="text-slate-200">Direct Senior Engineers</span>
              </div>
            </div>

            {/* Human Authority Stamp: Direct Senior Architect Access */}
            <div className="pt-2 flex items-center gap-3.5 border-t border-white/[0.06]">
              <div className="relative shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/founder.jpg"
                  alt="Kofil — Lead Systems Architect"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#B4F33C] shadow-md"
                />
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#B4F33C] border-2 border-[#08090D]"
                  title="Direct Senior Architect Active"
                />
              </div>
              <div className="font-mono text-[11px] leading-tight">
                <div className="text-white font-semibold flex items-center gap-2">
                  Kofil <span className="text-[#B4F33C]">·</span> Lead Systems Architect
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-bold">
                    AUSTIN, TX
                  </span>
                </div>
                <div className="text-slate-400 mt-1">Direct technical consultation · Zero sales intermediaries</div>
              </div>
            </div>

          </div>

          {/* ── Right Column: Clean, High-Precision System Console ── */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#0B0D14] border border-white/10 shadow-2xl overflow-hidden transition-all duration-300">
              
              {/* Window Header */}
              <div className="px-5 py-3.5 bg-[#07090E] border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <span className="font-mono text-[11px] font-semibold tracking-wider text-slate-300 ml-2">
                    CUSTOMCORE // SYSTEM CONSOLE
                  </span>
                </div>

                {/* View Switcher Tabs */}
                <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/5">
                  <button
                    onClick={() => setActiveTab("pipeline")}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono transition-all ${
                      activeTab === "pipeline"
                        ? "bg-[#B4F33C] text-[#08090D] font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Workflow
                  </button>
                  <button
                    onClick={() => setActiveTab("telemetry")}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono transition-all ${
                      activeTab === "telemetry"
                        ? "bg-[#B4F33C] text-[#08090D] font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Telemetry
                  </button>
                </div>
              </div>

              {/* Main Console Body */}
              <div className="p-5 sm:p-6">
                
                {activeTab === "pipeline" ? (
                  /* ── Workflow Pipeline View ── */
                  <div className="space-y-4">
                    
                    {/* Node 1: Inbound Event */}
                    <div className={`p-3.5 rounded-xl border transition-all duration-500 flex items-center justify-between ${
                      activeStep === 0
                        ? "bg-[#151B2A] border-[#B4F33C] shadow-[0_0_20px_rgba(180,243,60,0.12)]"
                        : "bg-[#0E111A] border-white/5 opacity-75"
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          activeStep === 0 ? "bg-[#B4F33C] text-[#08090D]" : "bg-white/10 text-slate-300"
                        }`}>
                          <PhoneCall className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[12px] font-mono font-bold text-white flex items-center gap-2">
                            1. INBOUND CALL CAPTURED
                            {activeStep === 0 && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#B4F33C]/20 text-[#B4F33C] font-mono">
                                LIVE
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            Twilio SIP Trunk · Emergency Hail Damage Lead
                          </div>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-slate-400">
                        &lt;0.2s
                      </span>
                    </div>

                    {/* Smooth Circuit Connector */}
                    <div className="flex justify-center -my-1">
                      <div className={`w-0.5 h-3.5 rounded-full transition-colors duration-500 ${
                        activeStep === 1 ? "bg-[#B4F33C]" : "bg-white/15"
                      }`} />
                    </div>

                    {/* Node 2: AI Voice & Urgency Qualification */}
                    <div className={`p-3.5 rounded-xl border transition-all duration-500 flex items-center justify-between ${
                      activeStep === 1
                        ? "bg-[#151B2A] border-[#B4F33C] shadow-[0_0_20px_rgba(180,243,60,0.12)]"
                        : "bg-[#0E111A] border-white/5 opacity-75"
                    }`}>
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                          activeStep === 1 ? "bg-[#B4F33C] text-[#08090D]" : "bg-white/10 text-slate-300"
                        }`}>
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[12px] font-mono font-bold text-white flex items-center gap-2">
                            2. AI RECEPTIONIST TRIAGE
                            {activeStep === 1 && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#B4F33C]/20 text-[#B4F33C] font-mono">
                                QUALIFIED
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            Scope Extracted · $250 Diagnostic Quoted &amp; Accepted
                          </div>
                        </div>
                      </div>
                      <span className="font-mono text-[10px] text-[#B4F33C] font-semibold">
                        1.1s latency
                      </span>
                    </div>

                    {/* Smooth Circuit Connector */}
                    <div className="flex justify-center -my-1">
                      <div className={`w-0.5 h-3.5 rounded-full transition-colors duration-500 ${
                        activeStep === 2 ? "bg-[#B4F33C]" : "bg-white/15"
                      }`} />
                    </div>

                    {/* Node 3: Split Resolution (CRM + Dispatch) */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className={`p-3 rounded-xl border transition-all duration-500 ${
                        activeStep === 2
                          ? "bg-[#151B2A] border-[#B4F33C]/80"
                          : "bg-[#0E111A] border-white/5 opacity-75"
                      }`}>
                        <div className="flex items-center gap-2 mb-1">
                          <Database className="w-3.5 h-3.5 text-[#B4F33C]" />
                          <span className="font-mono text-[11px] font-bold text-white">
                            CRM Record
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-300 font-mono">
                          Postgres WorkOrder created
                        </p>
                      </div>

                      <div className={`p-3 rounded-xl border transition-all duration-500 ${
                        activeStep === 2
                          ? "bg-[#151B2A] border-[#B4F33C] shadow-[0_0_15px_rgba(180,243,60,0.12)]"
                          : "bg-[#0E111A] border-white/5 opacity-75"
                      }`}>
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-3.5 h-3.5 text-[#B4F33C]" />
                          <span className="font-mono text-[11px] font-bold text-white">
                            Slot Booked ✓
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-300 font-mono">
                          Reserved 4:00 PM today
                        </p>
                      </div>
                    </div>

                  </div>
                ) : (
                  /* ── Live Telemetry Feed View ── */
                  <div className="space-y-2.5">
                    {telemetryEvents.map((evt) => (
                      <div
                        key={evt.id}
                        className="rounded-xl p-3 bg-[#0E111A] border border-white/5 flex items-center justify-between gap-3 text-[11px]"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="font-mono text-[10px] text-slate-400">
                            {evt.time}
                          </span>
                          <span className={`font-mono text-[9px] font-bold px-1.5 py-0.5 rounded border ${evt.badgeColor}`}>
                            {evt.badge}
                          </span>
                          <span className="text-white font-medium truncate">
                            {evt.title}
                          </span>
                        </div>
                        <span className="font-mono text-[10px] text-slate-400 hidden sm:inline shrink-0">
                          {evt.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* ── Bottom Live Telemetry Ticker (Smoothly cycles events) ── */}
                <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono">
                  <div className="flex items-center gap-2 text-slate-400 min-w-0">
                    <span className="w-2 h-2 rounded-full bg-[#B4F33C] animate-pulse shrink-0" />
                    <span className="text-slate-400 shrink-0">EVENT:</span>
                    <span className="text-slate-200 truncate transition-opacity duration-300">
                      {currentEvent.title} · {currentEvent.detail}
                    </span>
                  </div>
                  <span className="text-slate-500 shrink-0 ml-3 hidden sm:inline">
                    {currentEvent.time}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom: Refined Scroll Indicator ── */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-4">
        <a
          href="#architect"
          className="group inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          aria-label="Scroll to explore"
        >
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-semibold text-slate-400 group-hover:text-[#B4F33C] transition-colors">
            Scroll To Explore
          </span>
          <div className="w-5 h-5 rounded-full border border-white/10 group-hover:border-[#B4F33C]/40 flex items-center justify-center transition-all bg-white/[0.02]">
            <ArrowDown className="w-2.5 h-2.5 text-[#B4F33C] animate-bounce" />
          </div>
        </a>
      </div>

    </section>
  );
}
