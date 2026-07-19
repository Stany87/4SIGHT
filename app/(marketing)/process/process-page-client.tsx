"use client"

import { useRef, useEffect } from "react"
import { PageHero } from "@/components/page-hero"
import { CtaBanner } from "@/components/cta-banner"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
  {
    number: "01",
    title: "DISCOVERY",
    description: "We start by deeply understanding your business — goals, challenges, existing systems, and target audience. We map pain points and identify high-impact opportunities.",
    deliverables: ["Business requirements document", "Current system audit", "Opportunity assessment", "Stakeholder interviews"],
    duration: "Week 1",
  },
  {
    number: "02",
    title: "STRATEGY",
    description: "We define the roadmap, technology stack, and success metrics. Every decision is aligned with measurable business outcomes — not just technical preferences.",
    deliverables: ["Technology architecture plan", "Project timeline & milestones", "Success metrics & KPIs", "Budget and resource allocation"],
    duration: "Week 1-2",
  },
  {
    number: "03",
    title: "DESIGN",
    description: "We craft intuitive interfaces and system architectures. You see prototypes, test interactions, and approve designs before a single line of code is written.",
    deliverables: ["Wireframes & user flows", "High-fidelity mockups", "Interactive prototypes", "Design system & style guide"],
    duration: "Week 2-4",
  },
  {
    number: "04",
    title: "DEVELOPMENT",
    description: "We build with precision — clean code, scalable architecture, and rigorous testing at every stage. You get bi-weekly demos so progress is always visible.",
    deliverables: ["Frontend & backend development", "API integrations", "Database architecture", "Bi-weekly demo sessions"],
    duration: "Week 4-10",
  },
  {
    number: "05",
    title: "TESTING",
    description: "Comprehensive QA across devices, browsers, and edge cases. Performance, security, and accessibility audits included. Nothing ships until it's bulletproof.",
    deliverables: ["Cross-browser & device testing", "Performance optimization", "Security audit", "Accessibility compliance"],
    duration: "Week 10-12",
  },
  {
    number: "06",
    title: "LAUNCH",
    description: "Seamless deployment with zero-downtime strategies. We handle DNS, hosting, monitoring, and go-live coordination so your launch is smooth and confident.",
    deliverables: ["Production deployment", "DNS & SSL configuration", "Monitoring setup", "Launch day support"],
    duration: "Week 12",
  },
  {
    number: "07",
    title: "SUPPORT",
    description: "Ongoing optimization, maintenance, and scaling. Your system evolves as your business grows — we're your long-term technology partner.",
    deliverables: ["Performance monitoring", "Security updates", "Feature enhancements", "24/7 critical support"],
    duration: "Ongoing",
  },
]

export function ProcessPageClient() {
  const timelineRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineRef.current || !lineRef.current) return

    const ctx = gsap.context(() => {
      // Animate the connecting line
      gsap.fromTo(lineRef.current, { scaleY: 0 }, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 0.8,
        },
      })

      // Animate each step
      const steps = timelineRef.current?.querySelectorAll(".process-step")
      steps?.forEach((step) => {
        gsap.from(step, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: step,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        })
      })
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <PageHero
        sectionLabel="Our Process"
        title="FROM IDEA TO LAUNCH AND BEYOND"
        subtitle="A Proven 7-Step Framework"
        description="Every project follows our structured process — designed to minimize risk, maximize quality, and deliver predictable results. No surprises, just systematic excellence."
        breadcrumbs={[{ label: "Process", href: "/process" }]}
        primaryCta={{ label: "Start a Project", href: "/contact" }}
      />

      <section ref={timelineRef} className="relative py-24 pl-6 md:pl-28 pr-6 md:pr-12">
        {/* Vertical line */}
        <div
          ref={lineRef}
          className="absolute left-6 md:left-28 top-0 bottom-0 w-[2px] bg-accent/60 origin-top ml-[11px]"
        />

        <div className="space-y-0">
          {processSteps.map((step) => (
            <div key={step.number} className="process-step group relative flex gap-8 pb-24 last:pb-0">
              {/* Node */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-6 h-6 rounded-full border-2 border-accent bg-background flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 -mt-1 max-w-4xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent/60">
                      {step.number}
                    </span>
                    <h2 className="mt-2 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h2>
                    <p className="mt-4 max-w-xl font-mono text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 md:text-right">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Timeline
                    </span>
                    <p className="font-[var(--font-bebas)] text-2xl text-accent mt-1">{step.duration}</p>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mt-8">
                  <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                    Key Deliverables
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {step.deliverables.map((d, i) => (
                      <span
                        key={i}
                        className="border border-border/40 px-3 py-1.5 font-mono text-[10px] text-muted-foreground group-hover:border-accent/30 transition-colors duration-300"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="READY TO START YOUR PROJECT?"
        subtitle="Book a free discovery call. We'll map your requirements and provide a clear timeline and estimate."
        primaryCta={{ label: "Book Discovery Call", href: "/contact" }}
        secondaryCta={{ label: "View Our Work", href: "/work" }}
      />
    </>
  )
}
