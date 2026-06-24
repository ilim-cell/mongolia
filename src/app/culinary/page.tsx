import Image from "next/image"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"

export default function CulinaryPage() {
  const items = [
    { name: uiText["ui.food.item1.name"], desc: uiText["ui.food.item1.description"], icon: "restaurant" },
    { name: uiText["ui.food.item2.name"], desc: uiText["ui.food.item2.description"], icon: "cookie" },
    { name: uiText["ui.food.item3.name"], desc: uiText["ui.food.item3.description"], icon: "soup_kitchen" },
    { name: uiText["ui.food.item4.name"], desc: uiText["ui.food.item4.description"], icon: "local_bar" },
  ]

  return (
    <main className="pt-40 pb-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-16">
            <div className="space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30">Culinary Provisioning</span>
              <h1 className="heading-lg">{uiText["ui.food.title"]}</h1>
              <p className="text-2xl text-black/60 font-light leading-relaxed max-w-xl">
                {uiText["ui.food.description"]}
              </p>
            </div>

            <div className="space-y-4">
              {items.map((item, i) => (
                <div key={i} className="flex gap-10 p-10 border border-black/5 bg-slate-50 hover:border-black transition-all group">
                   <span className="material-symbols-rounded text-4xl text-black/10 group-hover:text-black transition-colors">{item.icon}</span>
                   <div className="space-y-3">
                     <h3 className="text-xs font-black uppercase tracking-[0.4em]">{item.name}</h3>
                     <p className="text-sm font-light text-black/50 leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div className="relative aspect-square overflow-hidden border border-black/5">
              <Image 
                src={Images.food.main}
                alt="Food Main"
                fill
                className="object-cover grayscale"
                unoptimized
              />
            </div>
            <div className="relative aspect-[16/9] overflow-hidden border border-black/5">
              <Image 
                src={Images.food.steamed}
                alt="Buuz Preparation"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                 <div className="space-y-4">
                   <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">{uiText["ui.food.featured.badge"]}</span>
                   <h3 className="text-4xl font-headline font-black text-white uppercase">{uiText["ui.food.featured.title"]}</h3>
                   <p className="text-xs text-white/60 font-light max-w-xs mx-auto leading-relaxed">{uiText["ui.food.featured.description"]}</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
