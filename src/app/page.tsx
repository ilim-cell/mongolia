import Image from "next/image"
import { Navigation } from "@/components/Navigation"
import { Concierge } from "@/components/Concierge"
import { HeritageHub } from "@/components/HeritageHub"
import { FoodMenu } from "@/components/FoodMenu"
import { Berkutchi } from "@/components/Berkutchi"
import { MapExplorer } from "@/components/MapExplorer"
import { SurvivalGuide } from "@/components/SurvivalGuide"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Compass } from "lucide-react"
import { uiText } from "@/lib/ui-text"

export default function Home() {
  const hero = PlaceHolderImages.find(img => img.id === 'hero-landscape')

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section - High Contrast Refinement */}
        <section className="relative h-[95vh] flex items-center justify-center text-white overflow-hidden bg-black">
          <div className="absolute inset-0 z-0">
            {hero && (
              <Image
                src={hero.imageUrl}
                alt={hero.description}
                fill
                className="object-cover opacity-70"
                priority
                data-ai-hint={hero.imageHint}
              />
            )}
            {/* Multi-layered gradient for maximum contrast and depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-6xl px-4 text-center space-y-10 fade-in-sunrise">
            <div className="inline-flex items-center gap-3 px-8 py-3 rounded-none bg-white/5 backdrop-blur-2xl border border-white/10 text-[11px] font-bold uppercase tracking-[0.4em] text-white/90">
              <Compass className="h-4 w-4 text-primary" />
              <span>{uiText["ui.hero.badge"]}</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-8xl md:text-[12rem] font-headline font-bold leading-[0.85] tracking-tighter">
                {uiText["ui.hero.title"]} <br/>
                <span className="text-primary italic font-normal">{uiText["ui.hero.titleAccent"]}</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto text-white/70 leading-relaxed font-light tracking-tight">
              {uiText["ui.hero.subtitle"]}
            </p>
          </div>
          
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-30 group cursor-default">
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white transition-opacity group-hover:opacity-100">{uiText["ui.hero.scroll"]}</span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-white via-white/50 to-transparent" />
          </div>
        </section>

        <HeritageHub />
        <MapExplorer />
        <Concierge />
        <FoodMenu />
        <Berkutchi />
        <SurvivalGuide />
      </main>

      {/* Footer - Minimal & Informative */}
      <footer className="bg-slate-950 text-white py-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center space-y-16">
          <div className="flex flex-col items-center space-y-8">
            <div className="flex items-center gap-4">
              <Compass className="h-10 w-10 text-primary" />
              <span className="text-4xl font-headline font-bold tracking-tight">{uiText["ui.nav.logo"]}</span>
            </div>
            <p className="text-white/40 text-base max-w-lg mx-auto leading-relaxed font-light">
              {uiText["ui.footer.description"]}
            </p>
          </div>
          
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-8">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
              {uiText["ui.footer.copyright"]}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
