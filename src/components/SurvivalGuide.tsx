import { Sun, Snowflake, Briefcase, Map } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
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
    <section id="guide" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 space-y-4 max-w-xl">
          <h2 className="text-4xl font-headline text-foreground tracking-tight">{uiText["ui.survival.title"]}</h2>
          <p className="text-muted-foreground font-light text-sm">{uiText["ui.survival.description"]}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guides.map((guide, i) => {
            const Icon = iconMap[guide.title] || Map
            return (
              <div key={i} className="p-10 border border-border group hover:bg-secondary/20 transition-all duration-300">
                <div className="h-10 w-10 flex items-center justify-center mb-8 border border-border text-primary group-hover:border-primary transition-all">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="font-bold uppercase tracking-widest text-[10px] text-foreground mb-4">{guide.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed font-light">{guide.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}