export interface CaseStudyData {
  slug: string
  title: string
  client: string
  industry: string
  services: string[]
  heroImage: string
  overview: string
  challenge: string
  solution: string
  technologies: string[]
  timeline: string
  results: { metric: string; label: string }[]
  screenshots: string[]
  testimonial?: { quote: string; name: string; role: string }
}

export const caseStudies: Record<string, CaseStudyData> = {
  "mystique-editorial": {
    slug: "mystique-editorial",
    title: "Mystique Editorial Portal",
    client: "Mystique Beauty",
    industry: "Beauty & Lifestyle",
    services: ["Website Development", "UI/UX Design"],
    heroImage: "/images/portfolio-mystique.png",
    overview: "Mystique needed a premium editorial website that showcased their beauty treatments with an immersive, magazine-quality experience — driving consultations and bookings.",
    challenge: "Their existing storefront layout failed to engage premium design audiences or support flexible content blocks. The client needed a stunning headless frontend with dynamic layouts and micro-interactions to match their brand's luxury positioning.",
    solution: "We implemented a stunning custom headless frontend with dynamic, immersive layouts and micro-interactions. The site features parallax scrolling, animated content reveals, before-after treatment sliders, and a consultation booking flow integrated directly into the browsing experience.",
    technologies: ["Next.js", "React", "GSAP", "Tailwind CSS", "Sanity CMS", "Vercel"],
    timeline: "6 weeks",
    results: [
      { metric: "35%", label: "Conversion boost" },
      { metric: "2.1s", label: "Load time" },
      { metric: "98", label: "Lighthouse score" },
      { metric: "3x", label: "Session duration increase" },
    ],
    screenshots: ["/images/portfolio-mystique.png"],
    testimonial: {
      quote: "4Sight didn't just build us a website — they engineered a system that transformed how we operate. Our lead pipeline is fully automated and we've tripled conversions.",
      name: "Arjun Mehta",
      role: "CEO, Clockworks Systems",
    },
  },

  "clockworks-crm": {
    slug: "clockworks-crm",
    title: "Clockworks CRM Platform",
    client: "Clockworks Systems",
    industry: "HR & Recruiting",
    services: ["Custom Software", "CRM Development"],
    heroImage: "/images/portfolio-clockworks-crm.jpg",
    overview: "Clockworks needed a centralized CRM to manage their growing client base, automate follow-ups, and track their entire sales pipeline from lead to close.",
    challenge: "The team was managing relationships across spreadsheets, email, and sticky notes. Leads were falling through cracks, follow-ups were inconsistent, and there was zero visibility into the sales pipeline. They needed a system that matched their specific workflow.",
    solution: "We built a custom CRM tailored to their exact sales process — automated lead capture from their website and job portals, intelligent lead scoring, automated email/WhatsApp follow-up sequences, and real-time pipeline dashboards with forecasting.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Twilio", "SendGrid"],
    timeline: "10 weeks",
    results: [
      { metric: "3x", label: "Lead conversion rate" },
      { metric: "85%", label: "Follow-up automation" },
      { metric: "60%", label: "Admin time saved" },
      { metric: "2x", label: "Pipeline visibility" },
    ],
    screenshots: ["/images/portfolio-clockworks-crm.jpg"],
  },

  "clockworks-ats": {
    slug: "clockworks-ats",
    title: "Clockworks Recruiting ATS",
    client: "Clockworks Recruiting",
    industry: "HR & Recruiting",
    services: ["Custom Software", "AI Automation"],
    heroImage: "/images/portfolio-clockworks-ats.jpg",
    overview: "Clockworks Recruiting needed an Applicant Tracking System that unified their hiring pipeline — from candidate sourcing to placement — with AI-powered matching and automation.",
    challenge: "The ATS platform they built replaces those three different tools with hiring team collaboration, every interaction tracked. The hiring team saved over 40 hours a week in manual candidate screening and coordination.",
    solution: "We built a full-featured ATS with AI-powered candidate matching, automated interview scheduling, collaborative evaluation scorecards, and client portal access. The system integrates with job boards for automatic posting and resume parsing.",
    technologies: ["Next.js", "React", "Python", "PostgreSQL", "OpenAI API", "AWS"],
    timeline: "14 weeks",
    results: [
      { metric: "40h", label: "Saved per week" },
      { metric: "70%", label: "Faster screening" },
      { metric: "95%", label: "Candidate match accuracy" },
      { metric: "3x", label: "Placement volume" },
    ],
    screenshots: ["/images/portfolio-clockworks-ats.jpg"],
    testimonial: {
      quote: "The ATS platform they built replaces three different tools we were paying for. Everything is in one place now. The hiring team saves over 40 hours a week.",
      name: "Priya Sharma",
      role: "Head of Operations, Clockworks Recruiting",
    },
  },

  "askvisa-crm": {
    slug: "askvisa-crm",
    title: "AskVisa CRM System",
    client: "AskVisa Immigration",
    industry: "Immigration & Legal",
    services: ["Custom Software", "CRM Development", "AI Automation"],
    heroImage: "/images/portfolio-askvisa-crm.jpg",
    overview: "AskVisa needed a CRM that could handle the complexity of immigration case management — tracking applications, deadlines, documents, and client communications in one place.",
    challenge: "Immigration consulting involves dozens of document types, strict deadlines, multi-step application processes, and constant client communication. Their team was drowning in spreadsheets and missed deadlines were damaging client relationships.",
    solution: "We built a custom CRM with automated case lifecycle management, document checklist workflows, deadline alerts, client self-service portal, and WhatsApp integration for real-time updates. The AI assistant handles initial inquiry qualification.",
    technologies: ["Next.js", "Node.js", "MongoDB", "WhatsApp API", "OpenAI", "AWS"],
    timeline: "12 weeks",
    results: [
      { metric: "90%", label: "On-time submissions" },
      { metric: "50%", label: "Admin time reduced" },
      { metric: "4.8★", label: "Client satisfaction" },
      { metric: "2x", label: "Case capacity" },
    ],
    screenshots: ["/images/portfolio-askvisa-crm.jpg"],
    testimonial: {
      quote: "From concept to deployment in six weeks. They understood our visa processing pain points immediately and delivered a CRM that cut our response time from 12 minutes to 45 seconds.",
      name: "Rahul Kapoor",
      role: "Managing Director, AskVisa Hub",
    },
  },

  "askvisa-landing": {
    slug: "askvisa-landing",
    title: "AskVisa Landing Experience",
    client: "AskVisa Immigration",
    industry: "Immigration & Legal",
    services: ["Website Development", "SEO"],
    heroImage: "/images/portfolio-askvisa-landing.png",
    overview: "A high-converting landing page for AskVisa's immigration consulting services — designed to educate visitors and drive consultation bookings.",
    challenge: "AskVisa's previous website had a high bounce rate and low conversion. Visitors couldn't quickly understand the services offered, find relevant information for their visa type, or easily book a consultation.",
    solution: "We designed a conversion-optimized landing page with clear visa category navigation, trust indicators, success stories, and a streamlined booking flow. Every section is designed to move visitors toward scheduling a consultation.",
    technologies: ["Next.js", "React", "Tailwind CSS", "GSAP", "Vercel"],
    timeline: "4 weeks",
    results: [
      { metric: "280%", label: "Conversion increase" },
      { metric: "45%", label: "Lower bounce rate" },
      { metric: "3.5x", label: "Consultation bookings" },
      { metric: "1.8s", label: "Page load time" },
    ],
    screenshots: ["/images/portfolio-askvisa-landing.png"],
  },

  "solarkits-erp": {
    slug: "solarkits-erp",
    title: "SolarKits ERP Platform",
    client: "SolarKits Energy",
    industry: "Energy & Manufacturing",
    services: ["Custom Software", "AI Automation"],
    heroImage: "/images/portfolio-solarkits.png",
    overview: "An end-to-end ERP platform for SolarKits — managing inventory, production, sales, and field installation operations for a solar energy company.",
    challenge: "SolarKits was scaling fast but their operations were held together by spreadsheets and WhatsApp groups. Inventory counts were always wrong, production couldn't keep up with sales promises, and field teams had no visibility into job schedules.",
    solution: "We built a custom ERP connecting sales, inventory, production, and field operations. Automated inventory tracking with barcode scanning, production scheduling with capacity planning, field team mobile app for installation tracking, and executive dashboards.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "React Native", "Docker", "AWS"],
    timeline: "18 weeks",
    results: [
      { metric: "22%", label: "Waste reduction" },
      { metric: "96%", label: "On-time delivery" },
      { metric: "3x", label: "Operational visibility" },
      { metric: "40%", label: "Inventory accuracy improvement" },
    ],
    screenshots: ["/images/portfolio-solarkits.png"],
    testimonial: {
      quote: "The custom ERP gave us real-time visibility into production for the first time. We reduced waste by 22% and improved on-time delivery to 96%.",
      name: "Vijay Kulkarni",
      role: "Operations Director, SolarKits",
    },
  },
}

export function getCaseStudy(slug: string): CaseStudyData | undefined {
  return caseStudies[slug]
}

export function getAllCaseStudySlugs(): string[] {
  return Object.keys(caseStudies)
}

export function getCaseStudiesByService(service: string): CaseStudyData[] {
  return Object.values(caseStudies).filter((cs) =>
    cs.services.some((s) => s.toLowerCase().includes(service.toLowerCase()))
  )
}

export function getCaseStudiesByIndustry(industry: string): CaseStudyData[] {
  return Object.values(caseStudies).filter((cs) =>
    cs.industry.toLowerCase().includes(industry.toLowerCase())
  )
}
