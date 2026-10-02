import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    tag: "TELEPHONY & DISPATCH",
    title: "Apex Roofing — Emergency Dispatch Engine",
    description:
      "Custom AI voice receptionist answering after-hours emergency calls via Twilio Voice and low-latency speech pipelines. Automatically qualifies true emergency leaks versus routine inquiries, quotes emergency callout fees, charges deposits, and alerts on-call crews directly.",
    techStack: ["Twilio Voice SDK", "Custom NLU", "PostgreSQL", "Next.js"],
    metric: "+$22k/mo",
    metricLabel: "Captured after-hours revenue",
    href: "/case-studies/apex-roofing-ai-receptionist",
    preview: {
      type: "telephony",
      title: "Telephony Stream: (512) 890-4122",
      badge: "Voice Pipeline · 24ms",
      transcript: "Homeowner: Tree branch punctured shingle in master bedroom during storm. Water dripping into light fixture.",
      actions: [
        { label: "Urgency: High Roof Emergency", status: "active" },
        { label: "Dispatch: Crew 2 (ETA 22m)", status: "done" },
        { label: "Deposit: $250 Mobilization Captured", status: "done" },
      ],
    },
  },
  {
    tag: "OPERATIONS CORE",
    title: "Titan Climate — Field Operations Hub",
    description:
      "Replaced four disconnected SaaS subscriptions (ServiceTitan, Google Sheets, disparate calendars, and manual QuickBooks billing) with one single proprietary operations platform. Live dispatch, technician scheduling, crew routing, and automated invoice reconciliation.",
    techStack: ["Next.js 15", "PostgreSQL", "Prisma ORM", "QuickBooks API"],
    metric: "14 hrs/wk",
    metricLabel: "Eliminated manual data entry",
    href: "/case-studies/titan-climate-ops-hub",
    preview: {
      type: "ops",
      title: "Titan Ops Core · 4 Crews Active",
      badge: "QuickBooks Live Sync",
      items: [
        { job: "Work Order #412: Austin South", sub: "Heat Pump Replacement · Crew 1 En Route", state: "In Transit" },
        { job: "Work Order #413: Round Rock", sub: "Compressor Diagnostic · Crew 3 On Site", state: "Active" },
      ],
    },
  },
  {
    tag: "SAAS PLATFORM",
    title: "ScheduleOS — Multi-Tenant Booking SaaS",
    description:
      "Engineered a production-ready multi-tenant scheduling platform from zero to deployment. Features tenant isolation, Stripe Connect subscription billing, real-time WebSocket availability calendars, public client self-booking pages, and custom webhook dispatchers.",
    techStack: ["Next.js", "tRPC", "PostgreSQL", "Stripe Connect", "Redis"],
    metric: "8 weeks",
    metricLabel: "Concept to production handoff",
    href: "/case-studies/scheduleos-saas",
    preview: {
      type: "saas",
      title: "ScheduleOS Multi-Tenant Gateway",
      badge: "Stripe Connect Verified",
      metric: "$48,200.00",
      metricLabel: "30-Day Gross Platform Volume",
    },
  },
];

export function SelectedWork() {
  return (
    <section className="editorial-section relative bg-[#08090D] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20 md:mb-28">
          <div>
            <span className="eyebrow block mb-5">Engineering Portfolio</span>
            <h2 className="display-lg text-white">
              Selected production systems.
            </h2>
          </div>
          <Link href="/case-studies" className="btn-secondary self-start sm:self-end text-[13px]">
            <span>View All Engineering Work</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Unboxed Editorial Projects List (Breaking the Trapped Card Grid) */}
        <div className="space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal pt-12 border-t border-white/[0.1] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start"
            >

              {/* Left Column: Business Impact & Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] font-bold tracking-wider text-[#B4F33C] uppercase">
                    {project.tag}
                  </span>
                  <span className="text-slate-500">·</span>
                  <span className="font-mono text-[11px] text-slate-400">
                    Production Architecture
                  </span>
                </div>

                <div>
                  <h3 className="text-[22px] sm:text-[26px] font-bold text-white leading-snug">
                    {project.title}
                  </h3>
                  <div className="mt-3 flex items-baseline gap-3">
                    <span className="font-bold text-2xl sm:text-3xl text-[#B4F33C]">
                      {project.metric}
                    </span>
                    <span className="font-mono text-[12px] text-slate-400">
                      {project.metricLabel}
                    </span>
                  </div>
                </div>

                <p className="text-[15px] leading-relaxed text-slate-300">
                  {project.description}
                </p>

                {/* Tech stack pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Link href={project.href} className="btn-text text-[14px]">
                    <span>Read Architecture Case Study</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Architectural Visual Proof */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl p-6 bg-[#0E121C] border border-white/10 shadow-xl">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-white/40" />
                      <span className="font-mono text-[11px] font-semibold text-slate-200">
                        {project.preview.title}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                      {project.preview.badge}
                    </span>
                  </div>

                  {/* Body Content */}
                  {project.preview.type === "telephony" && (
                    <div className="space-y-3 font-mono text-[11px]">
                      <div className="p-3 rounded-lg bg-white/[0.03] text-slate-300 border border-white/5">
                        <strong className="text-white block mb-1">Incoming Transcript:</strong>
                        &quot;{project.preview.transcript}&quot;
                      </div>
                      <div className="space-y-1.5 pt-1">
                        {project.preview.actions?.map((act) => (
                          <div key={act.label} className="flex items-center gap-2 p-2 rounded bg-white/[0.02]">
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                            <span className="text-slate-300">{act.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.preview.type === "ops" && (
                    <div className="space-y-2.5 font-mono text-[11px]">
                      {project.preview.items?.map((item) => (
                        <div key={item.job} className="p-3 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between">
                          <div>
                            <div className="text-white font-semibold">{item.job}</div>
                            <div className="text-slate-400 mt-0.5">{item.sub}</div>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-white/10 text-white font-bold text-[10px]">
                            {item.state}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {project.preview.type === "saas" && (
                    <div className="p-5 rounded-lg bg-white/[0.03] border border-white/5 font-mono">
                      <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                        {project.preview.metricLabel}
                      </div>
                      <div className="text-3xl font-bold text-white mt-1">
                        {project.preview.metric}
                      </div>
                      <div className="mt-3 text-[11px] text-slate-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white" />
                        <span>Isolated PostgreSQL Schema per Tenant</span>
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>
          ))}
        </div>

        {/* High-Integrity Transparency Note */}
        <div className="reveal mt-20 p-6 rounded-2xl bg-[#0B0D13] border border-white/[0.08] flex items-start gap-4">
          <div className="font-mono text-[11px] text-slate-300 leading-relaxed">
            <strong className="text-white">Note on Client Confidentiality:</strong>{" "}
            Production systems engineered under non-disclosure agreements cannot be publicly indexed. The systems shown above represent production-spec architectures deployed in our lab to showcase architectural capability. Live code demonstrations and architecture audits are conducted during confidential consultations.
          </div>
        </div>

      </div>
    </section>
  );
}
