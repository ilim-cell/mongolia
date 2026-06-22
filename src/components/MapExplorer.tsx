import Image from "next/image"
import { MapPin, ThermometerSnowflake, Wind } from "lucide-react"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Badge } from "@/components/ui/badge"
import content from "@/lib/content.json"

export function MapExplorer() {
  const yolynAm = PlaceHolderImages.find(img => img.id === 'yolyn-am')

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline mb-4">{content.mapExplorer.title}</h2>
          <p className="text-muted-foreground">{content.mapExplorer.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            {content.mapExplorer.landmarks.map((landmark, idx) => {
              const Icon = idx === 0 ? ThermometerSnowflake : Wind
              return (
                <div key={idx} className="group space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 ${idx === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all`}>
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-headline font-bold">{landmark.title}</h3>
                  </div>
                  <p className="text-muted-foreground pl-14">
                    {landmark.description}
                  </p>
                  <div className="flex gap-2 pl-14">
                    {landmark.badges.map((b, bIdx) => (
                      <Badge key={bIdx} variant="outline" className="flex gap-1 items-center">
                        {bIdx === 0 && <Icon className="h-3 w-3" />} {b}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            {yolynAm && (
              <Image
                src={yolynAm.imageUrl}
                alt={yolynAm.description}
                fill
                className="object-cover"
                data-ai-hint={yolynAm.imageHint}
              />
            )}
            <div className="absolute top-8 left-8">
              <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-border shadow-sm">
                <span className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-bold uppercase text-primary">Featured Destination</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}