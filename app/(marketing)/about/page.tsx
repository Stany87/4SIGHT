import { Metadata } from "next"
import { AboutPageClient } from "./about-page-client"

export const metadata: Metadata = {
  title: "About 4Sight — Systems-Focused Technology Agency",
  description: "We're a systems-focused technology agency that builds custom software, web applications, and AI automation solutions. Learn about our mission, values, and approach.",
  openGraph: {
    title: "About 4Sight — Systems-Focused Technology Agency",
    description: "Learn about our mission, values, and the approach that drives exceptional results for our clients.",
    url: "https://www.4sight.work/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
