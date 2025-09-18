"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, RotateCcw, Maximize, Clock, Eye, Star } from "lucide-react"

interface VirtualTour {
  id: number
  title: string
  monastery: string
  description: string
  duration: string
  views: string
  rating: number
  thumbnail: string
  featured: boolean
  category: string
}

const virtualTours: VirtualTour[] = [
  {
    id: 1,
    title: "Sacred Prayer Hall Experience",
    monastery: "Rumtek Monastery",
    description: "Immerse yourself in the main prayer hall with its intricate murals and golden Buddha statues.",
    duration: "8 min",
    views: "12.5K",
    rating: 4.9,
    thumbnail: "/rumtek-prayer-hall-360.jpg",
    featured: true,
    category: "Interior",
  },
  {
    id: 2,
    title: "Mountain Monastery Panorama",
    monastery: "Pemayangtse Monastery",
    description: "Experience breathtaking 360° views of the Himalayas from this ancient monastery.",
    duration: "6 min",
    views: "8.2K",
    rating: 4.8,
    thumbnail: "/pemayangtse-panorama-360.jpg",
    featured: true,
    category: "Exterior",
  },
  {
    id: 3,
    title: "Meditation Chamber Journey",
    monastery: "Tashiding Monastery",
    description: "Step into the serene meditation chambers where monks practice daily rituals.",
    duration: "10 min",
    views: "6.7K",
    rating: 4.7,
    thumbnail: "/tashiding-meditation-360.jpg",
    featured: false,
    category: "Interior",
  },
  {
    id: 4,
    title: "Courtyard & Architecture",
    monastery: "Enchey Monastery",
    description: "Explore the traditional Tibetan architecture and peaceful monastery courtyards.",
    duration: "7 min",
    views: "5.1K",
    rating: 4.6,
    thumbnail: "/enchey-courtyard-360.jpg",
    featured: false,
    category: "Architecture",
  },
  {
    id: 5,
    title: "Ancient Artifacts Gallery",
    monastery: "Dubdi Monastery",
    description: "Discover rare Buddhist artifacts and manuscripts in this historic monastery.",
    duration: "9 min",
    views: "4.3K",
    rating: 4.5,
    thumbnail: "/dubdi-artifacts-360.jpg",
    featured: false,
    category: "Heritage",
  },
  {
    id: 6,
    title: "Sunrise Ceremony",
    monastery: "Rumtek Monastery",
    description: "Witness the morning prayers and rituals as the sun rises over the mountains.",
    duration: "12 min",
    views: "9.8K",
    rating: 4.8,
    thumbnail: "/rumtek-sunrise-360.jpg",
    featured: true,
    category: "Ceremony",
  },
]

const categories = ["All", "Interior", "Exterior", "Architecture", "Heritage", "Ceremony"]

export function VirtualTours() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTour, setSelectedTour] = useState<VirtualTour | null>(null)

  const filteredTours =
    selectedCategory === "All" ? virtualTours : virtualTours.filter((tour) => tour.category === selectedCategory)

  const featuredTours = virtualTours.filter((tour) => tour.featured)

  return (
    <section id="tours" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Virtual Tours</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the spiritual beauty of Sikkim's monasteries through immersive 360° virtual tours. Step inside
            sacred spaces from anywhere in the world.
          </p>
        </div>

        {/* Featured Tours */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Featured Experiences</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTours.map((tour) => (
              <Card key={tour.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={tour.thumbnail || "/placeholder.svg"}
                      alt={tour.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-background/90">
                        360° Tour
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/90">Featured</Badge>
                    </div>
                    <Button
                      size="lg"
                      className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-primary/90 hover:bg-primary group-hover:scale-110 transition-all"
                      onClick={() => setSelectedTour(tour)}
                    >
                      <Play className="h-6 w-6 ml-1" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">{tour.title}</CardTitle>
                      <CardDescription className="text-sm">{tour.monastery}</CardDescription>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{tour.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {tour.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {tour.views}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {tour.rating}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Tours with Filters */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4 sm:mb-0">All Virtual Tours</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => (
              <Card key={tour.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={tour.thumbnail || "/placeholder.svg"}
                      alt={tour.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-3 left-3">
                      <Badge variant="outline" className="bg-background/90 text-xs">
                        {tour.category}
                      </Badge>
                    </div>
                    <Button
                      size="sm"
                      className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-primary/90 hover:bg-primary group-hover:scale-110 transition-all"
                      onClick={() => setSelectedTour(tour)}
                    >
                      <Play className="h-4 w-4 ml-0.5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div>
                      <CardTitle className="text-base group-hover:text-primary transition-colors">
                        {tour.title}
                      </CardTitle>
                      <CardDescription className="text-xs">{tour.monastery}</CardDescription>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{tour.description}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {tour.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {tour.views}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        {tour.rating}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Virtual Tour Modal Placeholder */}
        {selectedTour && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>{selectedTour.title}</CardTitle>
                  <CardDescription>{selectedTour.monastery}</CardDescription>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedTour(null)}>
                  ✕
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative h-96 bg-gradient-to-br from-muted to-accent flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                      <RotateCcw className="h-8 w-8 text-primary animate-spin" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">360° Virtual Tour</h4>
                      <p className="text-sm text-muted-foreground">
                        Interactive tour experience will be integrated here
                      </p>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <Button size="sm">
                        <Maximize className="h-4 w-4 mr-2" />
                        Fullscreen
                      </Button>
                      <Button variant="outline" size="sm">
                        <RotateCcw className="h-4 w-4 mr-2" />
                        Reset View
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  )
}
