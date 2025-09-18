import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

const events = [
  {
    event: "Losar Festival",
    date: "February 15-17, 2024",
    location: "Rumtek Monastery",
    type: "Festival",
    description: "Tibetan New Year celebration with traditional dances and prayers",
    duration: "3 days",
    attendance: "5000+ visitors",
  },
  {
    event: "Buddha Purnima",
    date: "May 23, 2024",
    location: "All 54 Monasteries",
    type: "Religious",
    description: "Celebration of Buddha's birth, enlightenment, and death",
    duration: "1 day",
    attendance: "25000+ visitors",
  },
  {
    event: "Saga Dawa Festival",
    date: "June 22, 2024",
    location: "Tashiding Monastery",
    type: "Festival",
    description: "Sacred month celebration with special prayers and rituals",
    duration: "1 day",
    attendance: "3000+ visitors",
  },
  {
    event: "Pang Lhabsol",
    date: "August 15, 2024",
    location: "Pemayangtse Monastery",
    type: "Festival",
    description: "Guardian deity festival celebrating Mount Khangchendzonga",
    duration: "2 days",
    attendance: "4000+ visitors",
  },
  {
    event: "Drupka Teshi",
    date: "July 20, 2024",
    location: "Enchey Monastery",
    type: "Religious",
    description: "First turning of the wheel of dharma celebration",
    duration: "1 day",
    attendance: "2000+ visitors",
  },
  {
    event: "Dashain Festival",
    date: "October 10-15, 2024",
    location: "Kirateshwar Mahadev Temple",
    type: "Festival",
    description: "Hindu festival celebrated at monastery complex",
    duration: "6 days",
    attendance: "8000+ visitors",
  },
  {
    event: "Lhabab Duchen",
    date: "November 12, 2024",
    location: "Dubdi Monastery",
    type: "Religious",
    description: "Buddha's descent from heaven celebration",
    duration: "1 day",
    attendance: "1500+ visitors",
  },
  {
    event: "Cham Dance Festival",
    date: "December 28-29, 2024",
    location: "Phensang Monastery",
    type: "Cultural",
    description: "Sacred mask dance performances and rituals",
    duration: "2 days",
    attendance: "2500+ visitors",
  },
  {
    event: "Guru Rinpoche Day",
    date: "Monthly (10th day)",
    location: "Pemyangtse & 12 other monasteries",
    type: "Religious",
    description: "Monthly celebration honoring Guru Padmasambhava",
    duration: "1 day",
    attendance: "1000+ visitors",
  },
  {
    event: "Tsechu Festival",
    date: "September 18-20, 2024",
    location: "Ralang Monastery",
    type: "Festival",
    description: "Annual monastery festival with traditional performances",
    duration: "3 days",
    attendance: "3500+ visitors",
  },
  {
    event: "Bumchu Festival",
    date: "January 14-15, 2025",
    location: "Tashiding Monastery",
    type: "Festival",
    description: "Sacred water vessel ceremony and blessing",
    duration: "2 days",
    attendance: "6000+ visitors",
  },
  {
    event: "Kagyat Dance",
    date: "February 28, 2024",
    location: "Phodong Monastery",
    type: "Cultural",
    description: "Traditional ghost dance to ward off evil spirits",
    duration: "1 day",
    attendance: "2000+ visitors",
  },
  {
    event: "Drukpa Kunley Festival",
    date: "April 8, 2024",
    location: "Sangachoeling Monastery",
    type: "Festival",
    description: "Celebration honoring the Divine Madman saint",
    duration: "1 day",
    attendance: "1800+ visitors",
  },
  {
    event: "Tendong Lho Rum Faat",
    date: "August 8, 2024",
    location: "Samdruptse Monastery",
    type: "Cultural",
    description: "Mountain deity festival with traditional rituals",
    duration: "1 day",
    attendance: "2200+ visitors",
  },
  {
    event: "Maghe Sankranti",
    date: "January 14, 2024",
    location: "Solophok Chardham",
    type: "Religious",
    description: "Hindu-Buddhist festival marking winter solstice",
    duration: "1 day",
    attendance: "3000+ visitors",
  },
]

export function CulturalCalendarTable() {
  const totalExpectedVisitors = events.reduce((sum, event) => {
    const attendance = Number.parseInt(event.attendance.replace(/[^\d]/g, ""))
    return sum + attendance
  }, 0)

  return (
    <div className="space-y-6">
      {/* Calendar Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{events.length}</div>
            <div className="text-sm text-muted-foreground">Upcoming Events</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">54</div>
            <div className="text-sm text-muted-foreground">Monastery Locations</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">{Math.round(totalExpectedVisitors / 1000)}K+</div>
            <div className="text-sm text-muted-foreground">Expected Visitors</div>
          </CardContent>
        </Card>
      </div>

      {/* Events Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Cultural Events Across All 54 Monasteries
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="hidden md:block">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Expected Attendance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{event.event}</div>
                        <div className="text-sm text-muted-foreground">{event.description}</div>
                      </div>
                    </TableCell>
                    <TableCell>{event.date}</TableCell>
                    <TableCell>{event.location}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          event.type === "Festival" ? "default" : event.type === "Religious" ? "secondary" : "outline"
                        }
                      >
                        {event.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.duration}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {event.attendance}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile view */}
          <div className="md:hidden space-y-4">
            {events.map((event, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium">{event.event}</h3>
                    <Badge
                      variant={
                        event.type === "Festival" ? "default" : event.type === "Religious" ? "secondary" : "outline"
                      }
                    >
                      {event.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      {event.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      {event.attendance}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
