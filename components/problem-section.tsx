"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const problemSolutions = [
  {
    icon: "01",
    problem: "Website not generating leads",
    solution: "Custom high-converting websites with built-in analytics and optimized user journeys.",
  },
  {
    icon: "02",
    problem: "Too many manual processes",
    solution: "AI-powered workflow automation that eliminates repetitive tasks and human error.",
  },
  {
    icon: "03",
    problem: "Poor Google rankings",
    solution: "Technical SEO, Core Web Vitals optimization, and content strategy that drives organic traffic.",
  },
  {
    icon: "04",
    problem: "Slow operations",
    solution: "Custom CRM & ERP systems that streamline workflows and accelerate decision-making.",
  },
  {
    icon: "05",
    problem: "Outdated software",
    solution: "Modern, scalable platform rebuilds with clean architecture and future-proof technology.",
  },
  {
    icon: "06",
    problem: "Lack of automation",
    solution: "End-to-end business process automation — from lead capture to fulfillment.",
  },
]

export function ProblemSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="problem" ref={sectionRef} className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">01 / The Problem</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight text-balance flex flex-wrap items-center gap-x-[0.25em] gap-y-1">
          <span>MOST</span>
          <img
            src="/images/businesses-logo.png"
            alt="Businesses that need systems-focused technology solutions - 4Sight Agency"
            className="h-[0.8em] w-auto object-contain"
          />
          <span>DON&apos;T HAVE A GROWTH PROBLEM</span>
        </h2>
        <p className="mt-4 font-[var(--font-bebas)] text-3xl md:text-5xl tracking-tight text-muted-foreground">
          They have a systems problem.
        </p>
        <p className="mt-6 max-w-xl font-mono text-sm text-muted-foreground leading-relaxed">
          Sound familiar? Here&apos;s how we solve each one.
        </p>
      </div>

      {/* Problem → Solution cards */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problemSolutions.map((item, index) => (
          <article
            key={index}
            className={cn(
              "group relative border border-border/40 p-6 transition-all duration-500",
              "hover:border-accent/60 hover:bg-accent/5",
            )}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{item.icon}</span>

            {/* Problem */}
            <h3 className="mt-4 font-[var(--font-bebas)] text-2xl tracking-tight text-accent/80 group-hover:text-accent transition-colors duration-300">
              {item.problem}
            </h3>

            {/* Divider */}
            <div className="my-4 h-px w-8 bg-border/40 group-hover:w-16 group-hover:bg-accent/40 transition-all duration-500" />

            {/* Solution */}
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">
              {item.solution}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
