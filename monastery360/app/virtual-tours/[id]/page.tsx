import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Calendar, Users, Camera } from "lucide-react"
import Link from "next/link"

const monasteryData: Record<string, any> = {
  "1": {
    title: "Rumtek Monastery",
    location: "East Sikkim",
    description: "The largest monastery in Sikkim, seat of the Karmapa. Built in the 1960s by the 16th Karmapa.",
    fullDescription:
      "Rumtek Monastery, also called the Dharmachakra Centre, is a gompa located in the Indian state of Sikkim near the capital Gangtok. It is the largest monastery in Sikkim and is the seat-in-exile of the Gyalwang Karmapa, inaugurated in 1966 by the 16th Karmapa. Built in the 1960s, the monastery is home to the community of monks and where they perform the rituals and practices of the Karma Kagyu lineage.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Rumtek_Monastery.jpg",
    established: "16th century (rebuilt in 1960s)",
    monks: "300+",
    highlights: ["Golden Stupa", "Karma Kagyu Lineage", "Sacred Relics", "Traditional Architecture"],
    virtualTourUrl: "#",
  },
  "2": {
    title: "Pemayangtse Monastery",
    location: "West Sikkim",
    description: "One of the oldest and premier monasteries of Sikkim, belonging to the Nyingma Order.",
    fullDescription:
      "Pemayangtse Monastery is a Buddhist monastery in Pemayangtse, near Pelling in the northeastern Indian state of Sikkim, located 110 km west of Gangtok. Planned, designed and founded by Lama Lhatsun Chempo in 1705, it is one of the oldest and premier monasteries of Sikkim. The monastery follows the Nyingma Order of Tibetan Buddhism and controls all other monasteries of that Order in Sikkim.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Pemayangtse_Monastery.jpg",
    established: "1705",
    monks: "108",
    highlights: ["Zangdok Palri", "Nyingma Order", "Ancient Murals", "Pure Tibetan Lineage"],
    virtualTourUrl: "#",
  },
  "3": {
    title: "Tashiding Monastery",
    location: "West Sikkim",
    description: "A sacred monastery considered the heart of Sikkim, famous for the Bumchu Festival.",
    fullDescription:
      "Tashiding Monastery is a Buddhist monastery of the Nyingma sect of Tibetan Buddhism in Western Sikkim, India. It is located on top of the hill rising between the Rathong chu and the Rangeet River. The annual festival of Bumchu, meaning 'sacred water', is held here on the 14th and 15th days of the first Tibetan month. The monastery is considered so sacred that a pilgrimage to this gompa alone is believed to cleanse the pilgrim of all sins.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Tashiding_Monastery.jpg",
    established: "1641",
    monks: "50+",
    highlights: ["Bumchu Festival", "Sacred Water Ceremony", "Sin Cleansing", "Hilltop Location"],
    virtualTourUrl: "#",
  },
  "4": {
    title: "Phodong Monastery",
    location: "North Sikkim",
    description: "Important Kagyu monastery in North Sikkim, known for its annual Cham dance.",
    fullDescription:
      "Phodong Monastery is one of the six most important monasteries of Sikkim. It belongs to the Kagyupa sect and was built in the early 18th century. The monastery is located 38 km from Gangtok and is known for its annual Cham dance performed during the 28th and 29th days of the 10th month of the Tibetan calendar.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Phodong_Monastery.jpg",
    established: "18th century",
    monks: "60+",
    highlights: ["Kagyupa Sect", "Annual Cham Dance", "Ancient Murals", "Royal Connections"],
    virtualTourUrl: "#",
  },
  "5": {
    title: "Enchey Monastery",
    location: "Gangtok, East Sikkim",
    description: "A small but significant monastery near Gangtok with scenic views of Kanchenjunga.",
    fullDescription:
      "Enchey Monastery is located in Gangtok, the capital city of Sikkim. The monastery belongs to the Nyingma order of Vajrayana Buddhism. Built around 1909, the monastery is small but significant, and is located 3 kilometres northeast of Gangtok. The monastery is built on the site blessed by Lama Druptob Karpo, a tantric master known for his flying powers.",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Enchey_Monastery.jpg",
    established: "1909",
    monks: "90+",
    highlights: ["Cham Dance", "Kanchenjunga Views", "Tantric Traditions", "Nyingma Order"],
    virtualTourUrl: "#",
  },
  "6": {
    title: "Ralang Monastery",
    location: "South Sikkim",
    description: "A modern monastery with grand architecture, home to more than 100 monks.",
    fullDescription:
      "Ralang Monastery is a Buddhist monastery located in South Sikkim. Built in 1995, it represents modern monastery architecture while maintaining traditional Buddhist practices. The monastery is known for its huge collection of thangkas and houses more than 100 monks who engage in daily prayers and meditation.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/07/Ralang_Monastery.jpg",
    established: "1995",
    monks: "100+",
    highlights: ["Modern Architecture", "Thangka Collection", "Large Monk Community", "Daily Prayers"],
    virtualTourUrl: "#",
  },
  "7": {
    title: "Dubdi Monastery",
    location: "Yuksom, West Sikkim",
    description: "The oldest monastery in Sikkim, established in 1701, located on a hilltop.",
    fullDescription:
      "Dubdi Monastery, also known as Yuksom Monastery, is a Buddhist monastery of the Nyingma sect near Yuksom, in West Sikkim. Established in 1701, it is the oldest monastery in Sikkim. The monastery is located on a hilltop and can be reached by a trek of about 45 minutes from Yuksom. The name 'Dubdi' means 'the retreat' as this was the place where the monks meditated in solitude.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Dubdi_Monastery.jpg",
    established: "1701",
    monks: "25+",
    highlights: ["Oldest Monastery", "Meditation Retreat", "Hilltop Location", "Historical Significance"],
    virtualTourUrl: "#",
  },
  "8": {
    title: "Lingdum Monastery (Ranka)",
    location: "East Sikkim",
    description: "A relatively new monastery with beautiful architecture, popular filming location.",
    fullDescription:
      "Lingdum Monastery, also known as Ranka Monastery, is a relatively new Buddhist monastery located about 17 km from Gangtok. Built in the 1990s, it belongs to the Zurmang Kagyu tradition. The monastery is known for its beautiful architecture and peaceful surroundings. It has gained popularity as a filming location for several Bollywood movies.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Lingdum_Monastery.jpg",
    established: "1990s",
    monks: "40+",
    highlights: ["Modern Architecture", "Bollywood Films", "Zurmang Kagyu", "Peaceful Setting"],
    virtualTourUrl: "#",
  },
  "9": {
    title: "Phensang Monastery",
    location: "North Sikkim",
    description: "Nyingmapa monastery known for its annual festival before Losoong.",
    fullDescription:
      "Phensang Monastery is located in North Sikkim and belongs to the Nyingmapa order of Tibetan Buddhism. Founded in 1721, the monastery is known for its large monk population and hosts several festivals throughout the year. The most significant festival is held before Losoong (Sikkimese New Year).",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Phensang_Monastery.jpg",
    established: "1721",
    monks: "80+",
    highlights: ["Nyingmapa Order", "Pre-Losoong Festival", "Large Monk Community", "Regional Significance"],
    virtualTourUrl: "#",
  },
  "10": {
    title: "Zang Dhok Palri Phodang",
    location: "Gangtok, East Sikkim",
    description: "Home to rare scriptures brought from Tibet by the 12th Dalai Lama.",
    fullDescription:
      "Zang Dhok Palri Phodang is a significant monastery in Gangtok that houses rare Tibetan scriptures and religious artifacts. Built in the 20th century, it serves as an important center for Buddhist learning and meditation. The monastery is known for preserving ancient texts and maintaining traditional Buddhist practices.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Zang_Dhok_Palri_Phodang.jpg",
    established: "20th century",
    monks: "30+",
    highlights: ["Rare Scriptures", "Tibetan Artifacts", "Buddhist Learning", "Traditional Practices"],
    virtualTourUrl: "#",
  },
  "11": {
    title: "Sangachoeling Monastery",
    location: "West Sikkim",
    description: "Ancient monastery with forested surroundings, important historically.",
    fullDescription:
      "Sangachoeling Monastery is one of the oldest monasteries in Sikkim, established in the 17th-18th century. Located in a forested area of West Sikkim, it serves as an important pilgrimage site and meditation center. The monastery is known for its ancient architecture and peaceful natural surroundings.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Sangachoeling_Monastery.jpg/1200px-Sangachoeling_Monastery.jpg",
    established: "17th–18th c.",
    monks: "35+",
    highlights: ["Ancient Architecture", "Forest Setting", "Pilgrimage Site", "Meditation Center"],
    virtualTourUrl: "#",
  },
  "12": {
    title: "Rinchenpong Monastery",
    location: "West Sikkim",
    description: "Hilltop gompa with views, active community.",
    fullDescription:
      "Rinchenpong Monastery is a hilltop monastery in West Sikkim known for its panoramic views and active monastic community. Established in the 19th century, it serves the local Buddhist community and maintains traditional practices while offering stunning views of the surrounding mountains.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/View_of_rinchenpong_monastery_entry.JPG/1200px-View_of_rinchenpong_monastery_entry.JPG",
    established: "19th c.",
    monks: "20+",
    highlights: ["Hilltop Views", "Active Community", "Traditional Practices", "Mountain Scenery"],
    virtualTourUrl: "#",
  },
  "44": {
    title: "Namchi Monastery (Samdruptse complex)",
    location: "Namchi",
    description: "Large modern complex featuring giant Buddha statue and temples.",
    fullDescription:
      "The Namchi Monastery complex, part of the Samdruptse cultural site, is a modern Buddhist complex featuring a giant Buddha statue and multiple temples. Built in the 20th century, it serves as both a pilgrimage site and tourist attraction, combining traditional Buddhist architecture with modern design elements.",
    image: "https://indroyc.com/wp-content/uploads/2014/06/samdruptse-monastery.jpg",
    established: "20th c. (recent additions)",
    monks: "50+",
    highlights: ["Giant Buddha Statue", "Modern Complex", "Pilgrimage Site", "Tourist Attraction"],
    virtualTourUrl: "#",
  },
  "54": {
    title: "Sumbuk Monastery",
    location: "Sumbuk",
    description: "Village monastery serving the local community.",
    fullDescription:
      "Sumbuk Monastery is a traditional village monastery that serves the local Buddhist community in Sumbuk. Established in the 19th century, it maintains traditional practices and serves as a center for community religious activities and festivals.",
    image:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcS2tINGn6uw8uRfoNbQ9q6vjI7UEXethgoktoSFXRUmxwtkPpiGZ1S1jQkjLezSwzYRPqJs_8l",
    established: "19th c.",
    monks: "15+",
    highlights: ["Village Community", "Traditional Practices", "Local Festivals", "Community Center"],
    virtualTourUrl: "#",
  },
}

