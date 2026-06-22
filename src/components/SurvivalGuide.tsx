
import { Sun, Snowflake, Briefcase, Map } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function SurvivalGuide() {
  const guides = [
    {
      title: "Climate Control",
      desc: "Prepare for extreme temperature swings. Freezing winters (dzud) and scorching summers require technical layering.",
      icon: <Snowflake className="h-6 w-6" />,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Essential Gear",
      desc: "Pack high-quality wool, sturdy riding boots, and sun protection. Solar power is vital for staying connected on the steppe.",
      icon: <Briefcase className="h-6 w-6" />,
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Cultural Etiquette",
      desc: "Learn the rituals of the ger: enter with your right foot first, and never step on the threshold.",
      icon: <Map className="h-6 w-6" />,
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "Navigation",
      desc: "Off-roading is the norm. Trust local drivers and download offline maps for the vast, roadless grasslands.",
      icon: <Sun className="h-6 w-6" />,
      color: "bg-yellow-50 text-yellow-600"
    }
  ]

  return (
    <section id="guide" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-headline mb-4">Survival & Logistics</h2>
          <p className="text-muted-foreground">Expert advice for navigating the extreme Mongolian wilderness.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide, i) => (
            <Card key={i} className="border-none shadow-sm bg-white">
              <CardHeader>
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 ${guide.color}`}>
                  {guide.icon}
                </div>
                <CardTitle className="font-headline">{guide.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{guide.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
