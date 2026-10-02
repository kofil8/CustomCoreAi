"use client";

import { useState, useEffect, useRef } from "react";
import { 
  PhoneCall, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Terminal, 
  Calendar, 
  MapPin, 
  ArrowRight,
  Building,
  Wrench,
  Stethoscope,
  Check,
  Sparkles
} from "lucide-react";

interface Scenario {
  id: string;
  industry: string;
  icon: any;
  businessName: string;
  callerName: string;
  callerPhone: string;
  address: string;
  dialogue: {
    speaker: "ai" | "caller";
    text: string;
    timestamp: string;
  }[];
  extractedData: {
    customerName: string;
    phone: string;
    serviceAddress: string;
    issue: string;
    urgency: "HIGH" | "MEDIUM" | "EMERGENCY";
    estimateRange: string;
    scheduledSlot: string;
    assignedTech: string;
  };
}

const scenarios: Scenario[] = [
  {
    id: "roofing",
    industry: "Roofing Emergency",
    icon: Building,
    businessName: "Apex Premier Roofing",
    callerName: "Marcus Sterling",
    callerPhone: "+1 (512) 782-9014",
    address: "4108 Oakridge Way, Austin, TX",
    dialogue: [
      {
        speaker: "ai",
        text: "Thanks for calling Apex Premier Roofing! This is Sarah, the AI assistant. Are you calling regarding a new roof estimate or emergency storm repair?",
        timestamp: "00:03",
      },
      {
        speaker: "caller",
        text: "Hi Sarah, we just had heavy hail and water is dripping through my master bedroom ceiling. I need someone out here ASAP.",
        timestamp: "00:09",
      },
      {
        speaker: "ai",
        text: "I understand Marcus. Water intrusion is classified as an immediate emergency. What is the address of the property?",
        timestamp: "00:15",
      },
      {
        speaker: "caller",
        text: "It's 4108 Oakridge Way in Austin. 78745.",
        timestamp: "00:20",
      },
      {
        speaker: "ai",
        text: "Got it, 4108 Oakridge Way. I have an emergency inspection crew available today at 4:00 PM. Would that work?",
        timestamp: "00:27",
      },
      {
        speaker: "caller",
        text: "Today at 4:00 PM would be a lifesaver.",
        timestamp: "00:31",
      },
      {
        speaker: "ai",
        text: "You are confirmed for today at 4:00 PM with Senior Inspector Dave. I just texted your confirmation and tarping guidelines to your phone!",
        timestamp: "00:37",
      },
    ],
    extractedData: {
      customerName: "Marcus Sterling",
      phone: "+1 (512) 782-9014",
      serviceAddress: "4108 Oakridge Way, Austin, TX 78745",
      issue: "Active hail leak in master bedroom ceiling",
      urgency: "EMERGENCY",
      estimateRange: "Free Emergency Storm Diagnostic",
      scheduledSlot: "Today @ 4:00 PM",
      assignedTech: "Dave Miller (Senior Inspector)",
    },
  },
  {
    id: "hvac",
    industry: "HVAC After-Hours",
    icon: Wrench,
    businessName: "Titan Climate Solutions",
    callerName: "Elena Rodriguez",
    callerPhone: "+1 (512) 409-2281",
    address: "882 Barton Hills Dr, Austin, TX",
    dialogue: [
      {
        speaker: "ai",
        text: "Titan Climate 24/7 Dispatch. This is Alex. Is your AC completely out, or are you calling for scheduled maintenance?",
        timestamp: "00:02",
      },
      {
        speaker: "caller",
        text: "It's completely blowing hot air and it's 89 degrees inside the house with two small children.",
        timestamp: "00:08",
      },
      {
        speaker: "ai",
        text: "I hear you, Elena. Extreme heat with children gets prioritized. What is your service address?",
        timestamp: "00:14",
      },
      {
        speaker: "caller",
        text: "882 Barton Hills Drive, Austin.",
        timestamp: "00:19",
      },
      {
        speaker: "ai",
        text: "Understood. Our after-hours diagnostic fee is $129, which applies toward the repair. Can I dispatch our on-call tech between 6:00 and 7:00 PM?",
        timestamp: "00:26",
      },
      {
        speaker: "caller",
        text: "Yes, please send them out as soon as possible.",
        timestamp: "00:30",
      },
      {
        speaker: "ai",
        text: "Done! Tech Leo is dispatched. I've sent his live GPS tracking link to your phone. Turn off the thermostat in the meantime.",
        timestamp: "00:36",
      },
    ],
    extractedData: {
      customerName: "Elena Rodriguez",
      phone: "+1 (512) 409-2281",
      serviceAddress: "882 Barton Hills Dr, Austin, TX",
      issue: "Total AC failure, interior 89°F with minors",
      urgency: "HIGH",
      estimateRange: "$129 Diagnostic (Applied to repair)",
      scheduledSlot: "Tonight 6:00–7:00 PM",
      assignedTech: "Leo Martinez (Master HVAC Tech)",
    },
  },
  {
    id: "dental",
    industry: "Specialty Clinic",
    icon: Stethoscope,
    businessName: "Summit Dental Group",
    callerName: "David Henderson",
    callerPhone: "+1 (615) 449-8812",
    address: "312 Brentwood Blvd, Nashville, TN",
    dialogue: [
      {
        speaker: "ai",
        text: "Hi! Thanks for calling Summit Dental. This is Chloe. Are you looking to schedule a cleaning, consultation, or dental emergency?",
        timestamp: "00:03",
      },
      {
        speaker: "caller",
        text: "Hi Chloe, I chipped a molar eating lunch and have pretty severe sensitivity to cold water right now.",
        timestamp: "00:09",
      },
      {
        speaker: "ai",
        text: "I'm sorry to hear that David! Let's get that looked at quickly. Are you an existing patient or new to our practice?",
        timestamp: "00:15",
      },
      {
        speaker: "caller",
        text: "I'm a new patient, and I have Delta Dental PPO.",
        timestamp: "00:20",
      },
      {
        speaker: "ai",
        text: "We accept Delta Dental PPO! Dr. Vance has an emergency same-day slot at 3:15 PM today. Would that work?",
        timestamp: "00:27",
      },
      {
        speaker: "caller",
        text: "3:15 PM today is perfect.",
        timestamp: "00:30",
      },
      {
        speaker: "ai",
        text: "You are booked for 3:15 PM with Dr. Vance. I've sent digital intake forms to your phone so you can skip the waiting room paperwork.",
        timestamp: "00:36",
      },
    ],
    extractedData: {
      customerName: "David Henderson",
      phone: "+1 (615) 449-8812",
      serviceAddress: "312 Brentwood Blvd, Nashville, TN",
      issue: "Chipped molar with acute temperature sensitivity",
      urgency: "HIGH",
      estimateRange: "Covered by Delta Dental PPO",
      scheduledSlot: "Today @ 3:15 PM",
      assignedTech: "Dr. Rachel Vance, DDS",
    },
  },
];

