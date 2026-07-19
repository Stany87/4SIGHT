export interface ServiceData {
  slug: string
  sectionLabel: string
  title: string
  subtitle: string
  description: string
  problems: { problem: string; solution: string }[]
  solutions: { title: string; description: string }[]
  benefits: { title: string; description: string }[]
  techStack: { name: string; category: string }[]
  faqs: { question: string; answer: string }[]
  relatedSlugs: string[]
  // AI Automation specific
  workflowSteps?: { title: string; description: string }[]
  // SEO specific
  seoSteps?: { title: string; description: string }[]
}

export const services: Record<string, ServiceData> = {
  "website-development": {
    slug: "website-development",
    sectionLabel: "Solutions / Website Development",
    title: "WEBSITES THAT CONVERT VISITORS INTO CUSTOMERS",
    subtitle: "High-Performance Web Development",
    description: "We build fast, SEO-optimized websites and web applications that don't just look good — they generate leads, close sales, and scale with your business.",
    problems: [
      { problem: "Your website doesn't generate leads", solution: "Custom landing pages with conversion-optimized funnels, integrated analytics, and A/B testing infrastructure." },
      { problem: "Slow page load killing conversions", solution: "Performance-first architecture achieving 95+ Lighthouse scores with optimized Core Web Vitals." },
      { problem: "Poor mobile experience", solution: "Responsive, mobile-first design that works flawlessly across every device and screen size." },
      { problem: "No visibility on Google", solution: "Technical SEO built into the foundation — semantic HTML, structured data, and optimized metadata." },
      { problem: "Outdated design losing trust", solution: "Modern, premium aesthetics that instantly build credibility and differentiate you from competitors." },
      { problem: "Can't update content easily", solution: "Intuitive CMS integration letting your team update content without touching code." },
    ],
    solutions: [
      { title: "Corporate Websites", description: "Premium brand presence with conversion-focused design, storytelling, and lead capture." },
      { title: "Landing Pages", description: "Single-purpose pages engineered for maximum conversion rates with A/B testing built in." },
      { title: "E-Commerce Platforms", description: "Fast, secure online stores with payment processing, inventory management, and analytics." },
      { title: "Web Applications", description: "Complex, interactive web apps with real-time data, user authentication, and custom workflows." },
      { title: "Client Portals", description: "Self-service platforms for your customers with secure access, dashboards, and communication tools." },
      { title: "Progressive Web Apps", description: "App-like experiences that work offline, load instantly, and engage users with push notifications." },
    ],
    benefits: [
      { title: "95+ Lighthouse Score", description: "Every site ships production-ready with optimized performance, accessibility, and SEO scores." },
      { title: "SEO-First Architecture", description: "Built from the ground up with semantic HTML, structured data, and Core Web Vitals in mind." },
      { title: "Conversion Optimized", description: "Every element is designed to guide visitors toward your primary business goal." },
      { title: "Future-Proof Tech", description: "Built on modern frameworks (Next.js, React) that scale and adapt as your business grows." },
    ],
    techStack: [
      { name: "Next.js", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Tailwind CSS", category: "Frontend" },
      { name: "GSAP", category: "Animation" },
      { name: "Framer Motion", category: "Animation" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Vercel", category: "Hosting" },
      { name: "Cloudflare", category: "Performance" },
      { name: "Sanity CMS", category: "CMS" },
      { name: "Stripe", category: "Payments" },
    ],
    faqs: [
      { question: "How long does a website project take?", answer: "Typical timelines range from 4-8 weeks for marketing sites to 8-16 weeks for complex web applications. We provide a detailed timeline during our strategy call." },
      { question: "Do you redesign existing websites?", answer: "Yes. We audit your current site, identify what's working and what's not, then create a modernized version that preserves your brand while dramatically improving performance and conversions." },
      { question: "Will my website be mobile-friendly?", answer: "Every site we build is mobile-first. We design and test across all major devices and screen sizes to ensure a flawless experience everywhere." },
      { question: "Do you provide hosting and maintenance?", answer: "Yes. We offer managed hosting on high-performance infrastructure (Vercel, AWS) plus ongoing maintenance plans that include security updates, performance monitoring, and content support." },
      { question: "Can I update content myself?", answer: "Absolutely. We integrate user-friendly CMS solutions (like Sanity or custom dashboards) that let your team update text, images, and pages without any technical knowledge." },
    ],
    relatedSlugs: ["mystique-editorial", "askvisa-landing"],
  },

  "mobile-applications": {
    slug: "mobile-applications",
    sectionLabel: "Solutions / Mobile Applications",
    title: "MOBILE APPS THAT EXTEND YOUR BUSINESS REACH",
    subtitle: "Native & Cross-Platform Development",
    description: "We build mobile applications that your customers actually want to use — fast, intuitive, and seamlessly integrated with your existing business systems.",
    problems: [
      { problem: "No mobile presence for your business", solution: "Custom native or cross-platform apps that put your services in every customer's pocket." },
      { problem: "Poor user engagement and retention", solution: "Intuitive UX design with push notifications, offline support, and personalized experiences." },
      { problem: "App store rejection headaches", solution: "We handle the entire submission process — compliance, testing, and optimization for both iOS and Android stores." },
      { problem: "Disconnected from backend systems", solution: "Seamless API integration with your CRM, ERP, payment systems, and databases." },
      { problem: "High development costs for two platforms", solution: "Cross-platform development with React Native delivers native performance at a fraction of the cost." },
      { problem: "Slow, laggy app performance", solution: "Optimized code architecture, efficient state management, and thorough performance testing." },
    ],
    solutions: [
      { title: "iOS Applications", description: "Native iOS apps built with Swift/SwiftUI following Apple's Human Interface Guidelines." },
      { title: "Android Applications", description: "Native Android apps with Material Design, optimized for the full range of Android devices." },
      { title: "Cross-Platform Apps", description: "React Native applications that deliver near-native performance on both platforms from a single codebase." },
      { title: "Progressive Web Apps", description: "App-like web experiences with offline support, push notifications, and home screen installation." },
    ],
    benefits: [
      { title: "Single Codebase, Dual Platform", description: "React Native lets us ship to iOS and Android simultaneously, cutting development time in half." },
      { title: "Offline-First Design", description: "Apps that work seamlessly even without internet, syncing data when connectivity returns." },
      { title: "App Store Optimized", description: "Optimized listings, screenshots, and metadata to maximize discoverability and downloads." },
      { title: "Backend Integration", description: "Deep integration with your existing systems — CRM, ERP, payment gateways, and APIs." },
    ],
    techStack: [
      { name: "React Native", category: "Mobile" },
      { name: "Swift", category: "iOS" },
      { name: "Kotlin", category: "Android" },
      { name: "TypeScript", category: "Language" },
      { name: "Expo", category: "Mobile" },
      { name: "Firebase", category: "Backend" },
      { name: "Node.js", category: "API" },
      { name: "GraphQL", category: "API" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Redis", category: "Cache" },
    ],
    faqs: [
      { question: "Should I build native or cross-platform?", answer: "For most business apps, cross-platform (React Native) is the best choice — it delivers native performance while being 40-50% faster to develop. We recommend native only when you need platform-specific features like AR or complex animations." },
      { question: "How long does mobile app development take?", answer: "Simple apps take 8-12 weeks, while complex apps with backend integrations typically take 12-20 weeks. We provide a detailed estimate during our strategy call." },
      { question: "Do you handle app store submissions?", answer: "Yes, we manage the entire process — from creating developer accounts to app store listing optimization, compliance review, and submission for both Apple App Store and Google Play Store." },
      { question: "Can the app work offline?", answer: "Yes. We build offline-first architectures with local data storage and background sync, so your app remains functional even without internet connectivity." },
    ],
    relatedSlugs: ["clockworks-ats", "askvisa-crm"],
  },

  "custom-software": {
    slug: "custom-software",
    sectionLabel: "Solutions / Custom Software",
    title: "SOFTWARE BUILT AROUND YOUR BUSINESS, NOT THE OTHER WAY AROUND",
    subtitle: "CRM, ERP, SaaS & Business Platforms",
    description: "Off-the-shelf software forces you to adapt. We build custom solutions that adapt to you — eliminating bottlenecks, automating workflows, and scaling with your growth.",
    problems: [
      { problem: "Off-the-shelf tools don't fit your workflow", solution: "Custom-built platforms designed around your exact business processes and team needs." },
      { problem: "Data scattered across multiple platforms", solution: "Centralized systems that unify your data into a single source of truth with real-time dashboards." },
      { problem: "Manual processes eating up team hours", solution: "Automated workflows that handle repetitive tasks, routing, notifications, and approvals." },
      { problem: "Can't scale with business growth", solution: "Scalable architecture designed to handle 10x your current volume without breaking." },
      { problem: "High licensing costs for enterprise tools", solution: "Own your platform outright — no per-seat fees, no vendor lock-in, no feature limitations." },
      { problem: "Poor visibility into operations", solution: "Real-time analytics dashboards with the metrics that actually matter to your business." },
    ],
    solutions: [
      { title: "CRM Systems", description: "Custom customer relationship management platforms with automated pipelines, lead scoring, and reporting." },
      { title: "ERP Platforms", description: "Enterprise resource planning systems connecting finance, HR, inventory, and operations." },
      { title: "SaaS Products", description: "Multi-tenant software-as-a-service platforms with billing, user management, and API access." },
      { title: "Internal Tools", description: "Admin dashboards, workflow managers, and team collaboration tools built for your specific needs." },
      { title: "Client Portals", description: "Self-service portals giving your customers access to their data, documents, and communication." },
      { title: "Analytics Platforms", description: "Custom data visualization and business intelligence tools that surface actionable insights." },
    ],
    benefits: [
      { title: "Zero Licensing Fees", description: "You own your software. No per-seat charges, no vendor lock-in, no surprise price increases." },
      { title: "Built for Scale", description: "Architecture designed to handle 10-100x growth without costly rebuilds." },
      { title: "Full Integration", description: "Connects with every tool in your stack — payment systems, email, CRM, accounting, and more." },
      { title: "Measurable ROI", description: "We define success metrics upfront and build dashboards to track real business impact." },
    ],
    techStack: [
      { name: "Next.js", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Node.js", category: "Backend" },
      { name: "Python", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MongoDB", category: "Database" },
      { name: "Redis", category: "Cache" },
      { name: "Docker", category: "DevOps" },
      { name: "AWS", category: "Cloud" },
      { name: "Stripe", category: "Payments" },
      { name: "Twilio", category: "Communication" },
    ],
    faqs: [
      { question: "How much does custom software cost?", answer: "Projects typically range from $15K-$100K+ depending on complexity. We provide detailed estimates after our discovery call. Custom software pays for itself through efficiency gains — most clients see ROI within 6-12 months." },
      { question: "How long does development take?", answer: "Simple internal tools: 6-10 weeks. Complex CRM/ERP systems: 12-24 weeks. SaaS platforms: 16-32 weeks. We use agile development with regular demos so you see progress every 2 weeks." },
      { question: "Can you integrate with our existing tools?", answer: "Yes. We build custom integrations with any platform that has an API — Salesforce, HubSpot, QuickBooks, Stripe, Slack, Google Workspace, and hundreds more." },
      { question: "Who owns the code?", answer: "You do. 100%. We provide full source code access, documentation, and knowledge transfer. You're never locked into working with us." },
      { question: "Do you provide support after launch?", answer: "Yes. We offer ongoing support plans that include bug fixes, security updates, feature additions, and 24/7 monitoring." },
    ],
    relatedSlugs: ["clockworks-crm", "askvisa-crm", "solarkits-erp"],
  },

  seo: {
    slug: "seo",
    sectionLabel: "Solutions / SEO & Performance",
    title: "DOMINATE SEARCH RESULTS AND DRIVE ORGANIC GROWTH",
    subtitle: "Technical SEO & Performance Optimization",
    description: "We don't just optimize for search engines — we engineer your entire web presence for maximum visibility, speed, and conversion from organic traffic.",
    problems: [
      { problem: "Invisible on Google search results", solution: "Comprehensive technical SEO audit and optimization that fixes every ranking factor holding you back." },
      { problem: "Competitors outranking you", solution: "Competitive analysis and content strategy that targets high-intent keywords your competitors are missing." },
      { problem: "Website too slow for mobile users", solution: "Core Web Vitals optimization achieving sub-2-second load times on all devices." },
      { problem: "No traffic from organic search", solution: "End-to-end SEO strategy covering technical foundations, content creation, and authority building." },
      { problem: "Can't measure SEO ROI", solution: "Custom analytics dashboards tracking rankings, traffic, conversions, and revenue from organic search." },
      { problem: "Previous SEO efforts didn't work", solution: "Data-driven approach with transparent reporting — you see exactly what we're doing and why." },
    ],
    solutions: [
      { title: "Technical SEO Audit", description: "Deep-dive analysis of your site's technical health — crawlability, indexing, site architecture, and Core Web Vitals." },
      { title: "On-Page Optimization", description: "Content optimization, internal linking, schema markup, and metadata engineering for every page." },
      { title: "Content Strategy", description: "Keyword research, content calendars, and high-value content creation targeting your ideal customers." },
      { title: "Performance Optimization", description: "Core Web Vitals engineering — LCP, FID, CLS optimization achieving 95+ Lighthouse scores." },
      { title: "Local SEO", description: "Google Business Profile optimization, local citations, and location-based content strategy." },
      { title: "Analytics & Reporting", description: "Custom dashboards showing rankings, traffic, conversions, and ROI from organic search efforts." },
    ],
    seoSteps: [
      { title: "TECHNICAL SEO", description: "Crawlability, indexing, site architecture, Core Web Vitals, mobile optimization, and schema markup." },
      { title: "ON-PAGE SEO", description: "Content optimization, internal linking, meta tags, heading hierarchy, and keyword targeting." },
      { title: "CONTENT STRATEGY", description: "Keyword research, topic clusters, editorial calendar, and high-value content creation." },
      { title: "AUTHORITY BUILDING", description: "Backlink strategy, digital PR, guest content, and industry partnerships to build domain authority." },
      { title: "PERFORMANCE TRACKING", description: "Rank tracking, traffic analytics, conversion measurement, and ROI reporting with custom dashboards." },
    ],
    benefits: [
      { title: "Organic Traffic Growth", description: "Average 150-300% increase in organic traffic within the first 6 months of engagement." },
      { title: "Higher Search Rankings", description: "Page 1 rankings for target keywords that drive qualified leads to your business." },
      { title: "Faster Website Speed", description: "Core Web Vitals optimization achieving 95+ Lighthouse performance scores." },
      { title: "Transparent Reporting", description: "Real-time dashboards showing rankings, traffic, and revenue impact from every SEO initiative." },
    ],
    techStack: [
      { name: "Google Search Console", category: "Analytics" },
      { name: "Google Analytics 4", category: "Analytics" },
      { name: "Ahrefs", category: "SEO Tools" },
      { name: "Screaming Frog", category: "SEO Tools" },
      { name: "PageSpeed Insights", category: "Performance" },
      { name: "Schema.org", category: "Structured Data" },
      { name: "Next.js", category: "Framework" },
      { name: "Vercel Edge", category: "CDN" },
    ],
    faqs: [
      { question: "How long before I see SEO results?", answer: "Technical fixes show impact within 2-4 weeks. Content and authority efforts typically take 3-6 months to see significant ranking improvements. SEO is a long-term investment — but the compounding returns are worth it." },
      { question: "Do you guarantee #1 rankings?", answer: "No ethical SEO provider can guarantee specific rankings. What we guarantee is a data-driven process, transparent reporting, and measurable improvement in organic traffic and conversions." },
      { question: "Do you write content or just optimize?", answer: "Both. We develop content strategy, create high-value content, and optimize existing pages. Our content is written for humans first, search engines second." },
      { question: "What's included in a technical SEO audit?", answer: "Our audit covers 150+ factors including crawlability, indexing, site speed, mobile usability, Core Web Vitals, schema markup, internal linking, and competitive analysis. You receive a prioritized action plan." },
    ],
    relatedSlugs: ["mystique-editorial", "askvisa-landing"],
  },

  "ai-automation": {
    slug: "ai-automation",
    sectionLabel: "Solutions / AI Automation",
    title: "AUTOMATE YOUR BUSINESS. MULTIPLY YOUR OUTPUT.",
    subtitle: "AI Agents & Workflow Automation",
    description: "Stop wasting hours on tasks a machine can do better. We build AI-powered systems that handle your repetitive work, so your team can focus on what actually grows the business.",
    problems: [
      { problem: "Team drowning in manual, repetitive work", solution: "AI agents that handle data entry, email responses, scheduling, and routing automatically." },
      { problem: "Leads slipping through the cracks", solution: "Automated lead capture, qualification, and CRM routing that responds in seconds, not hours." },
      { problem: "Customer support overwhelmed", solution: "AI-powered chatbots and support systems that handle 80% of queries instantly, escalating complex issues to humans." },
      { problem: "No visibility into what's happening", solution: "Automated reporting dashboards that compile data from all your tools into actionable insights." },
      { problem: "Disconnected tools creating data silos", solution: "Integration automation that syncs your CRM, email, WhatsApp, invoicing, and project management tools." },
      { problem: "Scaling means hiring more people", solution: "Automation that lets you 3x output without 3x headcount." },
    ],
    solutions: [
      { title: "AI Agents", description: "Custom AI agents that handle customer inquiries, qualify leads, schedule meetings, and process data autonomously." },
      { title: "Workflow Automation", description: "End-to-end process automation connecting your CRM, email, invoicing, and project management tools." },
      { title: "CRM Automation", description: "Automated lead scoring, pipeline management, follow-up sequences, and deal tracking." },
      { title: "Communication Automation", description: "WhatsApp, email, and SMS automation for customer engagement, notifications, and drip campaigns." },
      { title: "Reporting & Analytics", description: "Automated data collection and dashboard generation from all your business tools." },
      { title: "Custom Integrations", description: "Connect any tools in your stack with custom APIs and automated data flows." },
    ],
    workflowSteps: [
      { title: "LEAD GENERATION", description: "Automated capture from websites, ads, and social media. AI qualifies and scores leads instantly." },
      { title: "CRM AUTOMATION", description: "Leads auto-route to the right team member. Pipeline updates, follow-ups, and tasks trigger automatically." },
      { title: "WHATSAPP AUTOMATION", description: "Instant customer engagement via WhatsApp — automated responses, order updates, and appointment confirmations." },
      { title: "EMAIL AUTOMATION", description: "Personalized drip campaigns, transactional emails, and follow-up sequences that nurture leads to conversion." },
      { title: "CUSTOMER SUPPORT AI", description: "AI chatbots handle FAQs, troubleshoot issues, and escalate complex queries — 24/7 without human intervention." },
      { title: "REPORTING", description: "Automated dashboards pulling data from every tool. Weekly reports generated and delivered without lifting a finger." },
      { title: "BUSINESS WORKFLOWS", description: "Custom automation for invoicing, approvals, inventory, scheduling, and any process unique to your business." },
    ],
    benefits: [
      { title: "Save 40+ Hours/Week", description: "Average time savings reported by clients after implementing our automation solutions." },
      { title: "Respond in Seconds, Not Hours", description: "Automated lead response and customer support that operates 24/7 without human intervention." },
      { title: "3x Output, Same Team", description: "Scale operations without proportionally scaling headcount. Do more with your existing team." },
      { title: "Zero Manual Errors", description: "Automated data entry, routing, and processing eliminates costly human mistakes." },
    ],
    techStack: [
      { name: "OpenAI / GPT", category: "AI" },
      { name: "LangChain", category: "AI" },
      { name: "n8n", category: "Automation" },
      { name: "Make (Integromat)", category: "Automation" },
      { name: "Zapier", category: "Automation" },
      { name: "WhatsApp API", category: "Communication" },
      { name: "Twilio", category: "Communication" },
      { name: "SendGrid", category: "Email" },
      { name: "Python", category: "Backend" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Redis", category: "Queue" },
    ],
    faqs: [
      { question: "Will AI replace my team?", answer: "No. AI handles the repetitive, low-value work so your team can focus on strategic, high-impact tasks. Think of it as giving every team member a tireless digital assistant." },
      { question: "How quickly can automation be set up?", answer: "Simple automations (email sequences, CRM routing) can be live in 1-2 weeks. Complex AI agents and multi-system integrations typically take 4-8 weeks." },
      { question: "What if something goes wrong with the automation?", answer: "We build in monitoring, error handling, and human escalation paths. You're alerted immediately if anything needs attention, and our support team is available for critical issues." },
      { question: "Can you automate my specific business process?", answer: "Almost certainly. We've automated processes across 12+ industries. During our strategy call, we'll map your workflows and identify the highest-impact automation opportunities." },
      { question: "What's the ROI of automation?", answer: "Most clients see positive ROI within 2-3 months. The average time savings alone (40+ hours/week) pays for the entire investment within the first quarter." },
    ],
    relatedSlugs: ["clockworks-ats", "clockworks-crm", "solarkits-erp"],
  },
}

export function getService(slug: string): ServiceData | undefined {
  return services[slug]
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(services)
}
