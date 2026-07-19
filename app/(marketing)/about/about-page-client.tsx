"use client"

import { useRef, useEffect } from "react"
import { PageHero } from "@/components/page-hero"
import { CtaBanner } from "@/components/cta-banner"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const coreValues = [
  { title: "Systems Over Features", description: "We don't build isolated features — we engineer interconnected systems that compound in value over time." },
  { title: "Results Over Activity", description: "Every decision is measured against business impact. We optimize for outcomes, not hours billed." },
  { title: "Clarity Over Complexity", description: "Simple solutions to complex problems. We cut through noise to deliver what actually moves the needle." },
  { title: "Partnership Over Transaction", description: "We invest in understanding your business deeply. Your success is our success." },
  { title: "Quality Over Speed", description: "We move fast, but never at the expense of quality. Every line of code is production-ready." },
  { title: "Transparency Over Everything", description: "No black boxes. You see our process, our progress, and our reasoning at every step." },
]

const whyChooseUs = [
  { metric: "50+", label: "Projects Delivered", description: "Across 12+ industries — from healthcare to manufacturing." },
  { metric: "98%", label: "Client Satisfaction", description: "Because we don't just meet expectations, we redefine them." },
  { metric: "3-6x", label: "Average ROI", description: "Our solutions pay for themselves, typically within the first year." },
  { metric: "0", label: "Missed Deadlines", description: "When we commit to a date, we deliver on that date." },
]

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%", toggleActions: "play none none reverse" },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return <div ref={ref} className={className}>{children}</div>
}

export function AboutPageClient() {
  return (
    <>
      <PageHero
        sectionLabel="About Us"
        title="WE ENGINEER SYSTEMS THAT ELIMINATE BOTTLENECKS"
        subtitle="Systems-Focused Technology Agency"
        description="4Sight is not a feature factory. We're a systems-thinking technology partner that builds interconnected solutions designed to eliminate operational bottlenecks and accelerate growth."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Mission & Vision */}
      <section className="py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl">
          <AnimatedSection>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Our Mission</span>
            <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight">
              REMOVE FRICTION FROM BUSINESS
            </h2>
            <p className="mt-6 font-mono text-sm text-muted-foreground leading-relaxed">
              Technology should remove friction, not create it. Our mission is to build systems that make businesses operate smoother, faster, and smarter — so teams can focus on growth instead of firefighting.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Our Vision</span>
            <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-5xl tracking-tight">
              EVERY BUSINESS DESERVES GREAT SYSTEMS
            </h2>
            <p className="mt-6 font-mono text-sm text-muted-foreground leading-relaxed">
              We envision a world where small and mid-size businesses have access to the same caliber of technology infrastructure as Fortune 500 companies — custom-built, not cobbled together from templates.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/20">
        <AnimatedSection className="mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Core Values</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight">
            WHAT WE STAND FOR
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreValues.map((value, i) => (
            <AnimatedSection key={i}>
              <div className={cn(
                "group border border-border/40 p-8 h-full transition-all duration-500",
                "hover:border-accent/60 hover:bg-accent/5"
              )}>
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-[var(--font-bebas)] text-2xl tracking-tight group-hover:text-accent transition-colors">
                  {value.title}
                </h3>
                <p className="mt-4 font-mono text-xs text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Why Clients Choose Us */}
      <section className="py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/20">
        <AnimatedSection className="mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Track Record</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight">
            WHY CLIENTS CHOOSE US
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {whyChooseUs.map((item, i) => (
            <AnimatedSection key={i}>
              <div className="border-l-2 border-accent/40 pl-6 hover:border-accent transition-colors duration-300">
                <p className="font-[var(--font-bebas)] text-5xl text-accent">{item.metric}</p>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-foreground">{item.label}</p>
                <p className="mt-2 font-mono text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 pl-6 md:pl-28 pr-6 md:pr-12 border-t border-border/20">
        <AnimatedSection>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Our Approach</span>
          <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-6xl tracking-tight mb-12">
            HOW WE WORK
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
          <AnimatedSection>
            <div className="border-t-2 border-accent/40 pt-6">
              <h3 className="font-[var(--font-bebas)] text-2xl tracking-tight">Think in Systems</h3>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                We don&apos;t build isolated features. Every component connects to the bigger picture — your business goals, your team&apos;s workflow, your customer&apos;s journey.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="border-t-2 border-accent/40 pt-6">
              <h3 className="font-[var(--font-bebas)] text-2xl tracking-tight">Build with Precision</h3>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                Clean code, scalable architecture, and thorough testing. We build things right the first time so you&apos;re not paying for rewrites 6 months later.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="border-t-2 border-accent/40 pt-6">
              <h3 className="font-[var(--font-bebas)] text-2xl tracking-tight">Measure Everything</h3>
              <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
                We define success metrics before writing code and build dashboards to track them. You always know the ROI of your investment.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CtaBanner
        title="LET'S BUILD SOMETHING GREAT TOGETHER"
        subtitle="We're selective about the projects we take on — because we go deep on every engagement. If that resonates, let's talk."
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "View Our Work", href: "/work" }}
      />
    </>
  )
}
