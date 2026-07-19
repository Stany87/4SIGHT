"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface CtaBannerProps {
  title: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CtaBanner({
  title = "READY TO GET STARTED?",
  subtitle = "Book a free 30-minute strategy call — no strings attached.",
  primaryCta = { label: "Book Strategy Call", href: "/contact" },
  secondaryCta,
}: CtaBannerProps) {
  const bannerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!bannerRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(bannerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      })
    }, bannerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={bannerRef} className="relative py-24 pl-6 md:pl-28 pr-6 md:pr-12">
      <div className="border border-border/30 p-8 md:p-16 text-center relative">
        {/* Accent corners */}
        <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-accent" />
          <div className="absolute top-0 left-0 w-[1px] h-full bg-accent" />
        </div>
        <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-accent" />
          <div className="absolute bottom-0 right-0 w-[1px] h-full bg-accent" />
        </div>

        <h2 className="font-[var(--font-bebas)] text-4xl md:text-6xl lg:text-7xl tracking-tight">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-6 max-w-lg mx-auto font-mono text-sm text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href={primaryCta.href}
            className="group inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover text={primaryCta.label} as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </Link>

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="font-mono text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
