import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function LeadArchitect() {
  return (
    <section
      id="architect"
      className="editorial-section relative bg-[#08090D] border-y border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Statement & Direct Access Manifesto */}
          <div className="lg:col-span-7">
            <span className="eyebrow block mb-5">Engineering Discipline</span>
            <h2 className="display-lg text-white leading-tight">
              No layers between you and the engineers.
            </h2>
            
            <p className="text-[18px] sm:text-[20px] font-medium text-[#B4F33C] mt-6 leading-snug">
              Direct communication. Direct accountability.
            </p>

            <div className="mt-6 space-y-3.5">
              {[
                "No junior account managers filtering or diluting your business requirements.",
                "No off-the-shelf templates disguised as custom architecture.",
                "Direct Slack channel access to the senior engineer building your core systems.",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B4F33C] mt-2.5 shrink-0" />
                  <p className="text-[15px] sm:text-[16px] leading-relaxed text-slate-300">{line}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Founder & Lead Architect Identity */}
          <div className="reveal reveal-delay-1 lg:col-span-5">
            <div className="rounded-2xl p-7 sm:p-8 bg-[#0D1017] border border-white/10 shadow-xl">
              {/* Avatar & Title block */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                <div className="relative shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/founder.jpg"
                    alt="Kofil — Founder & Lead Systems Architect"
                    className="w-16 h-16 rounded-2xl object-cover border border-white/20 shadow-md"
                  />
                  <span
                    className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-[#0D1017] bg-[#B4F33C]"
                    title="Active Lead Engineer"
                  />
                </div>
                <div>
                  <div className="text-[17px] font-semibold text-white flex items-center gap-2">
                    Kofil
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded-full font-bold bg-[#B4F33C]/10 text-[#B4F33C] border border-[#B4F33C]/30">
                      LEAD ARCHITECT
                    </span>
                  </div>
                  <div className="font-mono text-[12px] mt-1 text-slate-400">
                    Founder &amp; Senior Engineer · Austin, TX
                  </div>
                </div>
              </div>

              {/* Specific Engineering Credentials */}
              <div className="space-y-3 font-mono text-[12px]">
                {[
                  { label: "FOCUS", value: "Bespoke Backends, CRM & AI Voice Systems" },
                  { label: "CORE STACK", value: "TypeScript · Next.js · Postgres · Redis · Twilio" },
                  { label: "ACCESS", value: "Direct Slack channel & weekly architecture demos" },
                  { label: "HANDOFF", value: "100% full IP & repository ownership transferred" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <span className="font-semibold text-slate-400 w-20 shrink-0">
                      {item.label}
                    </span>
                    <span className="text-slate-200">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/book-a-call"
                className="btn-primary mt-7 w-full justify-center text-[13px]"
              >
                <span>Schedule an Architecture Call</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Physical Studio & Team Presence — Real imagery */}
        <div className="reveal mt-16 pt-12 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="eyebrow block mb-2">Physical Studio Presence</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Engineered in Austin, Texas. Zero offshore outsourcing.
              </h3>
            </div>
            <span className="font-mono text-[12px] text-slate-400">
              Direct access to our physical development lab
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Studio Environment Image */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 relative group bg-[#0D1017]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/office-room.webp"
                alt="CustomCoreAI Austin Engineering Studio"
                className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                <div>
                  <span className="text-[14px] font-bold text-white block">Austin Systems Studio</span>
                  <span className="font-mono text-[11px] text-slate-300">Where custom architectures are planned, benchmarked, and deployed</span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/60 text-[#B4F33C] border border-[#B4F33C]/30 backdrop-blur-md">
                  In-House Lab
                </span>
              </div>
            </div>

            {/* Team Collaborative Review Image */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-white/10 relative group bg-[#0D1017]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/client.webp"
                alt="Direct Architecture Review Session"
                className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                <div>
                  <span className="text-[14px] font-bold text-white block">Direct Architecture Review</span>
                  <span className="font-mono text-[11px] text-slate-300">Sprint demos directly with client leadership</span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/60 text-white border border-white/20 backdrop-blur-md">
                  1-on-1 Review
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
