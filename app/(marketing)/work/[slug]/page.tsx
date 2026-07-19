import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getCaseStudy, getAllCaseStudySlugs } from "@/lib/case-studies-data"
import { CaseStudyPageClient } from "./case-study-client"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) return {}

  return {
    title: `${cs.title} — Case Study`,
    description: cs.overview,
    openGraph: {
      title: `${cs.title} — Case Study | 4Sight`,
      description: cs.overview,
      url: `https://www.4sight.work/work/${slug}`,
      images: cs.heroImage ? [{ url: cs.heroImage }] : undefined,
    },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const cs = getCaseStudy(slug)
  if (!cs) notFound()

  return <CaseStudyPageClient study={cs} />
}
