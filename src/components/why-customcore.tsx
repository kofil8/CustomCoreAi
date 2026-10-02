export function WhyCustomCore() {
  const differentiators = [
    {
      heading: "Direct Senior Engineering",
      body: "You partner directly with the systems architect who plans and writes your code. Your requirements never get watered down across multiple tiers of account managers.",
    },
    {
      heading: "Workflow Fidelity",
      body: "We audit your real daily dispatch, quoting formulas, and operations first. We construct the software around your exact mechanics, not around generic assumptions.",
    },
    {
      heading: "100% Code & IP Ownership",
      body: "Upon deployment, all source code, database migrations, and infrastructure scripts are transferred to your repository. Zero recurring licensing fees or vendor lock-in.",
    },
    {
      heading: "Deterministic AI Infrastructure",
      body: "We design resilient AI pipelines with human-in-the-loop controls, audit trails, and strict schema validation. No hallucinating toys or broken workflows.",
    },
  ];

  return (
    <section className="editorial-section relative bg-[#08090D] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Section Header */}
        <div className="reveal mb-20 md:mb-28 max-w-3xl">
          <span className="eyebrow block mb-5">The CustomCore Standard</span>
          <h2 className="display-lg text-white">
            Why growing companies choose CustomCore <br />
            <span className="text-slate-400">over agencies and freelancers.</span>
          </h2>
        </div>

        {/* 4 Differentiators — Asymmetric Editorial Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {differentiators.map((d, i) => (
            <div
              key={d.heading}
              className={`reveal${i > 0 ? ` reveal-delay-${Math.min(i, 4)}` : ""} flex gap-5`}
            >
              <span className="w-2 h-2 rounded-full bg-[#B4F33C] mt-2.5 shrink-0 shadow-[0_0_8px_rgba(180,243,60,0.4)]" />
              <div>
                <h3 className="display-sm text-white mb-3">{d.heading}</h3>
                <p className="text-[15px] leading-relaxed text-slate-300">{d.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Metrics Strip */}
        <div className="reveal mt-20 pt-14 border-t border-white/[0.08]">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: "Senior", unit: "Only", label: "Architect-level systems engineering" },
              { value: "100%", unit: "Transfer", label: "Intellectual property ownership" },
              { value: "6–8", unit: "Weeks", label: "Average timeline to production handoff" },
              { value: "Zero", unit: "Lock-in", label: "Standardized TypeScript & Postgres stack" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="font-bold text-3xl sm:text-4xl text-white">{stat.value}</span>
                  <span className="font-mono text-[12px] font-bold text-[#B4F33C] uppercase tracking-wider">{stat.unit}</span>
                </div>
                <p className="text-[13px] leading-snug text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
