import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getIndustry, getAllIndustrySlugs } from "@/lib/industries-data"
import { IndustryPageClient } from "./industry-page-client"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) return {}

  return {
    title: `${industry.subtitle} — Technology Solutions`,
    description: industry.description,
    openGraph: {
      title: `${industry.subtitle} — Technology Solutions | 4Sight`,
      description: industry.description,
      url: `https://www.4sight.work/industries/${slug}`,
    },
  }
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params
  const industry = getIndustry(slug)
  if (!industry) notFound()

  return <IndustryPageClient industry={industry} />
}
