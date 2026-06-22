"use client"

import * as React from "react"
import Link from "next/link"
import { Compass, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { uiText } from "@/lib/ui-text"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  const links = [
    { name: uiText["ui.nav.links.itinerary"], href: "#itinerary" },
    { name: uiText["ui.nav.links.heritage"], href: "#heritage" },
    { name: uiText["ui.nav.links.food"], href: "#food" },
    { name: uiText["ui.nav.links.experience"], href: "#experience" },
    { name: uiText["ui.nav.links.guide"], href: "#guide" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Compass className="h-7 w-7 text-primary" />
            <span className="text-xl font-headline font-bold text-slate-900 tracking-tight">{uiText["ui.nav.logo"]}</span>
          </div>

          <div className="hidden md:flex space-x-10 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
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
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
