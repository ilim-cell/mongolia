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
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mb-24">
          <h2 className="text-5xl md:text-7xl font-headline mb-6 text-slate-900">{uiText["ui.mapExplorer.title"]}</h2>
          <p className="text-lg text-slate-500 font-light">{uiText["ui.mapExplorer.description"]}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-20">
            {landmarks.map((landmark, idx) => {
              const Icon = idx === 0 ? ThermometerSnowflake : Wind
              return (
                <div key={idx} className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-headline font-bold text-slate-900">{landmark.title}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed font-light pl-16">
                    {landmark.description}
                  </p>
                  <div className="flex gap-3 pl-16">
                    {landmark.badges.map((b, bIdx) => (
                      <Badge key={bIdx} variant="outline" className="text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 border-border text-slate-500 rounded-none">
                        {bIdx === 0 && <Icon className="h-3 w-3 mr-2" />} {b}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="relative aspect-square lg:aspect-auto lg:h-[700px] overflow-hidden group">
            {yolynAm && (
              <Image
                src={yolynAm.imageUrl}
                alt={yolynAm.description}
                fill
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                data-ai-hint={yolynAm.imageHint}
              />
            )}
            <div className="absolute inset-0 border-[24px] border-white pointer-events-none" />
            <div className="absolute top-12 left-12">
              <div className="bg-slate-950 px-6 py-3 text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                Field Documentation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
