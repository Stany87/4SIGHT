"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { CtaBanner } from "@/components/cta-banner"
import { cn } from "@/lib/utils"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const industryCards = [
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Patient portals, appointment systems, EHR integrations, and telehealth platforms for medical practices.",
    highlight: "HIPAA-Aware Solutions",
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description: "CRM systems, property listing platforms, and lead automation tools for brokerages and agents.",
    highlight: "Lead Automation",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Custom ERP, production tracking, inventory management, and quality control systems.",
    highlight: "Operational Visibility",
  },
  {
    slug: "startups",
    title: "Startups",
    description: "MVP development, full-stack products, technical advisory, and growth engineering for new ventures.",
    highlight: "Idea to Launch",
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    description: "Portfolio websites, client portals, project management, and booking systems for design studios.",
    highlight: "Showcase Your Craft",
  },
  {
    slug: "photography",
    title: "Photography",
    description: "Portfolio platforms, client galleries, booking systems, and print shop e-commerce for photographers.",
    highlight: "Convert Visitors to Clients",
  },
]

export function IndustriesIndexClient() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardsRef.current) return
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(cards, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 90%", toggleActions: "play none none reverse" },
        })
      }
    }, cardsRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <PageHero
        sectionLabel="Industries"
        title="TECHNOLOGY SOLUTIONS FOR YOUR INDUSTRY"
        subtitle="Deep Expertise Across Sectors"
        description="We don't build one-size-fits-all solutions. Every industry has unique challenges, workflows, and regulations. We build technology tailored to yours."
        breadcrumbs={[{ label: "Industries", href: "/industries" }]}
      />

      <section className="py-24 pl-6 md:pl-28 pr-6 md:pr-12">
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryCards.map((industry, i) => (
            <article
              key={industry.slug}
              className={cn(
                "group relative border border-border/40 p-8 transition-all duration-500 flex flex-col",
                "hover:border-accent/60 hover:bg-accent/5",
              )}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-4 font-[var(--font-bebas)] text-4xl tracking-tight group-hover:text-accent transition-colors">
                {industry.title}
              </h2>
              <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-widest text-accent border border-accent/30 px-2 py-1 w-fit">
                {industry.highlight}
              </span>
              <p className="mt-4 font-mono text-xs text-muted-foreground leading-relaxed flex-1">
                {industry.description}
              </p>
              <div className="mt-6 pt-4 border-t border-border/20">
                <Link
                  href={`/industries/${industry.slug}`}
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors"
                >
                  <span>Explore Solutions</span>
                  <BitmapChevron className="w-2 h-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="DON'T SEE YOUR INDUSTRY?"
        subtitle="We've built solutions for 12+ industries. Book a call and we'll discuss your specific needs."
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
      />
    </>
  )
}
