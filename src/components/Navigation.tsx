"use client"

import * as React from "react"
import Link from "next/link"
import { Compass, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { uiText } from "@/lib/ui-text"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { name: uiText["ui.nav.links.heritage"], href: "#heritage" },
    { name: uiText["ui.nav.links.food"], href: "#food" },
    { name: uiText["ui.nav.links.experience"], href: "#experience" },
    { name: uiText["ui.nav.links.guide"], href: "#guide" },
  ]

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b",
      scrolled 
        ? "bg-white/90 backdrop-blur-xl border-border py-4" 
        : "bg-transparent border-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className={cn(
            "flex items-center gap-2 transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}>
            <Compass className="h-6 w-6" />
            <span className="text-lg font-headline font-extrabold tracking-tighter">{uiText["ui.nav.logo"]}</span>
          </div>

          <div className="hidden md:flex space-x-10 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.2em] transition-colors",
                  scrolled 
                    ? "text-muted-foreground hover:text-foreground" 
                    : "text-white/70 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(!isOpen)} 
              className={cn(
                "rounded-full transition-colors",
                scrolled ? "text-foreground" : "text-white"
              )}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 md:hidden",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col p-8 space-y-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-headline font-bold text-foreground border-b border-border pb-4"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
