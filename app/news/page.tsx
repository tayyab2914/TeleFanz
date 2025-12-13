import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsMediaSection } from "@/components/news-media-section"

export const metadata = {
  title: "News & Media - Telefanz",
  description: "See what the world is saying about Telefanz and our mission to empower creators everywhere.",
}

export default function NewsPage() {
  return (
    <main className="bg-background overflow-x-hidden">
      <Header />
      <NewsMediaSection />
      <Footer />
    </main>
  )
}
