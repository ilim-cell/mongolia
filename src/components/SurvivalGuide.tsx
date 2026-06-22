import { Sun, Snowflake, Briefcase, Map } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import content from "@/lib/content.json"

const iconMap: Record<string, any> = {
  "Climate Control": Snowflake,
  "Essential Gear": Briefcase,
  "Cultural Etiquette": Map,
  "Navigation": Sun
}

const colorMap: Record<string, string> = {
  "Climate Control": "bg-blue-50 text-blue-600",
  "Essential Gear": "bg-orange-50 text-orange-600",
  "Cultural Etiquette": "bg-amber-50 text-amber-600",
  "Navigation": "bg-yellow-50 text-yellow-600"
}

export function SurvivalGuide() {
  return (
    <section id="guide" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-headline mb-4">{content.survival.title}</h2>
          <p className="text-muted-foreground">{content.survival.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.survival.guides.map((guide, i) => {
            const Icon = iconMap[guide.title] || Map
            return (
              <Card key={i} className="border-none shadow-sm bg-white">
                <CardHeader>
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 ${colorMap[guide.title] || 'bg-gray-50'}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="font-headline">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{guide.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}