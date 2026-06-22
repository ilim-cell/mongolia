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
        {/* Radical Redesign Hero */}
        <section className="relative h-screen flex items-center bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            {hero && (
              <Image
                src={hero.imageUrl}
                alt={hero.description}
                fill
                className="object-cover opacity-60"
                priority
                unoptimized
                data-ai-hint={hero.imageHint}
              />
            )}
            <div className="absolute inset-0 hero-gradient" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
            <div className="max-w-4xl space-y-8 animate-fade-in">
              <div className="flex items-center gap-4 text-primary font-bold uppercase tracking-[0.5em] text-[10px]">
                <span className="w-12 h-px bg-primary" />
                {uiText["ui.hero.badge"]}
              </div>
              
              <h1 className="text-6xl md:text-[7rem] font-headline font-bold text-white leading-[0.9] tracking-tighter">
                {uiText["ui.hero.title"]} <br/>
                <span className="text-primary italic font-light">{uiText["ui.hero.titleAccent"]}</span>
              </h1>

              <p className="text-lg md:text-xl font-body max-w-xl text-white/60 leading-relaxed font-light">
                {uiText["ui.hero.subtitle"]}
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-12 right-12 hidden md:flex items-center gap-6 opacity-40">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white rotate-90 origin-right whitespace-nowrap">
              {uiText["ui.hero.scroll"]}
            </span>
          </div>
        </section>

        <HeritageHub />
        <MapExplorer />
        <Concierge />
        <FoodMenu />
        <Berkutchi />
        <SurvivalGuide />
      </main>

      <footer className="bg-white border-t border-border py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6 max-w-md">
              <div className="flex items-center gap-3">
                <Compass className="h-6 w-6 text-primary" />
                <span className="text-xl font-headline font-bold tracking-tight">{uiText["ui.nav.logo"]}</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {uiText["ui.footer.description"]}
              </p>
            </div>
            
            <div className="pt-12 md:pt-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                {uiText["ui.footer.copyright"]}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}