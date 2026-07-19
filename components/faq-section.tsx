"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface FaqItem {
  question: string
  answer: string
}

interface FaqSectionProps {
  sectionLabel?: string
  title?: string
  faqs: FaqItem[]
}

function FaqAccordion({ question, answer, index }: FaqItem & { index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!contentRef.current || !innerRef.current) return
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: innerRef.current.offsetHeight,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      })
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      })
    }
  }, [isOpen])

  return (
    <div className="border-b border-border/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-accent/60 tracking-widest">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className={cn(
            "font-[var(--font-bebas)] text-xl md:text-2xl tracking-tight transition-colors duration-300",
            isOpen ? "text-accent" : "text-foreground group-hover:text-accent"
          )}>
            {question}
          </h3>
        </div>
        <span className={cn(
          "font-mono text-xl transition-transform duration-300 text-muted-foreground flex-shrink-0 ml-4",
          isOpen ? "rotate-45" : ""
        )}>
          +
        </span>
      </button>
      <div ref={contentRef} className="overflow-hidden h-0 opacity-0">
        <div ref={innerRef} className="pb-6 pl-10 md:pl-14">
          <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-2xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FaqSection({ sectionLabel, title, faqs }: FaqSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current) return

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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 pl-6 md:pl-28 pr-6 md:pr-12">
      {sectionLabel && (
        <div ref={headerRef} className="mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
            {sectionLabel}
          </span>
          {title && (
            <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight">
              {title}
            </h2>
          )}
        </div>
      )}

      <div className="max-w-3xl">
        {faqs.map((faq, i) => (
          <FaqAccordion key={i} {...faq} index={i} />
        ))}
      </div>
    </section>
  )
}
