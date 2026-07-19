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

const solutions = [
  {
    slug: "website-development",
    number: "01",
    title: "Website Development",
    description: "High-converting websites and web applications built for speed, SEO, and measurable business results.",
    features: ["Corporate Sites", "Landing Pages", "E-Commerce", "Web Portals"],
  },
  {
    slug: "mobile-applications",
    number: "02",
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps that extend your business reach to every device.",
    features: ["iOS & Android", "Cross-Platform", "Progressive Web Apps", "App Store Optimization"],
  },
  {
    slug: "custom-software",
    number: "03",
    title: "Custom Software",
    description: "CRM, ERP, SaaS platforms, and internal tools engineered around your exact business workflows.",
    features: ["CRM Systems", "ERP Platforms", "SaaS Products", "Internal Tools"],
  },
  {
    slug: "seo",
    number: "04",
    title: "SEO & Performance",
    description: "Technical SEO, Core Web Vitals optimization, and data-driven strategies that drive organic rankings.",
    features: ["Technical SEO", "Content Strategy", "Core Web Vitals", "Analytics Setup"],
  },
  {
    slug: "ai-automation",
    number: "05",
    title: "AI Automation",
    description: "Intelligent agents, workflow automation, and integrations that eliminate manual processes at scale.",
    features: ["AI Agents", "Workflow Automation", "CRM Automation", "Lead Systems"],
  },
]

export function SolutionsIndexClient() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardsRef.current) return
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(cards, { y: 60, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 90%", toggleActions: "play none none reverse" },
        })
      }
    }, cardsRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <PageHero
        sectionLabel="Our Solutions"
        title="TECHNOLOGY THAT SOLVES REAL BUSINESS PROBLEMS"
        subtitle="Build · Automate · Scale"
        description="From custom websites to AI-powered automation, every solution we build is engineered to eliminate bottlenecks, accelerate growth, and deliver measurable ROI."
        breadcrumbs={[{ label: "Solutions", href: "/solutions" }]}
      />

      <section className="py-24 pl-6 md:pl-28 pr-6 md:pr-12">
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <article
              key={solution.slug}
              className={cn(
                "group relative border border-border/40 p-8 transition-all duration-500 flex flex-col",
                "hover:border-accent/60 hover:bg-accent/5",
              )}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent/60">
                {solution.number}
              </span>
              <h2 className="mt-4 font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight group-hover:text-accent transition-colors duration-300">
                {solution.title}
              </h2>
              <p className="mt-4 font-mono text-xs text-muted-foreground leading-relaxed flex-1">
                {solution.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {solution.features.map((f, i) => (
                  <span key={i} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 border border-border/30 px-2 py-1 group-hover:border-accent/30 transition-all duration-300">
                    {f}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-border/20">
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <BitmapChevron className="w-2 h-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="NOT SURE WHICH SOLUTION IS RIGHT?"
        subtitle="Book a free strategy call. We'll analyze your business and recommend the best approach."
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
      />
    </>
  )
}
