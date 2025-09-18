import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download, Eye, FileText, Calendar, Globe, BookOpen } from "lucide-react"
import Link from "next/link"

const manuscripts = [
  {
    id: 1,
    title: "Pemayangtse Foundation Charter",
    description:
      "Original foundation document of Pemayangtse Monastery by Lama Lhatsun Chempo in 1705, detailing the monastery's establishment and early rules",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    period: "1705 CE",
    category: "Foundation Documents",
    language: "Classical Tibetan",
    pages: 24,
    condition: "Good",
    fullDescription:
      "This remarkable document represents one of the most important historical records of Sikkim's monastic heritage. Written in classical Tibetan script on traditional handmade paper, it chronicles the establishment of Pemayangtse Monastery by the revered Lama Lhatsun Chempo. The charter includes detailed architectural plans, monastic rules, and the spiritual significance of the chosen location. The manuscript also contains prophecies about the monastery's future role in preserving Buddhist teachings in the Himalayan region.",
    significance:
      "Pemayangtse, meaning 'Perfect Sublime Lotus,' was established as the head monastery of the Nyingma sect in Sikkim. This charter documents the transition from oral tradition to written record, marking a crucial moment in Sikkim's Buddhist history.",
    preservation:
      "The manuscript has been carefully preserved using traditional methods, with periodic restoration work conducted by Tibetan manuscript specialists. Digital preservation efforts ensure its accessibility for future generations of scholars and practitioners.",
  },
  {
    id: 2,
    title: "Rumtek Monastery Chronicles",
    description:
      "Historical records documenting the 16th Karmapa's arrival in Sikkim and the establishment of Rumtek as the Dharma Chakra Centre in 1966",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    period: "1966 CE",
    category: "Historical Records",
    language: "Tibetan & English",
    pages: 156,
    condition: "Excellent",
    fullDescription:
      "A comprehensive chronicle documenting the historic arrival of the 16th Karmapa, Rangjung Rigpe Dorje, in Sikkim and the subsequent establishment of Rumtek Monastery as the seat of the Karma Kagyu lineage outside Tibet. The manuscript includes correspondence with the Sikkim government, architectural plans for the monastery complex, and detailed accounts of the consecration ceremonies.",
    significance:
      "This document marks a pivotal moment in Tibetan Buddhism's adaptation to exile, representing the successful transplantation of an ancient lineage to new soil while maintaining its authentic traditions.",
    preservation:
      "Written in both Tibetan and English, this bilingual manuscript serves as a bridge between traditional and modern documentation methods. It remains in excellent condition due to modern preservation techniques employed from its creation.",
  },
]

export default function ArchiveDetailPage({ params }: { params: { id: string } }) {
  const manuscriptId = Number.parseInt(params.id)
  const manuscript = manuscripts.find((m) => m.id === manuscriptId)

  if (!manuscript) {
    notFound()
  }

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Excellent":
        return "bg-green-100 text-green-800"
      case "Good":
        return "bg-blue-100 text-blue-800"
      case "Fair":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/archives">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Archives
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <FileText className="h-6 w-6" />
                      {manuscript.title}
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {manuscript.period} • {manuscript.language}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">{manuscript.category}</Badge>
                  <Badge className={getConditionColor(manuscript.condition)}>{manuscript.condition}</Badge>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {manuscript.fullDescription || manuscript.description}
                </p>
              </CardContent>
            </Card>

            {manuscript.significance && (
              <Card>
                <CardHeader>
                  <CardTitle>Historical Significance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{manuscript.significance}</p>
                </CardContent>
              </Card>
            )}

            {manuscript.preservation && (
              <Card>
                <CardHeader>
                  <CardTitle>Preservation Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{manuscript.preservation}</p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <div className="aspect-square overflow-hidden">
                <img
                  src={manuscript.image || "/placeholder.svg"}
                  alt={manuscript.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Manuscript Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Period: {manuscript.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Language: {manuscript.language}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Pages: {manuscript.pages}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Category: {manuscript.category}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <Eye className="mr-2 h-4 w-4" />
                  View Full Document
                </Button>
                <Button variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
