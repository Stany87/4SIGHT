"use client"

import { useRef, useEffect } from "react"
import { PageHero } from "@/components/page-hero"
import { FaqSection } from "@/components/faq-section"
import { CtaBanner } from "@/components/cta-banner"
import { TechStack } from "@/components/tech-stack"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { ServiceData } from "@/lib/services-data"

gsap.registerPlugin(ScrollTrigger)

function ProblemsSection({ problems }: { problems: ServiceData["problems"] }) {
  const ref = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || !cardsRef.current) return
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(cards, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 88%", toggleActions: "play none none reverse" },
        })
      }
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 pl-6 md:pl-28 pr-6 md:pr-12">
      <div className="mb-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Problems We Solve</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight">
          SOUND FAMILIAR?
        </h2>
      </div>
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((item, i) => (
          <article key={i} className={cn(
            "group border border-border/40 p-6 transition-all duration-500",
            "hover:border-accent/60 hover:bg-accent/5"
          )}>
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-[var(--font-bebas)] text-2xl tracking-tight text-accent/80 group-hover:text-accent transition-colors duration-300">
              {item.problem}
            </h3>
            <div className="my-4 h-px w-8 bg-border/40 group-hover:w-16 group-hover:bg-accent/40 transition-all duration-500" />
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">{item.solution}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SolutionsGrid({ solutions }: { solutions: ServiceData["solutions"] }) {
  const ref = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || !cardsRef.current) return
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(cards, { y: 50, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 88%", toggleActions: "play none none reverse" },
        })
      }
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/20">
      <div className="mb-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">What We Build</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight">
          OUR SOLUTIONS
        </h2>
      </div>
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((s, i) => (
          <article key={i} className={cn(
            "group border border-border/40 p-8 transition-all duration-500 flex flex-col",
            "hover:border-accent/60 hover:bg-accent/5"
          )}>
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-[var(--font-bebas)] text-3xl tracking-tight group-hover:text-accent transition-colors duration-300">
              {s.title}
            </h3>
            <p className="mt-4 font-mono text-xs text-muted-foreground leading-relaxed flex-1">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function BenefitsSection({ benefits }: { benefits: ServiceData["benefits"] }) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      const items = ref.current?.querySelectorAll(".benefit-item")
      if (items) {
        gsap.fromTo(items, { x: -40, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", toggleActions: "play none none reverse" },
        })
      }
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/20">
      <div className="mb-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Why Choose Us</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight">
          KEY BENEFITS
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {benefits.map((b, i) => (
          <div key={i} className="benefit-item border-l-2 border-accent/40 pl-6 hover:border-accent transition-colors duration-300">
            <h3 className="font-[var(--font-bebas)] text-2xl tracking-tight">{b.title}</h3>
            <p className="mt-2 font-mono text-xs text-muted-foreground leading-relaxed">{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function WorkflowTimeline({ steps, title }: { steps: { title: string; description: string }[]; title: string }) {
  const ref = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current || !lineRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current, { scaleY: 0 }, {
        scaleY: 1, ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 60%", scrub: 0.8 },
      })
      const stepEls = ref.current?.querySelectorAll(".workflow-step")
      stepEls?.forEach((step) => {
        gsap.from(step, {
          x: -40, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: step, start: "top 88%", toggleActions: "play none none reverse" },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/20">
      <div className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">How It Works</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight">{title}</h2>
      </div>
      <div className="relative max-w-3xl ml-0 md:ml-8">
        <div ref={lineRef} className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-accent/60 origin-top" />
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={i} className="workflow-step group relative flex gap-8 pb-12 last:pb-0">
              <div className="relative z-10 flex-shrink-0">
                <div className="w-6 h-6 rounded-full border-2 border-accent bg-background flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
              </div>
              <div className="flex-1 -mt-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-[var(--font-bebas)] text-2xl md:text-4xl tracking-tight group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md font-mono text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ServicePageClient({ service }: { service: ServiceData }) {
  return (
    <>
      <PageHero
        sectionLabel={service.sectionLabel}
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        breadcrumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: service.subtitle, href: `/solutions/${service.slug}` },
        ]}
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "View Our Work", href: "/work" }}
      />

      <ProblemsSection problems={service.problems} />
      <SolutionsGrid solutions={service.solutions} />
      <BenefitsSection benefits={service.benefits} />

      {/* AI Automation workflow diagram */}
      {service.workflowSteps && (
        <WorkflowTimeline steps={service.workflowSteps} title="THE AUTOMATION WORKFLOW" />
      )}

      {/* SEO process flow */}
      {service.seoSteps && (
        <WorkflowTimeline steps={service.seoSteps} title="OUR SEO PROCESS" />
      )}

      <TechStack technologies={service.techStack} />

      <FaqSection
        sectionLabel="FAQ"
        title="FREQUENTLY ASKED QUESTIONS"
        faqs={service.faqs}
      />

      <CtaBanner
        title={`READY TO ${service.slug === "ai-automation" ? "AUTOMATE" : service.slug === "seo" ? "DOMINATE SEARCH" : "GET STARTED"}?`}
        subtitle="Book a free 30-minute strategy call. We'll identify your biggest opportunities and map a clear path forward."
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "Explore All Solutions", href: "/solutions" }}
      />
    </>
  )
}
