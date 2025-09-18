import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Monastery360</h3>
            <p className="text-sm opacity-90">
              Discover the spiritual heritage of Sikkim through immersive virtual tours and cultural experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Explore</h4>
            <div className="space-y-2 text-sm">
              <Link href="/virtual-tours" className="block opacity-90 hover:opacity-100 transition-opacity">
                Virtual Tours
              </Link>
              <Link href="/map" className="block opacity-90 hover:opacity-100 transition-opacity">
                Interactive Map
              </Link>
              <Link href="/calendar" className="block opacity-90 hover:opacity-100 transition-opacity">
                Cultural Calendar
              </Link>
              <Link href="/archives" className="block opacity-90 hover:opacity-100 transition-opacity">
                Digital Archives
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Contact</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>Email: info@monastery360.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Gangtok, Sikkim, India</p>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Follow Us</h4>
            <div className="space-y-2 text-sm opacity-90">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2024 Monastery360. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
