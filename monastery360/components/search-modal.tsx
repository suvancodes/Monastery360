"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, X, MapPin, Calendar, Play, Clock, Users, Star } from "lucide-react"

interface SearchResult {
  id: string
  title: string
  type: "monastery" | "tour" | "event"
  description: string
  location?: string
  date?: string
  rating?: number
  image: string
  metadata?: {
    duration?: string
    attendees?: string
    established?: string
    views?: string
  }
}

// Mock search data combining monasteries, tours, and events
const searchData: SearchResult[] = [
  // Monasteries
  {
    id: "monastery-1",
    title: "Rumtek Monastery",
    type: "monastery",
    description: "The largest monastery in Sikkim, known as the Dharma Chakra Centre.",
    location: "Gangtok, East Sikkim",
    rating: 4.8,
    image: "/rumtek-monastery-sikkim.jpg",
    metadata: { established: "1966" },
  },
  {
    id: "monastery-2",
    title: "Pemayangtse Monastery",
    type: "monastery",
    description: "One of the oldest monasteries in Sikkim with stunning mountain views.",
    location: "Pelling, West Sikkim",
    rating: 4.7,
    image: "/pemayangtse-monastery-sikkim.jpg",
    metadata: { established: "1705" },
  },
  {
    id: "monastery-3",
    title: "Tashiding Monastery",
    type: "monastery",
    description: "Sacred monastery believed to cleanse sins of pilgrims.",
    location: "Tashiding, West Sikkim",
    rating: 4.6,
    image: "/tashiding-monastery-sikkim.jpg",
    metadata: { established: "1641" },
  },
  // Virtual Tours
  {
    id: "tour-1",
    title: "Sacred Prayer Hall Experience",
    type: "tour",
    description: "Immerse yourself in the main prayer hall with its intricate murals and golden Buddha statues.",
    location: "Rumtek Monastery",
    rating: 4.9,
    image: "/rumtek-prayer-hall-360.jpg",
    metadata: { duration: "8 min", views: "12.5K" },
  },
  {
    id: "tour-2",
    title: "Mountain Monastery Panorama",
    type: "tour",
    description: "Experience breathtaking 360° views of the Himalayas from this ancient monastery.",
    location: "Pemayangtse Monastery",
    rating: 4.8,
    image: "/pemayangtse-panorama-360.jpg",
    metadata: { duration: "6 min", views: "8.2K" },
  },
  // Events
  {
    id: "event-1",
    title: "Losar Festival Celebration",
    type: "event",
    description: "Tibetan New Year celebration with traditional dances, prayers, and cultural performances.",
    location: "Rumtek Monastery",
    date: "2024-02-10",
    image: "/placeholder.svg",
    metadata: { duration: "3 days", attendees: "500+" },
  },
  {
    id: "event-2",
    title: "Dharma Teaching Session",
    type: "event",
    description: "Buddhist philosophy and meditation teachings by senior monks for spiritual seekers.",
    location: "Tashiding Monastery",
    date: "2024-02-15",
    image: "/placeholder.svg",
    metadata: { duration: "4 hours", attendees: "100+" },
  },
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedType, setSelectedType] = useState<"all" | "monastery" | "tour" | "event">("all")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)
    // Simulate API delay
    const timer = setTimeout(() => {
      const filteredResults = searchData.filter((item) => {
        const matchesQuery =
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.location?.toLowerCase().includes(query.toLowerCase())

        const matchesType = selectedType === "all" || item.type === selectedType

        return matchesQuery && matchesType
      })

      setResults(filteredResults)
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [query, selectedType])

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "monastery":
        return <MapPin className="h-4 w-4" />
      case "tour":
        return <Play className="h-4 w-4" />
      case "event":
        return <Calendar className="h-4 w-4" />
      default:
        return <Search className="h-4 w-4" />
    }
  }

  const getTypeBadge = (type: string) => {
    const colors = {
      monastery: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      tour: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      event: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
    }
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center p-4 pt-20">
      <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Search Monastery360
              </CardTitle>
              <CardDescription>
                Find monasteries, virtual tours, and cultural events
                <Badge variant="secondary" className="ml-2">
                  Placeholder for HuggingFace AI search
                </Badge>
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="p-6 border-b">
            <div className="space-y-4">
              <Input
                placeholder="Search for monasteries, tours, events..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="text-lg"
                autoFocus
              />
              <div className="flex gap-2">
                {[
                  { key: "all", label: "All" },
                  { key: "monastery", label: "Monasteries" },
                  { key: "tour", label: "Virtual Tours" },
                  { key: "event", label: "Events" },
                ].map((type) => (
                  <Button
                    key={type.key}
                    variant={selectedType === type.key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedType(type.key as any)}
                  >
                    {type.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {!query.trim() ? (
              <div className="p-8 text-center text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">Start your search</h3>
                <p className="text-sm">
                  Search for monasteries, virtual tours, or cultural events to explore Sikkim's spiritual heritage.
                </p>
              </div>
            ) : isLoading ? (
              <div className="p-8 text-center text-muted-foreground">
                <div className="animate-spin h-8 w-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                <p>Searching...</p>
              </div>
            ) : results.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-medium mb-2">No results found</h3>
                <p className="text-sm">Try adjusting your search terms or browse different categories.</p>
              </div>
            ) : (
              <div className="p-6 space-y-4">
                <div className="text-sm text-muted-foreground mb-4">
                  Found {results.length} result{results.length !== 1 ? "s" : ""} for "{query}"
                </div>
                {results.map((result) => (
                  <Card key={result.id} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <img
                            src={result.image || "/placeholder.svg"}
                            alt={result.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-foreground hover:text-primary transition-colors">
                                {result.title}
                              </h4>
                              {result.location && (
                                <p className="text-sm text-muted-foreground flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {result.location}
                                </p>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge className={getTypeBadge(result.type)}>
                                {getTypeIcon(result.type)}
                                <span className="ml-1 capitalize">{result.type}</span>
                              </Badge>
                              {result.rating && (
                                <div className="flex items-center gap-1 text-sm">
                                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                  {result.rating}
                                </div>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">{result.description}</p>
                          {result.metadata && (
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              {result.metadata.duration && (
                                <div className="flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {result.metadata.duration}
                                </div>
                              )}
                              {result.metadata.attendees && (
                                <div className="flex items-center gap-1">
                                  <Users className="h-3 w-3" />
                                  {result.metadata.attendees}
                                </div>
                              )}
                              {result.metadata.established && <div>Est. {result.metadata.established}</div>}
                              {result.metadata.views && <div>{result.metadata.views} views</div>}
                              {result.date && (
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(result.date).toLocaleDateString()}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
