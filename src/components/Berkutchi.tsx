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
    <section id="experience" className="py-32 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4 text-primary font-bold tracking-[0.4em] uppercase text-[9px]">
                <Bird className="h-4 w-4" />
                {uiText["ui.berkutchi.badge"]}
              </div>
              <h2 className="text-5xl md:text-6xl font-headline leading-tight">{uiText["ui.berkutchi.title"]}</h2>
              <p className="text-white/40 text-lg leading-relaxed font-light">
                {uiText["ui.berkutchi.description"]}
              </p>
            </div>

            <div className="grid gap-12">
              {cards.map((card, idx) => {
                const Icon = iconMap[card.title] || ShieldCheck
                return (
                  <div key={idx} className="flex gap-6 items-start max-w-md">
                    <div className="shrink-0 h-px w-12 bg-primary mt-3" />
                    <div className="space-y-3">
                      <h4 className="font-bold uppercase tracking-widest text-[11px] text-white">{card.title}</h4>
                      <p className="text-white/30 text-sm leading-relaxed font-light">{card.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative min-h-[500px] border-[20px] border-white/5">
            {eagleImg && (
              <Image
                src={eagleImg.imageUrl}
                alt={eagleImg.description}
                fill
                unoptimized
                className="object-cover opacity-80"
                data-ai-hint={eagleImg.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}