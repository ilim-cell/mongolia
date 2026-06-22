
import Image from "next/image"
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div className="order-2 lg:order-1 relative aspect-[3/4] rounded-[3.5rem] overflow-hidden high-contrast-shadow">
            <Image
              src={Images.landmarks.url}
              alt="Mongolian Landscapes"
              fill
              unoptimized
              className="object-cover"
              data-ai-hint={Images.landmarks.hint}
            />
            <div className="absolute top-8 left-8">
              <div className="glass-dark text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.4em] rounded-full">
                Regional Grid
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-16">
            <div className="space-y-8">
              <h2 className="text-5xl sm:text-6xl md:text-8xl font-headline tracking-tighter leading-[0.9] text-black">{uiText["ui.mapExplorer.title"]}</h2>
              <p className="text-xl text-black/50 font-light leading-relaxed max-w-md">{uiText["ui.mapExplorer.description"]}</p>
            </div>

            <div className="space-y-8">
              {landmarks.map((landmark, idx) => {
                return (
                  <div key={idx} className="group p-10 bg-white border border-black/5 rounded-[2.5rem] hover:border-black transition-all duration-700 hover:shadow-2xl">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="h-14 w-14 rounded-2xl bg-slate-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all">
                        <span className="material-symbols-rounded">location_on</span>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight">{landmark.title}</h3>
                    </div>
                    <p className="text-black/60 leading-relaxed text-sm font-light mb-8">
                      {landmark.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {landmark.badges.map((b, bIdx) => (
                        <Badge key={bIdx} variant="outline" className="text-[9px] font-bold uppercase tracking-[0.3em] px-5 py-2 border-black/10 bg-black/5 text-black/60 rounded-full">
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
