export interface SolutionItem {
  slug: string;
  title: string;
  badge: string;
  headline: string;
  description: string;
  primaryPains: string[];
  customSolutions: {
    title: string;
    description: string;
  }[];
  architectureHighlights: string[];
  ctaText: string;
}

export const solutionsData: SolutionItem[] = [
  {
    slug: "local-businesses",
    title: "Custom Systems for US Local Service Businesses",
    badge: "Trade & Home Services",
    headline: "Stop leaking revenue to missed customer calls, manual dispatch, and fragmented apps.",
    description:
      "Roofing, HVAC, Plumbing, Electrical, Landscaping, and Clinic owners shouldn't spend their evenings answering voicemails or copying data between spreadsheets. We engineer custom operational hubs and 24/7 AI voice receptionists that handle inbound calls, qualify homeowners, book appointments, and sync payments on autopilot.",
    primaryPains: [
      "Missing lucrative replacement jobs that call after 5:00 PM or over the weekend",
      "Field crews and dispatchers using disconnected text messages and clipboards",
      "Spending 10+ hours every week hand-crafting estimates and chasing unpaid invoices",
      "Paying for 4 different software subscriptions that refuse to talk to each other",
    ],
    customSolutions: [
      {
        title: "24/7 AI Voice Receptionist",
        description: "Answers customer calls in under 1.2 seconds, answers FAQs, collects property addresses, quotes baseline service fees, and books calendar slots without human intervention.",
      },
      {
        title: "Turnkey Contractor CRM",
        description: "A centralized operational hub with drag-and-drop technician dispatching, mobile work order sign-offs, and two-way QuickBooks synchronization.",
      },
      {
        title: "Automated Lead Pipeline & SMS Follow-Up",
        description: "Instant text messages sent to homeowners the second an inquiry arrives, keeping your company top of mind before they call your competitors.",
      },
      {
        title: "High-Converting Service Websites",
        description: "Fast, custom-coded web experiences built with interactive estimate calculators and instant booking widgets tailored for high local conversion.",
      },
    ],
    architectureHighlights: [
      "Direct telephony integration via Twilio SIP trunking and WebSockets",
      "Seamless calendar synchronization with Google Calendar, Outlook, and ServiceTitan",
      "Automated Stripe invoices with one-click Apple Pay & Google Pay mobile checkout",
      "Zero per-user monthly software licensing fees as your field fleet grows",
    ],
    ctaText: "Automate My Local Business Operations",
  },
  {
    slug: "startups",
    title: "Production Engineering for Early-Stage Tech Startups",
    badge: "Founders & B2B SaaS",
    headline: "Architect, build, and deploy commercial-grade software without hiring a 10-person dev team.",
    description:
      "Skip the trial-and-error of hiring unreliable freelancers. We partner with ambitious non-technical and seed-stage founders to turn architectural visions into scalable, multi-tenant B2B SaaS platforms and AI applications in 6 to 10 weeks.",
    primaryPains: [
      "Spending months searching for technical co-founders or trustworthy senior engineers",
      "Low-quality outsourced codebases that fail security audits or crash under traffic spikes",
      "Complex billing and tenant isolation technical debt delaying market launch",
      "Struggling to integrate practical AI models that deliver deterministic, reliable results",
    ],
    customSolutions: [
      {
        title: "Rapid MVP Engineering",
        description: "Full-stack development in modern Next.js, TypeScript, and PostgreSQL with clean, documented code you own 100%.",
      },
      {
        title: "Multi-Tenant SaaS Architecture",
        description: "Granular tenant data isolation, role-based access control (RBAC), and automated customer onboarding flows.",
      },
      {
        title: "Stripe Subscription & Usage Billing",
        description: "Turnkey integration of tiered recurring subscriptions, metered usage billing, and customer self-service billing portals.",
      },
      {
        title: "Applied AI & Vector Search",
        description: "Practical LLM pipelines, autonomous agents, and RAG architectures tailored to solve proprietary domain problems.",
      },
    ],
    architectureHighlights: [
      "Next.js App Router with React Server Components for ultra-fast TTFB",
      "PostgreSQL with Prisma / Drizzle ORM and normalized schema designs",
      "Redis and BullMQ for distributed background task execution",
      "Automated CI/CD pipelines, Docker containerization, and AWS/GCP cloud setup",
    ],
    ctaText: "Build My Startup MVP",
  },
  {
    slug: "growing-businesses",
    title: "Systems Modernization for Growing & Established Firms",
    badge: "Scale & Modernization ($2M–$25M)",
    headline: "Eliminate administrative bottlenecks when off-the-shelf software becomes a ceiling on your growth.",
    description:
      "When your business reaches $2M to $25M in annual revenue, standard SaaS tools start creating more friction than value. We engineer custom operational backbones, replace brittle legacy spreadsheets, and connect disparate enterprise systems into a unified source of truth.",
    primaryPains: [
      "Staff spending 20+ hours a week re-keying data between accounting, inventory, and sales tools",
      "Legacy databases (Access, FileMaker, on-prem servers) that are slow and insecure",
      "Vendor lock-in and punitive enterprise pricing tiers eating into profit margins",
      "Lack of real-time visibility into executive margins, job costs, and inventory velocity",
    ],
    customSolutions: [
      {
        title: "Proprietary Operations Backbones",
        description: "Centralized internal software built exclusively around your company's proprietary pricing logic, dispatch rules, and staff hierarchies.",
      },
      {
        title: "Legacy System Modernization",
        description: "Safe, zero-downtime migration of legacy desktop databases and spreadsheets into modern, cloud-native web platforms.",
      },
      {
        title: "Enterprise ERP & Inventory Bridges",
        description: "Two-way automated API synchronization connecting warehouse management, supply chain, and billing systems.",
      },
      {
        title: "Executive Analytics & BI Dashboards",
        description: "Real-time revenue attribution, technician profitability, and margin reporting accessible from any device.",
      },
    ],
    architectureHighlights: [
      "Enterprise-grade security with audit logs, encryption, and SOC2-compliant design",
      "High-availability database clusters with automated failover and continuous backups",
      "Microservices and event-driven architecture designed to handle rapid volume surges",
      "Full intellectual property ownership with comprehensive developer documentation",
    ],
    ctaText: "Modernize Core Business Operations",
  },
];
