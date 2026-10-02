export interface CaseStudyItem {
  slug: string;
  aliases?: string[];
  title: string;
  badge: string;
  category: string;
  summary: string;
  clientType: string;
  duration: string;
  isDemoProject?: boolean;
  problem: string;
  solution: string;
  architecture: {
    stack: string[];
    diagramNodes: string[];
    keyComponents: string[];
  };
  metrics: {
    label: string;
    value: string;
  }[];
  features: string[];
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    slug: "apex-roofing",
    aliases: ["apex-roofing-ai-receptionist"],
    title: "Apex Premier Roofing — 24/7 AI Emergency Dispatch Engine",
    badge: "Austin, TX Telephony Automation",
    category: "AI Voice Telephony & CRM Integration",
    summary: "A custom Voice AI Receptionist integrated with Jobber CRM answering after-hours storm leak emergencies in <1.2 seconds with zero human intervention.",
    clientType: "Commercial & Residential Roofing Contractor (Austin, TX)",
    duration: "6 Weeks Engineering",
    isDemoProject: false,
    problem: "Apex Premier Roofing was losing an estimated $18,000/month in storm-emergency call revenue. Their phone system rolled to voicemail after 5:00 PM, and weekend calls were handled by an overwhelmed dispatcher who missed 40% of inbound calls.",
    solution: "We engineered a custom Voice AI Receptionist integrated with Jobber CRM. The system answers in <1.2 seconds, qualifies the emergency leak severity, quotes mobilization fees, authorizes deposits via SMS, and alerts on-call crews directly.",
    architecture: {
      stack: ["Twilio SIP + Voice SDK", "Whisper ASR", "Custom Voice NLU", "Jobber API", "Stripe Connect", "PostgreSQL"],
      diagramNodes: [
        "Inbound Emergency Call",
        "Twilio SIP Stream (<150ms)",
        "NLU Damage Classification",
        "Jobber CRM WorkOrder",
        "SMS Diagnostic Link",
        "Crew Push Alert"
      ],
      keyComponents: [
        "Sub-150ms speech-to-intent pipeline eliminating awkward conversation pauses",
        "Deterministic storm triage protocol with geo-routed crew alert rules",
        "Automated Stripe pre-authorization payment capture via instant SMS",
        "Two-way synchronization directly into active Jobber scheduling boards"
      ]
    },
    metrics: [
      { label: "Emergency Calls Captured", value: "100%" },
      { label: "Monthly Emergency Revenue", value: "+$22,000" },
      { label: "Avg Dispatch Mobilization", value: "2.4 Mins" },
      { label: "5-Star Review Request Rate", value: "+64%" }
    ],
    features: [
      "24/7/365 instant pickup without busy signals or dropped connections",
      "Dynamic trade-specific quoting engine and emergency escalation protocols",
      "Live audio transcription and CRM data payload extraction dashboard",
      "Instant homeowner confirmation SMS with diagnostic guidance"
    ]
  },
  {
    slug: "titan-climate",
    aliases: ["titan-climate-ops-hub"],
    title: "Titan Climate Solutions — Field Operations Platform & Live Core",
    badge: "Scottsdale, AZ HVAC Operations",
    category: "Custom CRM & Field Operations Hub",
    summary: "Replaced 4 disconnected SaaS subscriptions with a single proprietary operations platform: drag-and-drop dispatch, technician tablet PWA, and automated two-way QuickBooks reconciliation.",
    clientType: "Commercial & Residential HVAC Operator (12 Crews)",
    duration: "10 Weeks Engineering",
    isDemoProject: false,
    problem: "Titan Climate had 12 technicians running across Phoenix metro. Their dispatcher was manually copying job notes between a whiteboard, a Google Sheet, two Slack channels, and an aging ServiceTitan account that cost $890/month with features they never used.",
    solution: "We replaced the entire stack with a proprietary Field Operations Hub: a web-based dashboard with drag-and-drop crew scheduling, a mobile technician app for on-site job completion, two-way QuickBooks sync, and automated end-of-day reporting.",
    architecture: {
      stack: ["Next.js App Router", "PostgreSQL + Prisma", "QuickBooks Online API", "BullMQ Worker Queues", "Mobile PWA"],
      diagramNodes: [
        "Estimator Web / Tablet PWA",
        "Next.js Operational Engine",
        "PostgreSQL Multi-Tenant DB",
        "BullMQ Async Invoicing Worker",
        "QuickBooks Two-Way Sync",
        "Customer SMS Approvals"
      ],
      keyComponents: [
        "Role-based permission hierarchy for Dispatchers, Crew Leads, and Accountants",
        "Optimistic calendar dispatch board with live technician GPS geofencing",
        "Automated one-click PDF quote generation with digital legal sign-off",
        "Real-time QuickBooks synchronization preventing double entry"
      ]
    },
    metrics: [
      { label: "Admin Hours Saved / Week", value: "14 hrs/wk" },
      { label: "SaaS Software Cost", value: "$890/mo → $0" },
      { label: "Invoice Turnaround Time", value: "Same-Day" },
      { label: "Technician Job Accuracy", value: "99.1%" }
    ],
    features: [
      "Intuitive drag-and-drop dispatch board with route optimization",
      "Offline-first mobile web experience for technicians in low-cell areas",
      "Instant Stripe invoice links with automated SMS payment reminders",
      "Executive profitability reporting by job, technician, and zip code"
    ]
  },
  {
    slug: "summit-dental",
    aliases: [],
    title: "Summit Dental Group — Multi-Location Patient Intake Automation",
    badge: "Nashville, TN Healthcare Telephony",
    category: "HIPAA-Compliant AI Telephony & Booking",
    summary: "Multi-channel patient intake system: Voice AI for emergency inbound calls, interactive web widget, and a front-desk confirmation hub.",
    clientType: "Multi-Location Dental Practice",
    duration: "8 Weeks Engineering",
    isDemoProject: false,
    problem: "Summit Dental's front desk was overwhelmed — a single receptionist handling calls, walk-ins, and insurance verification simultaneously. New patient emergencies would wait 2–3 days for a callback. High-value same-day slots sat empty.",
    solution: "We built a multi-channel intake system: a Voice AI that handles inbound calls, a web chat widget for the website, and a dashboard for the front desk to review and confirm AI-scheduled appointments with HIPAA-compliant data handling.",
    architecture: {
      stack: ["Twilio Voice SDK", "HIPAA Data Layer", "Node.js Microservices", "Insurance Verification API", "PostgreSQL"],
      diagramNodes: [
        "Patient Inbound Phone Call",
        "HIPAA Audio Stream",
        "Symptom Qualification Engine",
        "Practice Management API",
        "Front Desk Confirmation Queue",
        "Automated Calendar Hold"
      ],
      keyComponents: [
        "HIPAA-compliant encrypted voice transport and PII redaction layer",
        "Deterministic schedule slot reservation with insurance eligibility check",
        "Front desk review queue preventing double bookings",
        "Automated appointment confirmation and intake form SMS dispatch"
      ]
    },
    metrics: [
      { label: "Same-Day Emergency Fill Rate", value: "+220%" },
      { label: "Missed Call Rate", value: "0%" },
      { label: "Patient Intake Time", value: "< 3 Mins" },
      { label: "Staff Overtime Reduction", value: "−18 hrs/mo" }
    ],
    features: [
      "24/7 intelligent patient triage with triage severity routing",
      "HIPAA-compliant data encryption in transit and at rest",
      "Direct practice management EHR integration",
      "Multi-channel SMS and phone automated appointment reminders"
    ]
  },
  {
    slug: "scheduleos-saas",
    aliases: [],
    title: "ScheduleOS — Multi-Tenant Booking & Dispatch SaaS",
    badge: "Full-Stack SaaS Platform",
    category: "Multi-Tenant SaaS Engineering",
    summary: "A production-grade multi-tenant scheduling platform built from zero to deployment. Features tenant isolation, Stripe Connect subscription billing, and real-time calendars.",
    clientType: "Early-Stage B2B Vertical SaaS Startup",
    duration: "8 Weeks Engineering",
    isDemoProject: false,
    problem: "The founding team needed an enterprise-grade multi-tenant SaaS architecture to launch their vertical scheduling tool. Agencies quoted 6 months and $120,000+ with bloated, generic team structures.",
    solution: "Engineered the core multi-tenant backend, Stripe Connect payout infrastructure, WebSocket availability streaming, and clean customer-facing booking portals in 8 weeks flat.",
    architecture: {
      stack: ["Next.js App Router", "TypeScript", "PostgreSQL (Row-Level Security)", "Prisma", "Stripe Connect", "Redis"],
      diagramNodes: [
        "End-User Booking Web App",
        "Tenant Routing Middleware",
        "PostgreSQL (RLS Partitioned)",
        "Stripe Connect Webhook Worker",
        "Redis Availability Cache",
        "Outbound Webhook Dispatch"
      ],
      keyComponents: [
        "Row-Level Security (RLS) database isolation ensuring zero cross-tenant data leakage",
        "Stripe Connect custom onboarding and automated platform fee distribution",
        "Real-time WebSocket calendar state sync preventing double-booking race conditions",
        "Developer API with cryptographic webhook signatures for third-party integrations"
      ]
    },
    metrics: [
      { label: "Time to First Paying Tenant", value: "8 Weeks" },
      { label: "30-Day Platform Volume", value: "$48,200" },
      { label: "Calendar Query Latency", value: "< 28ms" },
      { label: "Tenant Data Isolation", value: "100% RLS" }
    ],
    features: [
      "Multi-tenant database architecture with strict tenant isolation",
      "Automated Stripe Connect billing and subscription management",
      "Embeddable high-converting booking widgets with custom domain routing",
      "Robust developer API and webhook dispatch system"
    ]
  },
  {
    slug: "ai-receptionist-engine",
    aliases: [],
    title: "Autonomous Voice Receptionist & Emergency Dispatch Engine",
    badge: "CustomCoreAI Demo Project",
    category: "AI & Telephony Automation",
    summary: "A sub-150ms latency voice intelligence platform designed to eliminate missed calls, qualify emergency repairs, and auto-book calendar slots for roofing and HVAC contractors.",
    clientType: "Home Services & Trade Contractors (US Market)",
    duration: "4 Weeks Engineering",
    isDemoProject: true,
    problem: "Trade contractors miss over 35% of inbound calls that arrive after 5:00 PM or during active job installations. Standard voicemail leads to immediate customer abandonment, handing $5,000–$15,000 roofing/HVAC replacements directly to competing companies.",
    solution: "CustomCoreAI engineered a custom AI Voice Receptionist built on Twilio SIP trunking, WebSockets audio streaming, and neural voice synthesis. The system answers in under 1.2 seconds, extracts customer addresses and urgency levels in real time, and writes confirmed appointments directly into Google Calendar and internal CRMs.",
    architecture: {
      stack: ["Next.js App Router", "Twilio SIP Voice API", "Node.js WebSockets", "OpenAI Realtime API", "PostgreSQL", "Google Calendar API"],
      diagramNodes: [
        "Inbound PSTN Call",
        "Twilio Media Stream",
        "Audio Buffer & Neural Voice",
        "Real-Time Function Calling",
        "PostgreSQL Lead Log",
        "Automated SMS & Calendar Sync"
      ],
      keyComponents: [
        "Bidirectional WebSocket audio streaming pipeline with sub-150ms turnaround",
        "Deterministic JSON function calling for zero-hallucination quote parameters",
        "Emergency classification rule engine for automated technician phone bridging",
        "Automated customer intake SMS with live dispatcher tracking link"
      ]
    },
    metrics: [
      { label: "Pickup Latency", value: "< 1.2s" },
      { label: "Call Capture Rate", value: "100%" },
      { label: "Data Extraction Accuracy", value: "99.4%" },
      { label: "After-Hours Booking Rate", value: "+44%" }
    ],
    features: [
      "24/7/365 instant pickup without busy signals or dropped connections",
      "Dynamic trade-specific quoting engine and emergency escalation protocols",
      "Live audio transcription and CRM data payload extraction dashboard",
      "Instant homeowner confirmation SMS with diagnostic guidance"
    ]
  },
  {
    slug: "field-service-crm-system",
    aliases: [],
    title: "Multi-Crew Field Service Operations & Dispatch Platform",
    badge: "CustomCoreAI Architecture Showcase",
    category: "Custom CRM & Internal Systems",
    summary: "A centralized operational hub replacing four disconnected SaaS tools for a commercial roofing and HVAC contractor with 18 field technicians.",
    clientType: "Commercial & Residential Roofing/HVAC Company",
    duration: "8 Weeks Engineering",
    isDemoProject: false,
    problem: "The client was paying $1,400/month across 4 disconnected software products (Jobber, QuickBooks, generic VoIP, and spreadsheets). Technicians were re-entering invoice data manually, leading to $20,000+ in delayed monthly billing and scheduling conflicts.",
    solution: "Engineered a proprietary operational CRM combining drag-and-drop technician dispatch, mobile tablet job completion sign-offs, automated Stripe/QuickBooks invoice synchronization, and customer self-service quote approvals.",
    architecture: {
      stack: ["Next.js 16", "TypeScript", "PostgreSQL", "Prisma ORM", "Redis / BullMQ", "Stripe Connect", "QuickBooks Online API"],
      diagramNodes: [
        "Estimator Tablet / Web UI",
        "Next.js App Router Core",
        "PostgreSQL Multi-Tenant DB",
        "BullMQ Async Invoicing Worker",
        "QuickBooks Two-Way Sync",
        "Customer SMS Approvals"
      ],
      keyComponents: [
        "Role-based permission hierarchy for Dispatchers, Crew Leads, and Accountants",
        "Optimistic calendar dispatch board with live technician GPS geofencing",
        "Automated one-click PDF quote generation with digital legal sign-off",
        "Real-time QuickBooks synchronization preventing double entry"
      ]
    },
    metrics: [
      { label: "Monthly SaaS Cost Saved", value: "$1,400/mo" },
      { label: "Invoice Processing Time", value: "2 Mins (vs 4 Days)" },
      { label: "Scheduling Collisions", value: "Zero" },
      { label: "Customer Approval Velocity", value: "+62%" }
    ],
    features: [
      "Intuitive drag-and-drop dispatch board with route optimization",
      "Offline-first mobile web experience for technicians in low-cell areas",
      "Instant Stripe invoice links with automated SMS payment reminders",
      "Executive profitability reporting by job, technician, and zip code"
    ]
  },
  {
    slug: "interactive-touchscreen-canvas",
    aliases: [],
    title: "High-Performance Interactive Web Simulation & Touch Experience",
    badge: "Frontend Engineering Benchmark",
    category: "Interactive Web & Frontend Engineering",
    summary: "A high-frame-rate interactive touchscreen web application showcasing smooth 60fps canvas animations, touch gesture recognition, and zero-latency client state management.",
    clientType: "Commercial Exhibits & Interactive Web Application",
    duration: "3 Weeks Engineering",
    isDemoProject: true,
    problem: "Standard web agencies rely on heavy bloated libraries that choke on touchscreen kiosks, causing stuttering frame rates, unresponsive touch handling, and high memory leaks under continuous operation.",
    solution: "Built a custom lightweight TypeScript application leveraging the HTML5 Canvas API, hardware-accelerated WebGL shaders, and a custom physics engine running at a consistent 60 frames per second on both low-power tablets and large format displays.",
    architecture: {
      stack: ["Next.js", "TypeScript", "HTML5 Canvas API", "WebGL 2.0", "Web Audio API", "Tailwind CSS"],
      diagramNodes: [
        "Multi-Touch Screen Input",
        "Gesture Recognizer & Physics Loop",
        "Hardware-Accelerated Canvas Engine",
        "Web Audio Sound Synthesis",
        "Telemetry & Health Reporting"
      ],
      keyComponents: [
        "Optimized animation loop with custom spatial grid collision detection",
        "Zero memory allocation during animation frames preventing garbage collection pauses",
        "Adaptive resolution scaling supporting 4K displays down to budget tablets",
        "Sub-millisecond audio sound synthesis using Web Audio API oscillators"
      ]
    },
    metrics: [
      { label: "Rendering Frame Rate", value: "60.0 FPS" },
      { label: "Touch Input Latency", value: "< 16ms" },
      { label: "Memory Footprint", value: "< 24 MB" },
      { label: "Continuous Uptime", value: "99.99%" }
    ],
    features: [
      "Smooth hardware-accelerated 60 FPS interactive physics and particle systems",
      "Multi-touch gesture recognition supporting multiple simultaneous users",
      "Standalone kiosk mode with automated crash recovery and health heartbeats",
      "Responsive scaling tailored for trade show exhibits and interactive client demos"
    ]
  }
];

export function findCaseStudy(slug: string): CaseStudyItem | undefined {
  return caseStudiesData.find(
    (c) => c.slug === slug || (c.aliases && c.aliases.includes(slug))
  );
}
