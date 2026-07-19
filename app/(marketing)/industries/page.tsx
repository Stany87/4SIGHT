import { Metadata } from "next"
import { IndustriesIndexClient } from "./industries-index-client"

export const metadata: Metadata = {
  title: "Industries — Healthcare, Real Estate, Manufacturing & More",
  description: "We build technology solutions for healthcare, real estate, manufacturing, startups, interior design, and photography studios. Explore industry-specific solutions.",
  openGraph: {
    title: "Industries — Technology Solutions by Sector | 4Sight",
    description: "Industry-specific technology solutions for healthcare, real estate, manufacturing, startups, and creative studios.",
    url: "https://www.4sight.work/industries",
  },
}

export default function IndustriesPage() {
  return <IndustriesIndexClient />
}
