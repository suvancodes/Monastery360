import { Navigation } from "@/components/navigation"
import { CulturalCalendarTable } from "@/components/cultural-calendar-table"
import { Footer } from "@/components/footer"

export default function CalendarPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Cultural Calendar</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upcoming festivals and events at Sikkim monasteries
            </p>
          </div>
          <CulturalCalendarTable />
        </div>
      </div>
      <Footer />
    </main>
  )
}
