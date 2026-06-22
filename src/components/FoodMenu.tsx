
import Image from "next/image"
import { Images } from "@/lib/placeholder-images"
import { Utensils, Wheat, Beef } from "lucide-react"
import { uiText } from "@/lib/ui-text"

const iconMap: Record<string, any> = {
  "Buuz": Beef,
  "Khuushuur": Utensils,
  "Tsuivan": Wheat,
  "Airag": Utensils
}

export function FoodMenu() {
  const items = [
    { name: uiText["ui.food.item1.name"], description: uiText["ui.food.item1.description"] },
    { name: uiText["ui.food.item2.name"], description: uiText["ui.food.item2.description"] },
    { name: uiText["ui.food.item3.name"], description: uiText["ui.food.item3.description"] },
    { name: uiText["ui.food.item4.name"], description: uiText["ui.food.item4.description"] },
  ]

  return (
    <section id="food" className="section-padding bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-headline leading-[1] tracking-tighter">{uiText["ui.food.title"]}</h2>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-md">
                {uiText["ui.food.description"]}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((item, i) => {
                const Icon = iconMap[item.name] || Utensils
                return (
                  <div key={i} className="p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h3 className="font-bold text-[10px] uppercase tracking-[0.25em]">{item.name}</h3>
                    </div>
                    <p className="text-[11px] text-white/30 leading-relaxed font-light">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative aspect-square sm:aspect-[16/9] lg:aspect-square rounded-3xl overflow-hidden border border-white/10">
            <Image
              src={Images.food.url}
              alt="Mongolian Cuisine"
              fill
              unoptimized
              className="object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              data-ai-hint={Images.food.hint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
               <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-white/40 mb-3 block">{uiText["ui.food.featured.badge"]}</span>
               <h4 className="text-3xl font-headline font-bold">{uiText["ui.food.featured.title"]}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
