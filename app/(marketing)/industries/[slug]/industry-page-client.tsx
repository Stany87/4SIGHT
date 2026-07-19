"use client"

import { useRef, useEffect } from "react"
import { PageHero } from "@/components/page-hero"
import { FaqSection } from "@/components/faq-section"
import { CtaBanner } from "@/components/cta-banner"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { IndustryData } from "@/lib/industries-data"

gsap.registerPlugin(ScrollTrigger)

function PainPointsSection({ painPoints }: { painPoints: IndustryData["painPoints"] }) {
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
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Industry Challenges</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight">
          PROBLEMS WE SOLVE
        </h2>
      </div>
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {painPoints.map((item, i) => (
          <article key={i} className={cn(
            "group border border-border/40 p-6 transition-all duration-500",
            "hover:border-accent/60 hover:bg-accent/5"
          )}>
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-[var(--font-bebas)] text-xl tracking-tight text-accent/80 group-hover:text-accent transition-colors">
              {item.title}
            </h3>
            <div className="my-4 h-px w-8 bg-border/40 group-hover:w-16 group-hover:bg-accent/40 transition-all duration-500" />
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function IndustrySolutions({ solutions }: { solutions: IndustryData["solutions"] }) {
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
            <h3 className="mt-4 font-[var(--font-bebas)] text-3xl tracking-tight group-hover:text-accent transition-colors">
              {s.title}
            </h3>
            <p className="mt-4 font-mono text-xs text-muted-foreground leading-relaxed flex-1">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function TestimonialBlock({ testimonial }: { testimonial: NonNullable<IndustryData["testimonial"]> }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: 40, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%", toggleActions: "play none none reverse" },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/20">
      <div className="max-w-3xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Client Testimonial</span>
        <div className="mt-8">
          <span className="font-[var(--font-bebas)] text-6xl text-accent/30">"</span>
          <blockquote className="mt-2 font-mono text-lg text-foreground/90 leading-relaxed -mt-4">
            {testimonial.quote}
          </blockquote>
          <div className="mt-8">
            <p className="font-[var(--font-bebas)] text-xl">{testimonial.name}</p>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              {testimonial.role} — {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function IndustryPageClient({ industry }: { industry: IndustryData }) {
  return (
    <>
      <PageHero
        sectionLabel={industry.sectionLabel}
        title={industry.title}
        subtitle={industry.subtitle}
        description={industry.description}
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.subtitle, href: `/industries/${industry.slug}` },
        ]}
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "Explore Solutions", href: "/solutions" }}
      />

      <PainPointsSection painPoints={industry.painPoints} />
      <IndustrySolutions solutions={industry.solutions} />

      {industry.testimonial && (
        <TestimonialBlock testimonial={industry.testimonial} />
      )}

      <FaqSection
        sectionLabel="FAQ"
        title="FREQUENTLY ASKED QUESTIONS"
        faqs={industry.faqs}
      />

      <CtaBanner
        title={`READY TO TRANSFORM YOUR ${industry.subtitle.toUpperCase().split("&")[0].trim()} BUSINESS?`}
        subtitle="Book a free strategy call. We'll identify your biggest opportunities and create a technology roadmap."
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "View Our Work", href: "/work" }}
      />
    </>
  )
}
