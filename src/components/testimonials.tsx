"use client";

import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We were losing every call that came in after 5 PM — storm jobs, weekend emergencies, all of it. CustomCoreAI built an AI receptionist that's now our best employee. It never sleeps, never misses a call, and books the job straight into our calendar. Revenue from after-hours alone paid for the system in the first 6 weeks.",
    name: "Marcus T.",
    title: "Owner, Apex Premier Roofing",
    location: "Austin, TX",
    industry: "Roofing Contractor",
    result: "+$22k/mo after-hours revenue captured",
    avatar: "MT",
    accentColor: "blue",
  },
  {
    quote:
      "Before CustomCoreAI, my dispatcher was spending 3 hours every morning just copying job notes from texts into our spreadsheets. I was paying $890/month for ServiceTitan and only using 20% of it. Now we have a custom operations hub that does exactly what we need — nothing more, nothing less. My team adapted in 2 days.",
    name: "Elena V.",
    title: "Operations Director, Titan Climate Solutions",
    location: "Scottsdale, AZ",
    industry: "HVAC Service Company",
    result: "14 hrs/week admin time eliminated",
    avatar: "EV",
    accentColor: "emerald",
  },
  {
    quote:
      "I came to CustomCoreAI frustrated because every SaaS tool we tried either did too much generic stuff we didn't need, or was missing the one workflow we specifically needed. They actually listened, built exactly what we specified, and delivered it 3 days early. That alone was shocking.",
    name: "James H.",
    title: "CEO, Summit Dental Group",
    location: "Nashville, TN",
    industry: "Multi-Location Dental Practice",
    result: "+220% same-day emergency booking fill rate",
    avatar: "JH",
    accentColor: "purple",
  },
  {
    quote:
      "As a technical founder, I was skeptical of agencies. I've been burned before — 8 weeks for a landing page, agencies who disappear. CustomCoreAI is different. They think like engineers first. The system architecture they delivered is cleaner than what most internal teams produce. We launched our SaaS beta 2 months ahead of my original plan.",
    name: "Ryan K.",
    title: "Founder & CTO, ScheduleOS",
    location: "Denver, CO",
    industry: "B2B SaaS Startup",
    result: "Launched SaaS beta 2 months early",
    avatar: "RK",
    accentColor: "indigo",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsAnimating(false);
    }, 200);
  };

  const next = () => goTo((activeIndex + 1) % testimonials.length);
  const prev = () => goTo((activeIndex - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    autoPlayRef.current = setInterval(next, 6000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [activeIndex]);

  const t = testimonials[activeIndex];

  return (
    <section className="py-24 md:py-32 relative bg-[#08090D] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#B4F33C]/10 border border-[#B4F33C]/20 text-[#B4F33C] text-xs font-mono font-medium tracking-wide mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B4F33C] animate-pulse" />
              CLIENT OUTCOMES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              From Real Operators, Not Marketing Copy.
            </h2>
          </div>
          {/* Navigation arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl bg-[#0D1017] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/25 transition-all shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-xl bg-[#0D1017] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-white/25 transition-all shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div
          className={`rounded-3xl bg-[#0D1017] border border-white/10 shadow-2xl p-8 sm:p-10 lg:p-12 transition-opacity duration-200 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Quote */}
            <div className="lg:col-span-8">
              <Quote className="w-8 h-8 text-[#B4F33C]/40 mb-4" />
              <blockquote className="text-lg sm:text-xl text-white font-medium leading-relaxed tracking-tight">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Stars */}
              <div className="flex items-center gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Attribution */}
              <div className="mt-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#B4F33C]/10 border border-[#B4F33C]/30 flex items-center justify-center text-[#B4F33C] text-sm font-bold font-mono">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-slate-400">
                    {t.title} · {t.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Outcome Panel */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-5 rounded-xl bg-[#08090D] border border-white/10">
                <div className="text-[10px] font-mono uppercase text-slate-400 mb-1 font-semibold">Industry</div>
                <div className="text-sm font-bold text-white">{t.industry}</div>
              </div>
              <div className="p-5 rounded-xl bg-[#B4F33C]/10 border border-[#B4F33C]/30">
                <div className="text-[10px] font-mono uppercase text-[#B4F33C] mb-1 font-semibold">Measured Outcome</div>
                <div className="text-sm font-bold text-white leading-snug">{t.result}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 h-1.5 bg-[#B4F33C]"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
