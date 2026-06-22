import Image from "next/image"
import { Bird, ShieldCheck, Mountain } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"

const iconMap: Record<string, any> = {
  "The Sacred Bond": ShieldCheck,
  "Winter Survival": Mountain
}

export function Berkutchi() {
  const eagleImg = PlaceHolderImages.find(img => img.id === 'eagle-hunter')

  const cards = [
    { title: uiText["ui.berkutchi.card1.title"], description: uiText["ui.berkutchi.card1.description"] },
    { title: uiText["ui.berkutchi.card2.title"], description: uiText["ui.berkutchi.card2.description"] },
  ]

  return (
    <section id="experience" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-slate-950 text-white flex flex-col lg:flex-row shadow-2xl overflow-hidden">
          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-auto">
            {eagleImg && (
              <Image
                src={eagleImg.imageUrl}
                alt={eagleImg.description}
                fill
                className="object-cover opacity-80"
                data-ai-hint={eagleImg.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 to-transparent" />
          </div>

          <div className="w-full lg:w-1/2 p-12 lg:p-24 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
                <Bird className="h-4 w-4" />
                {uiText["ui.berkutchi.badge"]}
              </div>
              <h2 className="text-5xl md:text-6xl font-headline leading-tight">{uiText["ui.berkutchi.title"]}</h2>
              <p className="text-white/50 text-lg leading-relaxed font-light">
                {uiText["ui.berkutchi.description"]}
              </p>
            </div>

            <div className="space-y-10">
              {cards.map((card, idx) => {
                const Icon = iconMap[card.title] || ShieldCheck
                return (
                  <div key={idx} className="flex gap-6 items-start">
                    <div className="shrink-0 h-12 w-12 border border-white/10 flex items-center justify-center text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-bold uppercase tracking-widest text-sm">{card.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed font-light">{card.description}</p>
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
