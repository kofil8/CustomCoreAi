"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/#services" },
  { name: "Work", href: "/case-studies" },
  { name: "Process", href: "/process" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090D]/92 backdrop-blur-md border-b border-white/[0.08] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">

        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-bold text-[16px] tracking-tight text-white group-hover:text-neutral-200 transition-colors">
            CustomCore
          </span>
          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#B4F33C] text-[#08090D]">
            AI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-2 text-[13px] font-medium text-slate-300 hover:text-white rounded-lg transition-colors hover:bg-white/[0.04]"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-[12px] font-mono text-slate-400">
            Austin, TX · US Focus
          </span>
          <Link
            href="/book-a-call"
            className="btn-primary text-[13px] py-2 px-4"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white border border-white/[0.1]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.08] bg-[#08090D] px-5 pt-5 pb-7 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-sm font-medium text-slate-300 hover:text-white border-b border-white/[0.06]"
            >
              {link.name}
            </a>
          ))}
          <Link
            href="/book-a-call"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary w-full justify-center text-[13px] mt-4"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </header>
  );
}
