"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

interface PageHeroProps {
  sectionLabel: string
  title: string
  subtitle?: string
  description?: string
  breadcrumbs?: { label: string; href: string }[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function PageHero({
  sectionLabel,
  title,
  subtitle,
  description,
  breadcrumbs,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  const heroRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-[60vh] flex items-end pb-16 pt-32 pl-6 md:pl-28 pr-6 md:pr-12"
    >
      {/* Grid background */}
      <div className="grid-bg absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true" />

      <div ref={contentRef} className="relative z-10 w-full max-w-5xl">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-border">/</span>
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-accent">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-foreground transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Section label */}
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
          {sectionLabel}
        </span>

        {/* Title */}
        <h1 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9]">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 font-[var(--font-bebas)] text-2xl md:text-4xl tracking-tight text-muted-foreground">
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="mt-6 max-w-xl font-mono text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}

        {/* CTAs */}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex items-center gap-6">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
