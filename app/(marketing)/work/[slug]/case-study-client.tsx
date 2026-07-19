"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { CtaBanner } from "@/components/cta-banner"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { CaseStudyData } from "@/lib/case-studies-data"

gsap.registerPlugin(ScrollTrigger)

function CaseHero({ study }: { study: CaseStudyData }) {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!heroRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, { y: 40, opacity: 0, duration: 1, ease: "power3.out" })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative pt-32 pb-16 pl-6 md:pl-28 pr-6 md:pr-12">
      <div className="grid-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li className="flex items-center gap-2">
              <span className="text-border">/</span>
              <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-border">/</span>
              <span className="text-accent">{study.title}</span>
            </li>
          </ol>
        </nav>

        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Case Study</span>
        <h1 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9]">
          {study.title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border/40 px-3 py-1">
            {study.industry}
          </span>
          {study.services.map((s) => (
            <span key={s} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border/40 px-3 py-1">
              {s}
            </span>
          ))}
        </div>

        {/* Hero image */}
        <div className="mt-12 border border-border/40 overflow-hidden bg-card">
          <img
            src={study.heroImage}
            alt={study.title}
            className="w-full object-cover max-h-[500px]"
          />
        </div>
      </div>
    </section>
  )
}

function ResultsStrip({ results }: { results: CaseStudyData["results"] }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      const items = ref.current?.querySelectorAll(".result-item")
      if (items) {
        gsap.fromTo(items, { y: 30, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 88%", toggleActions: "play none none reverse" },
        })
      }
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="py-16 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-b border-accent/20 bg-accent/5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {results.map((r, i) => (
          <div key={i} className="result-item text-center md:text-left">
            <p className="font-[var(--font-bebas)] text-4xl md:text-5xl text-accent">{r.metric}</p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{r.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContentSection({ label, title, content }: { label: string; title: string; content: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        x: -40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%", toggleActions: "play none none reverse" },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="py-16 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/20">
      <div className="max-w-3xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{label}</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight">{title}</h2>
        <p className="mt-6 font-mono text-sm text-muted-foreground leading-relaxed">{content}</p>
      </div>
    </div>
  )
}

function TechAndTimeline({ technologies, timeline }: { technologies: string[]; timeline: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: 30, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%", toggleActions: "play none none reverse" },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="py-16 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Technologies Used</span>
          <div className="mt-6 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span key={tech} className="border border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground hover:border-accent/40 hover:text-foreground transition-all duration-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Timeline</span>
          <p className="mt-6 font-[var(--font-bebas)] text-5xl tracking-tight">{timeline}</p>
          <p className="mt-2 font-mono text-xs text-muted-foreground">From kickoff to launch</p>
        </div>
      </div>
    </div>
  )
}

function TestimonialBlock({ testimonial }: { testimonial: NonNullable<CaseStudyData["testimonial"]> }) {
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
    <div ref={ref} className="py-16 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/20">
      <div className="max-w-3xl">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Client Testimonial</span>
        <div className="mt-8">
          <span className="font-[var(--font-bebas)] text-6xl text-accent/30">&ldquo;</span>
          <blockquote className="font-mono text-lg text-foreground/90 leading-relaxed -mt-4">
            {testimonial.quote}
          </blockquote>
          <div className="mt-8">
            <p className="font-[var(--font-bebas)] text-xl">{testimonial.name}</p>
            <p className="font-mono text-xs text-muted-foreground mt-1">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CaseStudyPageClient({ study }: { study: CaseStudyData }) {
  return (
    <>
      <CaseHero study={study} />
      <ResultsStrip results={study.results} />

      <ContentSection label="Client Overview" title="THE CLIENT" content={study.overview} />
      <ContentSection label="The Challenge" title="BUSINESS CHALLENGE" content={study.challenge} />
      <ContentSection label="The Solution" title="OUR APPROACH" content={study.solution} />

      <TechAndTimeline technologies={study.technologies} timeline={study.timeline} />

      {study.testimonial && <TestimonialBlock testimonial={study.testimonial} />}

      <CtaBanner
        title="WANT SIMILAR RESULTS?"
        subtitle="Book a free strategy call. We'll identify your biggest opportunities and map a clear path forward."
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "View More Work", href: "/work" }}
      />
    </>
  )
}
