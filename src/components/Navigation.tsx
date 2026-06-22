
"use client"

import * as React from "react"
import Link from "next/link"
import { Compass, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { uiText } from "@/lib/ui-text"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  const links = [
    { name: uiText["ui.nav.links.itinerary"] || "Explore", href: "#heritage" },
    { name: uiText["ui.nav.links.heritage"], href: "#heritage" },
    { name: uiText["ui.nav.links.food"], href: "#food" },
    { name: uiText["ui.nav.links.experience"], href: "#experience" },
    { name: uiText["ui.nav.links.guide"], href: "#guide" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Compass className="h-6 w-6" />
            <span className="text-lg font-headline font-extrabold tracking-tighter">{uiText["ui.nav.logo"]}</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="rounded-full">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-border p-6 space-y-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-bold uppercase tracking-widest text-muted-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
