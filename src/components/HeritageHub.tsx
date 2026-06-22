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
    <section id="heritage" className="py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-headline leading-[1.1] text-slate-900">
                {uiText["ui.heritage.title"]} <span className="text-primary italic">{uiText["ui.heritage.titleAccent"]}</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed font-light max-w-xl">
                {uiText["ui.heritage.description"]}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16 pt-8">
              {cards.map((card, idx) => {
                const Icon = iconMap[card.title] || ShieldCheck
                return (
                  <div key={idx} className="space-y-4 group">
                    <div className="h-10 w-10 border border-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold uppercase tracking-widest text-slate-900">{card.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              {landscape && (
                <Image
                  src={landscape.imageUrl}
                  alt={landscape.description}
                  width={800}
                  height={1000}
                  className="object-cover h-[700px] w-full grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                  data-ai-hint={landscape.imageHint}
                />
              )}
            </div>
            <div className="absolute -bottom-10 -right-10 z-20 bg-primary p-12 text-white shadow-2xl max-w-[280px]">
              <p className="font-bold text-6xl font-headline mb-2">{uiText["ui.heritage.stats.value"]}</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/80 leading-relaxed">
                {uiText["ui.heritage.stats.label"]}
              </p>
            </div>
            <div className="absolute -top-20 -left-20 h-96 w-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
