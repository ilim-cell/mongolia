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
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-24 space-y-4">
          <h2 className="text-5xl md:text-7xl font-headline text-slate-900">{uiText["ui.food.title"]}</h2>
          <p className="text-lg text-slate-500 font-light italic max-w-2xl mx-auto">
            {uiText["ui.food.description"]}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => {
              const Icon = iconMap[item.name] || Utensils
              return (
                <Card key={i} className="border-border rounded-none bg-slate-50 hover:bg-white transition-all duration-500 group shadow-none hover:shadow-xl">
                  <CardContent className="p-8 space-y-4">
                    <div className="h-10 w-10 border border-border flex items-center justify-center text-primary group-hover:border-primary transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-bold uppercase tracking-widest text-sm text-slate-900">{item.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-light">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="relative h-[650px] rounded-none overflow-hidden shadow-2xl border-[12px] border-slate-50 group">
            {foodImg && (
              <Image
                src={foodImg.imageUrl}
                alt={foodImg.description}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                data-ai-hint={foodImg.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-12">
              <div className="text-white space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">{uiText["ui.food.featured.badge"]}</p>
                <h4 className="text-3xl font-headline">{uiText["ui.food.featured.title"]}</h4>
                <p className="text-sm text-white/60 font-light">{uiText["ui.food.featured.description"]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
