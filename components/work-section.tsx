"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowLeft, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface CaseStudy {
  title: string
  industry: string
  challenge: string
  solution: string
  metric: string
  metricLabel: string
  previousMetric: string
  image?: string
  url?: string
}

const caseStudies: CaseStudy[] = [
  {
    title: "Mystique Editorial Portal",
    industry: "Mystique Agency",
    challenge: "Static storefront layout failed to engage premium design audiences or support flexible content blocks.",
    solution: "Engineered a stunning custom headless frontend with dynamic, immersive layouts and micro-interactions.",
    metric: "35%",
    metricLabel: "Conversion Boost",
    previousMetric: "average cart value increase",
    image: "/images/portfolio-mystique.png",
    url: "https://mystique-eosin.vercel.app/",
  },
  {
    title: "Clockworks Recruiting ATS",
    industry: "Clockworks Systems",
    challenge: "High-volume hiring pipelines suffered from manual resume parsing and disjointed interviewer notes.",
    solution: "Built an end-to-end Applicant Tracking System (ATS) featuring parsing pipelines and automated interview scheduling.",
    metric: "40 hrs",
    metricLabel: "Saved Weekly",
    previousMetric: "on scheduling & screening",
    image: "/images/portfolio-clockworks-ats.jpg",
    url: "https://clockworksats.vercel.app/",
  },
  {
    title: "AskVisa B2B Processing",
    industry: "AskVisa B2B",
    challenge: "Corporate travel agents faced a high-friction onboarding experience when signing up for bulk visa processing.",
    solution: "Designed an optimized low-friction B2B portal landing page with automated agency verification workflows.",
    metric: "3x",
    metricLabel: "Agent Onboarding",
    previousMetric: "monthly signups multiplied",
    image: "/images/portfolio-askvisa-landing.png",
    url: "https://askvisa.in/b2b/landing.php",
  },
  {
    title: "AskVisa B2B CRM Portal",
    industry: "AskVisa B2B",
    challenge: "Processing thousands of global visas manually caused dispatch bottlenecks and status tracking errors.",
    solution: "Engineered a high-performance admin dashboard with automated status updates, document checks, and SMS notifications.",
    metric: "45 sec",
    metricLabel: "Status Lookups",
    previousMetric: "vs 12+ min phone calls",
    image: "/images/portfolio-askvisa-crm.jpg",
    url: "https://askvisa.in/b2b/crm/dashboard.php",
  },
  {
    title: "Clockworks CRM",
    industry: "Clockworks Systems",
    challenge: "Sales teams were juggling multiple spreadsheets, causing slow follow-ups and lost leads.",
    solution: "Designed a high-throughput custom CRM dashboard with automated lead routing and real-time status pipelines.",
    metric: "68%",
    metricLabel: "Pipeline Velocity",
    previousMetric: "within 30 days of deploy",
    image: "/images/portfolio-clockworks-crm.jpg",
    url: "https://clockworks-crm.vercel.app/",
  },
  {
    title: "SolarKits ERP Portal",
    industry: "SolarKits Energy",
    challenge: "Managing multi-department approvals and tracking inventory logistics across distributed warehouses was slow and prone to delays.",
    solution: "Designed and engineered a custom enterprise resource planning (ERP) platform with multi-warehouse tracking, department approvals, and automated operation workflows.",
    metric: "92%",
    metricLabel: "Operational Efficiency",
    previousMetric: "processing time slashed from days to minutes",
    image: "/images/portfolio-solarkits.png",
    url: "https://solarkits-sigma.vercel.app/",
  },
]

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [paddingX, setPaddingX] = useState(0)

  const isProgrammaticScroll = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)
  const hasMoved = useRef(false)

  const handleNext = () => {
    isProgrammaticScroll.current = true
    setActiveIdx((prev) => (prev + 1) % caseStudies.length)
  }

  const handlePrev = () => {
    isProgrammaticScroll.current = true
    setActiveIdx((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!listRef.current) return
    if (e.button !== 0) return // Left click only
    isDragging.current = true
    startX.current = e.pageX - listRef.current.offsetLeft
    scrollLeftStart.current = listRef.current.scrollLeft
    hasMoved.current = false
    listRef.current.style.scrollSnapType = "none"
    listRef.current.style.scrollBehavior = "auto"
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !listRef.current) return
    e.preventDefault()
    const x = e.pageX - listRef.current.offsetLeft
    const walk = (x - startX.current) * 1.5
    listRef.current.scrollLeft = scrollLeftStart.current - walk
    if (Math.abs(walk) > 5) {
      hasMoved.current = true
    }
  }

  const handleMouseUpOrLeave = () => {
    if (!isDragging.current || !listRef.current) return
    isDragging.current = false
    listRef.current.style.scrollSnapType = "x mandatory"
    listRef.current.style.scrollBehavior = "smooth"

    const container = listRef.current
    const scrollLeft = container.scrollLeft

    let inactiveWidth = 280
    const gap = 24
    if (window.innerWidth >= 1024) {
      inactiveWidth = 460
    } else if (window.innerWidth >= 768) {
      inactiveWidth = 380
    }

    const approxIndex = scrollLeft / (inactiveWidth + gap)
    const nearestIndex = Math.max(0, Math.min(caseStudies.length - 1, Math.round(approxIndex)))

    const targetScrollLeft = nearestIndex * (inactiveWidth + gap)
    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth"
    })
  }

  const handleCardClick = (index: number) => {
    if (hasMoved.current) return
    isProgrammaticScroll.current = true
    setActiveIdx(index)
  }

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !listRef.current) return

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
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        },
      )

      const cards = listRef.current?.querySelectorAll(".portfolio-card-item")
      if (cards && cards.length > 0) {
        gsap.set(cards, { y: 60, opacity: 0 })
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const updatePadding = () => {
      if (!listRef.current) return
      const containerWidth = listRef.current.offsetWidth
      let activeWidth = 560
      if (window.innerWidth >= 1024) {
        activeWidth = 920
      } else if (window.innerWidth >= 768) {
        activeWidth = 760
      }
      const pad = Math.max(0, (containerWidth / 2) - (activeWidth / 2))
      setPaddingX(pad)
    }

    updatePadding()
    const timer = setTimeout(updatePadding, 100)

    window.addEventListener("resize", updatePadding)
    return () => {
      window.removeEventListener("resize", updatePadding)
      clearTimeout(timer)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    }
  }, [])

  useEffect(() => {
    if (!listRef.current) return

    let inactiveWidth = 280
    const gap = 24
    if (window.innerWidth >= 1024) {
      inactiveWidth = 460
    } else if (window.innerWidth >= 768) {
      inactiveWidth = 380
    }

    const targetScrollLeft = activeIdx * (inactiveWidth + gap)

    isProgrammaticScroll.current = true
    listRef.current.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth"
    })

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    scrollTimeout.current = setTimeout(() => {
      isProgrammaticScroll.current = false
    }, 500)
  }, [activeIdx, paddingX])

  return (
    <section ref={sectionRef} id="work" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16 flex items-end justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / Work</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight flex flex-wrap items-center gap-x-[0.25em] gap-y-1">
            <img
              src="/images/results-logo.png"
              alt="Results from custom software development projects by 4Sight agency"
              className="h-[0.8em] w-auto object-contain"
            />
            <span>THAT MATTER</span>
          </h2>
        </div>
        <div className="flex items-center gap-6">
          <p className="hidden md:block max-w-xs font-mono text-xs text-muted-foreground text-right leading-relaxed">
            Real outcomes from businesses that transformed their operations.
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 border border-white/25 hover:border-accent hover:text-accent text-white hover:bg-accent/10 transition-all duration-300 rounded-full cursor-pointer"
              aria-label="Previous Project"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-white/25 hover:border-accent hover:text-accent text-white hover:bg-accent/10 transition-all duration-300 rounded-full cursor-pointer"
              aria-label="Next Project"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Cards Container */}
      <div
        ref={listRef}
        className="flex flex-row overflow-x-auto gap-6 pb-6 w-full snap-x snap-mandatory scrollbar-thin scrollbar-track-black/10 scrollbar-thumb-accent/20 hover:scrollbar-thumb-accent/40 select-none cursor-grab active:cursor-grabbing"
        style={{
          scrollSnapType: "x mandatory",
          paddingLeft: `${paddingX}px`,
          paddingRight: `${paddingX}px`,
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {caseStudies.map((study, index) => (
          <motion.div
            layout
            key={study.title}
            className={cn(
              "portfolio-card-item flex-shrink-0 snap-center cursor-pointer transition-all duration-300",
              activeIdx === index
                ? "w-[560px] md:w-[760px] lg:w-[920px]"
                : "w-[280px] md:w-[380px] lg:w-[460px]"
            )}
            onClick={() => handleCardClick(index)}
          >
            <div
              className={cn(
                "group relative border p-4 flex flex-col justify-between transition-all duration-300 h-full bg-black/20",
                activeIdx === index ? "border-accent/80 shadow-md shadow-accent/5" : "border-border/40 hover:border-accent/50"
              )}
            >
              {/* Screenshot container - scrollable vertically with uncropped image inside */}
              <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] border border-border/20 overflow-y-auto overflow-x-hidden bg-black/40 scrollbar-thin scrollbar-thumb-accent/20 hover:scrollbar-thumb-accent/40 scrollbar-track-transparent">
                {study.image && (
                  <img
                    src={study.image}
                    alt={study.title}
                    className={cn(
                      "w-full h-auto block object-top transition-all duration-500 ease-out select-none",
                      activeIdx === index ? "filter-none opacity-100" : "grayscale brightness-50 opacity-40 group-hover:opacity-75 group-hover:filter-none"
                    )}
                  />
                )}
                {/* Index tag */}
                <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 border border-border/60 z-30">
                  <span className="font-mono text-[9px] text-accent font-semibold">{String(index + 1).padStart(2, "0")}</span>
                </div>
              </div>

              {/* Text info */}
              <div className="mt-4 flex flex-col pointer-events-none">
                <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">{study.industry}</span>
                <h3 className={cn(
                  "font-[var(--font-bebas)] text-xl md:text-2xl tracking-tight mt-1 truncate transition-colors duration-300",
                  activeIdx === index ? "text-accent" : "text-foreground"
                )}>
                  {study.title}
                </h3>
              </div>

              {/* Top-right corner indicators on hover/active */}
              <div
                className={cn(
                  "absolute top-0 right-0 w-8 h-8 transition-all duration-300 pointer-events-none",
                  activeIdx === index ? "opacity-100" : "opacity-0"
                )}
              >
                <div className="absolute top-0 right-0 w-full h-[1px] bg-accent" />
                <div className="absolute top-0 right-0 w-[1px] h-full bg-accent" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Details Display Panel */}
      <div className="mt-12 border border-border/30 bg-card/10 p-6 md:p-8 relative min-h-[220px]">
        {/* Accent corners */}
        <div className="absolute top-0 left-0 w-8 h-8 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-accent" />
          <div className="absolute top-0 left-0 w-[1px] h-full bg-accent" />
        </div>
        <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-accent" />
          <div className="absolute bottom-0 right-0 w-[1px] h-full bg-accent" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Project Title and Outcomes */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent block">
                  Project {String(activeIdx + 1).padStart(2, "0")} / {caseStudies[activeIdx].industry}
                </span>
                <h4 className="font-[var(--font-bebas)] text-3xl md:text-4xl lg:text-5xl tracking-tight mt-2 text-foreground">
                  {caseStudies[activeIdx].title}
                </h4>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider block">Verified Outcome:</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-[var(--font-bebas)] text-4xl lg:text-6xl text-accent leading-none">
                    {caseStudies[activeIdx].metric}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-foreground font-semibold leading-tight">
                      {caseStudies[activeIdx].metricLabel}
                    </span>
                    <span className="font-mono text-[9px] text-muted-foreground/60 leading-tight">
                      {caseStudies[activeIdx].previousMetric}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description, details & CTAs */}
            <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-6 lg:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 border-l border-border/30 pl-4">
                  <h5 className="font-mono text-[10px] uppercase tracking-widest text-foreground font-semibold">The Challenge</h5>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                    {caseStudies[activeIdx].challenge}
                  </p>
                </div>
                <div className="space-y-2 border-l border-border/30 pl-4">
                  <h5 className="font-mono text-[10px] uppercase tracking-widest text-foreground font-semibold">The Solution</h5>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                    {caseStudies[activeIdx].solution}
                  </p>
                </div>
              </div>

              <div className="lg:pt-6 flex items-center justify-end gap-4">
                {caseStudies[activeIdx].url && (
                  caseStudies[activeIdx].url.startsWith("http") ? (
                    <a
                      href={caseStudies[activeIdx].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 border border-accent/20 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-accent hover:border-accent hover:bg-accent hover:text-black transition-all duration-300"
                    >
                      View Case Study ↗
                    </a>
                  ) : (
                    <Link
                      href={caseStudies[activeIdx].url}
                      className="group inline-flex items-center gap-2 border border-accent/20 px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-accent hover:border-accent hover:bg-accent hover:text-black transition-all duration-300"
                    >
                      View Case Study →
                    </Link>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
