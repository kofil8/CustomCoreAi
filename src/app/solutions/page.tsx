import Link from "next/link";
import { solutionsData } from "@/data/solutions";
import { ArrowRight, ShieldCheck, Building2, Rocket, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Industry Solutions & Client Archetypes | CustomCoreAI",
  description:
    "Tailored systems engineering for US Local Service Businesses, Tech Startups, and Growing $2M–$25M Companies.",
};

export default function SolutionsPage() {
  const icons = [Building2, Rocket, TrendingUp];

  return (
    <div className="pt-36 pb-24 min-h-screen bg-[#08090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#B4F33C]/10 border border-[#B4F33C]/20 text-xs font-mono text-[#B4F33C] font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>WHO WE SERVE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Engineered Specifically For{" "}
            <span className="text-[#B4F33C]">
              Your Business Model.
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We don&apos;t believe in one-size-fits-all software. Explore how our custom engineering solves the specific operational bottlenecks of local service businesses, high-growth startups, and established multi-location operators.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutionsData.map((solution, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={solution.slug}
                className="rounded-3xl bg-[#0D1017] border border-white/10 p-8 flex flex-col justify-between hover:border-[#B4F33C]/30 transition-all duration-300 shadow-2xl relative group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#08090D] border border-white/15 flex items-center justify-center text-[#B4F33C] mb-6 group-hover:scale-105 transition-transform shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#B4F33C]/10 border border-[#B4F33C]/30 text-[#B4F33C] font-semibold">
                    {solution.badge}
                  </span>

                  <h2 className="text-2xl font-bold text-white mt-4 tracking-tight">
                    {solution.title}
                  </h2>

                  <p className="mt-2 text-xs font-mono text-[#B4F33C] font-medium">
                    {solution.headline}
                  </p>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {solution.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                      Primary Operational Pain Points:
                    </div>
                    <ul className="space-y-2">
                      {solution.primaryPains.slice(0, 3).map((pain, i) => (
                        <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                          <span className="text-rose-400 font-bold shrink-0">✕</span>
                          <span>{pain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10">
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-[#08090D] bg-[#B4F33C] hover:bg-[#a3dc33] transition-all shadow-[0_0_15px_rgba(180,243,60,0.2)]"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
