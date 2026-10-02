"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show once scrolled past hero (~700px)
      if (window.scrollY > 700) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <a
        href="#contact"
        className="group inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-mono text-[12px] font-bold text-[#08090D] bg-[#B4F33C] hover:bg-[#c6f958] shadow-[0_6px_24px_rgba(180,243,60,0.35)] transition-all duration-200 hover:scale-105 active:scale-95 border border-[#B4F33C]"
        aria-label="Start a project with CustomCoreAI"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#08090D] animate-ping" />
        <span>Start a Project</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
