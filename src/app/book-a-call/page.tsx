"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Video, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Terminal,
  Sparkles,
  Check
} from "lucide-react";

export default function BookACallPage() {
  const [selectedDate, setSelectedDate] = useState("Tomorrow");
  const [selectedTime, setSelectedTime] = useState("10:00 AM CST");
  const [booked, setBooked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");

  const dates = ["Tomorrow", "Wednesday", "Thursday", "Friday", "Next Monday"];
  const times = [
    "09:30 AM CST",
    "10:00 AM CST",
    "11:15 AM CST",
    "01:30 PM CST",
    "02:45 PM CST",
    "04:00 PM CST",
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#08090D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B4F33C]/10 border border-[#B4F33C]/25 text-xs font-mono font-bold text-[#B4F33C] mb-4">
            <CalendarIcon className="w-3.5 h-3.5" />
            <span>DISCOVERY CONSULTATION</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Schedule a 30-Minute <br />
            <span className="text-[#B4F33C]">
              Architecture Review.
            </span>
          </h1>
          <p className="mt-4 text-base text-slate-300">
            Meet 1-on-1 with a senior systems engineer. We&apos;ll screen-share, inspect your current operational workflow, and outline what the right custom solution looks like.
          </p>
        </div>

        {/* Booking Card */}
        <div className="rounded-2xl bg-[#0D1017] border border-white/10 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {booked ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#B4F33C]/10 border border-[#B4F33C]/30 flex items-center justify-center mx-auto text-[#B4F33C]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">Consultation Confirmed!</h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, {name}. A Google Meet invitation and calendar confirmation have been sent to <strong className="text-[#B4F33C]">{email}</strong> for <strong>{selectedDate} at {selectedTime}</strong>.
              </p>
              <div className="pt-6">
                <Link
                  href="/"
                  className="btn-primary inline-flex text-xs"
                >
                  <span>Return to Homepage →</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Call Agenda & Guarantees */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white">What We Will Cover:</h3>
                  <ul className="mt-4 space-y-3">
                    <li className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#B4F33C] shrink-0 mt-0.5" />
                      <span>Audit your current software stack, spreadsheets &amp; manual tasks</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#B4F33C] shrink-0 mt-0.5" />
                      <span>Diagnose lead response times and missed call bottlenecks</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-[#B4F33C] shrink-0 mt-0.5" />
                      <span>Formulate an actionable architecture and milestone roadmap</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/[0.08] space-y-2.5 text-xs font-mono text-slate-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-white" />
                    <span>Duration: 30 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-white" />
                    <span>Format: Google Meet / Zoom Screen-share</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#B4F33C]" />
                    <span>No sales pitch • Direct engineering advice only</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Time Slot Picker & Details */}
              <div className="lg:col-span-7">
                <form onSubmit={handleBooking} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      1. Select Available Day:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {dates.map((date) => (
                        <button
                          type="button"
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                            selectedDate === date
                              ? "bg-[#B4F33C] text-[#08090D] border-[#B4F33C] font-bold shadow-sm"
                              : "bg-[#111420] text-slate-400 border-white/10 hover:text-white"
                          }`}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2">
                      2. Select Time Window:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {times.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setSelectedTime(t)}
                          className={`p-2 rounded-lg text-xs font-mono transition-all border text-center ${
                            selectedTime === t
                              ? "bg-[#B4F33C] text-[#08090D] border-[#B4F33C] font-bold shadow-sm"
                              : "bg-[#111420] text-slate-400 border-white/10 hover:text-white"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 space-y-3">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 rounded-xl bg-[#080A0F] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B4F33C]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">
                          Business / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Apex Roofing"
                          value={business}
                          onChange={(e) => setBusiness(e.target.value)}
                          className="w-full px-4 py-2 rounded-xl bg-[#080A0F] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B4F33C]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@apexroofing.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-2 rounded-xl bg-[#080A0F] border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#B4F33C]"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center text-sm py-3 mt-4"
                  >
                    <span>Confirm Strategy Call for {selectedDate} @ {selectedTime}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
