"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface TechItem {
  name: string
  category?: string
}

interface TechStackProps {
  sectionLabel?: string
  title?: string
  technologies: TechItem[]
}

export function TechStack({
  sectionLabel = "Technology",
  title = "OUR TECH STACK",
  technologies,
}: TechStackProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !gridRef.current) return

    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll(".tech-item")
      if (items) {
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Group by category
  const grouped = technologies.reduce<Record<string, TechItem[]>>((acc, tech) => {
    const cat = tech.category || "Core"
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(tech)
    return acc
  }, {})

  return (
    <section ref={sectionRef} className="relative py-24 pl-6 md:pl-28 pr-6 md:pr-12">
      <div className="mb-12">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          {sectionLabel}
        </span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight">
          {title}
        </h2>
      </div>

      <div ref={gridRef} className="space-y-12">
        {Object.entries(grouped).map(([category, techs]) => (
          <div key={category}>
            <h3 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {techs.map((tech, i) => (
                <span
                  key={i}
                  className="tech-item border border-border/40 px-4 py-2 font-mono text-xs text-muted-foreground hover:border-accent/40 hover:text-foreground transition-all duration-300"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
