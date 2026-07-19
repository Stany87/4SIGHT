"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { BitmapChevron } from "@/components/bitmap-chevron"

gsap.registerPlugin(ScrollTrigger)

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)


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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/30"
    >
      {/* Large CTA Banner */}
      <div ref={headerRef} className="mb-20 border border-border/30 p-8 md:p-16 text-center relative">
        {/* Accent corners */}
        <div className="absolute top-0 left-0 w-12 h-12 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-accent" />
          <div className="absolute top-0 left-0 w-[1px] h-full bg-accent" />
        </div>
        <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-full h-[1px] bg-accent" />
          <div className="absolute bottom-0 right-0 w-[1px] h-full bg-accent" />
        </div>

        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">06 / Contact</span>
        <h2 className="mt-6 font-[var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl tracking-tight">
          READY TO ELIMINATE<br className="hidden md:block" /> YOUR BOTTLENECKS?
        </h2>
        <p className="mt-6 max-w-lg mx-auto font-mono text-sm text-muted-foreground leading-relaxed">
          Book a free 30-minute strategy call — no strings attached. We&apos;ll identify your biggest operational gaps and map a path to measurable growth.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#contact-form"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ScrambleTextOnHover text="Book Strategy Call" as="span" duration={0.6} />
            <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
          </a>
          <a
            href="mailto:hello@4sight.agency"
            className="font-mono text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
          >
            hello@4sight.agency
          </a>
        </div>
      </div>

      {/* Contact form heading */}
      <div className="mb-8">
        <h3 id="contact-form" className="font-[var(--font-bebas)] text-3xl tracking-tight flex flex-wrap items-center gap-x-[0.25em] gap-y-1">
          <img
            src="/images/engineer-logo.png"
            alt="Engineer your competitive advantage - custom software by 4Sight agency"
            className="h-[0.8em] w-auto object-contain"
          />
          <span>YOUR ADVANTAGE</span>
        </h3>
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
    </section>
  )
}
