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
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden bg-slate-950">
          <div className="absolute inset-0 z-0 opacity-60">
            {hero && (
              <Image
                src={hero.imageUrl}
                alt={hero.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={hero.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
          </div>
          
          <div className="relative z-10 max-w-5xl px-4 text-center space-y-8 fade-in-sunrise">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] text-white">
              <Compass className="h-3 w-3 text-primary" />
              <span>{uiText["ui.hero.badge"]}</span>
            </div>
            <h1 className="text-7xl md:text-9xl font-headline font-bold leading-none tracking-tighter">
              {uiText["ui.hero.title"]} <span className="text-primary italic">{uiText["ui.hero.titleAccent"]}</span>
            </h1>
            <p className="text-lg md:text-xl font-body max-w-2xl mx-auto text-white/80 leading-relaxed font-light">
              {uiText["ui.hero.subtitle"]}
            </p>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
            <span className="text-[10px] font-bold uppercase tracking-widest text-white">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
          </div>
        </section>

        <HeritageHub />
        <MapExplorer />
        <Concierge />
        <FoodMenu />
        <Berkutchi />
        <SurvivalGuide />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center space-y-12">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center gap-3">
              <Compass className="h-8 w-8 text-primary" />
              <span className="text-3xl font-headline font-bold tracking-tight">{uiText["ui.nav.logo"]}</span>
            </div>
            <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed font-light">
              {uiText["ui.footer.description"]}
            </p>
          </div>
          
          <div className="pt-12 border-t border-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            <p>{uiText["ui.footer.copyright"]}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
