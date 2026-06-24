
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
          ? "bg-white/95 backdrop-blur-md border-b border-black/20 py-5" 
          : "bg-transparent py-10"
      )}>
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
          <Link href="/" className={cn(
            "flex items-center gap-3 group",
            isLightMode ? "text-black" : "text-white"
          )}>
            <span className="material-symbols-rounded text-3xl group-hover:rotate-12 transition-transform">explore</span>
            <span className="text-2xl font-headline font-black uppercase tracking-tighter">{uiText["ui.nav.logo"]}</span>
          </Link>

          <div className="flex space-x-12 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[11px] font-bold uppercase tracking-[0.4em] transition-all",
                  pathname === link.href 
                    ? (isLightMode ? "text-black border-b-2 border-black pb-1" : "text-white border-b-2 border-white pb-1") 
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
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-[380px] z-50 md:hidden">
        <div className="glass-dark rounded-full p-3 flex justify-around items-center px-8 shadow-2xl border border-white/30">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative flex flex-col items-center justify-center w-14 h-14"
              >
                <span className={cn(
                  "material-symbols-rounded text-3xl transition-all duration-300",
                  isActive ? "text-white scale-125" : "text-white/30"
                )}>{link.icon}</span>
                {isActive && (
                  <span className="absolute -bottom-1 h-1.5 w-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
