import { Navigation } from "@/components/navigation"
import { VirtualToursGrid } from "@/components/virtual-tours-grid"
import { Footer } from "@/components/footer"

export default function VirtualToursPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Virtual Tours</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore Sikkim's sacred monasteries through immersive virtual experiences
            </p>
          </div>
          <VirtualToursGrid />
        </div>
      </div>
      <Footer />
    </main>
  )
}
