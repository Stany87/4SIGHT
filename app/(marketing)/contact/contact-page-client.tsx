"use client"

import { useState, useRef, useEffect } from "react"
import { PageHero } from "@/components/page-hero"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import { BitmapChevron } from "@/components/bitmap-chevron"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const contactMethods = [
  {
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    description: "Quick response, usually within minutes",
  },
  {
    label: "Email",
    value: "hello@4sight.agency",
    href: "mailto:hello@4sight.agency",
    description: "For detailed inquiries and proposals",
  },
  {
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    description: "Available Mon-Fri, 10am-7pm IST",
  },
]

export function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  })
  const formRef = useRef<HTMLDivElement>(null)
  const methodsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!formRef.current || !methodsRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: formRef.current, start: "top 90%", toggleActions: "play none none reverse" },
      })
      gsap.from(methodsRef.current, {
        y: 40, opacity: 0, duration: 0.8, delay: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: methodsRef.current, start: "top 90%", toggleActions: "play none none reverse" },
      })
    })
    return () => ctx.revert()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
  }

  return (
    <>
      <PageHero
        sectionLabel="Contact"
        title="LET'S BUILD SOMETHING GREAT"
        subtitle="Book a Strategy Call"
        description="Book a free 30-minute strategy call. We'll identify your biggest operational bottlenecks and map a clear path to solving them with technology."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-24 pl-6 md:pl-28 pr-6 md:pr-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl">
          {/* Contact Form */}
          <div ref={formRef}>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Send a Message</span>
            <h2 className="mt-4 font-[var(--font-bebas)] text-4xl tracking-tight mb-8">
              TELL US ABOUT YOUR PROJECT
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent border border-border/40 px-4 py-3 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors placeholder:text-muted-foreground/40"
                    required
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full bg-transparent border border-border/40 px-4 py-3 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors placeholder:text-muted-foreground/40"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-transparent border border-border/40 px-4 py-3 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors placeholder:text-muted-foreground/40"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-border/40 px-4 py-3 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a project type</option>
                    <option value="website">Website Development</option>
                    <option value="mobile">Mobile Application</option>
                    <option value="software">Custom Software</option>
                    <option value="seo">SEO & Performance</option>
                    <option value="ai">AI Automation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-border/40 px-4 py-3 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, challenges, and goals..."
                  rows={5}
                  className="w-full bg-transparent border border-border/40 px-4 py-3 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors resize-none placeholder:text-muted-foreground/40"
                  required
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 border border-foreground/20 px-8 py-4 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
              >
                <ScrambleTextOnHover text="Send Message" as="span" duration={0.6} />
                <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
              </button>
            </form>
          </div>

          {/* Contact Methods + Info */}
          <div ref={methodsRef}>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Direct Contact</span>
            <h2 className="mt-4 font-[var(--font-bebas)] text-4xl tracking-tight mb-8">
              REACH OUT DIRECTLY
            </h2>

            <div className="space-y-6">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block border border-border/40 p-6 hover:border-accent/60 hover:bg-accent/5 transition-all duration-500"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{method.label}</span>
                  <p className="mt-2 font-[var(--font-bebas)] text-2xl group-hover:text-accent transition-colors">{method.value}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{method.description}</p>
                </a>
              ))}
            </div>

            {/* Office Info */}
            <div className="mt-12">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Office</span>
              <div className="mt-4 border border-border/40 p-6">
                <p className="font-mono text-sm text-foreground">4Sight Agency</p>
                <p className="mt-2 font-mono text-xs text-muted-foreground leading-relaxed">
                  Available for remote collaboration worldwide.<br />
                  Based in India.
                </p>
                <div className="mt-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Business Hours</span>
                  <p className="mt-1 font-mono text-xs text-foreground">Monday - Friday, 10:00 AM - 7:00 PM IST</p>
                </div>
              </div>
            </div>

            {/* Book Meeting CTA */}
            <div className="mt-12 border border-accent/40 p-8 bg-accent/5">
              <h3 className="font-[var(--font-bebas)] text-3xl tracking-tight text-accent">
                PREFER A CALL?
              </h3>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Book a free 30-minute strategy call. We&apos;ll discuss your challenges and explore how technology can solve them.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 mt-6 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
              >
                <ScrambleTextOnHover text="Book a Meeting" as="span" duration={0.6} />
                <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
