const capabilities = [
  "Custom Software",
  "AI Voice Telephony",
  "Operations CRM",
  "Backend Architecture",
  "SaaS Engineering",
  "Automated Workflows",
];

export function TrustStrip() {
  return (
    <div
      className="border-y overflow-hidden bg-[#0A0C12]/90 backdrop-blur-sm border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4.5 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Capabilities - High Contrast */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
          {capabilities.map((cap) => (
            <div key={cap} className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              <span className="font-mono text-[12px] font-medium text-slate-300">
                {cap}
              </span>
            </div>
          ))}
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-2.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#B4F33C] animate-pulse inline-block" />
          <span className="font-mono text-[12px] text-slate-200 font-medium">
            Austin, TX · Direct Senior Engineers Active
          </span>
        </div>
      </div>
    </div>
  );
}
