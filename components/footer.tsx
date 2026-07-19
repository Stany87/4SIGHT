"use client"

import Link from "next/link"
import { AnimatedLogo } from "@/components/animated-logo"

const footerLinks = {
  solutions: [
    { label: "Website Development", href: "/solutions/website-development" },
    { label: "Mobile Applications", href: "/solutions/mobile-applications" },
    { label: "Custom Software", href: "/solutions/custom-software" },
    { label: "SEO & Performance", href: "/solutions/seo" },
    { label: "AI Automation", href: "/solutions/ai-automation" },
  ],
  industries: [
    { label: "Healthcare", href: "/industries/healthcare" },
    { label: "Real Estate", href: "/industries/real-estate" },
    { label: "Manufacturing", href: "/industries/manufacturing" },
    { label: "Startups", href: "/industries/startups" },
    { label: "Interior Design", href: "/industries/interior-design" },
    { label: "Photography", href: "/industries/photography" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="font-mono text-[10px] uppercase tracking-widest text-foreground mb-6">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="font-mono text-xs text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 bg-background">
      {/* Main footer grid */}
      <div className="pl-6 md:pl-28 pr-6 md:pr-12 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link href="/" aria-label="4Sight Agency — Home">
              <AnimatedLogo className="h-12 w-auto" variant="fade-in" inverted />
            </Link>
            <p className="mt-4 font-mono text-xs text-muted-foreground leading-relaxed max-w-[200px]">
              Technology should remove friction, not create it.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                LI
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
                aria-label="X (Twitter)"
              >
                X
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                IG
              </a>
            </div>
          </div>

          <FooterColumn title="Solutions" links={footerLinks.solutions} />
          <FooterColumn title="Industries" links={footerLinks.industries} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-foreground mb-2">
                Stay Updated
              </h3>
              <p className="font-mono text-xs text-muted-foreground">
                Get insights on technology, automation, and growth.
              </p>
            </div>
            <form className="flex gap-0" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-64 bg-transparent border border-border/40 border-r-0 px-4 py-3 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 font-mono text-xs uppercase tracking-widest text-background bg-foreground hover:bg-accent transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pl-6 md:pl-28 pr-6 md:pr-12 py-6 border-t border-border/20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © {new Date().getFullYear()} 4Sight. All rights reserved.
          </p>
          <p className="font-mono text-[10px] text-muted-foreground">
            Built by 4Sight — Systems-Focused Technology Agency
          </p>
        </div>
      </div>
    </footer>
  )
}
