"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, ChevronLeft, ChevronRight } from "lucide-react"

interface CulturalEvent {
  id: number
  title: string
  monastery: string
  date: string
  time: string
  duration: string
  description: string
  category: "Festival" | "Ceremony" | "Teaching" | "Meditation" | "Cultural"
  attendees: string
  location: string
  featured: boolean
  image: string
}

const culturalEvents: CulturalEvent[] = [
  {
    id: 1,
    title: "Losar Festival Celebration",
    monastery: "Rumtek Monastery",
    date: "2024-02-10",
    time: "06:00 AM",
    duration: "3 days",
    description: "Tibetan New Year celebration with traditional dances, prayers, and cultural performances.",
    category: "Festival",
    attendees: "500+",
    location: "Main Prayer Hall",
    featured: true,
    image: "/placeholder-q3fe6.png",
  },
  {
    id: 2,
    title: "Morning Prayer Ceremony",
    monastery: "Pemayangtse Monastery",
    date: "2024-01-25",
    time: "05:30 AM",
    duration: "2 hours",
    description: "Daily morning prayers and chanting session open to visitors and devotees.",
    category: "Ceremony",
    attendees: "50+",
    location: "Prayer Hall",
    featured: false,
    image: "/placeholder-5exi1.png",
  },
  {
    id: 3,
    title: "Dharma Teaching Session",
    monastery: "Tashiding Monastery",
    date: "2024-02-15",
    time: "02:00 PM",
    duration: "4 hours",
    description: "Buddhist philosophy and meditation teachings by senior monks for spiritual seekers.",
    category: "Teaching",
    attendees: "100+",
    location: "Teaching Hall",
    featured: true,
    image: "/placeholder-m8y9y.png",
  },
  {
    id: 4,
    title: "Meditation Retreat",
    monastery: "Enchey Monastery",
    date: "2024-03-01",
    time: "09:00 AM",
    duration: "7 days",
    description: "Silent meditation retreat focusing on mindfulness and inner peace practices.",
    category: "Meditation",
    attendees: "30+",
    location: "Meditation Hall",
    featured: false,
    image: "/buddhist-meditation-retreat.jpg",
  },
  {
    id: 5,
    title: "Saga Dawa Festival",
    monastery: "Dubdi Monastery",
    date: "2024-05-23",
    time: "04:00 AM",
    duration: "1 day",
    description: "Sacred festival commemorating Buddha's birth, enlightenment, and death.",
    category: "Festival",
    attendees: "300+",
    location: "Monastery Grounds",
    featured: true,
    image: "/saga-dawa-buddhist-festival.jpg",
  },
  {
    id: 6,
    title: "Traditional Mask Dance",
    monastery: "Rumtek Monastery",
    date: "2024-04-10",
    time: "10:00 AM",
    duration: "3 hours",
    description: "Sacred Cham dance performance depicting the victory of good over evil.",
    category: "Cultural",
    attendees: "200+",
    location: "Courtyard",
    featured: false,
    image: "/placeholder-0cn4p.png",
  },
]

const categories = ["All", "Festival", "Ceremony", "Teaching", "Meditation", "Cultural"]
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export function CulturalCalendar() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth())
  const [selectedEvent, setSelectedEvent] = useState<CulturalEvent | null>(null)

  const filteredEvents =
    selectedCategory === "All" ? culturalEvents : culturalEvents.filter((event) => event.category === selectedCategory)

  const featuredEvents = culturalEvents.filter((event) => event.featured)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Festival: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
      Ceremony: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
      Teaching: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
      Meditation: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
      Cultural: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <section id="calendar" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cultural Calendar</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join us for sacred festivals, meditation retreats, and cultural events throughout the year. Experience the
            living traditions of Sikkim's monasteries.
          </p>
          <Badge variant="secondary" className="mt-4">
            Will connect to API Ninjas for live events
          </Badge>
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Upcoming Featured Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <Card key={event.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-4 left-4">
                      <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary/90">Featured</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-sm font-medium">{formatDate(event.date)}</div>
                      <div className="text-xs opacity-90">{event.time}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="text-sm">{event.monastery}</CardDescription>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {event.attendees}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span className="text-xs">{event.location}</span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full" onClick={() => setSelectedEvent(event)}>
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Calendar View */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Calendar Navigation */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Calendar</CardTitle>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="sm" onClick={() => setCurrentMonth(Math.max(0, currentMonth - 1))}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => setCurrentMonth(Math.min(11, currentMonth + 1))}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>{months[currentMonth]} 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Filter by Category</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setSelectedCategory(category)}
                          className="w-full justify-start text-sm"
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events List */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-foreground">
                  {selectedCategory === "All" ? "All Events" : `${selectedCategory} Events`}
                </h3>
                <div className="text-sm text-muted-foreground">{filteredEvents.length} events found</div>
              </div>

              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <Card key={event.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <img
                            src={event.image || "/placeholder.svg"}
                            alt={event.title}
                            className="w-24 h-24 object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1 space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="text-lg font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                                {event.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">{event.monastery}</p>
                            </div>
                            <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>
                          <div className="flex items-center gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {formatDate(event.date)}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {event.time} • {event.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {event.attendees}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" onClick={() => setSelectedEvent(event)}>
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              Add to Calendar
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Event Details Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-auto">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{selectedEvent.title}</CardTitle>
                    <CardDescription className="text-base mt-1">{selectedEvent.monastery}</CardDescription>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedEvent(null)}>
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <img
                  src={selectedEvent.image || "/placeholder.svg"}
                  alt={selectedEvent.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className={getCategoryColor(selectedEvent.category)}>{selectedEvent.category}</Badge>
                    {selectedEvent.featured && <Badge className="bg-primary">Featured</Badge>}
                  </div>
                  <p className="text-muted-foreground">{selectedEvent.description}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>{formatDate(selectedEvent.date)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {selectedEvent.time} • {selectedEvent.duration}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedEvent.attendees} expected</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{selectedEvent.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1">Register Interest</Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Add to Calendar
                    </Button>
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
