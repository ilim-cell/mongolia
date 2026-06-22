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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-headline text-foreground leading-[1.1]">
                {uiText["ui.heritage.title"]} <br/>
                <span className="text-muted-foreground italic">{uiText["ui.heritage.titleAccent"]}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed font-light">
                {uiText["ui.heritage.description"]}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
              {cards.map((card, idx) => {
                const Icon = iconMap[card.title] || ShieldCheck
                return (
                  <div key={idx} className="space-y-3 p-6 border border-border rounded-2xl hover:bg-secondary transition-all hover:scale-[1.02] group">
                    <div className="h-10 w-10 flex items-center justify-center bg-foreground text-white rounded-lg group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider">{card.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-3xl high-contrast-shadow order-1 lg:order-2">
            <Image
              src={Images.heritage.url}
              alt="Nomadic Lifestyle"
              fill
              unoptimized
              className="object-cover"
              data-ai-hint={Images.heritage.hint}
            />
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 p-6 lg:p-8 bg-black/90 backdrop-blur-md text-white rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <p className="font-headline font-bold text-4xl lg:text-5xl mb-2">{uiText["ui.heritage.stats.value"]}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 leading-relaxed">
                {uiText["ui.heritage.stats.label"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
