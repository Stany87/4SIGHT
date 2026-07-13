import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, IBM_Plex_Mono, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SmoothScroll } from "@/components/smooth-scroll"
import { JsonLd } from "@/components/json-ld"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
})
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
})
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.4sight.work"),
  title: {
    default: "4Sight — Custom Software Development & AI Automation Agency",
    template: "%s | 4Sight Agency",
  },
  description:
    "4Sight builds custom software, web apps, CRM, ERP & AI automation solutions. We eliminate bottlenecks and accelerate growth.",
  keywords: [
    "4sight",
    "4sight agency",
    "web development agency",
    "custom software development",
    "CRM development",
    "ERP development",
    "AI automation agency",
    "SaaS development",
    "business automation",
    "custom web applications",
    "technology agency",
    "software development company",
  ],
  authors: [{ name: "4Sight Agency", url: "https://www.4sight.work" }],
  creator: "4Sight Agency",
  publisher: "4Sight Agency",
  alternates: {
    canonical: "https://www.4sight.work",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.4sight.work",
    siteName: "4Sight Agency",
    title: "4Sight — Custom Software Development & AI Automation Agency",
    description:
      "We engineer systems that eliminate operational bottlenecks and accelerate growth. Custom software, web apps, CRM, ERP, SaaS, and AI automation solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "4Sight — Custom Software Development & AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "4Sight — Custom Software Development & AI Automation Agency",
    description:
      "Systems-focused technology agency building custom software, CRM, ERP, and AI automation solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background">
      <body
        className={`${ibmPlexSans.variable} ${bebasNeue.variable} ${ibmPlexMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <JsonLd />
        <div className="noise-overlay" aria-hidden="true" />
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
