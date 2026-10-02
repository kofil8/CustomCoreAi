import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Building2,
  Wrench,
  Stethoscope,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Case Studies | CustomCoreAI — Real Results for Real Businesses",
  description:
    "See how CustomCoreAI has engineered custom backend systems and AI workflows that generate measurable ROI for roofing contractors, HVAC operators, and growing businesses.",
};

const caseStudies = [
  {
    id: "apex-roofing",
    slug: "apex-roofing",
    tag: "Emergency Dispatch Automation",
    industry: "Roofing Contractor",
    icon: Building2,
    company: "Apex Premier Roofing",
    location: "Austin, TX",
    headline: "35% Revenue Increase in 90 Days by Capturing After-Hours Emergency Calls",
    challenge:
      "Apex Premier Roofing was losing an estimated $18,000/month in storm-emergency call revenue. Their phone system rolled to voicemail after 5 PM, and weekend calls were handled by an overwhelmed dispatcher who missed 40% of inbound inquiries.",
    solution:
      "We engineered a custom Voice AI Receptionist integrated with their existing Jobber CRM. The system answers in <1.2 seconds, qualifies the emergency, quotes service fees, books a confirmed appointment, and fires an SMS alert to the on-call crew — 24/7 with zero human intervention.",
    metrics: [
      { label: "Calls Captured After-Hours", value: "100%", delta: "↑ from 58%" },
      { label: "Monthly Emergency Revenue", value: "+$22k", delta: "vs $18k lost before" },
      { label: "Avg Dispatch Time", value: "2.4 min", delta: "↓ from 38 min" },
      { label: "5-Star Review Rate", value: "+64%", delta: "Auto review request post-job" },
    ],
    stack: ["Twilio SIP + Voice API", "Whisper ASR", "Custom Voice NLU", "Jobber API", "Stripe + SMS Dispatch"],
    duration: "6 weeks to production",
  },
  {
    id: "titan-climate",
    slug: "titan-climate",
    tag: "Field Operations Platform",
    industry: "HVAC Service Company",
    icon: Wrench,
    company: "Titan Climate Solutions",
    location: "Scottsdale, AZ",
    headline: "Eliminated 14 Hours/Week of Manual Data Entry with a Custom Operations Hub",
    challenge:
      "Titan Climate had 12 technicians running across Phoenix metro. Their dispatcher was manually copying job notes between a whiteboard, a Google Sheet, two Slack channels, and an aging ServiceTitan account that cost $890/month with features they never used.",
    solution:
      "We replaced the entire stack with a proprietary Field Operations Hub: a web-based dashboard with drag-and-drop crew scheduling, a mobile technician app for on-site job completion, two-way QuickBooks sync, and automated end-of-day reporting.",
    metrics: [
      { label: "Admin Hours Saved/Week", value: "14 hrs", delta: "Per dispatcher" },
      { label: "Software Cost Reduction", value: "$890/mo → $0", delta: "One-time build, owned outright" },
      { label: "Invoice Turnaround", value: "Same-day", delta: "↓ from 3–5 days" },
      { label: "Technician Job Accuracy", value: "99.1%", delta: "↑ from 84%" },
    ],
    stack: ["Next.js 15 App Router", "PostgreSQL + Prisma", "QuickBooks API", "BullMQ Worker Queues", "Mobile PWA"],
    duration: "10 weeks to production",
  },
  {
    id: "summit-dental",
    slug: "summit-dental",
    tag: "Patient Intake Automation",
    industry: "Multi-Location Dental Practice",
    icon: Stethoscope,
    company: "Summit Dental Group",
    location: "Nashville, TN",
    headline: "Same-Day Emergency Bookings Up 220% with AI-Powered Phone Intake",
    challenge:
      "Summit Dental's front desk was overwhelmed — a single receptionist handling calls, walk-ins, and insurance verification simultaneously. New patient emergencies would wait 2–3 days for a callback. High-value same-day slots sat empty.",
    solution:
      "We built a multi-channel intake system: a Voice AI that handles inbound calls, a web chat widget for the website, and a dashboard for the front desk to review and confirm AI-scheduled appointments. All with HIPAA-compliant data handling.",
    metrics: [
      { label: "Same-Day Emergency Fill Rate", value: "+220%", delta: "vs prior month" },
      { label: "Missed Call Rate", value: "0%", delta: "↓ from 31%" },
      { label: "New Patient Intake Time", value: "Under 3 min", delta: "All digital, no paper" },
      { label: "Staff Overtime Reduction", value: "−18 hrs/mo", delta: "Front desk load relief" },
    ],
    stack: ["Twilio Voice + Messaging", "HIPAA-Compliant Data Layer", "Custom Scheduling Engine", "Insurance Verification API"],
    duration: "8 weeks to production",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#08090D] relative">
      {/* Hero */}
      <section className="pt-36 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#B4F33C]/6 to-transparent blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#B4F33C]/10 border border-[#B4F33C]/20 text-[#B4F33C] text-xs font-mono font-medium tracking-wide mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B4F33C] animate-pulse" />
            DOCUMENTED RESULTS
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mt-1 max-w-4xl leading-tight">
            Systems That Pay for Themselves.{" "}
            <span className="text-white/40">Documented.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Not case studies written by a marketing agency. These are live production deployments — real business operators, real numbers, and hard metrics.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-32 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs) => {
            const Icon = cs.icon;
            return (
              <article
                key={cs.id}
                className="rounded-3xl bg-[#0D1017] border border-white/10 hover:border-white/20 transition-all shadow-2xl overflow-hidden"
              >
                {/* Header */}
                <div className="p-8 sm:p-10 border-b border-white/10">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-[#08090D] border border-white/15 flex items-center justify-center text-[#B4F33C]">
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <span className="text-xs font-mono text-[#B4F33C] font-semibold uppercase tracking-wider">
                          {cs.tag}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight max-w-2xl leading-snug">
                        {cs.headline}
                      </h2>
                      <div className="mt-2.5 flex items-center gap-3 text-xs font-mono text-slate-400">
                        <span>{cs.company}</span>
                        <span className="text-slate-600">•</span>
                        <span>{cs.location}</span>
                        <span className="text-slate-600">•</span>
                        <span>{cs.industry}</span>
                      </div>
                    </div>
                    <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-[#B4F33C]/10 border border-[#B4F33C]/30 text-[#B4F33C] font-semibold self-start whitespace-nowrap">
                      {cs.duration}
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
                  {/* Left: Story */}
                  <div className="lg:col-span-7 space-y-7">
                    <div>
                      <h3 className="text-xs font-mono uppercase text-rose-400 font-semibold mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        The Problem
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-mono uppercase text-[#B4F33C] font-semibold mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B4F33C]" />
                        The System We Built
                      </h3>
                      <p className="text-sm text-slate-300 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-3">
                        Production Technology Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {cs.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-[#08090D] border border-white/10 text-xs font-mono text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Metrics */}
                  <div className="lg:col-span-5">
                    <h3 className="text-xs font-mono uppercase text-slate-400 font-semibold mb-4">
                      Measured Outcomes
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                      {cs.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="p-4 rounded-xl bg-[#08090D] border border-white/10"
                        >
                          <div className="text-2xl font-black text-white tracking-tight">
                            {metric.value}
                          </div>
                          <div className="text-xs font-semibold text-slate-300 mt-0.5">
                            {metric.label}
                          </div>
                          <div className="text-[11px] font-mono text-[#B4F33C] mt-1 font-semibold">
                            {metric.delta}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="px-8 sm:px-10 py-5 bg-[#08090D]/70 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-xs font-mono text-slate-400">
                    Want an automated system engineered specifically for your workflow?
                  </p>
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-[#08090D] bg-[#B4F33C] hover:bg-[#a3dc33] transition-all shadow-[0_0_15px_rgba(180,243,60,0.2)]"
                  >
                    <span>Read Architecture Breakdown</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 py-24 bg-[#08090D] relative z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Your Operation. Your System.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Every business above had a different problem. What they shared was an operational bottleneck that off-the-shelf software couldn't fix. Let's engineer yours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/#contact"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-[#08090D] bg-[#B4F33C] hover:bg-[#a3dc33] transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(180,243,60,0.25)]"
            >
              <span>Send a Project Brief</span>
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
