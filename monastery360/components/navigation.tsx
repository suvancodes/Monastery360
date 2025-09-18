"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import { SearchModal } from "./search-modal"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                Monastery360
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/" className="text-foreground hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/virtual-tours" className="text-muted-foreground hover:text-primary transition-colors">
                  Virtual Tours
                </Link>
                <Link href="/map" className="text-muted-foreground hover:text-primary transition-colors">
                  Map
                </Link>
                <Link href="/calendar" className="text-muted-foreground hover:text-primary transition-colors">
                  Calendar
                </Link>
                <Link href="/archives" className="text-muted-foreground hover:text-primary transition-colors">
                  Archives
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(true)}>
                <Search className="h-4 w-4" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
                <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary">
                  Home
                </Link>
                <Link href="/virtual-tours" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                  Virtual Tours
                </Link>
                <Link href="/map" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                  Map
                </Link>
                <Link href="/calendar" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                  Calendar
                </Link>
                <Link href="/archives" className="block px-3 py-2 text-muted-foreground hover:text-primary">
                  Archives
                </Link>
                <Button
                  variant="ghost"
                  className="w-full justify-start px-3 py-2"
                  onClick={() => {
                    setIsSearchOpen(true)
                    setIsMenuOpen(false)
                  }}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}
