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
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-headline text-black leading-none uppercase">
                {uiText["ui.heritage.title"]} <br/>
                <span className="text-black/20">{uiText["ui.heritage.titleAccent"]}</span>
              </h2>
              <p className="text-lg md:text-xl text-black/60 max-w-md font-light">
                {uiText["ui.heritage.description"]}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {cards.map((card, idx) => (
                <div key={idx} className="p-8 border border-black/5 hover:border-black transition-all group">
                  <span className="material-symbols-rounded text-3xl mb-6 text-black/20 group-hover:text-black">
                    {iconMap[card.title] || "verified"}
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-3">{card.title}</h3>
                  <p className="text-[12px] text-black/50 leading-relaxed font-light">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden order-1 lg:order-2 group bg-slate-100">
            <Image
              src={Images.heritage.url}
              alt="Nomadic Culture"
              fill
              unoptimized
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              data-ai-hint={Images.heritage.hint}
            />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 glass-dark text-white">
              <p className="text-6xl md:text-9xl font-headline font-black mb-2">{uiText["ui.heritage.stats.value"]}</p>
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">
                {uiText["ui.heritage.stats.label"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}