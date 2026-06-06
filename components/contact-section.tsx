"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { AnimatedLogo } from "@/components/animated-logo"

gsap.registerPlugin(ScrollTrigger)

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      if (headerRef.current) {
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
      }

      if (contentRef.current) {
        gsap.from(contentRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        })
      }

      if (footerRef.current) {
        gsap.from(footerRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / Contact</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          LET&apos;S BUILD SOMETHING BETTER
        </h2>
        <p className="mt-4 max-w-lg font-mono text-sm text-muted-foreground leading-relaxed">
          Let&apos;s identify the bottlenecks holding your business back and engineer a solution that drives measurable growth.
        </p>
      </div>

      {/* Contact form and info */}
      <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border border-border/40 px-4 py-3 font-mono text-sm text-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
                Company
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-transparent border border-border/40 px-4 py-3 font-mono text-sm text-foreground focus:border-accent focus:outline-none transition-colors duration-200"
                placeholder="Your company"
              />
            </div>
          </div>

          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border border-border/40 px-4 py-3 font-mono text-sm text-foreground focus:border-accent focus:outline-none transition-colors duration-200"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
              Project Type
            </label>
            <select
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full bg-transparent border border-border/40 px-4 py-3 font-mono text-sm text-foreground focus:border-accent focus:outline-none transition-colors duration-200"
            >
              <option value="" className="bg-background">Select a project type</option>
              <option value="website" className="bg-background">Website Development</option>
              <option value="saas" className="bg-background">SaaS Platform</option>
              <option value="automation" className="bg-background">AI / Automation</option>
              <option value="crm" className="bg-background">CRM / ERP System</option>
              <option value="custom" className="bg-background">Custom Software</option>
              <option value="other" className="bg-background">Other</option>
            </select>
          </div>

          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full bg-transparent border border-border/40 px-4 py-3 font-mono text-sm text-foreground focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover text="Book Strategy Call" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </button>
        </form>

        {/* Contact info */}
        <div className="space-y-12">
          {/* Why 4Sight */}
          <div>
            <h3 className="font-[var(--font-bebas)] text-2xl tracking-tight mb-6">BUILT AROUND SYSTEMS THINKING</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: "Strategy First", desc: "Every solution begins with understanding business goals." },
                { title: "Automation Focused", desc: "Reduce repetitive work and increase efficiency." },
                { title: "Built To Scale", desc: "Systems designed for long-term growth." },
                { title: "Results Driven", desc: "Technology aligned with measurable outcomes." },
              ].map((item, index) => (
                <div key={index} className="border-l border-accent/40 pl-4">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-accent mb-2">{item.title}</h4>
                  <p className="font-mono text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick contact */}
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Direct Contact</h4>
            <a
              href="mailto:hello@4sight.agency"
              className="font-mono text-sm text-foreground hover:text-accent transition-colors duration-200 block"
            >
              hello@4sight.agency
            </a>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div
        ref={footerRef}
        className="mt-24 pt-8 border-t border-border/20"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex items-center gap-6">
            <AnimatedLogo
              className="h-12 w-auto"
              variant="fade-in"
              inverted
            />
            <div className="h-8 w-px bg-border/30 hidden md:block" />
            <p className="font-mono text-[10px] text-muted-foreground hidden md:block">
              Technology should remove friction,<br />not create it.
            </p>
          </div>

          {/* Copyright */}
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2025 4Sight. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}
