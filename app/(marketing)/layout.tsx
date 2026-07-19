import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen">
        <div className="grid-bg fixed inset-0 opacity-30 z-0 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
