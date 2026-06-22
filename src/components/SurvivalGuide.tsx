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
    <section id="guide" className="py-32 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="mb-24 space-y-4">
          <h2 className="text-5xl font-headline text-slate-900">{uiText["ui.survival.title"]}</h2>
          <p className="text-lg text-slate-500 font-light max-w-2xl">{uiText["ui.survival.description"]}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border overflow-hidden">
          {guides.map((guide, i) => {
            const Icon = iconMap[guide.title] || Map
            return (
              <Card key={i} className="border-none rounded-none shadow-none bg-white hover:bg-slate-50 transition-colors duration-500 group">
                <CardHeader className="p-10 pb-4">
                  <div className="h-10 w-10 border border-border flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="font-bold uppercase tracking-widest text-xs text-slate-900">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-10 pt-0">
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{guide.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
