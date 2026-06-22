import Image from "next/image"
import { Heart, Users, Home, ShieldCheck } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import content from "@/lib/content.json"

const iconMap: Record<string, any> = {
  "Radical Hospitality": Heart,
  "The Ger Lifestyle": Home,
  "Legacy of Empire": Users,
  "Modern Harmony": ShieldCheck
}

export function HeritageHub() {
  const landscape = PlaceHolderImages.find(img => img.id === 'nomadic-ger')

  return (
    <section id="heritage" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-headline leading-tight">
                {content.heritage.title} <span className="text-primary">{content.heritage.titleAccent}</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {content.heritage.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {content.heritage.cards.map((card, idx) => {
                const Icon = iconMap[card.title] || ShieldCheck
                return (
                  <div key={idx} className="space-y-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold font-headline">{card.title}</h3>
                    <p className="text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              {landscape && (
                <Image
                  src={landscape.imageUrl}
                  alt={landscape.description}
                  width={800}
                  height={1000}
                  className="object-cover h-[600px] w-full"
                  data-ai-hint={landscape.imageHint}
                />
              )}
            </div>
            <div className="absolute -bottom-8 -left-8 z-20 bg-white p-8 rounded-xl shadow-xl max-w-xs border border-border">
              <p className="text-primary font-bold text-4xl font-headline mb-1">{content.heritage.stats.value}</p>
              <p className="text-muted-foreground font-medium">{content.heritage.stats.label}</p>
            </div>
            <div className="absolute -top-12 -right-12 h-64 w-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}