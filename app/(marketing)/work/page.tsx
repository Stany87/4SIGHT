import { Metadata } from "next"
import { WorkPageClient } from "./work-page-client"

export const metadata: Metadata = {
  title: "Our Work — Portfolio & Case Studies",
  description: "Explore our portfolio of custom software, web applications, CRM, ERP, and AI automation projects. Real results for real businesses.",
  openGraph: {
    title: "Our Work — Portfolio & Case Studies | 4Sight",
    description: "Real projects. Real results. Explore our portfolio of custom technology solutions.",
    url: "https://www.4sight.work/work",
  },
}

export default function WorkPage() {
  return <WorkPageClient />
}
