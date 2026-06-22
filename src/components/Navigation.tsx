
"use client"

import * as React from "react"
import Link from "next/link"
import { Compass, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  const navLinks = [
    { name: "Itinerary", href: "#itinerary" },
    { name: "Heritage", href: "#heritage" },
    { name: "Food", href: "#food" },
    { name: "Experience", href: "#experience" },
    { name: "Guide", href: "#guide" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Compass className="h-8 w-8 text-primary" />
            <span className="text-2xl font-headline font-bold text-primary tracking-tight">Steppe Odyssey</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Start Your Journey
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 pt-4">
              <Button variant="default" className="w-full bg-primary">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
