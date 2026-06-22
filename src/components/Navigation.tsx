"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { uiText } from "@/lib/ui-text"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { name: uiText["ui.nav.links.home"] || "Home", href: "/", icon: "home" },
    { name: uiText["ui.nav.links.heritage"], href: "/heritage", icon: "museum" },
    { name: uiText["ui.nav.links.food"], href: "/culinary", icon: "restaurant" },
    { name: uiText["ui.nav.links.experience"], href: "/experience", icon: "flight" },
    { name: uiText["ui.nav.links.guide"], href: "/guide", icon: "explore" },
  ]

  const isLightMode = scrolled || pathname !== "/"

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 hidden md:block",
        isLightMode
          ? "bg-white/95 backdrop-blur-md border-b border-black/10 py-4" 
          : "bg-transparent py-8"
      )}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className={cn(
            "flex items-center gap-2 group",
            isLightMode ? "text-black" : "text-white"
          )}>
            <span className="material-symbols-rounded text-2xl group-hover:rotate-12 transition-transform">explore</span>
            <span className="text-lg font-headline font-black uppercase tracking-tighter">{uiText["ui.nav.logo"]}</span>
          </Link>

          <div className="flex space-x-10 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.3em] transition-all",
                  pathname === link.href 
                    ? (isLightMode ? "text-black" : "text-white") 
                    : (isLightMode ? "text-black/40 hover:text-black" : "text-white/40 hover:text-white")
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Dock (Floating Pill) */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-50 md:hidden">
        <div className="glass-dark rounded-full p-2 flex justify-around items-center px-6 shadow-2xl">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative flex flex-col items-center justify-center w-12 h-12"
              >
                <span className={cn(
                  "material-symbols-rounded text-2xl transition-colors",
                  isActive ? "text-white scale-110" : "text-white/30"
                )}>{link.icon}</span>
                {isActive && (
                  <span className="absolute -bottom-1 h-1 w-1 bg-white rounded-full" />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}