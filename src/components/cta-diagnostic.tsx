"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Video, 
  ArrowRight,
  Check,
  FileCode,
  Zap
} from "lucide-react";

export function CTADiagnostic() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    bottleneck: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [leadId, setLeadId] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isNameValid = formData.name.trim().length >= 2;
  const isBusinessValid = formData.business.trim().length >= 2;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isBottleneckValid = formData.bottleneck.trim().length >= 10;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          business: formData.business,
          email: formData.email,
          projectType: "System Architecture & Automation",
          problemDescription: formData.bottleneck,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setLeadId(data.leadId);
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || "Failed to submit brief. Please check fields.");
      }
    } catch {
      setErrorMsg("Network error. Please try again or book directly via calendar.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="editorial-section relative bg-[#08090D] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 md:mb-18">
          <span className="eyebrow block mb-4">
            Initial Consultation
          </span>
          <h2 className="display-lg text-white">
            Have a business problem software could solve?
          </h2>
          <p className="text-[17px] sm:text-[19px] mt-4 text-slate-300 leading-relaxed">
            Choose your preferred approach: Submit a 2-minute architectural brief below, or book a direct 30-minute video audit with our lead systems architect.
          </p>
        </div>

        {/* 2 High-Converting Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Path 1: Streamlined Quick Project Brief (Left 7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0D1017] border border-white/10 p-7 sm:p-9 shadow-2xl">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#B4F33C]/10 border border-[#B4F33C]/30 flex items-center justify-center mx-auto text-[#B4F33C]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Brief Received</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Thank you, {formData.name}. Our lead architect will review your operational bottleneck and follow up with a technical assessment within 24 hours.
                </p>
                {leadId && (
                  <div className="text-xs font-mono text-[#B4F33C] px-3 py-1 rounded bg-[#080A0F] border border-[#B4F33C]/30 inline-block">
                    Reference: {leadId}
                  </div>
                )}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setLeadId(null);
                    }}
                    className="text-xs font-mono text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#B4F33C]/10 text-[#B4F33C] border border-[#B4F33C]/30 font-bold">
                      PATH 01
                    </span>
                    <h3 className="text-lg font-bold text-white">Quick Project Brief</h3>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    No sales runaround. Outline your workflow friction and hear back from a senior engineer.
                  </p>
                  {errorMsg && (
                    <div className="mt-3 p-3 rounded-lg bg-rose-950/60 border border-rose-800 text-xs text-rose-300">
                      {errorMsg}
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1.5">
                      <span>Your Name *</span>
                      {isNameValid && <Check className="w-3.5 h-3.5 text-[#B4F33C]" />}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080A0F] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B4F33C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1.5">
                      <span>Business Name *</span>
                      {isBusinessValid && <Check className="w-3.5 h-3.5 text-[#B4F33C]" />}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Roofing Services"
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#080A0F] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B4F33C] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1.5">
                    <span>Work Email *</span>
                    {isEmailValid && <Check className="w-3.5 h-3.5 text-[#B4F33C]" />}
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@apexroofing.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080A0F] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B4F33C] transition-colors"
                  />
                </div>

                <div>
                  <label className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1.5">
                    <span>What operational bottleneck is costing you time or revenue? *</span>
                    {isBottleneckValid && <Check className="w-3.5 h-3.5 text-[#B4F33C]" />}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="e.g. We miss emergency customer calls after 5 PM, or our team spends 15 hours a week re-typing job data between Jobber and spreadsheets..."
                    value={formData.bottleneck}
                    onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#080A0F] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B4F33C] transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center text-sm py-3.5 cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Reviewing &amp; Submitting...</span>
                    ) : (
                      <>
                        <span>Send Brief to Lead Architect</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <div className="flex items-center justify-center gap-2 mt-2 text-[11px] font-mono text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B4F33C]" />
                    <span>Zero sales pressure · Direct engineer assessment within 24 hours</span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Path 2: Direct 30-Minute Architecture Audit (Right 5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0D1017] border border-white/10 p-7 sm:p-9 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-4 border-b border-white/[0.08] mb-5">
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/10 text-white border border-white/20 font-semibold">
                  PATH 02
                </span>
                <h3 className="text-lg font-bold text-white">Direct Screen-Share</h3>
              </div>

              <h4 className="text-2xl font-bold text-white tracking-tight">
                Book a 30-Minute Architecture Audit.
              </h4>

              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Prefer discussing your system live? Pick a time directly on our calendar. We&apos;ll screen-share, inspect your current tools, and identify high-leverage software solutions.
              </p>

              {/* What You Receive Deliverable Card Graphic */}
              <div className="p-4 rounded-xl bg-[#0A0D15] border border-[#B4F33C]/25 mt-5 space-y-2.5">
                <div className="flex items-center gap-2 text-[#B4F33C]">
                  <FileCode className="w-3.5 h-3.5" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
                    Deliverables On This Screen-Share:
                  </span>
                </div>
                <div className="space-y-1.5 text-[11px] font-mono text-slate-300">
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#B4F33C] shrink-0 mt-0.5" />
                    <span>Live workflow &amp; tool sprawl diagnostic</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#B4F33C] shrink-0 mt-0.5" />
                    <span>Database &amp; telephony feasibility blueprint</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#B4F33C] shrink-0 mt-0.5" />
                    <span>Fixed-milestone timeline &amp; IP ownership quote</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3 pt-5 border-t border-white/[0.08] text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-white" />
                  <span>30 minutes • Google Meet screen-share</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Video className="w-4 h-4 text-white" />
                  <span>1-on-1 directly with Lead Systems Architect</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#B4F33C]" />
                  <span>Zero pitch • Pure engineering exploration</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <Link
                href="/book-a-call"
                className="btn-primary w-full justify-center text-sm py-3"
              >
                <Calendar className="w-4 h-4 text-[#08090D]" />
                <span>Select Time on Calendar →</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
