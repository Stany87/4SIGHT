"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatedLogo } from "@/components/animated-logo"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const solutionsDropdown = [
  { href: "/solutions/website-development", label: "Website Development" },
  { href: "/solutions/mobile-applications", label: "Mobile Applications" },
  { href: "/solutions/custom-software", label: "Custom Software" },
  { href: "/solutions/seo", label: "SEO & Performance" },
  { href: "/solutions/ai-automation", label: "AI Automation" },
]

const industriesDropdown = [
  { href: "/industries/healthcare", label: "Healthcare" },
  { href: "/industries/real-estate", label: "Real Estate" },
  { href: "/industries/manufacturing", label: "Manufacturing" },
  { href: "/industries/startups", label: "Startups" },
  { href: "/industries/interior-design", label: "Interior Design" },
  { href: "/industries/photography", label: "Photography" },
]

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions", dropdown: solutionsDropdown },
  { href: "/industries", label: "Industries", dropdown: industriesDropdown },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

function DropdownMenu({
  items,
  isOpen,
}: {
  items: { href: string; label: string }[]
  isOpen: boolean
}) {
  return (
    <div
      className={cn(
        "absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[220px] border border-border/40 bg-background/95 backdrop-blur-md transition-all duration-200",
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      )}
    >
      <div className="py-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-5 py-2.5 font-mono text-xs text-muted-foreground hover:text-accent hover:bg-accent/5 transition-colors duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-[60] transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/30"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="4Sight Agency — Home">
              <AnimatedLogo
                className="h-16 w-auto"
                variant="electric-current"
                inverted
              />
              <span className="sr-only">4Sight Agency</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.dropdown && handleMouseEnter(link.label)}
                  onMouseLeave={() => link.dropdown && handleMouseLeave()}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "font-mono text-xs uppercase tracking-widest transition-colors duration-200",
                      isActive(link.href)
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <DropdownMenu
                      items={link.dropdown}
                      isOpen={activeDropdown === link.label}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-2.5 font-mono text-xs uppercase tracking-widest text-background bg-foreground hover:bg-accent transition-colors duration-200"
              >
                Book a Strategy Call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:bg-foreground/5 transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-md border-t border-border/20",
            isMobileMenuOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
          )}
        >
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "block py-3 font-mono text-sm uppercase tracking-widest transition-colors duration-200",
                    isActive(link.href) ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
                {/* Mobile dropdown items */}
                {link.dropdown && (
                  <div className="pl-6 pb-2 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block py-2 font-mono text-xs text-muted-foreground hover:text-accent transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="block w-full text-center py-3 font-mono text-xs uppercase tracking-widest text-background bg-foreground hover:bg-accent transition-colors duration-200"
              >
                Book a Strategy Call
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20" />
    </>
  )
}
