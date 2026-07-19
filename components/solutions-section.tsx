"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BitmapChevron } from "@/components/bitmap-chevron"

gsap.registerPlugin(ScrollTrigger)

const solutions = [
  {
    number: "01",
    title: "Website Development",
    description: "High-converting websites and web applications built for speed, SEO, and measurable business results.",
    features: ["Corporate Sites", "Landing Pages", "E-Commerce", "Web Portals"],
  },
  {
    number: "02",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that extend your business reach to every device.",
    features: ["iOS & Android", "Cross-Platform", "Progressive Web Apps", "App Store Optimization"],
  },
  {
    number: "03",
    title: "Custom Software",
    description: "CRM, ERP, SaaS platforms, and internal tools engineered around your exact business workflows.",
    features: ["CRM Systems", "ERP Platforms", "SaaS Products", "Internal Tools"],
  },
  {
    number: "04",
    title: "SEO & Performance",
    description: "Technical SEO, Core Web Vitals optimization, and data-driven strategies that drive organic rankings.",
    features: ["Technical SEO", "Content Strategy", "Core Web Vitals", "Analytics Setup"],
  },
  {
    number: "05",
    title: "AI Automation",
    description: "Intelligent agents, workflow automation, and integrations that eliminate manual processes at scale.",
    features: ["AI Agents", "Workflow Automation", "CRM Automation", "Lead Systems"],
  },
]

export function SolutionsSection() {
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
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.12,
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
    <section id="solutions" ref={sectionRef} className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">02 / Solutions</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight flex flex-wrap items-center gap-x-[0.25em] gap-y-1">
            <span>CHOOSE YOUR</span>
            <img
              src="/images/build-logo.png"
              alt="Build custom software solutions - web apps, SaaS, CRM by 4Sight"
              className="h-[0.8em] w-auto object-contain"
            />
          </h2>
        </div>
        <p className="max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          Every solution is engineered around your specific business goals and challenges.
        </p>
      </div>

      {/* Solution cards — 3+2 asymmetric grid */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <article
            key={index}
            className={cn(
              "group relative border border-border/40 p-8 transition-all duration-500 flex flex-col",
              "hover:border-accent/60 hover:bg-accent/5",
            )}
          >
            {/* Number */}
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent/60">
              {solution.number}
            </span>

            {/* Title */}
            <h3 className="mt-4 font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight group-hover:text-accent transition-colors duration-300">
              {solution.title}
            </h3>

            {/* Description */}
            <p className="mt-4 font-mono text-xs text-muted-foreground leading-relaxed flex-1">
              {solution.description}
            </p>

            {/* Feature tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {solution.features.map((feature, i) => (
                <span
                  key={i}
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 border border-border/30 px-2 py-1 group-hover:border-accent/30 group-hover:text-muted-foreground transition-all duration-300"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6 pt-4 border-t border-border/20">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors duration-300"
              >
                <span>Learn More</span>
                <BitmapChevron className="w-2 h-2 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
