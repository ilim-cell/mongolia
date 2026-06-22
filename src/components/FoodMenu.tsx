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
    <section className="section-padding bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="space-y-16">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-headline leading-none uppercase">{uiText["ui.food.title"]}</h2>
              <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-md">
                {uiText["ui.food.description"]}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {items.map((item, i) => (
                <div key={i} className="p-8 border border-white/10 hover:border-white transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="material-symbols-rounded text-2xl text-white/30 group-hover:text-white">
                      {iconMap[item.name] || "restaurant"}
                    </span>
                    <h3 className="font-bold text-[10px] uppercase tracking-[0.3em]">{item.name}</h3>
                  </div>
                  <p className="text-[12px] text-white/40 leading-relaxed font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden bg-white/5 border border-white/10 group">
            <Image
              src={Images.food.url}
              alt="Mongolian Food"
              fill
              unoptimized
              className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              data-ai-hint={Images.food.hint}
            />
            <div className="absolute bottom-10 left-10 right-10 p-8 glass-dark text-white">
               <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/40 mb-3 block">{uiText["ui.food.featured.badge"]}</span>
               <h4 className="text-3xl md:text-4xl font-headline uppercase mb-3">{uiText["ui.food.featured.title"]}</h4>
               <p className="text-xs text-white/40 font-light leading-relaxed">{uiText["ui.food.featured.description"]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}