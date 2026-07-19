import { Metadata } from "next"
import { ProcessPageClient } from "./process-page-client"

export const metadata: Metadata = {
  title: "Our Process — From Idea to Launch",
  description: "Our proven 7-step process takes your project from discovery through strategy, design, development, testing, launch, and ongoing support.",
  openGraph: {
    title: "Our Process — From Idea to Launch | 4Sight",
    description: "Discover our proven 7-step process that takes projects from concept to production.",
    url: "https://www.4sight.work/process",
  },
}

export default function ProcessPage() {
  return <ProcessPageClient />
}
