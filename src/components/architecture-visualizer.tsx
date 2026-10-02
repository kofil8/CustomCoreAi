"use client";

import { useState } from "react";
import { 
  Database, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  Lock,
  PhoneCall,
  Server
} from "lucide-react";

export function ArchitectureVisualizer() {
  const [viewMode, setViewMode] = useState<"executive" | "technical">("executive");
  const [activeTab, setActiveTab] = useState<"data" | "api" | "workers" | "voice">("data");

  const specs = {
    data: {
      title: "Data Tier: PostgreSQL & Redis Caching",
      subtitle: "ACID Transactions, Multi-Tenant Row-Level Security, & Sub-5ms Read Caches",
      description:
        "Every system we engineer uses normalized, relational PostgreSQL schemas with strict foreign keys and automated migrations. We avoid unvetted ORM abstractions and write indexed queries built for high concurrency.",
      highlights: [
        "Normalized relational schemas with multi-tenant row isolation",
        "Sub-millisecond query caches and distributed locks via Redis",
        "Automated continuous WAL backups and point-in-time recovery",
        "Zero data loss guarantees under peak operational load",
      ],
      codeSnippet: `// schema.prisma — Multi-Tenant Dispatch Model
model WorkOrder {
  id           String      @id @default(uuid())
  tenantId     String      @map("tenant_id")
  customerName String      @map("customer_name")
  phone        String
  serviceAddr  String      @map("service_address")
  urgency      UrgencyTier @default(STANDARD)
  quotedAmount Decimal?    @map("quoted_amount") @db.Decimal(10, 2)
  dispatchedAt DateTime?   @map("dispatched_at")
  status       OrderStatus @default(QUEUED)
  createdAt    DateTime    @default(now())

  @@index([tenantId, status, dispatchedAt])
  @@map("work_orders")
}`,
    },
    api: {
      title: "API Gateway & Security Layer",
      subtitle: "Type-Safe Contracts, Zod Runtime Guards, & Granular RBAC",
      description:
        "All client-server communication passes through strict type-safe validation barriers. We implement role-based access control (Dispatcher, Field Lead, Executive) with secure JWT and OAuth2 session tokens.",
      highlights: [
        "Strict runtime payload validation with Zod schemas",
        "Role-Based Access Control (RBAC) enforced at database boundary",
        "DDoS protection, automated rate-limiting, and Cloudflare WAF",
        "Zero trust token rotation with encrypted session state",
      ],
      codeSnippet: `// dispatch-router.ts — Zod Validated Gateway
export async function POST(req: Request) {
  const session = await auth.verifySession(req);
  if (!session.hasPermission("dispatch:create")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
  }

  const payload = DispatchSchema.parse(await req.json());
  const order = await db.workOrder.create({
    data: { ...payload, tenantId: session.tenantId }
  });

  await queue.publish("order.created", { orderId: order.id });
  return NextResponse.json({ success: true, orderId: order.id }, { status: 201 });
}`,
    },
    workers: {
      title: "Background Task Queues: BullMQ & Redis",
      subtitle: "Asynchronous Job Processing, Exponential Backoff, & Webhooks",
      description:
        "Long-running tasks—such as generating PDF invoices, syncing QuickBooks, dispatching SMS notifications, and running speech embeddings—never block the user interface. They are delegated to distributed worker pools.",
      highlights: [
        "Distributed queue workers with automatic failure retry backoff",
        "Guaranteed at-least-once job delivery and dead-letter queues",
        "Two-way webhooks connecting Stripe, Twilio, and accounting software",
        "Isolated worker processes with independent CPU/RAM scaling",
      ],
      codeSnippet: `// invoicing-worker.ts — Asynchronous Worker
const invoiceWorker = new Worker("invoices", async (job) => {
  const { orderId } = job.data;
  const order = await db.workOrder.findUnique({ where: { id: orderId } });

  // 1. Generate compliant PDF invoice
  const pdfBuffer = await pdfEngine.renderInvoice(order);

  // 2. Synchronize invoice to QuickBooks API
  const qbInvoice = await quickbooks.invoices.create({
    customerRef: order.customerId,
    total: order.quotedAmount,
  });

  // 3. Dispatch automated SMS receipt to client
  await twilio.messages.create({
    to: order.phone,
    body: \`Your invoice #\${qbInvoice.DocNumber} for $\${order.quotedAmount} is ready.\`,
  });
});`,
    },
    voice: {
      title: "AI Voice Pipeline: Low-Latency Telephony",
      subtitle: "Twilio Media Streams, Deepgram ASR, & Deterministic Tool Calling",
      description:
        "Our telephony systems process bi-directional audio streams over WebSockets. We achieve sub-1.2s end-to-end response times by streaming text directly into speech synthesis models before the complete thought has finished generating.",
      highlights: [
        "Full-duplex WebSocket audio streaming via Twilio Voice SDK",
        "Deepgram Nova-2 speech-to-text with trade terminology vocabularies",
        "Structured function calling: quotes rates, reserves slots, triggers alerts",
        "Automatic graceful fallback to human on-call dispatchers",
      ],
      codeSnippet: `// voice-stream.ts — WebSocket Telephony Pipeline
ws.on("message", async (data) => {
  const msg = JSON.parse(data);

  if (msg.event === "media") {
    // Stream audio payload directly into speech-to-text engine
    deepgramLive.send(Buffer.from(msg.media.payload, "base64"));
  }

  if (msg.event === "transcript") {
    // Process intent & execute deterministic schema tool calls
    const intent = await nlu.extractIntent(msg.transcript);
    if (intent.name === "dispatchEmergency") {
      await dispatchService.notifyTechnician({
        address: intent.args.address,
        urgency: "HIGH",
      });
    }
  }
});`,
    },
  };

  const current = specs[activeTab];

  return (
    <section id="architecture" className="editorial-section relative bg-[#08090D] border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header with Dual Persona Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="eyebrow block mb-4">
              Systems Engineering &amp; Operational Impact
            </span>
            <h2 className="display-lg text-white">
              Production Architecture. Zero Hand-Waving.
            </h2>
            <p className="text-[17px] mt-4 text-slate-300 leading-relaxed">
              Whether you measure success in operational ROI or sub-millisecond database queries, our systems deliver verifiable results.
            </p>
          </div>

          {/* Persona Switcher Toggle */}
          <div className="inline-flex p-1.5 rounded-2xl bg-[#0E111A] border border-white/10 shrink-0">
            <button
              onClick={() => setViewMode("executive")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all ${
                viewMode === "executive"
                  ? "bg-[#B4F33C] text-[#08090D] font-bold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Business Executive View</span>
            </button>
            <button
              onClick={() => setViewMode("technical")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all ${
                viewMode === "technical"
                  ? "bg-[#B4F33C] text-[#08090D] font-bold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Technical Architecture View</span>
            </button>
          </div>
        </div>

        {/* ── View 1: Business Executive View ── */}
        {viewMode === "executive" ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: PhoneCall,
                  metric: "$4,000–$12,000/mo",
                  label: "RECOVERED AFTER-HOURS REVENUE",
                  description:
                    "100% of emergency inbound calls answered under 1.2s. Zero leads lost to voicemail while your team is on job sites or asleep.",
                },
                {
                  icon: Clock,
                  metric: "15+ Hours/Week",
                  label: "MANUAL ADMIN SAVED",
                  description:
                    "Eliminates spreadsheet double data-entry. Dispatched work orders sync automatically to QuickBooks, calendars, and technician phones.",
                },
                {
                  icon: DollarSign,
                  metric: "$50K–$120K/Year",
                  label: "ELIMINATED PER-SEAT SAAS RENT",
                  description:
                    "You own 100% of the proprietary software code. Hire 10 or 100 technicians without paying exorbitant enterprise software licensing tiers.",
                },
                {
                  icon: ShieldCheck,
                  metric: "99.98% SLA",
                  label: "PRODUCTION AVAILABILITY",
                  description:
                    "Isolated PostgreSQL databases, automated continuous WAL backups, and end-to-end data encryption calibrated for mission-critical operations.",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.label}
                    className="rounded-2xl p-6 bg-[#0B0D14] border border-white/10 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-xl bg-[#B4F33C]/10 border border-[#B4F33C]/20 flex items-center justify-center mb-5">
                        <Icon className="w-4 h-4 text-[#B4F33C]" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">
                        {card.metric}
                      </div>
                      <div className="font-mono text-[10px] font-bold text-[#B4F33C] uppercase tracking-wider mb-3">
                        {card.label}
                      </div>
                      <p className="text-[13px] text-slate-300 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Visual Process Flow Diagram for Executives */}
            <div className="rounded-2xl p-6 sm:p-8 bg-[#0D1017] border border-white/10">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#B4F33C]" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    Executive Architecture Blueprint: Inbound Call to Ledger Sync
                  </span>
                </div>
                <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#B4F33C]/10 text-[#B4F33C] border border-[#B4F33C]/30 font-bold">
                  FULLY AUTOMATED PIPELINE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { step: "01", title: "Customer Rings In", desc: "Twilio SIP answers in <1.2s. AI voice receptionist qualifies emergency and quotes call-out fees." },
                  { step: "02", title: "Data Model Instantiated", desc: "Customer details, service address, and triage severity piped directly to PostgreSQL ledger." },
                  { step: "03", title: "Calendar Slot Locked", desc: "Technician calendar reserved and automated SMS confirmation sent to client with live GPS link." },
                  { step: "04", title: "QuickBooks Synced", desc: "Draft invoice #INV generated automatically upon job completion with zero manual data re-keying." },
                ].map((s) => (
                  <div key={s.step} className="p-4 rounded-xl bg-[#111420] border border-white/5">
                    <span className="font-mono text-[11px] font-bold text-[#B4F33C] block mb-1">
                      STEP {s.step}
                    </span>
                    <h4 className="text-[14px] font-semibold text-white mb-1.5">{s.title}</h4>
                    <p className="text-[12px] text-slate-300 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ── View 2: Technical Architecture View (Deep-Dive Specs) ── */
          <div className="animate-in fade-in duration-300">
            {/* Documentation Style Tabs */}
            <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-white/[0.08] pb-4">
              {[
                { id: "data", label: "01 // PostgreSQL Data Tier" },
                { id: "api", label: "02 // Type-Safe API Gateway" },
                { id: "workers", label: "03 // Distributed BullMQ Queues" },
                { id: "voice", label: "04 // Low-Latency SIP Telephony" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "data" | "api" | "workers" | "voice")}
                  className={`px-4 py-2.5 rounded-full text-xs font-mono font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-[#B4F33C] text-[#08090D] font-bold shadow-sm"
                      : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Architectural Analysis (Left) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {current.title}
                  </h3>
                  <p className="text-xs font-mono text-[#B4F33C] mt-1">
                    {current.subtitle}
                  </p>
                  <p className="mt-4 text-[15px] text-slate-300 leading-relaxed">
                    {current.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/[0.08] space-y-3">
                  <div className="text-xs font-mono uppercase text-slate-400 font-semibold mb-2">
                    Implementation Standards:
                  </div>
                  {current.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#B4F33C] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/[0.08]">
                  <a
                    href="#contact"
                    className="btn-text text-[13px]"
                  >
                    <span>Discuss implementation for your stack</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Clean Code Block (Right) */}
              <div className="lg:col-span-7 rounded-2xl bg-[#0D1017] border border-white/10 shadow-2xl overflow-hidden">
                <div className="px-5 py-3.5 bg-[#080A0F] border-b border-white/[0.08] flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
                    <span className="text-slate-300 font-medium">implementation-spec.ts</span>
                  </div>
                  <span className="text-[11px] text-[#B4F33C] font-mono">TypeScript 5.x · Type-Safe</span>
                </div>

                <div className="p-5 overflow-x-auto text-xs font-mono leading-relaxed bg-[#0B0D14]">
                  <pre className="text-slate-300">
                    <code>{current.codeSnippet}</code>
                  </pre>
                </div>

                <div className="px-5 py-3 bg-[#080A0F] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Zero Vendor Lock-in</span>
                  <span className="text-[#B4F33C] font-semibold">100% Client Owned</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
