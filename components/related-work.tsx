"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface CaseStudyCard {
  slug: string
  title: string
  industry: string
  metric: string
  metricLabel: string
  image?: string
}

interface RelatedWorkProps {
  sectionLabel?: string
  title?: string
  studies: CaseStudyCard[]
}

export function RelatedWork({
  sectionLabel = "Featured Work",
  title = "RELATED PROJECTS",
  studies,
}: RelatedWorkProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          },
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

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

      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studies.map((study) => (
          <article
            key={study.slug}
            className={cn(
              "group relative border border-border/40 overflow-hidden transition-all duration-500",
              "hover:border-accent/60",
            )}
          >
            {/* Thumbnail */}
            {study.image && (
              <div className="aspect-video overflow-hidden bg-card">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                />
              </div>
            )}

            <div className="p-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {study.industry}
              </span>
              <h3 className="mt-2 font-[var(--font-bebas)] text-2xl tracking-tight group-hover:text-accent transition-colors duration-300">
                {study.title}
              </h3>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-[var(--font-bebas)] text-3xl text-accent">
                  {study.metric}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {study.metricLabel}
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-border/20">
                <Link
                  href={`/work/${study.slug}`}
                  className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors duration-300"
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
