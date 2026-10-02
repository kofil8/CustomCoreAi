import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="pt-20 pb-12 bg-[#08090D] border-t border-white/[0.08]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-white/[0.08]">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-bold text-[16px] tracking-tight text-white">CustomCore</span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#B4F33C] text-[#08090D]">
                AI
              </span>
            </div>
            <p className="text-[14px] leading-relaxed max-w-sm text-slate-300">
              Custom backend systems, AI voice telephony, and proprietary operations platforms — engineered around your business mechanics.
            </p>
            <div className="flex flex-col gap-1.5 mt-6 font-mono text-[12px] text-slate-400">
              <span>Austin, Texas · Serving US Businesses</span>
              <span>architect@customcoreai.com</span>
            </div>
            <div className="mt-5 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#B4F33C] inline-block" />
              <span className="font-mono text-[12px] text-slate-300 font-medium">
                Taking new client projects · Direct senior access
              </span>
            </div>
          </div>

          {/* Links: Systems */}
          <div className="md:col-span-2">
            <div className="font-mono text-[11px] font-bold uppercase tracking-wider mb-4 text-white">
              Systems
            </div>
            <ul className="space-y-3">
              {[
                ["AI Voice Receptionist", "/services/ai-receptionist"],
                ["Custom Software", "/services/custom-software"],
                ["Operations CRM", "/services/crm"],
                ["AI Workflows", "/services/ai-applications"],
                ["Backend APIs", "/services/backend-api"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-slate-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Solutions */}
          <div className="md:col-span-2">
            <div className="font-mono text-[11px] font-bold uppercase tracking-wider mb-4 text-white">
              Industries
            </div>
            <ul className="space-y-3">
              {[
                ["Roofing & HVAC", "/solutions/local-businesses"],
                ["Plumbing & Electrical", "/solutions/local-businesses"],
                ["Cleaning & Clinics", "/solutions/local-businesses"],
                ["SaaS Startups", "/solutions/startups"],
                ["Growing Companies", "/solutions/growing-businesses"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-slate-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Company */}
          <div className="md:col-span-3">
            <div className="font-mono text-[11px] font-bold uppercase tracking-wider mb-4 text-white">
              Company
            </div>
            <ul className="space-y-3">
              {[
                ["Engineering Work", "/case-studies"],
                ["How We Work", "/process"],
                ["About", "/about"],
                ["Book Architecture Audit", "/book-a-call"],
                ["Start a Project", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className={`text-[13px] transition-colors ${
                      label === "Book Architecture Audit" ? "text-white font-semibold underline decoration-white/40" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[12px] text-slate-400">
          <span>© 2026 CustomCoreAI. Proprietary systems for US businesses.</span>
          <div className="flex items-center gap-6">
            <span>Direct Engineering</span>
            <span>Zero Vendor Lock-in</span>
            <span className="text-white font-medium">Austin, TX</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