for (let i = 13; i <= 53; i++) {
  if (!monasteryData[i.toString()]) {
    monasteryData[i.toString()] = {
      title: `Monastery ${i}`,
      location: "Sikkim",
      description: "A traditional Buddhist monastery serving the local community.",
      fullDescription:
        "This monastery represents the rich Buddhist heritage of Sikkim, serving as a center for spiritual practice and community gathering. It maintains traditional Buddhist practices and contributes to the preservation of Tibetan Buddhist culture in the region.",
      image: "/buddhist-monastery-in-sikkim-mountains.jpg",
      established: "Traditional",
      monks: "20+",
      highlights: ["Traditional Practices", "Community Center", "Buddhist Heritage", "Spiritual Practice"],
      virtualTourUrl: "#",
    }
  }
}

interface PageProps {
  params: {
    id: string
  }
}

export default function TourDetailPage({ params }: PageProps) {
  const monastery = monasteryData[params.id]

  if (!monastery) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Monastery Not Found</h1>
            <Link href="/virtual-tours">
              <Button>Back to Virtual Tours</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <img
            src={monastery.image || "/placeholder.svg"}
            alt={monastery.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              e.currentTarget.src = "/buddhist-monastery-in-sikkim-mountains.jpg"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <Link href="/virtual-tours">
              <Button variant="outline" size="sm" className="mb-4 bg-background/80 backdrop-blur-sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tours
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-2">{monastery.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{monastery.location}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>About {monastery.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{monastery.fullDescription}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Virtual Tour Experience</CardTitle>
                  <CardDescription>Immerse yourself in a 360° virtual exploration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center space-y-4">
                      <Camera className="h-16 w-16 text-muted-foreground mx-auto" />
                      <div>
                        <h3 className="text-lg font-semibold">360° Virtual Tour</h3>
                        <p className="text-sm text-muted-foreground">Interactive virtual tour will be embedded here</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    <Camera className="mr-2 h-5 w-5" />
                    Start Virtual Tour
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {monastery.highlights.map((highlight: string, index: number) => (
                      <Badge key={index} variant="secondary" className="justify-center py-2">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Established</p>
                      <p className="text-sm text-muted-foreground">{monastery.established}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Monks</p>
                      <p className="text-sm text-muted-foreground">{monastery.monks}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">{monastery.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Visit Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">Best Time to Visit</p>
                    <p className="text-sm text-muted-foreground">March to June, September to November</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Opening Hours</p>
                    <p className="text-sm text-muted-foreground">6:00 AM - 6:00 PM</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Entry Fee</p>
                    <p className="text-sm text-muted-foreground">Free for all visitors</p>
                  </div>
                </CardContent>
              </Card>

              <Link href="/map">
                <Button variant="outline" className="w-full bg-transparent">
                  <MapPin className="mr-2 h-4 w-4" />
                  View on Map
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
