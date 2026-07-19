import { Metadata } from "next"
import { SolutionsIndexClient } from "./solutions-index-client"

export const metadata: Metadata = {
  title: "Solutions — Custom Software, Web, Mobile, SEO & AI Automation",
  description: "Explore our full range of technology solutions: website development, mobile apps, custom software, SEO optimization, and AI automation for business growth.",
  openGraph: {
    title: "Solutions — Custom Software, Web, Mobile, SEO & AI Automation | 4Sight",
    description: "Explore our full range of technology solutions for business growth.",
    url: "https://www.4sight.work/solutions",
  },
}

export default function SolutionsPage() {
  return <SolutionsIndexClient />
}
