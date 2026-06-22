import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Utensils, Wheat, Beef } from "lucide-react"
import { uiText } from "@/lib/ui-text"

const iconMap: Record<string, any> = {
  "Buuz": Beef,
  "Khuushuur": Utensils,
  "Tsuivan": Wheat,
  "Airag": Utensils
}

export function FoodMenu() {
  const foodImg = PlaceHolderImages.find(img => img.id === 'mongolian-buuz')

  const items = [
    { name: uiText["ui.food.item1.name"], description: uiText["ui.food.item1.description"] },
    { name: uiText["ui.food.item2.name"], description: uiText["ui.food.item2.description"] },
    { name: uiText["ui.food.item3.name"], description: uiText["ui.food.item3.description"] },
    { name: uiText["ui.food.item4.name"], description: uiText["ui.food.item4.description"] },
  ]

  return (
    <section id="food" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-5xl font-headline text-foreground leading-tight">{uiText["ui.food.title"]}</h2>
            <p className="text-muted-foreground font-light leading-relaxed">
              {uiText["ui.food.description"]}
            </p>
            <div className="h-px w-20 bg-primary" />
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
            {items.map((item, i) => {
              const Icon = iconMap[item.name] || Utensils
              return (
                <div key={i} className="p-8 border border-border hover:border-primary transition-colors duration-500 bg-secondary/20">
                  <div className="flex items-center gap-4 mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                    <h3 className="font-bold uppercase tracking-widest text-[11px] text-foreground">{item.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-20 relative h-[400px] grayscale overflow-hidden group border border-border">
          {foodImg && (
            <Image
              src={foodImg.imageUrl}
              alt={foodImg.description}
              fill
              unoptimized
              className="object-cover group-hover:grayscale-0 transition-all duration-1000"
              data-ai-hint={foodImg.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-1000" />
          <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
             <span className="text-primary font-bold uppercase tracking-widest text-[9px]">{uiText["ui.food.featured.badge"]}</span>
             <h4 className="text-white text-2xl font-headline mt-2">{uiText["ui.food.featured.title"]}</h4>
          </div>
        </div>
      </div>
    </section>
  )
}