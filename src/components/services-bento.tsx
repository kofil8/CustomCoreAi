import Link from "next/link";
import { ArrowRight, PhoneCall, Users, Bot, Server, Check } from "lucide-react";

export function ServicesBento() {
  return (
    <section
      id="services"
      className="editorial-section relative bg-[#08090D] border-t border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* ── Reframed Header: Human & Workflow Centric ── */}
        <div className="reveal mb-14 md:mb-20 max-w-3xl">
          <span className="eyebrow block mb-4">Systems That Work For You</span>
          <h2 className="display-lg text-white">
            Systems that fit the way you work.
          </h2>
          <p className="text-[17px] sm:text-[19px] text-slate-300 mt-5 leading-relaxed">
            From internal operating tools to customer-facing platforms, we design and build software around your actual workflow — then reveal the robust architecture underneath.
          </p>
        </div>

        {/* ── Feature 1: AI Voice Receptionist & Emergency Dispatch ─── */}
        <div className="reveal mb-8">
          <div className="rounded-2xl overflow-hidden bg-[#0C0F17] border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">

              {/* Text column */}
              <div className="lg:col-span-6 p-8 sm:p-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 font-mono text-[11px] font-bold bg-[#B4F33C]/10 text-[#B4F33C] border border-[#B4F33C]/30">
                  <PhoneCall className="w-3.5 h-3.5" />
                  HIGH-CONVERTING TELEPHONY
                </div>
                <h3 className="display-sm text-white mb-4">
                  AI Voice Receptionist &amp; Emergency Dispatch
                </h3>
                <p className="text-[15px] leading-relaxed mb-6 text-slate-300">
                  For contractors and service companies, missed calls mean lost revenue. Our voice infrastructure answers in &lt;1.2s, qualifies the scope, and books dispatch slots 24/7.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Instant pick-up (&lt;1.2s) via low-latency SIP trunks",
                    "Qualifies caller address, scope of work, and emergency tier",
                    "Zero manual data entry — automatic calendar and CRM sync",
                    "Instant SMS confirmation with technician ETA sent to caller",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px]">
                      <div className="w-4 h-4 rounded-full bg-[#B4F33C]/15 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#B4F33C]" />
                      </div>
                      <span dangerouslySetInnerHTML={{ __html: f }} className="text-slate-300" />
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#ai-receptionist" className="btn-primary text-[13px]">
                    <span>Experience Live Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <Link href="/services/ai-receptionist" className="btn-secondary text-[13px]">
                    <span>Architecture Breakdown</span>
                  </Link>
                </div>
              </div>

              {/* Visual column */}
              <div className="lg:col-span-6 p-8 sm:p-12 flex items-center justify-center bg-[#090B10] border-t lg:border-t-0 lg:border-l border-white/[0.08]">
                <div className="w-full max-w-sm rounded-xl p-6 bg-[#0E121C] border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/[0.08]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#B4F33C]/20 flex items-center justify-center">
                        <PhoneCall className="w-4 h-4 text-[#B4F33C]" />
                      </div>
                      <div>
                        <div className="text-[13px] font-semibold text-white">Live Call Stream</div>
                        <div className="font-mono text-[10px] text-slate-400">Low-Latency SIP Pipeline</div>
                      </div>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#B4F33C]/10 text-[#B4F33C] border border-[#B4F33C]/30">
                      Live
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-[11px]">
                    {[
                      { step: "Call Received", time: "0.0s", state: "Connected" },
                      { step: "Intent Extraction", time: "0.8s", state: "Roof Leak Crisis" },
                      { step: "Slot Reservation", time: "1.4s", state: "Booked 4:00 PM" },
                      { step: "Crew Notification", time: "1.9s", state: "SMS Dispatched" },
                    ].map((s) => (
                      <div key={s.step} className="flex items-center justify-between p-2 rounded bg-white/[0.03]">
                        <span className="text-slate-300">{s.step}</span>
                        <span className="text-white font-semibold">{s.state}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/[0.06] text-center font-mono text-[11px] text-slate-400">
                    Twilio Voice · WebSockets · PostgreSQL Sync
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Feature 2: Custom Operations Hub ───────────── */}
        <div className="reveal mb-8">
          <div className="rounded-2xl overflow-hidden bg-[#0C0F17] border border-white/10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">

              {/* Visual column */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex items-center justify-center bg-[#090B10] border-b lg:border-b-0 lg:border-r border-white/[0.08] order-2 lg:order-1">
                <div className="w-full space-y-2.5 font-mono text-[12px]">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Connected Business Infrastructure
                  </div>
                  {[
                    { label: "Dispatch Board", note: "Real-time Live WebSockets" },
                    { label: "Postgres Ledger", note: "Tenant Row-Level Security" },
                    { label: "QuickBooks Core", note: "Two-way Ledger Sync" },
                    { label: "Inventory Engine", note: "Automated Re-order Queues" },
                  ].map((layer) => (
                    <div
                      key={layer.label}
                      className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
                    >
                      <span className="text-white font-medium">{layer.label}</span>
                      <span className="text-slate-400">{layer.note}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text column */}
              <div className="lg:col-span-7 p-8 sm:p-12 order-1 lg:order-2">
                <div className="font-mono text-[11px] font-semibold text-slate-400 mb-4">
                  01 // BESPOKE PLATFORMS
                </div>
                <h3 className="display-sm text-white mb-4">
                  Custom Software &amp; Proprietary Operations Hubs
                </h3>
                <p className="text-[15px] leading-relaxed mb-6 text-slate-300">
                  Replace patchwork SaaS subscriptions with a single unified platform engineered specifically for your team. You own the code forever, with zero monthly per-seat licensing penalties.
                </p>
                <Link href="/services/custom-software" className="btn-text text-[14px]">
                  <span>Explore Custom Architecture</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* ── 3 Supporting Capability Cards ───────────────────────── */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: "02",
              icon: Users,
              title: "Field Operations & CRM",
              body: "Custom quoting calculators, crew routing, and job board tracking calibrated to your field workflows.",
              href: "/services/crm",
            },
            {
              num: "03",
              icon: Bot,
              title: "Autonomous AI Workflows",
              body: "Structured AI workers connected to your database, contracts, and invoicing pipelines — not novelty chat bots.",
              href: "/services/ai-applications",
            },
            {
              num: "04",
              icon: Server,
              title: "Backend Cloud Infrastructure",
              body: "Robust PostgreSQL databases, distributed Redis queues, and resilient API gateways that scale smoothly.",
              href: "/services/backend-api",
            },
          ].map(({ num, icon: Icon, title, body, href }) => (
            <div
              key={num}
              className="rounded-2xl p-8 bg-[#0C0F17] border border-white/[0.08] hover-lift flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#B4F33C]">{num}</span>
                </div>
                <h4 className="text-[17px] font-bold text-white mb-3">
                  {title}
                </h4>
                <p className="text-[14px] leading-relaxed text-slate-300 mb-6">{body}</p>
              </div>
              <Link href={href} className="btn-text text-[13px]">
                <span>System Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
