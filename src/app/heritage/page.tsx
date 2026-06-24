import Image from "next/image"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"

export default function HeritagePage() {
  const cards = [
    { title: uiText["ui.heritage.card1.title"], desc: uiText["ui.heritage.card1.description"], icon: "favorite" },
    { title: uiText["ui.heritage.card2.title"], desc: uiText["ui.heritage.card2.description"], icon: "home" },
    { title: uiText["ui.heritage.card3.title"], desc: uiText["ui.heritage.card3.description"], icon: "groups" },
    { title: uiText["ui.heritage.card4.title"], desc: uiText["ui.heritage.card4.description"], icon: "verified" },
  ]

  return (
    <main className="pt-40 pb-32">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-16">
            <div className="space-y-8">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30">Cultural Protocol</span>
              <h1 className="heading-lg">
                {uiText["ui.heritage.title"]} <br/>
                <span className="text-black/20">{uiText["ui.heritage.titleAccent"]}</span>
              </h1>
              <p className="text-2xl text-black/60 font-light leading-relaxed max-w-xl">
                {uiText["ui.heritage.description"]}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {cards.map((card, i) => (
                <div key={i} className="p-10 border border-black/5 bg-slate-50 hover:bg-black hover:text-white transition-all duration-500 group">
                  <span className="material-symbols-rounded text-4xl mb-8 text-black/20 group-hover:text-white/40 transition-colors">
                    {card.icon}
                  </span>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4">{card.title}</h3>
                  <p className="text-sm font-light leading-relaxed opacity-60">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="sticky top-40 space-y-12">
            <div className="relative aspect-[4/5] overflow-hidden bg-slate-100 border border-black/5">
              <Image 
                src={Images.heritage.main}
                alt="Heritage Main"
                fill
                className="object-cover grayscale"
                unoptimized
              />
              <div className="absolute bottom-12 left-12 glass-dark p-10 text-white border border-white/10">
                <p className="text-7xl font-headline font-black mb-2">{uiText["ui.heritage.stats.value"]}</p>
                <p className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/40 leading-relaxed max-w-[180px]">
                  {uiText["ui.heritage.stats.label"]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
