
"use client"

import * as React from "react"
import Link from "next/link"
import { Compass, Library, Utensils, Bird, Map as MapIcon, Home } from "lucide-react"
import { uiText } from "@/lib/ui-text"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState("home")

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      const sections = ["heritage", "food", "experience", "guide"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveTab(section)
            break
          }
        }
      }
      if (window.scrollY < 100) setActiveTab("home")
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { name: uiText["ui.nav.links.home"] || "Home", href: "#home", id: "home", icon: Home },
    { name: uiText["ui.nav.links.heritage"], href: "#heritage", id: "heritage", icon: Library },
    { name: uiText["ui.nav.links.food"], href: "#food", id: "food", icon: Utensils },
    { name: uiText["ui.nav.links.experience"], href: "#experience", id: "experience", icon: Bird },
    { name: uiText["ui.nav.links.guide"], href: "#guide", id: "guide", icon: MapIcon },
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
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveTab(link.id)}
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-[0.25em] transition-all hover:opacity-100",
                    activeTab === link.id 
                      ? (scrolled ? "text-foreground" : "text-white") 
                      : (scrolled ? "text-muted-foreground/60 hover:text-foreground" : "text-white/40 hover:text-white")
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Floating Pill Tab Bar */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-50 md:hidden">
        <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-2 flex justify-around items-center high-contrast-shadow">
          {links.map((link) => {
            const Icon = link.icon
            const isActive = activeTab === link.id
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.id)}
                className="relative flex flex-col items-center justify-center w-12 h-12 transition-all"
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white/10 rounded-full scale-110 animate-in fade-in zoom-in duration-300" />
                )}
                <Icon className={cn(
                  "h-5 w-5 transition-colors relative z-10",
                  isActive ? "text-white" : "text-white/40"
                )} />
                {isActive && (
                  <span className="absolute -bottom-1 h-1 w-1 bg-white rounded-full animate-in slide-in-from-bottom-1" />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
