import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowRight, Layers, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Engineering Services & Systems | CustomCoreAI",
  description:
    "Explore CustomCoreAI engineering capabilities: Custom Software, AI Voice Receptionists, Custom CRM Hubs, SaaS Engineering, and Scalable Backend APIs.",
};

export default function ServicesPage() {
  return (
    <div className="pt-36 pb-24 min-h-screen bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#B4F33C]/10 border border-[#B4F33C]/20 text-xs font-mono text-[#B4F33C] font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>CUSTOMCORE CAPABILITIES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Software & AI Systems Built to{" "}
            <span className="text-[#B4F33C]">
              Drive Business Profit.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We don&apos;t build generic template websites. We engineer high-performance business operating systems, autonomous voice dispatchers, and custom software designed exclusively around your operations.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {servicesData.map((service, index) => (
            <div
              key={service.slug}
              className="rounded-3xl bg-[#0D1017] border border-white/10 p-8 sm:p-10 shadow-2xl hover:border-[#B4F33C]/30 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#B4F33C]/10 border border-[#B4F33C]/30 text-[#B4F33C] font-semibold">
                      {service.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      0{index + 1} // CAPABILITY
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-sm font-mono text-[#B4F33C] mt-1 font-medium">
                    {service.headline}
                  </p>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                        Key Measurable Outcomes:
                      </div>
                      <ul className="space-y-1.5">
                        {service.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B4F33C] shrink-0" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2.5">
                        Standard Deliverables:
                      </div>
                      <ul className="space-y-1.5">
                        {service.deliverables.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                            <span className="text-[#B4F33C] font-mono text-[10px]">❖</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:self-center shrink-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-[#08090D] bg-[#B4F33C] hover:bg-[#a3dc33] transition-all shadow-[0_0_20px_rgba(180,243,60,0.25)]"
                  >
                    <span>View Technical Breakdown</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
