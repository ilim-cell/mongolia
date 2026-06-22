
import Image from "next/image"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"

const iconMap: Record<string, string> = {
  "The Sacred Bond": "linked_services",
  "Winter Survival": "ac_unit"
}

export function Berkutchi() {
  const cards = [
    { title: uiText["ui.berkutchi.card1.title"], description: uiText["ui.berkutchi.card1.description"] },
    { title: uiText["ui.berkutchi.card2.title"], description: uiText["ui.berkutchi.card2.description"] },
  ]

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-stretch">
          <div className="lg:col-span-7 relative min-h-[500px] lg:min-h-[700px] rounded-[3.5rem] overflow-hidden high-contrast-shadow group">
            <Image
              src={Images.experience.url}
              alt="Eagle Hunting"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-[4s]"
              data-ai-hint={Images.experience.hint}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-1000" />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-16">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-5 text-black/30 font-bold tracking-[0.5em] uppercase text-[10px]">
                <span className="material-symbols-rounded text-lg">bird</span>
                {uiText["ui.berkutchi.badge"]}
              </div>
              <h2 className="text-5xl md:text-7xl font-headline tracking-tighter leading-[0.9] text-black">{uiText["ui.berkutchi.title"]}</h2>
              <p className="text-xl text-black/50 leading-relaxed font-light">
                {uiText["ui.berkutchi.description"]}
              </p>
            </div>

            <div className="space-y-6">
              {cards.map((card, idx) => {
                const icon = iconMap[card.title] || "verified"
                return (
                  <div key={idx} className="flex gap-8 items-start p-10 glass rounded-[2.5rem] hover:-translate-y-1 transition-all">
                    <div className="h-14 w-14 flex items-center justify-center bg-black text-white rounded-2xl shrink-0">
                      <span className="material-symbols-rounded">{icon}</span>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold uppercase tracking-[0.3em] text-[11px]">{card.title}</h4>
                      <p className="text-black/50 text-[13px] leading-relaxed font-light">{card.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
