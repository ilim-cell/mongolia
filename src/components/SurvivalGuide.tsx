
import { uiText } from "@/lib/ui-text"

const iconMap: Record<string, string> = {
  "Climate Control": "thermostat",
  "Essential Gear": "backpack",
  "Cultural Etiquette": "temple_buddhist",
  "Navigation": "explore"
}

export function SurvivalGuide() {
  const guides = [
    { title: uiText["ui.survival.guide1.title"], description: uiText["ui.survival.guide1.description"] },
    { title: uiText["ui.survival.guide2.title"], description: uiText["ui.survival.guide2.description"] },
    { title: uiText["ui.survival.guide3.title"], description: uiText["ui.survival.guide3.description"] },
    { title: uiText["ui.survival.guide4.title"], description: uiText["ui.survival.guide4.description"] },
  ]

  return (
    <section id="guide" className="section-padding bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-headline tracking-tighter text-black">{uiText["ui.survival.title"]}</h2>
          <p className="text-black/50 font-light text-xl leading-relaxed">{uiText["ui.survival.description"]}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guides.map((guide, i) => {
            const icon = iconMap[guide.title] || "map"
            return (
              <div key={i} className="p-10 glass rounded-[3rem] hover:bg-black hover:text-white transition-all duration-500 group">
                <div className="h-16 w-16 flex items-center justify-center mb-10 bg-black text-white rounded-2xl group-hover:bg-white group-hover:text-black transition-all">
                  <span className="material-symbols-rounded text-3xl">{icon}</span>
                </div>
                <h3 className="font-bold text-[11px] uppercase tracking-[0.4em] mb-4">{guide.title}</h3>
                <p className="text-[13px] text-black/50 group-hover:text-white/60 leading-relaxed font-light">
                  {guide.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
