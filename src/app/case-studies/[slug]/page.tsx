import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudiesData, findCaseStudy } from "@/data/case-studies";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Workflow, 
  Calendar 
} from "lucide-react";

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  for (const c of caseStudiesData) {
    slugs.push({ slug: c.slug });
    if (c.aliases) {
      for (const a of c.aliases) {
        slugs.push({ slug: a });
      }
    }
  }
  return slugs;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = findCaseStudy(slug);
  if (!study) return { title: "Case Study Not Found" };

  return {
    title: `${study.title} | Case Study | CustomCoreAI`,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = findCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#08090D] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#B4F33C] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Hero Header */}
        <div className="rounded-3xl bg-[#0D1017] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#B4F33C]/10 border border-[#B4F33C]/30 text-[#B4F33C] font-semibold">
              {study.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {study.clientType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {study.title}
          </h1>

          <p className="mt-6 text-base text-slate-300 leading-relaxed max-w-3xl">
            {study.summary}
          </p>

          {/* Metric Bar */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            {study.metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-xl bg-[#08090D] border border-white/10">
                <div className="text-[11px] font-mono text-slate-400">{m.label}</div>
                <div className="text-2xl font-black font-mono text-[#B4F33C] mt-1">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem vs Solution 2-Column */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problem */}
          <div className="rounded-2xl bg-[#0D1017] border border-white/10 p-8 shadow-xl">
            <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
              01 • THE PROBLEM
            </div>
            <h2 className="text-lg font-bold text-white mb-3">The Operational Dilemma</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-2xl bg-[#0D1017] border border-white/10 p-8 shadow-xl">
            <div className="text-xs font-mono uppercase tracking-wider text-[#B4F33C] font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B4F33C]" />
              02 • THE SOLUTION
            </div>
            <h2 className="text-lg font-bold text-white mb-3">Custom Architecture</h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>

        {/* Architecture Pipeline Visualizer */}
        <div className="mt-10 rounded-2xl bg-[#0D1017] border border-white/10 p-8 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#B4F33C] font-semibold">
              <Workflow className="w-4 h-4" />
              <span>DATA FLOW PIPELINE & NODES</span>
            </div>
            <span className="text-[10px] font-mono text-slate-400 font-semibold">PRODUCTION ARCHITECTURE</span>
          </div>

          {/* Diagram Nodes */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {study.architecture.diagramNodes.map((node, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="px-4 py-2.5 rounded-xl bg-[#08090D] border border-white/15 text-xs font-mono text-slate-200 shadow-md">
                  {node}
                </div>
                {i < study.architecture.diagramNodes.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#B4F33C]" />
                )}
              </div>
            ))}
          </div>

          {/* Key Components */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3">
              Engineering Implementation Highlights:
            </div>
            <ul className="space-y-2.5">
              {study.architecture.keyComponents.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#B4F33C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-10 rounded-2xl bg-[#0D1017] border border-white/10 p-8 shadow-xl">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-4">
            Production Technology Stack:
          </div>
          <div className="flex flex-wrap gap-2.5">
            {study.architecture.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-[#08090D] border border-white/15 text-xs font-mono text-[#B4F33C]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-10 rounded-3xl bg-[#0D1017] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-gradient-to-b from-[#B4F33C]/10 to-transparent blur-[80px] pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white relative z-10">
            Need a similar system built for your company?
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-lg mx-auto relative z-10 leading-relaxed">
            We will audit your requirements, engineer the custom architecture, and deliver on fixed-scope milestone delivery.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3.5 relative z-10">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl text-sm font-bold text-[#08090D] bg-[#B4F33C] hover:bg-[#a3dc33] transition-all shadow-[0_0_25px_rgba(180,243,60,0.25)] flex items-center justify-center gap-2"
            >
              <span>Start Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-a-call"
              className="px-8 py-3.5 rounded-xl text-sm font-medium text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#B4F33C]" />
              <span>Book Architecture Audit</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
