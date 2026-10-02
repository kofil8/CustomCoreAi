/**
 * JSON-LD Structured Data for CustomCoreAI
 * Placed in the root layout for Google rich results.
 */
export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "CustomCoreAI",
    url: "https://customcoreai.com",
    logo: "https://customcoreai.com/logo.png",
    description:
      "Custom backend systems, AI voice receptionists, and operations hubs engineered around the way your business actually works.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Austin",
      addressRegion: "TX",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    priceRange: "$$$$",
    serviceType: [
      "Custom Software Development",
      "AI Voice Receptionist Systems",
      "Business Operations Automation",
      "Custom CRM Development",
      "Backend API Engineering",
    ],
    knowsAbout: [
      "Next.js",
      "PostgreSQL",
      "Twilio Voice API",
      "Custom SaaS Engineering",
      "Service Business Automation",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "architect@customcoreai.com",
      availableLanguage: "English",
    },
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CustomCoreAI",
    url: "https://customcoreai.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://customcoreai.com/services?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}
