import Image from "next/image"
import { Navigation } from "@/components/Navigation"
import { Images } from "@/lib/placeholder-images"
import { Compass, ArrowRight } from "lucide-react"
import { uiText } from "@/lib/ui-text"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-black selection:text-white bg-white">
      <Navigation />
      
      <main className="flex-grow">
        <section className="relative min-h-[100svh] flex items-center bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={Images.hero.url}
              alt="Mongolian Steppe"
              fill
              className="object-cover opacity-70 scale-105"
              priority
              unoptimized
              data-ai-hint={Images.hero.hint}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/20 to-black" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
            <div className="max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-white/20 bg-white/5 backdrop-blur-md text-white text-[9px] font-bold uppercase tracking-[0.4em] rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                {uiText["ui.hero.badge"]}
              </div>
              
              <h1 className="text-5xl sm:text-7xl md:text-9xl text-white font-headline leading-[0.95] tracking-tighter">
                {uiText["ui.hero.title"]} <br/>
                <span className="text-white/40 italic">{uiText["ui.hero.titleAccent"]}</span>
              </h1>

              <p className="text-lg md:text-2xl text-white/70 max-w-xl font-light leading-relaxed">
                {uiText["ui.hero.subtitle"]}
              </p>

              <div className="pt-12">
                <Link href="/heritage" className="inline-flex items-center gap-4 text-white group">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em]">{uiText["ui.nav.links.itinerary"]}</span>
                  <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-6 hidden md:flex">
             <div className="h-px w-20 bg-white/30" />
             <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/50">
               {uiText["ui.hero.scroll"]}
             </span>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6 max-w-md">
              <div className="flex items-center gap-3">
                <Compass className="h-5 w-5 text-white" />
                <span className="text-xl font-headline font-bold tracking-tighter uppercase">{uiText["ui.nav.logo"]}</span>
              </div>
              <p className="text-white/40 text-xs leading-relaxed font-light">
                {uiText["ui.footer.description"]}
              </p>
            </div>
            
            <div className="pt-12 md:pt-0">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
                {uiText["ui.footer.copyright"]}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}