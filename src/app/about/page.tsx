import Link from "next/link";
import { Terminal, ShieldCheck, Cpu, Code2, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About CustomCoreAI | Senior Systems Engineering Studio",
  description:
    "Learn about CustomCoreAI: An engineering-first software and systems studio in Austin, TX built to solve complex business problems without agency fluff.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Direct Senior Engineers",
      description: "You work directly with senior software architects who design, write, and deploy your code. Zero layers of non-technical middlemen.",
      icon: Terminal,
    },
    {
      title: "100% Code & IP Ownership",
      description: "You own every single line of code, database schema, and deployment configuration. Zero vendor lock-in or recurring per-seat fees.",
      icon: ShieldCheck,
    },
    {
      title: "Deterministic, Practical AI",
      description: "We don't build generic chatbots or novelty demos. We engineer reliable, structured AI pipelines connected to your internal operational data.",
      icon: Cpu,
    },
    {
      title: "Built Around Your Workflow",
      description: "Your business model is your competitive moat. Software should adapt to you, not force your team into someone else's rigid template.",
      icon: Code2,
    },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#08090D]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="eyebrow block mb-4">
            Studio Profile
          </span>
          <h1 className="display-lg text-white">
            Built by engineers. <br />
            <span className="text-[#B4F33C]">Designed around your business.</span>
          </h1>
          <p className="body-lg mt-6 text-slate-300">
            CustomCoreAI was founded on a simple realization: modern businesses spend thousands of dollars every month on off-the-shelf software subscriptions that solve only 30% of their problems, while forcing their staff into chaotic manual workarounds.
          </p>
        </div>

        {/* Studio & Founder Visual Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-white/10 relative group bg-[#0D1017]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/office-room.webp"
              alt="Austin Engineering Studio"
              className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08090D] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
              <div>
                <span className="text-base font-bold text-white block">Austin, Texas Engineering Lab</span>
                <span className="font-mono text-xs text-slate-300">Where our team engineers custom backends, APIs, and AI telephony</span>
              </div>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-black/60 text-[#B4F33C] border border-[#B4F33C]/30 backdrop-blur-md">
                100% In-House
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 rounded-2xl p-7 bg-[#0D1017] border border-white/10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-white/[0.08]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/founder.jpg"
                  alt="Kofil"
                  className="w-16 h-16 rounded-2xl object-cover border border-white/20 shadow-md"
                />
                <div>
                  <div className="text-base font-semibold text-white">Kofil</div>
                  <div className="font-mono text-xs text-slate-400">Founder & Lead Systems Architect</div>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                &quot;We don&apos;t resell SaaS templates or outsource your project offshore. When you work with CustomCore, you have direct Slack and cell access to the engineer writing your system.&quot;
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] font-mono text-xs text-slate-400 space-y-1.5">
              <div>Headquarters: Austin, Texas</div>
              <div>Direct IP Handoff Guaranteed</div>
            </div>
          </div>
        </div>

        {/* Narrative Section */}
        <div className="rounded-2xl bg-[#0D1017] border border-white/10 p-8 sm:p-12 shadow-2xl mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">
            The CustomCore Engineering Philosophy
          </h2>
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Most digital agencies are marketing shops that assemble WordPress plugins or slap generic AI wrappers on top of basic templates.
            </p>
            <p>
              We operate as a <strong className="text-white">dedicated systems engineering consultancy</strong>. We combine robust backend engineering, cloud infrastructure, telephony automation, and domain-specific AI models to engineer platforms that become permanent operational assets for our clients.
            </p>
            <p>
              Whether we are building a 24/7 AI voice dispatcher for an Austin roofing contractor or architecting a multi-tenant B2B SaaS platform for an early-stage founder, we apply the exact same engineering standards: strict type-safety, ACID-compliant databases, sub-second latency, and complete code ownership.
            </p>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-8 rounded-2xl bg-[#0D1017] border border-white/10 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#B4F33C]/10 border border-[#B4F33C]/20 flex items-center justify-center text-[#B4F33C] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center p-12 rounded-3xl bg-[#0D1017] border border-white/10 relative overflow-hidden">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to work with a real engineering team?
          </h3>
          <p className="mt-3 text-base text-slate-300 max-w-lg mx-auto">
            Schedule an architectural consultation to discuss your operational challenges.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-8 py-3.5 text-sm"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
