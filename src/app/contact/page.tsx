import { CTADiagnostic } from "@/components/cta-diagnostic";

export const metadata = {
  title: "Contact & Project Diagnostic | CustomCoreAI",
  description:
    "Tell us about your operational challenge or custom software requirements. Get a senior architectural analysis and quote within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#08090D]">
      <CTADiagnostic />
    </div>
  );
}
