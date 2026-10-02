import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { StructuredData } from "@/components/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://customcoreai.com"),
  title: {
    default: "CustomCoreAI | Custom Backend Systems & AI Workflows for US Businesses",
    template: "%s | CustomCoreAI",
  },
  description:
    "Stop forcing your business into rigid off-the-shelf software. CustomCoreAI engineers custom backend systems, AI voice receptionists, and operations hubs built around how your business actually works.",
  keywords: [
    "custom backend systems",
    "senior backend engineer",
    "AI voice receptionist",
    "custom CRM for contractors",
    "service business automation",
    "roofing dispatch software",
    "HVAC field operations software",
    "PostgreSQL systems engineering",
    "scalable API design",
    "Twilio telephony automation",
    "custom software for small business",
    "SaaS engineering Austin TX",
  ],
  authors: [{ name: "CustomCoreAI Engineering Studio" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "CustomCoreAI — Custom Backend Systems & AI Workflows",
    description:
      "Stop forcing your business into rigid off-the-shelf software. Work directly with a senior engineer to architect scalable APIs, automated dispatch pipelines, and custom operations hubs.",
    url: "https://customcoreai.com",
    siteName: "CustomCoreAI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CustomCoreAI — Custom Backend Systems & AI Workflows",
    description:
      "Custom software and AI systems engineered around your business operations. Direct senior engineer access. 100% code ownership.",
  },
  alternates: {
    canonical: "https://customcoreai.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Google Fonts — preconnect + stylesheet (avoids PostCSS @import ordering issue) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300..900;1,14..32,300..900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="min-h-screen bg-[#08090D] text-slate-100 antialiased selection:bg-[#B4F33C]/25 selection:text-white relative">
        {/* ── Global Architectural Faded Square Grid (All Pages) ── */}
        <div className="fixed inset-0 pointer-events-none z-0 global-faded-grid" />
        <div className="fixed inset-0 pointer-events-none z-0 global-faded-grid-lg" />

        <StructuredData />
        <ScrollReveal />
        <Navbar />
        <main className="relative z-10 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

