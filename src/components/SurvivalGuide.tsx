import Image from "next/image"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"

const iconMap: Record<string, string> = {
  "Climate Control": "thermostat",
  "Essential Gear": "backpack",
  "Cultural Etiquette": "temple_buddhist",
  "Navigation": "explore"
}

export function SurvivalGuide() {
  const guides = [
    { title: uiText["ui.survival.guide1.title"], description: uiText["ui.survival.guide1.description"] },
    { title: uiText["ui.survival.guide2.title"], description: uiText["ui.survival.guide2.description"] },
    { title: uiText["ui.survival.guide3.title"], description: uiText["ui.survival.guide3.description"] },
    { title: uiText["ui.survival.guide4.title"], description: uiText["ui.survival.guide4.description"] },
  ]

  return (
    <section id="guide" className="section-padding bg-white border-t border-black/5 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-24 text-center space-y-6 max-w-3xl mx-auto">
          <div className="text-black/30 font-bold tracking-[0.5em] uppercase text-[10px]">
            Field Documentation
          </div>
          <h2 className="text-5xl md:text-8xl font-headline tracking-tighter text-black uppercase leading-none">{uiText["ui.survival.title"]}</h2>
          <p className="text-black/50 font-light text-xl leading-relaxed">{uiText["ui.survival.description"]}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {guides.map((guide, i) => {
            const icon = iconMap[guide.title] || "map"
            return (
              <div key={i} className="p-10 border border-black/5 hover:bg-black hover:text-white duration-500 group bg-slate-50 transition-all">
                <div className="h-16 w-16 flex items-center justify-center mb-10 bg-black text-white rounded-none group-hover:bg-white group-hover:text-black transition-all">
                  <span className="material-symbols-rounded text-3xl">{icon}</span>
                </div>
                <h3 className="font-bold text-[11px] uppercase tracking-[0.4em] mb-4">{guide.title}</h3>
                <p className="text-[13px] text-black/50 group-hover:text-white/60 leading-relaxed font-light">
                  {guide.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="relative h-[400px] w-full overflow-hidden border border-black/5 bg-slate-100">
           <Image 
             src={Images.extra.kit}
             alt="First Aid Kit"
             fill
             unoptimized
             className="object-cover grayscale"
           />
           <div className="absolute inset-0 bg-black/20" />
           <div className="absolute bottom-12 left-12 glass-dark p-8 max-w-md text-white">
              <h4 className="text-2xl font-headline uppercase mb-4">Logistical Support</h4>
              <p className="text-xs text-white/40 font-light leading-relaxed">Ensure all field operations are supported by verified medical and logistical data provided by local nomadic nodes.</p>
           </div>
        </div>
      </div>
    </section>
  )
}