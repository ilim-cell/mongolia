
import Image from "next/image"
import { MapPin, ThermometerSnowflake, Wind } from "lucide-react"
import { Images } from "@/lib/placeholder-images"
import { Badge } from "@/components/ui/badge"
import { uiText } from "@/lib/ui-text"

export function MapExplorer() {
  const landmarks = [
    {
      title: uiText["ui.mapExplorer.landmark1.title"],
      description: uiText["ui.mapExplorer.landmark1.description"],
      badges: [uiText["ui.mapExplorer.landmark1.badge1"], uiText["ui.mapExplorer.landmark1.badge2"]]
    },
    {
      title: uiText["ui.mapExplorer.landmark2.title"],
      description: uiText["ui.mapExplorer.landmark2.description"],
      badges: [uiText["ui.mapExplorer.landmark2.badge1"], uiText["ui.mapExplorer.landmark2.badge2"]]
    }
  ]

  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative aspect-[4/5] rounded-3xl overflow-hidden high-contrast-shadow">
            <Image
              src={Images.landmarks.url}
              alt="Mongolian Landscapes"
              fill
              unoptimized
              className="object-cover"
              data-ai-hint={Images.landmarks.hint}
            />
            <div className="absolute top-8 left-8">
              <div className="bg-black text-white px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] rounded-full">
                Territory Map
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-headline tracking-tight">{uiText["ui.mapExplorer.title"]}</h2>
              <p className="text-lg text-muted-foreground font-light">{uiText["ui.mapExplorer.description"]}</p>
            </div>

            <div className="space-y-10">
              {landmarks.map((landmark, idx) => {
                const Icon = idx === 0 ? ThermometerSnowflake : Wind
                return (
                  <div key={idx} className="group p-8 bg-white border border-border rounded-2xl hover:border-foreground transition-all">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-secondary flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-white transition-all">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold">{landmark.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm font-light mb-6">
                      {landmark.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {landmark.badges.map((b, bIdx) => (
                        <Badge key={bIdx} variant="outline" className="text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 border-border bg-white text-muted-foreground rounded-full">
                           {b}
                        </Badge>
                      ))}
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
