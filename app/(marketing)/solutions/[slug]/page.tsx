import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getService, getAllServiceSlugs } from "@/lib/services-data"
import { ServicePageClient } from "./service-page-client"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}

  return {
    title: service.title.split(" ").slice(0, 6).join(" "),
    description: service.description,
    openGraph: {
      title: service.title,
      description: service.description,
      url: `https://www.4sight.work/solutions/${slug}`,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return <ServicePageClient service={service} />
}
