import Image from "next/image"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"
import { Concierge } from "@/components/Concierge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={Images.hero.main}
            alt="Mongolian Steppe"
            fill
            className="object-cover opacity-60 scale-105"
            priority
            unoptimized
            data-ai-hint="mongolia steppe horizon"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        </div>
        
        <div className="section-container relative z-10 pt-20">
          <div className="max-w-5xl space-y-10">
            <div className="inline-flex items-center gap-4 px-6 py-2 border border-white/20 bg-white/5 backdrop-blur-xl text-white text-[10px] font-black uppercase tracking-[0.5em] rounded-full">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              {uiText["ui.hero.badge"]}
            </div>
            
            <h1 className="heading-xl text-white">
              {uiText["ui.hero.title"]} <br/>
              <span className="text-white/30 italic lowercase font-light">{uiText["ui.hero.titleAccent"]}</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
              {uiText["ui.hero.subtitle"]}
            </p>

            <div className="pt-8">
              <Link href="/heritage" className="group inline-flex items-center gap-6">
                <span className="text-[11px] font-black uppercase tracking-[0.6em] text-white">{uiText["ui.nav.links.itinerary"]}</span>
                <div className="h-16 w-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-700">
                  <ArrowRight className="h-6 w-6" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Hero Detail */}
      <section className="py-32 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-8">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30">Archive Node 01</span>
               <h2 className="heading-lg text-black">Vast Landscapes</h2>
               <p className="text-lg text-black/60 font-light leading-relaxed">
                 The Mongolian territory is defined by its scale. Thousands of kilometers of roadless steppe that have remained unchanged for millennia.
               </p>
             </div>
             <div className="relative aspect-[16/10] overflow-hidden border border-black/5 bg-slate-50">
               <Image 
                 src={Images.hero.landscape}
                 alt="Landscape Detail"
                 fill
                 className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                 unoptimized
               />
             </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase - Using the remaining images */}
      <section className="py-32 bg-black text-white">
        <div className="section-container space-y-24">
          <div className="text-center space-y-4">
            <h2 className="heading-lg">Visual Archive</h2>
            <p className="text-white/30 tracking-[0.4em] uppercase text-[10px] font-bold">Documenting the eternal blue sky</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: Images.gallery.sunset, label: "Steppe Sunset" },
              { src: Images.gallery.horse, label: "Nomadic Spirit" },
              { src: Images.gallery.city, label: "Urban Contrast" }
            ].map((img, i) => (
              <div key={i} className="group relative aspect-[4/5] overflow-hidden bg-white/5 border border-white/10">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-8 left-8">
                  <span className="text-[9px] font-black uppercase tracking-[0.5em] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Concierge */}
      <section className="py-32 bg-white">
        <Concierge />
      </section>
    </main>
  )
}
