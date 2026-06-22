
import Image from "next/image"
import { MapPin } from "lucide-react"
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
    <section id="guide" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="order-2 lg:order-1 relative aspect-[3/4] sm:aspect-[16/9] lg:aspect-[3/4] rounded-3xl overflow-hidden high-contrast-shadow">
            <Image
              src={Images.landmarks.url}
              alt="Mongolian Landscapes"
              fill
              unoptimized
              className="object-cover"
              data-ai-hint={Images.landmarks.hint}
            />
            <div className="absolute top-6 left-6">
              <div className="bg-black text-white px-4 py-2 text-[9px] font-bold uppercase tracking-[0.3em] rounded-full">
                Regional Grid
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-headline tracking-tighter leading-none">{uiText["ui.mapExplorer.title"]}</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-md">{uiText["ui.mapExplorer.description"]}</p>
            </div>

            <div className="grid gap-6">
              {landmarks.map((landmark, idx) => {
                return (
                  <div key={idx} className="group p-8 bg-white border border-border rounded-2xl hover:border-black transition-all duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-bold tracking-tight">{landmark.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm font-light mb-6">
                      {landmark.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {landmark.badges.map((b, bIdx) => (
                        <Badge key={bIdx} variant="outline" className="text-[8px] font-bold uppercase tracking-widest px-3 py-1 border-slate-200 bg-slate-50 text-muted-foreground rounded-full">
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
