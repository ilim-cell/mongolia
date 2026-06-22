
import Image from "next/image"
import { Navigation } from "@/components/Navigation"
import { HeritageHub } from "@/components/HeritageHub"
import { FoodMenu } from "@/components/FoodMenu"
import { Berkutchi } from "@/components/Berkutchi"
import { MapExplorer } from "@/components/MapExplorer"
import { SurvivalGuide } from "@/components/SurvivalGuide"
import { Images } from "@/lib/placeholder-images"
import { Compass } from "lucide-react"
import { uiText } from "@/lib/ui-text"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Modern High-Contrast Hero */}
        <section className="relative min-h-[90vh] flex items-center bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={Images.hero.url}
              alt="Mongolian Steppe"
              fill
              className="object-cover opacity-80"
              priority
              unoptimized
              data-ai-hint={Images.hero.hint}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-3xl space-y-6">
              <div className="inline-block px-4 py-1 border border-white/20 bg-white/5 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full">
                {uiText["ui.hero.badge"]}
              </div>
              
              <h1 className="text-6xl md:text-8xl text-white font-headline leading-[1.1] tracking-tight">
                {uiText["ui.hero.title"]} <br/>
                <span className="text-white italic">{uiText["ui.hero.titleAccent"]}</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/70 max-w-2xl font-light leading-relaxed">
                {uiText["ui.hero.subtitle"]}
              </p>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-12 flex items-center gap-6">
             <div className="h-px w-20 bg-white/20" />
             <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">
               {uiText["ui.hero.scroll"]}
             </span>
          </div>
        </section>

        <HeritageHub />
        <MapExplorer />
        <FoodMenu />
        <Berkutchi />
        <SurvivalGuide />
      </main>

      <footer className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6 max-w-md">
              <div className="flex items-center gap-3">
                <Compass className="h-6 w-6 text-white" />
                <span className="text-xl font-headline font-bold tracking-tighter">{uiText["ui.nav.logo"]}</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                {uiText["ui.footer.description"]}
              </p>
            </div>
            
            <div className="pt-12 md:pt-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
                {uiText["ui.footer.copyright"]}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
