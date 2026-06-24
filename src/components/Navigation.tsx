"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { uiText } from "@/lib/ui-text"
import { cn } from "@/lib/utils"

const links = [
  { name: uiText["ui.nav.links.home"], href: "/", icon: "home" },
  { name: uiText["ui.nav.links.heritage"], href: "/heritage", icon: "museum" },
  { name: uiText["ui.nav.links.food"], href: "/culinary", icon: "restaurant" },
  { name: uiText["ui.nav.links.experience"], href: "/experience", icon: "flight" },
  { name: uiText["ui.nav.links.guide"], href: "/guide", icon: "explore" },
]

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isLightMode = scrolled || pathname !== "/"

  return (
    <>
      {/* Desktop Top Bar */}
      <nav className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 hidden md:block",
        isLightMode ? "bg-white/80 backdrop-blur-xl border-b border-black/5 py-6" : "bg-transparent py-10"
      )}>
        <div className="section-container flex justify-between items-center">
          <Link href="/" className={cn(
            "flex items-center gap-2 group",
            isLightMode ? "text-black" : "text-white"
          )}>
            <span className="material-symbols-rounded text-2xl group-hover:rotate-12 transition-transform duration-500">explore</span>
            <span className="text-xl font-headline font-black uppercase tracking-tighter">{uiText["ui.nav.logo"]}</span>
          </Link>

          <div className="flex gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.4em] transition-all relative py-1",
                  pathname === link.href 
                    ? (isLightMode ? "text-black" : "text-white") 
                    : (isLightMode ? "text-black/30 hover:text-black" : "text-white/30 hover:text-white")
                )}
              >
                {link.name}
                {pathname === link.href && (
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5",
                    isLightMode ? "bg-black" : "bg-white"
                  )} />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Sleek Mobile Dock (Inspired by peakpancakes.me) */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden w-[90%] max-w-[400px]">
        <div className="glass-dark rounded-full p-2 flex justify-between items-center px-4 border border-white/20">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative flex flex-col items-center justify-center w-12 h-10 group"
              >
                <span className={cn(
                  "material-symbols-rounded text-xl transition-all duration-500",
                  isActive ? "text-white scale-110" : "text-white/30 group-hover:text-white/60"
                )}>{link.icon}</span>
                {isActive && (
                  <span className="absolute -bottom-1 h-1 w-1 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
                )}
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
