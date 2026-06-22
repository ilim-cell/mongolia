
import { Sun, Snowflake, Briefcase, Map } from "lucide-react"
import { uiText } from "@/lib/ui-text"

const iconMap: Record<string, any> = {
  "Climate Control": Snowflake,
  "Essential Gear": Briefcase,
  "Cultural Etiquette": Map,
  "Navigation": Sun
}

export function SurvivalGuide() {
  const guides = [
    { title: uiText["ui.survival.guide1.title"], description: uiText["ui.survival.guide1.description"] },
    { title: uiText["ui.survival.guide2.title"], description: uiText["ui.survival.guide2.description"] },
    { title: uiText["ui.survival.guide3.title"], description: uiText["ui.survival.guide3.description"] },
    { title: uiText["ui.survival.guide4.title"], description: uiText["ui.survival.guide4.description"] },
  ]

  return (
    <section id="guide" className="section-padding bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20 text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-headline tracking-tighter">{uiText["ui.survival.title"]}</h2>
          <p className="text-muted-foreground font-light text-lg leading-relaxed">{uiText["ui.survival.description"]}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, i) => {
            const Icon = iconMap[guide.title] || Map
            return (
              <div key={i} className="p-8 border border-border rounded-2xl hover:bg-secondary transition-all hover:-translate-y-2 group">
                <div className="h-12 w-12 flex items-center justify-center mb-6 bg-foreground text-white rounded-xl group-hover:scale-110 transition-transform">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-sm uppercase tracking-widest mb-3">{guide.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
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
