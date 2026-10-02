export interface ServiceItem {
  slug: string;
  title: string;
  tag: string;
  badge: string;
  headline: string;
  description: string;
  problemSolved: string;
  outcomes: string[];
  architectureSpecs: string[];
  deliverables: string[];
  targetAudience: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "custom-software",
    title: "Custom Software & Internal Systems",
    tag: "CORE ENGINEERING",
    badge: "Bespoke Platforms",
    headline: "Proprietary software designed specifically around your workflow, customers, and operations.",
    description:
      "When your business operations don't fit into generic off-the-shelf software, forcing your team to adapt causes errors and slows growth. We build proprietary business platforms, client portals, and internal tools that mirror your real-world operations.",
    problemSolved: "Eliminating brittle spreadsheets, fragmented SaaS subscriptions, and manual data copy-pasting.",
    outcomes: [
      "100% workflow alignment with zero unused vendor features",
      "No recurring per-seat user license fees as your headcount grows",
      "Full IP ownership of your code, database, and business logic",
    ],
    architectureSpecs: [
      "Next.js App Router & TypeScript frontend",
      "Normalized PostgreSQL database schemas",
      "Granular Role-Based Access Control (RBAC)",
      "Zero-downtime containerized cloud hosting",
    ],
    deliverables: [
      "Business Operations & Management Platforms",
      "Contractor & Client Web Portals",
      "Custom Executive KPI Dashboards",
      "Automated Workflow Dispatch Systems",
      "Legacy Database & FileMaker Migrations",
    ],
    targetAudience: "Service contractors, distributors, medical groups, and multi-location businesses.",
  },
  {
    slug: "ai-receptionist",
    title: "AI Voice Receptionist & Dispatcher",
    tag: "PRODUCTIZED SERVICE",
    badge: "24/7 Zero Missed Calls",
    headline: "Never miss another customer call, estimate request, or weekend emergency dispatch.",
    description:
      "For local service companies, missing a phone call means losing thousands of dollars to a local competitor. CustomCore AI answers instantly 24/7/365, conducts natural human-grade conversations, qualifies customer intent, quotes ballpark diagnostic fees, and auto-books appointments into your dispatch calendar.",
    problemSolved: "Eliminates missed calls after 5 PM, weekend answering service delays, and receptionist payroll overhead.",
    outcomes: [
      "100% call capture with sub-1.2-second pickup speed",
      "Over 40% increase in after-hours booked consultations",
      "Instant SMS notification & warm transfer to technician on-call",
    ],
    architectureSpecs: [
      "Twilio SIP Trunking & WebSockets telephony",
      "Sub-150ms Neural Voice Synthesis with interruption handling",
      "Two-way synchronization with Google Calendar, Outlook & ServiceTitan",
      "Real-time CRM payload extraction with automated address verification",
    ],
    deliverables: [
      "Dedicated Local Phone Number or Existing Line Forwarding",
      "Custom Script & FAQ Knowledge Base tailored to your trade",
      "Emergency Warm-Transfer Rules for on-call crews",
      "Live Call Audio Recording & Transcription Dashboard",
      "Automatic SMS Intake Confirmation to Homeowners",
    ],
    targetAudience: "Roofing, HVAC, Plumbing, Electrical, Cleaning, Landscaping, and Dental/Medical Practices.",
  },
  {
    slug: "crm",
    title: "CRM & Business Management Hubs",
    tag: "OPERATIONAL CORE",
    badge: "Unified Business Operating System",
    headline: "Centralize customer records, field dispatch, quoting, and invoicing in one unified engine.",
    description:
      "Traditional enterprise CRMs are bloated with complicated menus and punitive pricing tiers. We engineer sleek, streamlined hubs designed specifically for your pipeline stages, field crews, and customer lifecycle.",
    problemSolved: "Data silos where customer information is scattered across texts, emails, and isolated accounting software.",
    outcomes: [
      "Single source of truth for leads, job statuses, and invoices",
      "Automated SMS/Email follow-ups that close stalled proposals",
      "Real-time GPS technician tracking and job completion logs",
    ],
    architectureSpecs: [
      "PostgreSQL with ACID transactional guarantees",
      "Redis caching layer for sub-millisecond query responses",
      "Stripe Billing & QuickBooks API two-way synchronization",
      "Multi-device responsive layout optimized for mobile field techs",
    ],
    deliverables: [
      "Custom Lead Pipeline & Kanban Stages",
      "Technician Dispatch & Route Management",
      "One-Click Digital Quote Generation & e-Signature",
      "Automated Payment Collection & Receipt Dispatch",
      "Staff Performance & Revenue Attribution Reports",
    ],
    targetAudience: "Contractors, field service teams, home service companies, and B2B agencies.",
  },
  {
    slug: "saas-development",
    title: "SaaS Development & MVP Engineering",
    tag: "HIGH-SCALE VENTURES",
    badge: "Production SaaS Engine",
    headline: "Turn software concepts into scalable, multi-tenant B2B products ready for market validation.",
    description:
      "We partner with visionary founders and established companies to build commercial-grade SaaS applications. From architectural scoping to automated billing, authentication, and tenant isolation.",
    problemSolved: "Long development delays, brittle codebases from low-cost outsourcers, and architectural technical debt.",
    outcomes: [
      "Production-ready MVP shipped in 6 to 10 weeks",
      "Clean, modular TypeScript architecture prepared for high concurrency",
      "Complete ownership of code with zero vendor lock-in",
    ],
    architectureSpecs: [
      "Multi-tenant data isolation with PostgreSQL row-level security",
      "Stripe Checkout & Billing Portal for tiered subscriptions",
      "Role-Based Access Control (RBAC) & OAuth2 social logins",
      "Comprehensive OpenTelemetry observability and health tracing",
    ],
    deliverables: [
      "Full-Stack Web & Mobile Applications",
      "Tenant Management & Admin Analytics Superpanel",
      "Automated User Onboarding & Email Sequences",
      "Stripe Tiered Pricing & Usage-Based Metering",
      "CI/CD Pipeline with Automated Unit & Integration Tests",
    ],
    targetAudience: "Startups, non-technical founders, and established firms launching digital software spin-offs.",
  },
  {
    slug: "ai-applications",
    title: "Practical AI Applications & Autonomous Agents",
    tag: "INTELLIGENT WORKFLOWS",
    badge: "Applied Machine Intelligence",
    headline: "Transform AI from marketing hype into deterministic workflows that save hundreds of hours.",
    description:
      "We build production AI systems that perform actual work: parsing complex construction blueprints, extracting unstructured invoices, summarizing legal records, and autonomous customer self-service assistants.",
    problemSolved: "Human labor wasted on repetitive document processing, data classification, and routine customer inquiries.",
    outcomes: [
      "90% reduction in manual document data entry time",
      "Instant 24/7 responses to customer technical inquiries",
      "Deterministic data extraction with human-in-the-loop review",
    ],
    architectureSpecs: [
      "Fine-tuned models & RAG pipelines with pgvector embeddings",
      "Async BullMQ worker queues for long-running batch ingestion",
      "Automated OCR with structured JSON schema output",
      "Zero-retention privacy protocols for sensitive corporate data",
    ],
    deliverables: [
      "Intelligent Document & Blueprint Extractors",
      "Internal Company Knowledge Base Copilots",
      "Automated Order & Invoice Processing Pipelines",
      "Multi-Agent Workflow Orchestrators",
      "Custom Fine-Tuning & LLM Benchmarking",
    ],
    targetAudience: "Logistics companies, construction firms, healthcare offices, and professional services.",
  },
  {
    slug: "backend-api",
    title: "Backend Engineering, APIs & Cloud Systems",
    tag: "INFRASTRUCTURE",
    badge: "High-Throughput Engines",
    headline: "The robust, highly scalable architecture that powers mission-critical enterprise systems.",
    description:
      "Modern applications require rock-solid backends. We architect resilient API gateways, microservices, distributed queues, and cloud infrastructure engineered for 99.99% uptime.",
    problemSolved: "System crashes under heavy traffic, database bottlenecks, unmanaged API integrations, and security vulnerabilities.",
    outcomes: [
      "Sub-50ms API response times across the United States",
      "Resilient failure recovery with automated message queues",
      "Bank-grade security and encryption at rest and in transit",
    ],
    architectureSpecs: [
      "RESTful and GraphQL type-safe API gateways",
      "Redis distributed locks and BullMQ background task processing",
      "AWS / GCP Serverless & Docker container deployments",
      "Automated database replication and point-in-time recovery",
    ],
    deliverables: [
      "High-Performance Custom REST/GraphQL APIs",
      "Third-Party API Integrations (Stripe, Twilio, QuickBooks, Google)",
      "Distributed Caching & Message Queue Infrastructure",
      "Cloud Infrastructure as Code (Terraform / Docker)",
      "Database Optimization, Indexing & Query Tuning",
    ],
    targetAudience: "Tech companies, enterprise IT teams, and scaling platforms experiencing performance bottlenecks.",
  },
  {
    slug: "digital-solutions",
    title: "Websites & High-Converting Digital Platforms",
    tag: "DIGITAL PRESENCE",
    badge: "Sales-Driven Architecture",
    headline: "Fast, bespoke web applications built to convert qualified prospects into high-ticket clients.",
    description:
      "We don't build cookie-cutter WordPress themes. We engineer lightning-fast Next.js digital platforms with rich interactivity, interactive ROI estimators, and seamless CRM integrations that turn local traffic into signed contracts.",
    problemSolved: "Slow, generic agency sites that fail to build trust or convert local business owners.",
    outcomes: [
      "100/100 Google PageSpeed Performance score",
      "3x to 5x higher visitor-to-lead conversion rates",
      "Direct integration with your internal CRM and dispatch calendar",
    ],
    architectureSpecs: [
      "Next.js App Router with Static Site Generation (SSG)",
      "Tailwind CSS custom design systems without bloated frameworks",
      "Dynamic interactive pricing estimators and booking widgets",
      "Structured JSON-LD schema for local and national SEO dominance",
    ],
    deliverables: [
      "Custom Brand Architecture & Interactive Web Design",
      "Instant Diagnostic & Lead Funnel Modules",
      "Integrated Live Chat & Voice Call Bridges",
      "Comprehensive Local SEO & Schema Architecture",
      "Analytics & Conversion Event Tracking Setup",
    ],
    targetAudience: "Premium service contractors, medical practices, boutique consultancies, and growth businesses.",
  },
];
