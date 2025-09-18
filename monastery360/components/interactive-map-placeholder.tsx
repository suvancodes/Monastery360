"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Info } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const monasteryLocations = [
  {
    name: "Rumtek Monastery",
    region: "East Sikkim",
    coordinates: "27.3389° N, 88.5583° E",
    lat: 27.3389,
    lng: 88.5583,
    description: "The largest monastery in Sikkim, seat of the Karmapa",
  },
  {
    name: "Pemayangtse Monastery",
    region: "West Sikkim",
    coordinates: "27.2167° N, 88.2167° E",
    lat: 27.2167,
    lng: 88.2167,
    description: "One of the oldest and most important monasteries in Sikkim",
  },
  {
    name: "Tashiding Monastery",
    region: "West Sikkim",
    coordinates: "27.3333° N, 88.2667° E",
    lat: 27.3333,
    lng: 88.2667,
    description: "Sacred monastery on a hilltop between two rivers",
  },
  {
    name: "Enchey Monastery",
    region: "East Sikkim",
    coordinates: "27.3389° N, 88.6167° E",
    lat: 27.3389,
    lng: 88.6167,
    description: "Beautiful monastery overlooking Gangtok city",
  },
  {
    name: "Dubdi Monastery",
    region: "West Sikkim",
    coordinates: "27.2000° N, 88.2500° E",
    lat: 27.2,
    lng: 88.25,
    description: "Oldest monastery in Sikkim with panoramic views",
  },
  {
    name: "Phodong Monastery",
    region: "North Sikkim",
    coordinates: "27.4500° N, 88.5000° E",
    lat: 27.45,
    lng: 88.5,
    description: "Important Kagyu monastery known for Cham dance",
  },
  {
    name: "Lingdum Monastery",
    region: "East Sikkim",
    coordinates: "27.3200° N, 88.5800° E",
    lat: 27.32,
    lng: 88.58,
    description: "Modern monastery with beautiful architecture",
  },
  {
    name: "Phensang Monastery",
    region: "North Sikkim",
    coordinates: "27.4800° N, 88.4800° E",
    lat: 27.48,
    lng: 88.48,
    description: "Nyingmapa monastery with annual festivals",
  },
  {
    name: "Ralang Monastery",
    region: "South Sikkim",
    coordinates: "27.1500° N, 88.3000° E",
    lat: 27.15,
    lng: 88.3,
    description: "Modern monastery with grand architecture",
  },
  {
    name: "Zang Dhok Palri Phodang",
    region: "East Sikkim",
    coordinates: "27.3400° N, 88.6200° E",
    lat: 27.34,
    lng: 88.62,
    description: "Home to rare Tibetan scriptures",
  },
  {
    name: "Sangachoeling Monastery",
    region: "West Sikkim",
    coordinates: "27.2300° N, 88.2400° E",
    lat: 27.23,
    lng: 88.24,
    description: "Ancient monastery in forested surroundings",
  },
  {
    name: "Rinchenpong Monastery",
    region: "West Sikkim",
    coordinates: "27.2100° N, 88.2200° E",
    lat: 27.21,
    lng: 88.22,
    description: "Hilltop monastery with scenic views",
  },
]

const GEOAPIFY_API_KEY = "290e415ce220463ea54555c649e12384"

export function InteractiveMapPlaceholder() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<(typeof monasteryLocations)[0] | null>(null)

  const handleNavigate = (location: (typeof monasteryLocations)[0]) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}&travelmode=driving`
    window.open(googleMapsUrl, "_blank")
  }

  const getMonasteryId = (name: string) => {
    return name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")
  }

  useEffect(() => {
    const loadMap = async () => {
      if (!mapRef.current) return

      // Load Leaflet CSS and JS
      const link = document.createElement("link")
      link.rel = "stylesheet"
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
      document.head.appendChild(link)

      const script = document.createElement("script")
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
      script.onload = () => {
        // @ts-ignore
        const L = window.L

        // Initialize map centered on Sikkim
        const map = L.map(mapRef.current).setView([27.3389, 88.4553], 10)

        // Add Geoapify tile layer
        L.tileLayer(`https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${GEOAPIFY_API_KEY}`, {
          attribution:
            '© <a href="https://www.geoapify.com/">Geoapify</a> | © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 18,
        }).addTo(map)

        // Add monastery markers
        monasteryLocations.forEach((location) => {
          const marker = L.marker([location.lat, location.lng]).addTo(map)
          marker.bindPopup(`
            <div class="p-2">
              <h3 class="font-semibold text-sm">${location.name}</h3>
              <p class="text-xs text-gray-600 mt-1">${location.region}</p>
              <p class="text-xs mt-1">${location.description}</p>
            </div>
          `)

          marker.on("click", () => {
            setSelectedLocation(location)
          })
        })

        setMapLoaded(true)
      }
      document.head.appendChild(script)
    }

    loadMap()
  }, [])

  return (
    <div className="space-y-6">
      <Card className="w-full">
        <CardContent className="p-0">
          <div className="aspect-video relative overflow-hidden">
            <div ref={mapRef} className="w-full h-full" style={{ minHeight: "400px" }} />
            {!mapLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 text-primary mx-auto animate-pulse" />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">Loading Interactive Map...</h3>
                    <p className="text-muted-foreground max-w-md">Connecting to Geoapify mapping services</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {monasteryLocations.map((location, index) => (
          <Card
            key={index}
            className={`hover:shadow-md transition-all cursor-pointer ${
              selectedLocation?.name === location.name ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setSelectedLocation(location)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{location.name}</CardTitle>
                  <Badge variant="secondary" className="mt-1">
                    {location.region}
                  </Badge>
                </div>
                <MapPin className="h-5 w-5 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{location.coordinates}</p>
              <p className="text-sm mb-3">{location.description}</p>
              <div className="flex gap-2">
                <Link href={`/virtual-tours/${getMonasteryId(location.name)}`} className="flex-1">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Info className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </Link>
                <Button
                  size="sm"
                  className="flex-1"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleNavigate(location)
                  }}
                >
                  <Navigation className="mr-2 h-4 w-4" />
                  Navigate
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
