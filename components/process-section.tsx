"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: "01",
    title: "DISCOVERY",
    description: "Deep-dive into your business goals, challenges, and current systems. We map pain points and identify high-impact opportunities.",
  },
  {
    number: "02",
    title: "STRATEGY",
    description: "Define the roadmap, technology stack, and success metrics. Every decision is aligned with measurable business outcomes.",
  },
  {
    number: "03",
    title: "DESIGN",
    description: "Craft intuitive interfaces and system architectures. We prototype, test, and iterate before a single line of code is written.",
  },
  {
    number: "04",
    title: "DEVELOPMENT",
    description: "Build with precision — clean code, scalable architecture, and rigorous testing at every stage.",
  },
  {
    number: "05",
    title: "TESTING",
    description: "Comprehensive QA across devices, browsers, and edge cases. Performance, security, and accessibility audits included.",
  },
  {
    number: "06",
    title: "LAUNCH",
    description: "Seamless deployment with zero-downtime strategies. We handle DNS, hosting, monitoring, and go-live coordination.",
  },
  {
    number: "07",
    title: "SUPPORT",
    description: "Ongoing optimization, maintenance, and scaling. Your systems evolve as your business grows.",
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !timelineRef.current || !lineRef.current) return

    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      // Animate the connecting line drawing down as you scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 0.8,
          },
        },
      )

      // Stagger each step in
      const stepEls = timelineRef.current?.querySelectorAll(".timeline-step")
      if (stepEls) {
        stepEls.forEach((step) => {
          gsap.from(step, {
            x: -40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="process" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">04 / Process</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight flex flex-wrap items-center gap-x-[0.25em] gap-y-1">
          <span>OUR</span>
          <img
            src="/images/process-logo.png"
            alt="Our development process - discover, architect, build, automate, scale"
            className="h-[0.8em] w-auto object-contain"
          />
        </h2>
        <p className="mt-4 max-w-lg font-mono text-sm text-muted-foreground leading-relaxed">
          A proven seven-step process that takes your project from concept to continuous growth.
        </p>
      </div>

      {/* Visual Connected Timeline */}
      <div ref={timelineRef} className="relative max-w-3xl ml-0 md:ml-8">
        {/* Vertical connector line */}
        <div
          ref={lineRef}
          className="absolute left-[11px] top-0 bottom-0 w-[2px] bg-accent/60 origin-top"
          aria-hidden="true"
        />

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="timeline-step group relative flex gap-8 pb-16 last:pb-0"
            >
              {/* Node marker */}
              <div className="relative z-10 flex-shrink-0 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full border-2 border-accent bg-background flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 -mt-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {step.number}
                </span>
                <h3 className="mt-2 font-[var(--font-bebas)] text-3xl md:text-5xl tracking-tight group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-md font-mono text-xs text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 h-[1px] w-16 bg-border/30 group-hover:w-24 group-hover:bg-accent/30 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
