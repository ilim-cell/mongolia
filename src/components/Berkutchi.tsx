import Image from "next/image"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"

export function Berkutchi() {
  const cards = [
    { 
      title: uiText["ui.berkutchi.card1.title"], 
      description: uiText["ui.berkutchi.card1.description"],
      icon: "linked_services"
    },
    { 
      title: uiText["ui.berkutchi.card2.title"], 
      description: uiText["ui.berkutchi.card2.description"],
      icon: "ac_unit"
    },
  ]

  return (
    <section className="section-padding bg-white overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative aspect-[3/4] overflow-hidden bg-slate-50 group border border-black/10">
            <Image
              src={Images.extra.peaks}
              alt="Altai Peaks"
              fill
              unoptimized
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
              data-ai-hint="altai mountains winter snow"
            />
            <div className="absolute top-10 left-10 p-6 glass-dark text-white">
               <span className="text-[9px] font-bold uppercase tracking-[0.5em]">{uiText["ui.berkutchi.badge"]}</span>
            </div>
          </div>

          <div className="space-y-16">
            <div className="space-y-6">
              <div className="text-black/40 font-bold tracking-[0.5em] uppercase text-[10px]">
                Cultural Legacy
              </div>
              <h2 className="text-5xl md:text-8xl font-headline leading-none uppercase text-black">{uiText["ui.berkutchi.title"]}</h2>
              <p className="text-lg md:text-xl text-black/60 leading-relaxed font-light">
                {uiText["ui.berkutchi.description"]}
              </p>
            </div>

            <div className="grid gap-6">
              {cards.map((card, idx) => (
                <div key={idx} className="flex gap-8 p-10 border border-black/10 hover:border-black transition-all bg-slate-50/50 group">
                  <span className="material-symbols-rounded text-4xl text-black/30 group-hover:text-black transition-colors">
                    {card.icon}
                  </span>
                  <div className="space-y-2">
                    <h4 className="font-bold uppercase tracking-[0.2em] text-[11px]">{card.title}</h4>
                    <p className="text-black/60 text-[13px] leading-relaxed font-light">{card.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
