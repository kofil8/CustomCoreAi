import { notFound } from "next/navigation";
import Link from "next/link";
import { solutionsData } from "@/data/solutions";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  AlertTriangle,
  Calendar
} from "lucide-react";

export function generateStaticParams() {
  return solutionsData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);
  if (!solution) return { title: "Solution Not Found" };

  return {
    title: `${solution.title} | CustomCoreAI Solutions`,
    description: solution.headline,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="pt-36 pb-24 min-h-screen bg-[#08090D] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#B4F33C] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Solutions</span>
        </Link>

        {/* Hero Banner */}
        <div className="rounded-3xl bg-[#0D1017] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#B4F33C]/10 border border-[#B4F33C]/30 text-xs font-mono text-[#B4F33C] font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B4F33C]" />
            <span>{solution.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {solution.title}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-[#B4F33C] font-mono font-medium">
            {solution.headline}
          </p>

          <p className="mt-6 text-base text-slate-300 leading-relaxed max-w-3xl">
            {solution.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
            <Link
              href="/#contact"
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-[#08090D] bg-[#B4F33C] hover:bg-[#a3dc33] transition-all shadow-[0_0_20px_rgba(180,243,60,0.25)] flex items-center gap-2"
            >
              <span>{solution.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-a-call"
              className="px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#B4F33C]" />
              <span>Book Discovery Call</span>
            </Link>
          </div>
        </div>

        {/* Section 1: The Pains We Eliminate */}
        <div className="mt-10 rounded-2xl bg-[#0D1017] border border-white/10 p-8 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-semibold mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>OPERATIONAL PAIN POINTS WE ELIMINATE</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {solution.primaryPains.map((pain, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#08090D] border border-white/10 text-xs text-slate-300 flex items-start gap-3">
                <span className="text-rose-400 font-bold shrink-0 mt-0.5">✕</span>
                <span className="leading-relaxed">{pain}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Custom Systems We Engineer */}
        <div className="mt-10">
          <div className="text-xs font-mono uppercase tracking-wider text-[#B4F33C] font-semibold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B4F33C]" />
            The CustomCoreAI Solution Suite:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {solution.customSolutions.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#0D1017] border border-white/10 p-6 shadow-xl hover:border-[#B4F33C]/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#B4F33C] shrink-0" />
                  <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Architecture Highlights */}
        <div className="mt-10 rounded-2xl bg-[#0D1017] border border-white/10 p-8 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[#B4F33C] font-semibold mb-4">
            <Terminal className="w-4 h-4" />
            <span>TECHNICAL ARCHITECTURE ADVANTAGES</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {solution.architectureHighlights.map((highlight, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-[#08090D] border border-white/10 text-xs text-slate-200 flex items-center gap-2.5">
                <span className="text-[#B4F33C] font-mono text-[10px]">❖</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bridge */}
        <div className="mt-16 text-center p-10 rounded-3xl bg-[#0D1017] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-gradient-to-b from-[#B4F33C]/10 to-transparent blur-[80px] pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white relative z-10">
            Schedule an architectural review for your business.
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-lg mx-auto relative z-10 leading-relaxed">
            We will analyze your existing workflow, identify high-friction bottlenecks, and engineer a fixed-milestone system roadmap.
          </p>
          <div className="mt-6 flex justify-center relative z-10">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl text-sm font-bold text-[#08090D] bg-[#B4F33C] hover:bg-[#a3dc33] transition-all shadow-[0_0_25px_rgba(180,243,60,0.25)] flex items-center gap-2"
            >
              <span>Request Custom System Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