export function AIReceptionistDemo() {
  const [activeScenarioId, setActiveScenarioId] = useState("roofing");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [voiceAudioEnabled, setVoiceAudioEnabled] = useState(true);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  const scenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Play audio speech synthesis when active
  const speakText = (text: string, isAI: boolean) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window && voiceAudioEnabled) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = isAI ? 1.05 : 1.0;
      utterance.pitch = isAI ? 1.1 : 0.95;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const currentDialogue = scenario.dialogue[currentStep];
      if (currentDialogue) {
        speakText(currentDialogue.text, currentDialogue.speaker === "ai");
      }

      timerRef.current = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
        setCurrentStep((prev) => {
          if (prev < scenario.dialogue.length - 1) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 5000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentStep, scenario, voiceAudioEnabled]);

  const handleScenarioChange = (id: string) => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setActiveScenarioId(id);
    setIsPlaying(false);
    setCurrentStep(0);
    setSecondsElapsed(0);
  };

  const handleReset = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
    setCurrentStep(0);
    setSecondsElapsed(0);
  };

  const togglePlay = () => {
    if (currentStep >= scenario.dialogue.length - 1) {
      setCurrentStep(0);
      setSecondsElapsed(0);
    }
    setIsPlaying(!isPlaying);
  };

  const showCustomerInfo = currentStep >= 1;
  const showAddress = currentStep >= 3;
  const showBooking = currentStep >= 5;

  return (
    <section id="ai-receptionist" className="editorial-section relative bg-[#08090D] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* ── Reframed Header: Direct & Customer-Centric ── */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="eyebrow block mb-4">
            Autonomous Voice Infrastructure
          </span>
          <h2 className="display-lg text-white">
            Never miss a customer call.
          </h2>
          <p className="text-[17px] sm:text-[19px] mt-4 text-slate-300 leading-relaxed">
            Your AI receptionist answers in under 1.2 seconds, qualifies the scope, and books the job — even when your team is on a roof, in a crawlspace, or asleep.
          </p>
        </div>

        {/* ── Sequential System Flow Animation Bar ── */}
        <div className="reveal mb-10 p-3 sm:p-4 rounded-xl bg-[#0C0F17] border border-white/[0.08] overflow-x-auto">
          <div className="flex items-center justify-between min-w-[620px] gap-2 text-[11px] font-mono">
            {[
              { label: "1. CALL RECEIVED", active: currentStep >= 0 },
              { label: "2. AI ANSWERS (<1.2s)", active: currentStep >= 1 },
              { label: "3. LEAD QUALIFIED", active: currentStep >= 2 },
              { label: "4. APPOINTMENT BOOKED", active: currentStep >= 4 },
              { label: "5. CRM UPDATED", active: currentStep >= 5 },
            ].map((step, idx) => (
              <div key={step.label} className="flex items-center gap-2">
                <span className={`px-2.5 py-1 rounded-md font-bold transition-all ${
                  step.active 
                    ? "bg-[#B4F33C] text-[#08090D]" 
                    : "bg-white/5 text-slate-400"
                }`}>
                  {step.label}
                </span>
                {idx < 4 && (
                  <span className={`transition-colors ${step.active ? "text-[#B4F33C]" : "text-white/20"}`}>
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Industry Switcher */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {scenarios.map((scen) => {
            const Icon = scen.icon;
            const isActive = scen.id === activeScenarioId;
            return (
              <button
                key={scen.id}
                onClick={() => handleScenarioChange(scen.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                  isActive
                    ? "bg-[#B4F33C] text-[#08090D] border-[#B4F33C] font-bold shadow-sm"
                    : "bg-white/[0.03] text-slate-300 border-white/10 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#08090D]" : "text-slate-400"}`} />
                <span>{scen.industry}</span>
              </button>
            );
          })}
        </div>

        {/* Sensory Call Player & Real-Time Extraction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Audio Console & Live Transcript */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0D1017] border border-white/10 shadow-2xl overflow-hidden">
            
            {/* Audio Waveform & Playback Bar */}
            <div className="p-5 sm:p-6 bg-[#080A0F] border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-slate-400">
                  Live Dispatch Stream · <span className="text-white font-bold">{scenario.businessName}</span>
                </div>
                <div className="text-[12px] font-mono text-slate-300 mt-0.5">
                  Caller: {scenario.callerName} ({scenario.callerPhone})
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                {/* Audio Mute/Unmute */}
                <button
                  onClick={() => setVoiceAudioEnabled(!voiceAudioEnabled)}
                  className={`p-2 rounded-lg border text-xs font-mono transition-colors ${
                    voiceAudioEnabled 
                      ? "bg-white/10 border-white/20 text-white" 
                      : "bg-white/5 border-white/10 text-slate-500"
                  }`}
                  title={voiceAudioEnabled ? "Speech Synthesizer Active" : "Synthesizer Muted"}
                >
                  {voiceAudioEnabled ? <Volume2 className="w-4 h-4 text-[#B4F33C]" /> : <VolumeX className="w-4 h-4" />}
                </button>

                {/* Play/Pause Demo */}
                <button
                  onClick={togglePlay}
                  className="btn-primary text-xs py-2 px-4"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pause Call</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{currentStep === 0 ? "Listen to Live Demo" : "Resume Demo"}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleReset}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                  title="Reset Demo"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Dynamic Waveform Visualizer */}
            <div className="px-6 py-3 bg-[#090C14] border-b border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-1.5 h-7">
                {[18, 36, 14, 45, 28, 55, 38, 68, 48, 30, 62, 50, 32, 58, 22, 44, 56, 32, 48, 24].map((h, i) => (
                  <span
                    key={i}
                    style={{
                      height: isPlaying ? `${Math.max(6, (h * (Math.sin(secondsElapsed + i) + 1.2)) / 2.2)}px` : "5px",
                    }}
                    className={`w-1 rounded-full transition-all duration-150 ${
                      isPlaying ? "bg-[#B4F33C]" : "bg-white/15"
                    }`}
                  />
                ))}
              </div>

              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B4F33C] animate-pulse" />
                <span>1.1s Latency Neural Audio</span>
              </div>
            </div>

            {/* Transcript Messages Feed */}
            <div className="p-6 space-y-4 min-h-[300px] max-h-[380px] overflow-y-auto bg-[#0A0D15]">
              {scenario.dialogue.slice(0, currentStep + 1).map((msg, index) => {
                const isAI = msg.speaker === "ai";
                return (
                  <div
                    key={index}
                    className={`flex flex-col ${isAI ? "items-start" : "items-end"} animate-in fade-in duration-200`}
                  >
                    <div className="flex items-center gap-2 mb-1 px-1">
                      <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold">
                        {isAI ? "CustomCore Voice Agent" : `Caller (${scenario.callerName})`}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500">{msg.timestamp}</span>
                    </div>

                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                        isAI
                          ? "bg-[#131826] border border-white/10 text-white"
                          : "bg-white/10 border border-white/20 text-slate-200"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-[#080A0F] border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Twilio SIP Trunking + Custom Voice Pipeline</span>
              <span>Step {currentStep + 1} of {scenario.dialogue.length}</span>
            </div>
          </div>

          {/* Real-Time CRM Extraction Payload */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0D1017] border border-white/10 shadow-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#B4F33C]" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Live CRM Telemetry
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#B4F33C]/10 text-[#B4F33C] border border-[#B4F33C]/30 font-bold">
                ZERO MANUAL ENTRY
              </span>
            </div>

            <p className="text-xs text-slate-400 mt-3">
              As the caller speaks, parameters are parsed and piped directly to your core database without human re-keying.
            </p>

            <div className="mt-5 space-y-3">
              <div className={`p-3.5 rounded-xl border transition-all ${
                showCustomerInfo ? "bg-[#121622] border-white/20" : "bg-[#090B10] border-white/5 opacity-40"
              }`}>
                <div className="text-[10px] font-mono uppercase text-slate-400">Caller Identity</div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  {showCustomerInfo ? scenario.extractedData.customerName : "Parsing stream..."}
                </div>
                <div className="text-[11px] font-mono text-slate-300">
                  {showCustomerInfo ? scenario.extractedData.phone : "—"}
                </div>
              </div>

              <div className={`p-3.5 rounded-xl border transition-all ${
                showAddress ? "bg-[#121622] border-white/20" : "bg-[#090B10] border-white/5 opacity-40"
              }`}>
                <div className="text-[10px] font-mono uppercase text-slate-400 flex items-center justify-between">
                  <span>Job Site Address</span>
                  {showAddress && <MapPin className="w-3.5 h-3.5 text-[#B4F33C]" />}
                </div>
                <div className="text-sm font-semibold text-white mt-0.5">
                  {showAddress ? scenario.extractedData.serviceAddress : "Extracting location..."}
                </div>
              </div>

              <div className={`p-3.5 rounded-xl border transition-all ${
                showCustomerInfo ? "bg-[#121622] border-white/20" : "bg-[#090B10] border-white/5 opacity-40"
              }`}>
                <div className="flex items-center justify-between text-[10px] font-mono uppercase text-slate-400">
                  <span>Scope &amp; Urgency</span>
                  {showCustomerInfo && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#B4F33C]/10 text-[#B4F33C] border border-[#B4F33C]/30">
                      {scenario.extractedData.urgency}
                    </span>
                  )}
                </div>
                <div className="text-xs text-slate-200 mt-1">
                  {showCustomerInfo ? scenario.extractedData.issue : "Diagnosing emergency..."}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1.5">
                  Quoted: <span className="text-white font-medium">{showBooking ? scenario.extractedData.estimateRange : "—"}</span>
                </div>
              </div>

              <div className={`p-3.5 rounded-xl border transition-all ${
                showBooking ? "bg-[#141A28] border-[#B4F33C]/40" : "bg-[#090B10] border-white/5 opacity-40"
              }`}>
                <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#B4F33C] font-semibold">
                  <span>Calendar Confirmation</span>
                  <Calendar className="w-3.5 h-3.5 text-[#B4F33C]" />
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {showBooking ? scenario.extractedData.scheduledSlot : "Awaiting dispatch lock..."}
                </div>
                <div className="text-[11px] font-mono text-slate-300 mt-0.5">
                  Technician: {showBooking ? scenario.extractedData.assignedTech : "—"}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.08]">
              <a
                href="#contact"
                className="btn-primary w-full justify-center text-xs py-2.5"
              >
                <span>Deploy Voice Infrastructure for Your Business</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
