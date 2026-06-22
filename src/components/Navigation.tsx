
"use client"

import * as React from "react"
import Link from "next/link"
import { Compass, Library, Utensils, Bird, Map as MapIcon } from "lucide-react"
import { uiText } from "@/lib/ui-text"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { name: uiText["ui.nav.links.heritage"], href: "#heritage", icon: Library },
    { name: uiText["ui.nav.links.food"], href: "#food", icon: Utensils },
    { name: uiText["ui.nav.links.experience"], href: "#experience", icon: Bird },
    { name: uiText["ui.nav.links.guide"], href: "#guide", icon: MapIcon },
  ]

  return (
    <>
      {/* Desktop Top Nav */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b",
        scrolled 
          ? "bg-white/95 backdrop-blur-xl border-border py-3" 
          : "bg-transparent border-transparent py-6"
      )}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <div className={cn(
              "flex items-center gap-2 transition-colors duration-500",
              scrolled ? "text-foreground" : "text-white"
            )}>
              <Compass className="h-5 w-5" />
              <span className="text-lg font-headline font-extrabold tracking-tighter uppercase">{uiText["ui.nav.logo"]}</span>
            </div>

            <div className="hidden md:flex space-x-10 items-center">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.25em] transition-all hover:opacity-100",
                    scrolled 
                      ? "text-muted-foreground hover:text-foreground" 
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Tab Bar */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-50 md:hidden">
        <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-2 flex justify-around items-center high-contrast-shadow">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex flex-col items-center gap-1 p-3 text-white/50 hover:text-white transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span className="text-[8px] font-bold uppercase tracking-tighter">{link.name}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
