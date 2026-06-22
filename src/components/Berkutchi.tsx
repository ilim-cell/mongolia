
import Image from "next/image"
import { Bird, ShieldCheck, Mountain } from "lucide-react"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"

const iconMap: Record<string, any> = {
  "The Sacred Bond": ShieldCheck,
  "Winter Survival": Mountain
}

export function Berkutchi() {
  const cards = [
    { title: uiText["ui.berkutchi.card1.title"], description: uiText["ui.berkutchi.card1.description"] },
    { title: uiText["ui.berkutchi.card2.title"], description: uiText["ui.berkutchi.card2.description"] },
  ]

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-20 items-stretch">
          <div className="lg:col-span-7 relative min-h-[500px] rounded-3xl overflow-hidden high-contrast-shadow">
            <Image
              src={Images.experience.url}
              alt="Eagle Hunting"
              fill
              unoptimized
              className="object-cover"
              data-ai-hint={Images.experience.hint}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4 text-muted-foreground font-bold tracking-[0.4em] uppercase text-[9px]">
                <Bird className="h-4 w-4" />
                {uiText["ui.berkutchi.badge"]}
              </div>
              <h2 className="text-5xl md:text-6xl font-headline tracking-tighter leading-tight">{uiText["ui.berkutchi.title"]}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                {uiText["ui.berkutchi.description"]}
              </p>
            </div>

            <div className="space-y-8">
              {cards.map((card, idx) => {
                const Icon = iconMap[card.title] || ShieldCheck
                return (
                  <div key={idx} className="flex gap-6 items-start max-w-md p-6 border border-border rounded-2xl hover:bg-secondary transition-colors">
                    <div className="h-10 w-10 flex items-center justify-center bg-foreground text-white rounded-xl shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold uppercase tracking-widest text-[11px]">{card.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed font-light">{card.description}</p>
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
