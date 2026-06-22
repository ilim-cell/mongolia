
"use client"

import * as React from "react"
import Link from "next/link"
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
    { name: uiText["ui.nav.links.home"] || "Home", href: "#home", id: "home", icon: "home" },
    { name: uiText["ui.nav.links.heritage"], href: "#heritage", id: "heritage", icon: "museum" },
    { name: uiText["ui.nav.links.food"], href: "#food", id: "food", icon: "restaurant" },
    { name: uiText["ui.nav.links.experience"], href: "#experience", id: "experience", icon: "bird" },
    { name: uiText["ui.nav.links.guide"], href: "#guide", id: "guide", icon: "map" },
  ]

  return (
    <>
      {/* Desktop Top Nav */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "bg-white/80 backdrop-blur-2xl border-b border-black/5 py-4" 
          : "bg-transparent border-transparent py-8"
      )}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className={cn(
            "flex items-center gap-3 transition-colors duration-500",
            scrolled ? "text-black" : "text-white"
          )}>
            <span className="material-symbols-rounded text-2xl">explore</span>
            <span className="text-xl font-headline font-extrabold tracking-tighter uppercase">{uiText["ui.nav.logo"]}</span>
          </div>

          <div className="hidden md:flex space-x-12 items-center">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.id)}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:opacity-100",
                  activeTab === link.id 
                    ? (scrolled ? "text-black" : "text-white") 
                    : (scrolled ? "text-black/40 hover:text-black" : "text-white/40 hover:text-white")
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Floating Pill Tab Bar */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[420px] z-50 md:hidden">
        <div className="glass-dark rounded-[3rem] p-3 flex justify-between items-center px-6">
          {links.map((link) => {
            const isActive = activeTab === link.id
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.id)}
                className="relative flex flex-col items-center justify-center w-14 h-14 transition-all"
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white/10 rounded-full scale-110 animate-in fade-in zoom-in duration-300" />
                )}
                <span className={cn(
                  "material-symbols-rounded text-2xl relative z-10 transition-colors",
                  isActive ? "text-white" : "text-white/40"
                )}>{link.icon}</span>
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
