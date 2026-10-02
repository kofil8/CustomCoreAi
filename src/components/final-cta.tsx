import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="editorial-section relative overflow-hidden bg-[#08090D] border-t border-white/[0.08]">
      {/* Subtle warm depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">

        {/* Eyebrow */}
        <div className="reveal flex items-center justify-center gap-2 mb-6">
          <span className="eyebrow">Start an Architecture Engagement</span>
        </div>

        {/* Headline */}
        <h2 className="reveal reveal-delay-1 display-xl text-white mb-6">
          Have an operational bottleneck <br />
          <span className="text-[#B4F33C]">custom software could solve?</span>
        </h2>

        {/* Subtext */}
        <p className="reveal reveal-delay-2 body-lg max-w-2xl mx-auto mb-12 text-slate-300">
          Walk us through what is broken, slow, or manual in your business. We will draft an architectural recommendation within 3 business days — direct engineer response, zero sales pressure.
        </p>

        {/* CTAs */}
        <div className="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-primary px-8 py-3.5 text-[15px]">
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link href="/book-a-call" className="btn-secondary px-8 py-3.5 text-[15px]">
            <span>Schedule Architecture Call</span>
          </Link>
        </div>

        {/* Social proof guarantee */}
        <p className="reveal reveal-delay-4 font-mono text-[12px] mt-10 text-slate-400">
          Direct conversation with a senior systems architect · 100% IP ownership · Austin, TX
        </p>
      </div>
    </section>
  );
}
