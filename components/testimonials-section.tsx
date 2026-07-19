"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
  {
    quote: "4Sight didn't just build us a website — they engineered a system that transformed how we operate. Our lead pipeline is fully automated and we've tripled conversions.",
    name: "Arjun Mehta",
    role: "CEO",
    company: "Clockworks Systems",
  },
  {
    quote: "The ATS platform they built replaced three different tools we were paying for. Everything is in one place now. The hiring team saves over 40 hours a week.",
    name: "Priya Sharma",
    role: "Head of Operations",
    company: "Clockworks Recruiting",
  },
  {
    quote: "From concept to deployment in six weeks. They understood our visa processing pain points immediately and delivered a CRM that cut our response time from 12 minutes to 45 seconds.",
    name: "Rahul Kapoor",
    role: "Managing Director",
    company: "AskVisa B2B",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
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

      const cards = cardsRef.current?.querySelectorAll("article")
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
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
    <section ref={sectionRef} id="testimonials" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / Testimonials</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          WHAT OUR CLIENTS SAY
        </h2>
        <p className="mt-4 max-w-lg font-mono text-sm text-muted-foreground leading-relaxed">
          Don&apos;t take our word for it — hear from the businesses we&apos;ve transformed.
        </p>
      </div>

      {/* Testimonial cards */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className="group relative border border-border/40 p-8 transition-all duration-500 hover:border-accent/40 hover:bg-accent/5 flex flex-col"
          >
            {/* Quote mark */}
            <span className="font-[var(--font-bebas)] text-6xl md:text-7xl text-accent/20 leading-none select-none -mt-2 -ml-1">
              &ldquo;
            </span>

            {/* Quote text */}
            <blockquote className="flex-1 mt-2 font-mono text-sm text-muted-foreground leading-relaxed">
              {testimonial.quote}
            </blockquote>

            {/* Attribution */}
            <div className="mt-8 pt-6 border-t border-border/20">
              <p className="font-[var(--font-bebas)] text-xl tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
                {testimonial.name}
              </p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                {testimonial.role} — {testimonial.company}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
