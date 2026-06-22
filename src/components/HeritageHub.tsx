import Image from "next/image"
import { Heart, Users, Home, ShieldCheck } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"

const iconMap: Record<string, any> = {
  "Radical Hospitality": Heart,
  "The Ger Lifestyle": Home,
  "Legacy of Empire": Users,
  "Modern Harmony": ShieldCheck
}

export function HeritageHub() {
  const landscape = PlaceHolderImages.find(img => img.id === 'nomadic-ger')

  const cards = [
    { title: uiText["ui.heritage.card1.title"], description: uiText["ui.heritage.card1.description"] },
    { title: uiText["ui.heritage.card2.title"], description: uiText["ui.heritage.card2.description"] },
    { title: uiText["ui.heritage.card3.title"], description: uiText["ui.heritage.card3.description"] },
    { title: uiText["ui.heritage.card4.title"], description: uiText["ui.heritage.card4.description"] },
  ]

  return (
    <section id="heritage" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          <div className="w-full lg:w-5/12 space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-headline leading-tight text-foreground">
                {uiText["ui.heritage.title"]} <br/>
                <span className="text-primary italic font-light">{uiText["ui.heritage.titleAccent"]}</span>
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed font-light">
                {uiText["ui.heritage.description"]}
              </p>
            </div>

            <div className="grid gap-12">
              {cards.map((card, idx) => {
                const Icon = iconMap[card.title] || ShieldCheck
                return (
                  <div key={idx} className="flex gap-6 group">
                    <div className="shrink-0 h-10 w-10 flex items-center justify-center border border-border text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold uppercase tracking-widest text-foreground">{card.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed font-light">
                        {card.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative bg-secondary">
            <div className="relative h-full min-h-[500px] overflow-hidden">
              {landscape && (
                <Image
                  src={landscape.imageUrl}
                  alt={landscape.description}
                  fill
                  unoptimized
                  className="object-cover grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
                  data-ai-hint={landscape.imageHint}
                />
              )}
            </div>
            <div className="absolute bottom-0 right-0 bg-primary p-12 text-white max-w-[240px]">
              <p className="font-bold text-5xl font-headline mb-2">{uiText["ui.heritage.stats.value"]}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/80 leading-relaxed">
                {uiText["ui.heritage.stats.label"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}