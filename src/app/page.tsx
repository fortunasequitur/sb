import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { FeaturedDestinations } from "@/components/FeaturedDestinations"
import { TourPackages } from "@/components/TourPackages"
import { Services } from "@/components/Services"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedDestinations />
      <TourPackages />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
