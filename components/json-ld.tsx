export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "4Sight",
    alternateName: "4Sight Agency",
    url: "https://www.4sight.work",
    logo: "https://www.4sight.work/images/4sight-logo.png",
    description:
      "Systems-focused technology agency specializing in custom software development, AI automation, CRM/ERP systems, and SaaS platforms.",
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@4sight.agency",
      contactType: "sales",
      availableLanguage: "English",
    },
    sameAs: [],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "4Sight Agency",
    alternateName: "4Sight",
    url: "https://www.4sight.work",
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "4Sight",
    url: "https://www.4sight.work",
    logo: "https://www.4sight.work/images/4sight-logo.png",
    description:
      "Custom software development agency building web applications, CRM/ERP systems, SaaS platforms, and AI automation solutions for businesses.",
    priceRange: "$$",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom Web Application Development",
            description: "Tailored web applications built for unique business needs.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CRM & ERP Development",
            description: "Custom CRM and ERP platforms for streamlined business operations.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS Platform Development",
            description: "Scalable software-as-a-service solutions from concept to launch.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI & Workflow Automation",
            description: "Intelligent automation solutions for complex business workflows.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Website Development",
            description: "High-converting corporate and marketing websites.",
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  )
}
