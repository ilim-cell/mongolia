import Image from "next/image"
import { Bird, ShieldCheck, Mountain } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import content from "@/lib/content.json"

const iconMap: Record<string, any> = {
  "The Sacred Bond": ShieldCheck,
  "Winter Survival": Mountain
}

export function Berkutchi() {
  const eagleImg = PlaceHolderImages.find(img => img.id === 'eagle-hunter')

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden text-white flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 relative h-[400px] lg:h-auto">
            {eagleImg && (
              <Image
                src={eagleImg.imageUrl}
                alt={eagleImg.description}
                fill
                className="object-cover"
                data-ai-hint={eagleImg.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="w-full lg:w-1/2 p-8 lg:p-16 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-primary font-bold tracking-tighter uppercase text-sm">
                <Bird className="h-5 w-5" />
                {content.berkutchi.badge}
              </div>
              <h2 className="text-4xl md:text-5xl font-headline leading-tight">{content.berkutchi.title}</h2>
              <p className="text-white/70 text-lg leading-relaxed font-light">
                {content.berkutchi.description}
              </p>
            </div>

            <div className="space-y-6">
              {content.berkutchi.cards.map((card, idx) => {
                const Icon = iconMap[card.title] || ShieldCheck
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 h-10 w-10 rounded-full border border-primary/40 flex items-center justify-center text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold font-headline text-xl">{card.title}</h4>
                      <p className="text-white/50 text-sm">{card.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all hover:scale-105">
              {content.berkutchi.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}