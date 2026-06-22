
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
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const links = [
    { name: uiText["ui.nav.links.home"] || "Home", href: "/", icon: "home" },
    { name: uiText["ui.nav.links.heritage"], href: "/heritage", icon: "museum" },
    { name: uiText["ui.nav.links.food"], href: "/culinary", icon: "restaurant" },
    { name: uiText["ui.nav.links.experience"], href: "/experience", icon: "flight" },
    { name: uiText["ui.nav.links.guide"], href: "/guide", icon: "explore" },
  ]

  const isLight = scrolled || pathname !== "/"

  return (
    <>
      {/* Desktop Top Nav */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 hidden md:block",
        isLight
          ? "bg-white/80 backdrop-blur-2xl border-b border-black/5 py-4 shadow-sm" 
          : "bg-transparent border-transparent py-8"
      )}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link href="/" className={cn(
            "flex items-center gap-3 transition-colors duration-500 group",
            isLight ? "text-black" : "text-white"
          )}>
            <span className="material-symbols-rounded text-2xl group-hover:rotate-12 transition-transform">explore</span>
            <span className="text-xl font-headline font-extrabold tracking-tighter uppercase">{uiText["ui.nav.logo"]}</span>
          </Link>

          <div className="flex space-x-12 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[10px] font-bold uppercase tracking-[0.3em] transition-all hover:opacity-100",
                  pathname === link.href 
                    ? (isLight ? "text-black" : "text-white") 
                    : (isLight ? "text-black/40 hover:text-black" : "text-white/40 hover:text-white")
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
        <div className="glass-dark rounded-full p-2 flex justify-between items-center px-4 shadow-2xl ring-1 ring-white/10">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative flex flex-col items-center justify-center w-12 h-12 transition-all"
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
