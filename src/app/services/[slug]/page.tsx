import { notFound } from "next/navigation";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Layers, 
  Calendar,
} from "lucide-react";

export function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | CustomCoreAI Engineering`,
    description: service.headline,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-36 pb-24 min-h-screen bg-[#08090D] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Link */}
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-[#B4F33C] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Capabilities</span>
        </Link>

        {/* Hero Header */}
        <div className="rounded-3xl bg-[#0D1017] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#B4F33C]/10 border border-[#B4F33C]/30 text-xs font-mono text-[#B4F33C] font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#B4F33C]" />
            <span>{service.tag}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-[#B4F33C] font-mono font-medium">
            {service.headline}
          </p>

          <p className="mt-6 text-base text-slate-300 leading-relaxed max-w-3xl">
            {service.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-white/10">
            <Link
              href="/#contact"
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-[#08090D] bg-[#B4F33C] hover:bg-[#a3dc33] transition-all shadow-[0_0_20px_rgba(180,243,60,0.25)] flex items-center gap-2"
            >
              <span>Scope Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/book-a-call"
              className="px-6 py-3.5 rounded-xl text-sm font-medium text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 transition-colors flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#B4F33C]" />
              <span>Schedule Architecture Audit</span>
            </Link>
          </div>
        </div>

        {/* Section 1: The Problem Solved */}
        <div className="mt-10 rounded-2xl bg-[#0D1017] border border-white/10 p-8 shadow-xl">
          <div className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            The Core Operational Bottleneck:
          </div>
          <h2 className="text-xl font-bold text-white">
            {service.problemSolved}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Target Operation: <strong className="text-slate-200">{service.targetAudience}</strong>
          </p>
        </div>

        {/* Section 2: Technical Architecture & Deliverables Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Architecture Specifications */}
          <div className="rounded-2xl bg-[#0D1017] border border-white/10 p-8 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#B4F33C] font-semibold mb-4">
              <Terminal className="w-4 h-4" />
              <span>ARCHITECTURE SPECIFICATIONS</span>
            </div>
            <ul className="space-y-3">
              {service.architectureSpecs.map((spec, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#B4F33C] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Standard Deliverables */}
          <div className="rounded-2xl bg-[#0D1017] border border-white/10 p-8 shadow-xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#B4F33C] font-semibold mb-4">
              <Layers className="w-4 h-4" />
              <span>INCLUDED DELIVERABLES</span>
            </div>
            <ul className="space-y-3">
              {service.deliverables.map((deliv, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B4F33C] shrink-0 mt-1.5" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Measurable Outcomes */}
        <div className="mt-10 rounded-2xl bg-[#0D1017] border border-white/10 p-8 shadow-xl">
          <div className="text-xs font-mono uppercase tracking-wider text-[#B4F33C] font-semibold mb-4">
            Guaranteed Business Outcomes:
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.outcomes.map((outcome, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#08090D] border border-white/10 text-xs text-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B4F33C] shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-10 rounded-3xl bg-[#0D1017] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-gradient-to-b from-[#B4F33C]/10 to-transparent blur-[80px] pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white relative z-10">
            Ready to build this system for your business?
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-lg mx-auto relative z-10 leading-relaxed">
            Get an exact technical specification and milestone breakdown from our engineering team within 24 hours.
          </p>
          <div className="mt-6 flex justify-center relative z-10">
            <Link
              href="/#contact"
              className="px-8 py-3.5 rounded-xl text-sm font-bold text-[#08090D] bg-[#B4F33C] hover:bg-[#a3dc33] transition-all shadow-[0_0_25px_rgba(180,243,60,0.25)] flex items-center gap-2"
            >
              <span>Start Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
