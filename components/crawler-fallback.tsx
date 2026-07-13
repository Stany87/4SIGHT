"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

/**
 * Crawler Fallback Component
 *
 * Google's renderer executes JavaScript but NEVER scrolls the page.
 * This means all GSAP ScrollTrigger animations that start at opacity: 0
 * will never fire, leaving the page completely blank to Googlebot.
 *
 * This component uses a two-pronged approach:
 * 1. After 3s, force-complete all ScrollTrigger animations
 * 2. After 4s, directly find and reveal any elements still hidden via inline opacity
 *
 * Only triggers if no wheel/touch/scroll interaction is detected.
 * Mouse movement is NOT counted as interaction since automated test tools
 * may generate mousemove events without real user presence.
 */
export function CrawlerFallback() {
  useEffect(() => {
    let hasScrolled = false

    const markScrolled = () => {
      hasScrolled = true
    }

    // Only listen for scroll-type interactions (not mousemove, which test tools trigger)
    window.addEventListener("scroll", markScrolled, { once: true, passive: true })
    window.addEventListener("wheel", markScrolled, { once: true, passive: true })
    window.addEventListener("touchstart", markScrolled, { once: true, passive: true })

    // Phase 1: After 3 seconds, force-complete all ScrollTrigger animations
    const timer1 = setTimeout(() => {
      if (!hasScrolled) {
        const triggers = ScrollTrigger.getAll()
        triggers.forEach((trigger) => {
          if (trigger.animation) {
            // Kill the ScrollTrigger but keep the animation, then complete it
            trigger.kill(false)
            trigger.animation.progress(1)
          }
        })
      }
    }, 3000)

    // Phase 2: After 4 seconds, brute-force reveal anything still hidden
    const timer2 = setTimeout(() => {
      if (!hasScrolled) {
        // Find ALL elements with inline opacity: 0 and force them visible
        document.querySelectorAll("[style]").forEach((el) => {
          const htmlEl = el as HTMLElement
          const computedOpacity = htmlEl.style.opacity
          if (computedOpacity === "0") {
            htmlEl.style.opacity = "1"
          }
        })
        // Also fix any elements with transform that might be off-screen
        document.querySelectorAll("section, h1, h2, h3, p, div, span, a, button, img").forEach((el) => {
          const htmlEl = el as HTMLElement
          const computed = window.getComputedStyle(htmlEl)
          if (computed.opacity === "0") {
            htmlEl.style.setProperty("opacity", "1", "important")
          }
        })
      }
    }, 4000)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      window.removeEventListener("scroll", markScrolled)
      window.removeEventListener("wheel", markScrolled)
      window.removeEventListener("touchstart", markScrolled)
    }
  }, [])

  return null
}
