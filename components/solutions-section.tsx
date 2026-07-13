"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const solutionCategories = [
  {
    category: "BUILD",
    number: "01",
    services: [
      { title: "Business Websites", description: "Corporate and marketing websites that convert." },
      { title: "SaaS Platforms", description: "Scalable software-as-a-service solutions." },
      { title: "Custom Web Apps", description: "Tailored applications for unique business needs." },
      { title: "Customer Portals", description: "Self-service platforms for your clients." },
    ],
  },
  {
    category: "AUTOMATE",
    number: "02",
    services: [
      { title: "AI Agents", description: "Intelligent automation for complex workflows." },
      { title: "Workflow Automation", description: "Connect and automate your business processes." },
      { title: "CRM Automation", description: "Automated lead management and follow-ups." },
      { title: "Lead Systems", description: "Capture, qualify, and route leads automatically." },
    ],
  },
  {
    category: "SCALE",
    number: "03",
    services: [
      { title: "Analytics Dashboards", description: "Real-time visibility into business performance." },
      { title: "Business Intelligence", description: "Data-driven insights for better decisions." },
      { title: "Performance Optimization", description: "Improve efficiency across operations." },
      { title: "Growth Systems", description: "Infrastructure that scales with your business." },
    ],
  },
]

export function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !categoriesRef.current) return

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

      const cards = categoriesRef.current?.querySelectorAll(".solution-category")
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: categoriesRef.current,
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
            <span>WHAT WE</span>
            <img
              src="/images/build-logo.png"
              alt="Build custom software solutions - web apps, SaaS, CRM by 4Sight"
              className="h-[0.8em] w-auto object-contain"
            />
          </h2>
        </div>
        <p className="max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
          From strategy to execution, we build systems that transform how you operate.
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex gap-4 mb-12 border-b border-border/30 pb-4">
        {solutionCategories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={cn(
              "font-mono text-xs uppercase tracking-widest transition-all duration-300",
              activeCategory === index ? "text-accent" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {cat.category}
          </button>
        ))}
      </div>

      {/* Solutions grid */}
      <div ref={categoriesRef} className="space-y-16">
        {solutionCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            className={cn(
              "solution-category transition-all duration-500",
              activeCategory === catIndex ? "block" : "hidden md:block",
            )}
          >
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{category.number}</span>
              <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight">{category.category}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.services.map((service, index) => (
                <article
                  key={index}
                  className={cn(
                    "group relative border border-border/40 p-6 transition-all duration-500",
                    "hover:border-accent/60 hover:bg-accent/5",
                  )}
                >
                  <h4 className="font-[var(--font-bebas)] text-xl tracking-tight group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h4>
                  <p className="mt-2 font-mono text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                  <span className="absolute bottom-4 right-4 font-mono text-[10px] text-muted-foreground/40 group-hover:text-accent transition-colors duration-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
