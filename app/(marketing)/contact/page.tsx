import { Metadata } from "next"
import { ContactPageClient } from "./contact-page-client"

export const metadata: Metadata = {
  title: "Contact — Book a Strategy Call",
  description: "Get in touch with 4Sight. Book a free 30-minute strategy call, send us a message, or reach out via WhatsApp, phone, or email.",
  openGraph: {
    title: "Contact — Book a Strategy Call | 4Sight",
    description: "Book a free strategy call or reach out directly. Let's discuss how we can help your business grow.",
    url: "https://www.4sight.work/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
