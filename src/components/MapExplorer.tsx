import Image from "next/image"
import { MapPin, ThermometerSnowflake, Wind } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Badge } from "@/components/ui/badge"
import { uiText } from "@/lib/ui-text"

export function MapExplorer() {
  const yolynAm = PlaceHolderImages.find(img => img.id === 'yolyn-am')

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
    <section className="py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-headline text-foreground">{uiText["ui.mapExplorer.title"]}</h2>
              <p className="text-muted-foreground font-light">{uiText["ui.mapExplorer.description"]}</p>
            </div>

            <div className="space-y-16">
              {landmarks.map((landmark, idx) => {
                const Icon = idx === 0 ? ThermometerSnowflake : Wind
                return (
                  <div key={idx} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-8 w-8 rounded-full bg-white border border-border flex items-center justify-center text-primary">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <h3 className="text-xl font-headline font-bold text-foreground">{landmark.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm font-light">
                      {landmark.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {landmark.badges.map((b, bIdx) => (
                        <Badge key={bIdx} variant="outline" className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 border-border bg-white text-muted-foreground rounded-none">
                          {bIdx === 0 && <Icon className="h-3 w-3 mr-2" />} {b}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden bg-white p-4 border border-border">
            {yolynAm && (
              <Image
                src={yolynAm.imageUrl}
                alt={yolynAm.description}
                fill
                unoptimized
                className="object-cover grayscale p-4"
                data-ai-hint={yolynAm.imageHint}
              />
            )}
            <div className="absolute top-8 left-8">
              <div className="bg-foreground px-4 py-2 text-white text-[9px] font-bold uppercase tracking-[0.2em]">
                Geographic Reference
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}