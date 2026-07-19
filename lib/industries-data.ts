export interface IndustryData {
  slug: string
  sectionLabel: string
  title: string
  subtitle: string
  description: string
  painPoints: { title: string; description: string }[]
  solutions: { title: string; description: string }[]
  faqs: { question: string; answer: string }[]
  testimonial?: { quote: string; name: string; role: string; company: string }
  relatedSlugs: string[]
}

export const industries: Record<string, IndustryData> = {
  healthcare: {
    slug: "healthcare",
    sectionLabel: "Industries / Healthcare",
    title: "TECHNOLOGY FOR HEALTHCARE THAT PUTS PATIENTS FIRST",
    subtitle: "Healthcare & Medical Practices",
    description: "We build HIPAA-aware digital solutions for healthcare providers — from patient portals and appointment systems to custom EHR integrations and telehealth platforms.",
    painPoints: [
      { title: "Paper-heavy patient intake", description: "Manual forms, faxes, and disconnected records slow down every patient interaction and increase error rates." },
      { title: "Appointment no-shows costing revenue", description: "Without automated reminders and easy rescheduling, clinics lose thousands in missed appointments monthly." },
      { title: "Poor online presence", description: "Patients can't find you, book online, or access their records — so they go to competitors who offer it." },
      { title: "Disconnected software systems", description: "Your EHR, billing, scheduling, and communication tools don't talk to each other, creating data silos." },
      { title: "Staff overwhelmed with admin tasks", description: "Clinicians spend more time on paperwork than patient care, leading to burnout and inefficiency." },
      { title: "Compliance and security concerns", description: "Handling sensitive patient data across multiple systems creates compliance risks and audit headaches." },
    ],
    solutions: [
      { title: "Patient Portals", description: "Self-service platforms where patients view records, book appointments, pay bills, and communicate with providers." },
      { title: "Appointment Automation", description: "Online booking, automated reminders, waitlist management, and no-show follow-up systems." },
      { title: "Telehealth Platforms", description: "Secure video consultations with integrated scheduling, notes, and prescription management." },
      { title: "Practice Websites", description: "SEO-optimized, conversion-focused websites that attract new patients and build trust online." },
      { title: "Custom Integrations", description: "Connect your EHR, billing, labs, and pharmacy systems into unified, automated workflows." },
      { title: "AI-Powered Triage", description: "Intelligent chatbots that handle patient inquiries, symptom assessment, and appointment routing 24/7." },
    ],
    faqs: [
      { question: "Are your solutions HIPAA compliant?", answer: "We build with security and privacy as foundational principles. While we're not a compliance certification body, all our healthcare solutions follow HIPAA best practices — encryption at rest and in transit, access controls, audit logging, and BAA-ready infrastructure." },
      { question: "Can you integrate with our existing EHR?", answer: "Yes. We've built integrations with major EHR/EMR systems and can connect via HL7 FHIR, REST APIs, or custom middleware to ensure your systems work together seamlessly." },
      { question: "How long does implementation take?", answer: "A practice website takes 4-6 weeks. Patient portals and booking systems take 8-12 weeks. Full platform integrations range from 12-20 weeks depending on complexity." },
      { question: "Do you provide ongoing support?", answer: "Absolutely. We offer maintenance plans that include security updates, performance monitoring, feature enhancements, and priority support for any issues." },
    ],
    testimonial: {
      quote: "4Sight transformed our patient experience. Online booking reduced no-shows by 35%, and the patient portal cut our front-desk calls in half.",
      name: "Dr. Priya Sharma",
      role: "Medical Director",
      company: "Sunrise Health Clinic",
    },
    relatedSlugs: ["askvisa-crm"],
  },

  "real-estate": {
    slug: "real-estate",
    sectionLabel: "Industries / Real Estate",
    title: "CLOSE MORE DEALS WITH SMARTER REAL ESTATE TECHNOLOGY",
    subtitle: "Real Estate & Property Management",
    description: "We build CRM systems, property listing platforms, and automation tools that help real estate professionals manage leads, showcase properties, and close deals faster.",
    painPoints: [
      { title: "Leads getting lost in spreadsheets", description: "Without a proper system, hot leads go cold because follow-ups are manual and inconsistent." },
      { title: "Property listings scattered everywhere", description: "Managing listings across your website, portals, and social media is time-consuming and error-prone." },
      { title: "No automated follow-up sequences", description: "Every lead requires manual emails and calls — your team can't scale beyond a handful of active prospects." },
      { title: "Poor online property showcase", description: "Low-quality listings with bad photos and no virtual tours lose buyers before they even inquire." },
      { title: "Document management chaos", description: "Contracts, agreements, and compliance documents are scattered across email, drives, and filing cabinets." },
      { title: "No visibility into sales pipeline", description: "You can't see which deals are progressing, stalled, or at risk without manual status updates." },
    ],
    solutions: [
      { title: "Real Estate CRM", description: "Custom CRM with lead scoring, automated follow-ups, deal pipeline tracking, and commission calculations." },
      { title: "Property Listing Platform", description: "Beautiful, filterable property listings with virtual tours, floor plans, and inquiry forms." },
      { title: "Lead Automation", description: "Automated lead capture from portals, instant response via email/WhatsApp, and nurture sequences." },
      { title: "Agent Portals", description: "Dashboards for agents to manage listings, track leads, schedule viewings, and monitor performance." },
      { title: "Website Development", description: "Premium real estate websites with IDX integration, neighborhood pages, and SEO optimization." },
      { title: "Document Management", description: "Digital document signing, storage, and automated compliance workflows." },
    ],
    faqs: [
      { question: "Can your CRM integrate with property portals?", answer: "Yes. We build integrations with major property portals, MLS feeds, and listing syndication platforms to keep your inventory synchronized everywhere." },
      { question: "Do you build property listing websites?", answer: "Yes. We build premium, SEO-optimized property listing platforms with advanced search, virtual tours, neighborhood data, and lead capture — designed to outperform template-based solutions." },
      { question: "How does lead automation work?", answer: "When a lead comes in from any source (website, portal, ad), our system instantly responds via email/WhatsApp, scores the lead based on engagement, assigns it to the right agent, and triggers a nurture sequence — all automatically." },
    ],
    testimonial: {
      quote: "Our lead response time went from 4 hours to 30 seconds. The CRM automation alone has increased our conversion rate by 40%.",
      name: "Rahul Mehta",
      role: "Founding Partner",
      company: "Horizon Properties",
    },
    relatedSlugs: ["askvisa-crm", "askvisa-landing"],
  },

  manufacturing: {
    slug: "manufacturing",
    sectionLabel: "Industries / Manufacturing",
    title: "DIGITIZE YOUR MANUFACTURING OPERATIONS",
    subtitle: "Manufacturing & Industrial",
    description: "We build custom ERP systems, inventory management platforms, and production tracking tools that bring visibility and automation to manufacturing operations.",
    painPoints: [
      { title: "Production tracking on paper or Excel", description: "Without real-time visibility, you can't identify bottlenecks, track quality, or optimize throughput." },
      { title: "Inventory discrepancies and stockouts", description: "Manual inventory tracking leads to overstock, stockouts, and costly production delays." },
      { title: "Disconnected sales and production", description: "Sales commits to deadlines without checking production capacity, causing missed deliveries." },
      { title: "Quality control gaps", description: "No systematic way to track defects, enforce quality checkpoints, or trace issues to their source." },
      { title: "Complex quoting and costing", description: "Calculating accurate quotes with variable materials, labor, and overhead is slow and error-prone." },
      { title: "Compliance documentation burden", description: "ISO, safety, and regulatory documentation is managed manually, creating audit risks." },
    ],
    solutions: [
      { title: "Production Management", description: "Real-time production tracking with work order management, machine status monitoring, and throughput analytics." },
      { title: "Inventory Management", description: "Automated stock tracking with reorder alerts, barcode scanning, and multi-warehouse support." },
      { title: "Custom ERP", description: "Unified platform connecting sales, production, inventory, purchasing, and finance." },
      { title: "Quality Management", description: "Digital quality checkpoints, defect tracking, root cause analysis, and compliance documentation." },
      { title: "Quoting & Estimation", description: "Automated quoting tools that calculate costs based on materials, labor, machine time, and overhead." },
      { title: "Reporting Dashboards", description: "Real-time dashboards showing OEE, production throughput, inventory levels, and financial KPIs." },
    ],
    faqs: [
      { question: "Can you integrate with our existing machinery?", answer: "We integrate with machines that have digital outputs (IoT sensors, PLC data, barcode systems). For older equipment, we can add sensors or manual input touchpoints." },
      { question: "How do you handle multi-location operations?", answer: "Our systems support multiple facilities with centralized dashboards, location-specific views, and inter-facility transfer management." },
      { question: "What about ISO compliance features?", answer: "We build document control, audit trails, corrective action tracking, and reporting features that support ISO 9001, ISO 14001, and industry-specific standards." },
    ],
    testimonial: {
      quote: "The custom ERP gave us real-time visibility into production for the first time. We reduced waste by 22% and improved on-time delivery to 96%.",
      name: "Vijay Kulkarni",
      role: "Operations Director",
      company: "PrecisionTech Manufacturing",
    },
    relatedSlugs: ["solarkits-erp", "clockworks-crm"],
  },

  startups: {
    slug: "startups",
    sectionLabel: "Industries / Startups",
    title: "LAUNCH FASTER. ITERATE SMARTER. SCALE CONFIDENTLY.",
    subtitle: "Startups & New Ventures",
    description: "We help startups go from idea to launch — building MVPs, full-stack platforms, and growth infrastructure that attracts users, investors, and revenue.",
    painPoints: [
      { title: "Too many ideas, no technical roadmap", description: "Without clear technical guidance, startups waste months and money building the wrong thing." },
      { title: "Can't afford a full engineering team", description: "Hiring senior developers is expensive and slow when you need to ship yesterday." },
      { title: "MVP taking forever to launch", description: "Feature creep, scope mismanagement, and poor planning push launches weeks or months behind." },
      { title: "Tech debt slowing you down", description: "Quick-and-dirty code from early days is now holding back feature development and scaling." },
      { title: "No growth infrastructure", description: "You're growing but your systems (analytics, email, CRM, ops) can't keep up." },
      { title: "Investor demo not impressive enough", description: "Your product needs to look and feel polished to secure funding, but it still looks like a prototype." },
    ],
    solutions: [
      { title: "MVP Development", description: "Lean, focused MVPs built in 6-10 weeks that validate your core hypothesis with real users." },
      { title: "Full-Stack Product", description: "Complete product development from frontend to backend, database, APIs, and deployment." },
      { title: "Technical Advisory", description: "CTO-level guidance on architecture, technology choices, hiring, and technical roadmap." },
      { title: "Design Sprint", description: "Rapid prototyping and user testing in 1-2 weeks to validate concepts before writing code." },
      { title: "Growth Engineering", description: "Analytics, A/B testing, performance optimization, and marketing tech stack setup." },
      { title: "Scale-Up Support", description: "Architecture refactoring, database optimization, and infrastructure scaling as you grow." },
    ],
    faqs: [
      { question: "How quickly can you build an MVP?", answer: "Our typical MVP timeline is 6-10 weeks from kickoff to launch. We use design sprints to validate concepts in week 1, then build and ship iteratively." },
      { question: "Do you take equity or revenue share?", answer: "Our standard engagement is fee-for-service. We occasionally consider equity partnerships for exceptional opportunities, but this is discussed on a case-by-case basis." },
      { question: "Can you help with investor materials?", answer: "Yes. We create polished product demos, build investor-ready prototypes, and prepare technical due diligence documentation." },
      { question: "What happens after the MVP?", answer: "We provide a clear technical roadmap for post-MVP development, including feature prioritization, scaling plan, and team building recommendations. Many clients continue with us for ongoing development." },
    ],
    testimonial: {
      quote: "From concept to live product in 8 weeks. 4Sight didn't just build our MVP — they helped us think through the entire business model.",
      name: "Neha Kapoor",
      role: "Co-Founder",
      company: "TaskFlow AI",
    },
    relatedSlugs: ["clockworks-ats", "mystique-editorial"],
  },

  "interior-design": {
    slug: "interior-design",
    sectionLabel: "Industries / Interior Design",
    title: "DIGITAL PRESENCE THAT MATCHES YOUR DESIGN EXCELLENCE",
    subtitle: "Interior Design & Architecture",
    description: "We build stunning portfolio websites, client portals, and project management tools that help interior designers showcase their work and manage projects seamlessly.",
    painPoints: [
      { title: "Portfolio website doesn't reflect your quality", description: "Template websites with slow-loading images undersell your work and lose potential high-value clients." },
      { title: "Client communication scattered", description: "Mood boards in email, invoices in Excel, revisions in WhatsApp — nothing is centralized." },
      { title: "No online booking or inquiry system", description: "Potential clients can't easily reach you or book consultations from your website." },
      { title: "Project tracking via spreadsheets", description: "Managing timelines, budgets, vendor contacts, and material orders manually is chaos." },
      { title: "Social media not converting to leads", description: "Beautiful Instagram content but no clear path from social media to booked consultations." },
      { title: "Difficult to show before-and-after transformations", description: "No interactive way to showcase the dramatic impact of your work." },
    ],
    solutions: [
      { title: "Portfolio Website", description: "Premium, image-first websites with project galleries, before-after sliders, and immersive case studies." },
      { title: "Client Portal", description: "Centralized workspace for mood boards, revisions, approvals, timelines, and invoicing." },
      { title: "Booking System", description: "Online consultation booking with automated confirmations, reminders, and intake forms." },
      { title: "Project Management", description: "Custom tools for tracking timelines, budgets, vendor coordination, and material procurement." },
      { title: "Social Integration", description: "Instagram/Pinterest feeds embedded in your website with direct inquiry CTAs on every piece." },
      { title: "SEO & Local Marketing", description: "Search optimization targeting '[city] interior designer' and related high-intent keywords." },
    ],
    faqs: [
      { question: "Can you build a website that loads high-res images fast?", answer: "Absolutely. We use next-gen image formats (WebP, AVIF), progressive loading, CDN delivery, and responsive sizing to showcase your work in full quality without sacrificing speed." },
      { question: "Do you integrate with design tools like SketchUp or AutoCAD?", answer: "We can build import/export workflows for common design file formats and create client-facing viewers for 3D models and floor plans." },
      { question: "Can clients approve designs through the portal?", answer: "Yes. Our client portals include revision tracking, approval workflows, and comment threads — all in one place so you never lose feedback in email threads." },
    ],
    testimonial: {
      quote: "Our new portfolio website finally does justice to our work. Inquiries from the website tripled within the first month of launching.",
      name: "Ananya Desai",
      role: "Principal Designer",
      company: "Atelier Studio",
    },
    relatedSlugs: ["mystique-editorial"],
  },

  photography: {
    slug: "photography",
    sectionLabel: "Industries / Photography",
    title: "SHOWCASE YOUR CRAFT. BOOK MORE CLIENTS.",
    subtitle: "Photography & Creative Studios",
    description: "We build portfolio platforms, client galleries, booking systems, and e-commerce solutions that help photographers turn their art into a thriving business.",
    painPoints: [
      { title: "Portfolio doesn't convert visitors to clients", description: "Beautiful images but no clear path to booking — visitors admire your work and leave." },
      { title: "Client delivery via Google Drive or WeTransfer", description: "Unprofessional delivery experience with no branding, proofing, or selection tools." },
      { title: "Manual booking and scheduling", description: "Back-and-forth emails to confirm dates, locations, and packages wastes hours every week." },
      { title: "No print or digital sales storefront", description: "Missing revenue from print sales, digital downloads, and licensing because you have no shop." },
      { title: "SEO invisible for local searches", description: "When someone searches '[city] wedding photographer', you're nowhere on the first page." },
      { title: "Contract and invoice headaches", description: "Creating proposals, contracts, and invoices manually for every client is tedious and error-prone." },
    ],
    solutions: [
      { title: "Portfolio Website", description: "Stunning, fast-loading gallery websites with fullscreen image viewing and category filtering." },
      { title: "Client Galleries", description: "Private, branded galleries with proofing, favoriting, download, and print ordering capabilities." },
      { title: "Booking System", description: "Online booking with package selection, date availability, automated contracts, and payment processing." },
      { title: "Print Shop", description: "E-commerce storefront for print sales, digital downloads, and licensing with automated fulfillment." },
      { title: "CRM & Workflow", description: "Client management from inquiry to delivery — automated emails, timeline tracking, and follow-ups." },
      { title: "SEO & Marketing", description: "Local SEO optimization and content strategy targeting your ideal client demographics." },
    ],
    faqs: [
      { question: "Will my photos look good on the website?", answer: "They'll look incredible. We use color-accurate rendering, progressive loading, and fullscreen lightbox viewing that showcases your work exactly as you intended — fast on every device." },
      { question: "Can clients select and order prints from galleries?", answer: "Yes. We build integrated proofing galleries where clients can favorite images, select their picks, and order prints — all from a branded, professional interface." },
      { question: "Do you help with SEO for photographers?", answer: "Yes. We optimize for high-intent local searches like '[city] wedding photographer', '[city] portrait photographer', and related terms. We also implement schema markup specifically for creative portfolios." },
    ],
    testimonial: {
      quote: "The client gallery system elevated our entire brand. Clients love the experience, and we've added a new revenue stream from print sales.",
      name: "Karan Singh",
      role: "Lead Photographer",
      company: "Lenswork Studios",
    },
    relatedSlugs: ["mystique-editorial"],
  },
}

export function getIndustry(slug: string): IndustryData | undefined {
  return industries[slug]
}

export function getAllIndustrySlugs(): string[] {
  return Object.keys(industries)
}
