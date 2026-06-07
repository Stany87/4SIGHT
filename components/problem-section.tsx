"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const painPoints = [
  {
    icon: "01",
    title: "Leads Slipping Through",
    description: "Manual processes causing opportunities to fall through the cracks.",
  },
  {
    icon: "02",
    title: "Repetitive Tasks",
    description: "Hours wasted on manual, repetitive workflows every week.",
  },
  {
    icon: "03",
    title: "Disconnected Tools",
    description: "Data scattered across multiple platforms with no central source of truth.",
  },
  {
    icon: "04",
    title: "Slow Response Times",
    description: "Delayed customer responses hurting conversion and satisfaction.",
  },
  {
    icon: "05",
    title: "Limited Scalability",
    description: "Operations that can&apos;t keep pace with business growth.",
  },
  {
    icon: "06",
    title: "Operational Inefficiencies",
    description: "Bottlenecks preventing teams from working at full capacity.",
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
            alt="BUSINESSES"
            className="h-[0.8em] w-auto object-contain"
          />
          <svg viewBox="0 0 24 24" className="h-[0.5em] w-[0.5em] fill-current text-accent mx-1 inline-block align-middle">
            <path d="M12,2 Q12,12 22,12 Q12,12 12,22 Q12,12 2,12 Q12,12 12,2 Z" />
          </svg>
          <span>DON&apos;T HAVE A GROWTH PROBLEM</span>
        </h2>
        <p className="mt-4 font-[var(--font-bebas)] text-3xl md:text-5xl tracking-tight text-muted-foreground">
          They have a systems problem.
        </p>
      </div>

      {/* Pain points grid */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {painPoints.map((point, index) => (
          <article
            key={index}
            className={cn(
              "group relative border border-border/40 p-6 transition-all duration-500",
              "hover:border-accent/60 hover:bg-accent/5",
            )}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{point.icon}</span>
            <h3 className="mt-4 font-[var(--font-bebas)] text-2xl tracking-tight group-hover:text-accent transition-colors duration-300">
              {point.title}
            </h3>
            <p className="mt-2 font-mono text-xs text-muted-foreground leading-relaxed">{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
