import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { LeadArchitect } from "@/components/lead-architect";
import { ProblemSection } from "@/components/problem-section";
import { ServicesBento } from "@/components/services-bento";
import { AIReceptionistDemo } from "@/components/ai-receptionist-demo";
import { ArchitectureVisualizer } from "@/components/architecture-visualizer";
import { SelectedWork } from "@/components/selected-work";
import { WhoWeBuildFor } from "@/components/who-we-build-for";
import { WhyCustomCore } from "@/components/why-customcore";
import { ProcessSection } from "@/components/process-section";
import { CTADiagnostic } from "@/components/cta-diagnostic";
import { FinalCTA } from "@/components/final-cta";
import { FloatingCTA } from "@/components/floating-cta";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 01. Hero — Software Built Around Your Business */}
      <Hero />

      {/* 02. Capability strip */}
      <TrustStrip />

      {/* 03. Founder / No Layers Statement */}
      <LeadArchitect />

      {/* 04. Problem — Your business isn't standard */}
      <ProblemSection />

      {/* 05. Services — Hierarchy: AI Receptionist → Custom Software → others */}
      <ServicesBento />

      {/* 06. AI Receptionist interactive product demo */}
      <AIReceptionistDemo />

      {/* 07. Architecture — proof layer */}
      <ArchitectureVisualizer />

      {/* 08. Selected Work — large project case studies */}
      <SelectedWork />

      {/* 09. Who We Build For — problem scenarios */}
      <WhoWeBuildFor />

      {/* 10. Why CustomCoreAI */}
      <WhyCustomCore />

      {/* 11. Process — horizontal timeline */}
      <ProcessSection />

      {/* 12. Contact form / Brief */}
      <CTADiagnostic />

      {/* 13. Final CTA — full-width impact */}
      <FinalCTA />

      {/* 14. Floating Sticky CTA for continuous conversion */}
      <FloatingCTA />
    </div>
  );
}
