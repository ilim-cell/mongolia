
import Image from "next/image"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"

const iconMap: Record<string, string> = {
  "Buuz": "restaurant",
  "Khuushuur": "cookie",
  "Tsuivan": "soup_kitchen",
  "Airag": "local_bar"
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div className="space-y-16">
            <div className="space-y-8">
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-headline leading-[0.9] tracking-tighter">{uiText["ui.food.title"]}</h2>
              <p className="text-white/40 text-xl font-light leading-relaxed max-w-md">
                {uiText["ui.food.description"]}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {items.map((item, i) => {
                const icon = iconMap[item.name] || "restaurant"
                return (
                  <div key={i} className="p-10 border border-white/10 rounded-[2.5rem] hover:bg-white/5 transition-all group">
                    <div className="flex items-center gap-5 mb-6">
                      <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                        <span className="material-symbols-rounded text-xl">{icon}</span>
                      </div>
                      <h3 className="font-bold text-[11px] uppercase tracking-[0.3em]">{item.name}</h3>
                    </div>
                    <p className="text-[12px] text-white/30 leading-relaxed font-light">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative aspect-square rounded-[3.5rem] overflow-hidden border border-white/10 group">
            <Image
              src={Images.food.url}
              alt="Mongolian Cuisine"
              fill
              unoptimized
              className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2s]"
              data-ai-hint={Images.food.hint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
               <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white/40 mb-4 block">{uiText["ui.food.featured.badge"]}</span>
               <h4 className="text-4xl md:text-5xl font-headline font-bold mb-4">{uiText["ui.food.featured.title"]}</h4>
               <p className="text-sm text-white/40 font-light leading-relaxed">{uiText["ui.food.featured.description"]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
