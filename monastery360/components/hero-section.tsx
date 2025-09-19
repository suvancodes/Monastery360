'use client'; // <-- add this at the top

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with monastery image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Buddhist Monastery in Mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-foreground">DISCOVER</span>
              <br />
              <span className="text-primary">SIKKIM'S</span>
              <br />
              <span className="text-foreground">SACRED</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Journey through ancient Buddhist monasteries nestled in the Himalayas. Experience spiritual heritage
              through immersive virtual tours and cultural insights.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/virtual-tours">
              <Button size="lg" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Start Virtual Tour
              </Button>
            </Link>
            <Link href="/map">
              <Button variant="outline" size="lg" className="group bg-transparent">
                <MapPin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Explore Map
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Sacred Monasteries</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">360°</div>
              <div className="text-sm text-muted-foreground">Virtual Tours</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Years of History</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
