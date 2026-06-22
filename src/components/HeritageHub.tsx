
import Image from "next/image"
import { Heart, Users, Home, ShieldCheck } from "lucide-react"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"

const iconMap: Record<string, any> = {
  "Radical Hospitality": Heart,
  "The Ger Lifestyle": Home,
  "Legacy of Empire": Users,
  "Modern Harmony": ShieldCheck
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-headline text-foreground leading-[1] tracking-tighter">
                {uiText["ui.heritage.title"]} <br/>
                <span className="text-muted-foreground/30 italic">{uiText["ui.heritage.titleAccent"]}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed font-light">
                {uiText["ui.heritage.description"]}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {cards.map((card, idx) => {
                const Icon = iconMap[card.title] || ShieldCheck
                return (
                  <div key={idx} className="space-y-4 p-6 border border-border rounded-2xl hover:bg-secondary transition-all hover:-translate-y-1 group">
                    <div className="h-10 w-10 flex items-center justify-center bg-black text-white rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.2em]">{card.title}</h3>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-3xl high-contrast-shadow order-1 lg:order-2">
            <Image
              src={Images.heritage.url}
              alt="Nomadic Lifestyle"
              fill
              unoptimized
              className="object-cover"
              data-ai-hint={Images.heritage.hint}
            />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 p-6 sm:p-10 bg-black/90 backdrop-blur-xl text-white rounded-2xl">
              <p className="font-headline font-bold text-4xl sm:text-6xl mb-2">{uiText["ui.heritage.stats.value"]}</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 leading-relaxed">
                {uiText["ui.heritage.stats.label"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
