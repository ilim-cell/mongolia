
import Image from "next/image"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"

const iconMap: Record<string, string> = {
  "Radical Hospitality": "favorite",
  "The Ger Lifestyle": "home",
  "Legacy of Empire": "groups",
  "Modern Harmony": "verified"
}

export function HeritageHub() {
  const cards = [
    { title: uiText["ui.heritage.card1.title"], description: uiText["ui.heritage.card1.description"] },
    { title: uiText["ui.heritage.card2.title"], description: uiText["ui.heritage.card2.description"] },
    { title: uiText["ui.heritage.card3.title"], description: uiText["ui.heritage.card3.description"] },
    { title: uiText["ui.heritage.card4.title"], description: uiText["ui.heritage.card4.description"] },
  ]

  return (
    <section id="heritage" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-8">
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-headline text-black leading-[0.9] tracking-tighter">
                {uiText["ui.heritage.title"]} <br/>
                <span className="text-black/20 italic">{uiText["ui.heritage.titleAccent"]}</span>
              </h2>
              <p className="text-xl text-black/60 max-w-lg leading-relaxed font-light">
                {uiText["ui.heritage.description"]}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {cards.map((card, idx) => {
                const icon = iconMap[card.title] || "verified"
                return (
                  <div key={idx} className="glass p-8 rounded-[2rem] hover:scale-[1.02] transition-all group">
                    <div className="h-12 w-12 flex items-center justify-center bg-black text-white rounded-2xl mb-6 group-hover:bg-black/80">
                      <span className="material-symbols-rounded">{icon}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold uppercase tracking-[0.25em]">{card.title}</h3>
                      <p className="text-[12px] text-black/50 leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] high-contrast-shadow order-1 lg:order-2 group">
            <Image
              src={Images.heritage.url}
              alt="Nomadic Lifestyle"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-[3s]"
              data-ai-hint={Images.heritage.hint}
            />
            <div className="absolute inset-x-6 bottom-6 p-10 glass-dark text-white rounded-[2.5rem]">
              <p className="font-headline font-extrabold text-6xl md:text-8xl mb-2">{uiText["ui.heritage.stats.value"]}</p>
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 leading-relaxed">
                {uiText["ui.heritage.stats.label"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
