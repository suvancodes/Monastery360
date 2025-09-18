"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Search, Filter, Download, Eye } from "lucide-react"

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
  },
  {
    id: 3,
    title: "Tashiding Sacred Prophecies",
    description:
      "Collection of prophecies by Guru Padmasambhava about Tashiding's sacred significance, including the Bhumchu ceremony traditions",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    period: "8th Century (copied 1717)",
    category: "Sacred Texts",
    language: "Classical Tibetan",
    pages: 89,
    condition: "Fair",
  },
  {
    id: 4,
    title: "Enchey Monastery Ritual Manual",
    description:
      "Complete ritual procedures for the annual Cham dance performances and protective deity ceremonies at Enchey Monastery",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    period: "1909 CE",
    category: "Ritual Texts",
    language: "Tibetan",
    pages: 134,
    condition: "Good",
  },
  {
    id: 5,
    title: "Dubdi Monastery Meditation Instructions",
    description:
      "Original meditation instructions and retreat guidelines from Sikkim's oldest monastery, founded by Lhatsun Chempo in 1701",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    period: "1701 CE",
    category: "Meditation Texts",
    language: "Classical Tibetan",
    pages: 67,
    condition: "Fair",
  },
  {
    id: 6,
    title: "Sangachoeling Architectural Plans",
    description:
      "Original architectural drawings and construction notes for Sangachoeling Monastery, built on the site blessed by Guru Padmasambhava",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    period: "1697 CE",
    category: "Architectural Documents",
    language: "Tibetan",
    pages: 45,
    condition: "Good",
  },
  {
    id: 7,
    title: "Norbugang Coronation Records",
    description:
      "Historical account of the first Chogyal's coronation at Norbugang in 1642, establishing the Buddhist kingdom of Sikkim",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    period: "1642 CE",
    category: "Royal Documents",
    language: "Classical Tibetan",
    pages: 78,
    condition: "Excellent",
  },
  {
    id: 8,
    title: "Khecheopalri Lake Sacred Geography",
    description:
      "Detailed description of Khecheopalri Lake's sacred significance and pilgrimage routes, considered one of Sikkim's most holy sites",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    period: "16th Century",
    category: "Sacred Geography",
    language: "Classical Tibetan",
    pages: 92,
    condition: "Good",
  },
  {
    id: 9,
    title: "Phensang Monastery Medical Texts",
    description:
      "Traditional Sowa Rigpa (Tibetan medicine) manuscripts including herbal remedies using local Himalayan medicinal plants",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    period: "18th Century",
    category: "Medical Texts",
    language: "Tibetan",
    pages: 203,
    condition: "Good",
  },
  {
    id: 10,
    title: "Ralang Monastery Kagyu Lineage",
    description:
      "Complete lineage records of the Kagyu tradition in Sikkim, tracing the transmission from Tibet to the Himalayan region",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    period: "1768 CE",
    category: "Lineage Records",
    language: "Tibetan",
    pages: 167,
    condition: "Excellent",
  },
  {
    id: 11,
    title: "Yuksom Sacred Site Descriptions",
    description:
      "Detailed accounts of Yuksom's significance as the first capital and the site where Guru Padmasambhava consecrated the land",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    period: "17th Century",
    category: "Sacred Geography",
    language: "Classical Tibetan",
    pages: 56,
    condition: "Fair",
  },
  {
    id: 12,
    title: "Tsuklakhang Palace Temple Records",
    description:
      "Royal chapel records from the Chogyal's palace, including ceremonial protocols and state religious functions",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    period: "19th Century",
    category: "Royal Documents",
    language: "Tibetan & Nepali",
    pages: 112,
    condition: "Good",
  },
]

export function DigitalArchivesGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedPeriod, setSelectedPeriod] = useState("all")
  const router = useRouter()

  const categories = ["all", ...new Set(manuscripts.map((m) => m.category))]
  const periods = ["all", ...new Set(manuscripts.map((m) => m.period))]

  const filteredManuscripts = manuscripts.filter((manuscript) => {
    const matchesSearch =
      manuscript.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      manuscript.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || manuscript.category === selectedCategory
    const matchesPeriod = selectedPeriod === "all" || manuscript.period === selectedPeriod

    return matchesSearch && matchesCategory && matchesPeriod
  })

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

  const handleViewManuscript = (manuscriptId: number) => {
    router.push(`/archives/${manuscriptId}`)
  }

  return (
    <div className="space-y-6">
      {/* Search and Filter Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search & Filter Archives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search manuscripts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Period" />
              </SelectTrigger>
              <SelectContent>
                {periods.map((period) => (
                  <SelectItem key={period} value={period}>
                    {period === "all" ? "All Periods" : period}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredManuscripts.length} of {manuscripts.length} manuscripts
        </p>
        <Button variant="outline" size="sm" className="bg-transparent">
          <Filter className="mr-2 h-4 w-4" />
          Advanced Filters
        </Button>
      </div>

      {/* Manuscripts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredManuscripts.map((manuscript) => (
          <Card key={manuscript.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-square overflow-hidden bg-muted flex items-center justify-center">
              <img
                src={manuscript.image || "/placeholder.svg"}
                alt={manuscript.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    {manuscript.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-1">
                    {manuscript.period} • {manuscript.language}
                  </CardDescription>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="secondary">{manuscript.category}</Badge>
                <Badge className={getConditionColor(manuscript.condition)}>{manuscript.condition}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{manuscript.description}</p>
              <div className="text-xs text-muted-foreground mb-4">
                <span className="font-medium">{manuscript.pages} pages</span> • {manuscript.language}
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1" onClick={() => handleViewManuscript(manuscript.id)}>
                  <Eye className="mr-2 h-4 w-4" />
                  View
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredManuscripts.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No manuscripts found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
