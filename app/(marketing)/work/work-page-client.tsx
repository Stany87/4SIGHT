"use client"

import { useState, useRef, useEffect, useMemo } from "react"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { CtaBanner } from "@/components/cta-banner"
import { cn } from "@/lib/utils"
import { caseStudies } from "@/lib/case-studies-data"
import gsap from "gsap"

const allStudies = Object.values(caseStudies)
const allIndustries = [...new Set(allStudies.map((s) => s.industry))]
const allServices = [...new Set(allStudies.flatMap((s) => s.services))]

export function WorkPageClient() {
  const [industryFilter, setIndustryFilter] = useState<string>("")
  const [serviceFilter, setServiceFilter] = useState<string>("")
  const [search, setSearch] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const gridRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => {
    return allStudies.filter((s) => {
      if (industryFilter && s.industry !== industryFilter) return false
      if (serviceFilter && !s.services.includes(serviceFilter)) return false
      if (search && !s.title.toLowerCase().includes(search.toLowerCase()) && !s.client.toLowerCase().includes(search.toLowerCase())) return false
      return true
    })
  }, [industryFilter, serviceFilter, search])

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll("article")
    gsap.fromTo(cards, { y: 30, opacity: 0 }, {
      y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.out",
    })
  }, [filtered])

  return (
    <>
      <PageHero
        sectionLabel="Our Work"
        title="REAL PROJECTS. REAL RESULTS."
        subtitle="Portfolio & Case Studies"
        description="Every project below represents a real business challenge solved with custom technology. Filter by industry or service to find projects relevant to you."
        breadcrumbs={[{ label: "Work", href: "/work" }]}
      />

      {/* Filters */}
      <section className="pl-6 md:pl-28 pr-6 md:pr-12 pb-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          {/* Search */}
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-64 bg-transparent border border-border/40 px-4 py-2.5 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors"
          />

          {/* Industry filter */}
          <select
            value={industryFilter}
            onChange={(e) => setIndustryFilter(e.target.value)}
            className="bg-transparent border border-border/40 px-4 py-2.5 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="">All Industries</option>
            {allIndustries.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>

          {/* Service filter */}
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="bg-transparent border border-border/40 px-4 py-2.5 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="">All Services</option>
            {allServices.map((svc) => (
              <option key={svc} value={svc}>{svc}</option>
            ))}
          </select>

          {/* View toggle */}
          <div className="flex border border-border/40 ml-auto">
            <button
              onClick={() => setViewMode("grid")}
              className={cn("px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors", viewMode === "grid" ? "bg-accent text-background" : "text-muted-foreground hover:text-foreground")}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={cn("px-3 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors border-l border-border/40", viewMode === "list" ? "bg-accent text-background" : "text-muted-foreground hover:text-foreground")}
            >
              List
            </button>
          </div>
        </div>

        {/* Results count */}
        <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </p>
      </section>

      {/* Project Grid/List */}
      <section className="pl-6 md:pl-28 pr-6 md:pr-12 pb-24">
        <div
          ref={gridRef}
          className={cn(
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          )}
        >
          {filtered.map((study) => (
            viewMode === "grid" ? (
              <article key={study.slug} className="group border border-border/40 overflow-hidden transition-all duration-500 hover:border-accent/60">
                <div className="aspect-video overflow-hidden bg-card">
                  <img
                    src={study.heroImage}
                    alt={study.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground border border-border/30 px-2 py-0.5">{study.industry}</span>
                  </div>
                  <h3 className="font-[var(--font-bebas)] text-2xl tracking-tight group-hover:text-accent transition-colors">{study.title}</h3>
                  <p className="mt-2 font-mono text-xs text-muted-foreground line-clamp-2">{study.overview}</p>
                  <div className="mt-4 flex items-baseline gap-3">
                    {study.results.slice(0, 2).map((r, i) => (
                      <div key={i} className="flex items-baseline gap-1">
                        <span className="font-[var(--font-bebas)] text-2xl text-accent">{r.metric}</span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{r.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={`/work/${study.slug}`}
                    className="block mt-4 pt-4 border-t border-border/20 font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors"
                  >
                    View Case Study →
                  </Link>
                </div>
              </article>
            ) : (
              <article key={study.slug} className="group flex gap-6 border border-border/40 p-4 transition-all duration-500 hover:border-accent/60">
                <div className="w-32 h-20 flex-shrink-0 overflow-hidden bg-card">
                  <img src={study.heroImage} alt={study.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-[var(--font-bebas)] text-xl tracking-tight group-hover:text-accent transition-colors truncate">{study.title}</h3>
                    <span className="font-mono text-[10px] text-muted-foreground border border-border/30 px-2 py-0.5 flex-shrink-0">{study.industry}</span>
                  </div>
                  <p className="font-mono text-xs text-muted-foreground truncate">{study.overview}</p>
                </div>
                <div className="hidden md:flex items-center gap-6 flex-shrink-0">
                  {study.results.slice(0, 2).map((r, i) => (
                    <div key={i} className="text-right">
                      <p className="font-[var(--font-bebas)] text-2xl text-accent">{r.metric}</p>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{r.label}</p>
                    </div>
                  ))}
                </div>
                <Link href={`/work/${study.slug}`} className="flex items-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0">
                  View →
                </Link>
              </article>
            )
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-[var(--font-bebas)] text-3xl text-muted-foreground">No projects match your filters</p>
            <button onClick={() => { setIndustryFilter(""); setServiceFilter(""); setSearch(""); }} className="mt-4 font-mono text-xs text-accent hover:underline">
              Clear filters
            </button>
          </div>
        )}
      </section>

      <CtaBanner
        title="WANT TO BE OUR NEXT CASE STUDY?"
        subtitle="Book a strategy call and let's discuss how we can transform your business."
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
      />
    </>
  )
}
