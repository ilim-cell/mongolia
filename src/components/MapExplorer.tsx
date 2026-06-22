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
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="order-2 lg:order-1 relative aspect-[4/5] overflow-hidden bg-slate-200">
            <Image
              src={Images.landmarks.url}
              alt="Mongolian Landscapes"
              fill
              unoptimized
              className="object-cover grayscale"
              data-ai-hint={Images.landmarks.hint}
            />
            <div className="absolute top-8 left-8">
              <div className="glass-dark text-white px-6 py-2 text-[10px] font-bold uppercase tracking-[0.4em]">
                Regional Archive
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-8xl font-headline leading-none uppercase text-black">{uiText["ui.mapExplorer.title"]}</h2>
              <p className="text-lg md:text-xl text-black/50 font-light max-w-md">{uiText["ui.mapExplorer.description"]}</p>
            </div>

            <div className="space-y-6">
              {landmarks.map((landmark, idx) => (
                <div key={idx} className="p-10 bg-white border border-black/10 hover:border-black transition-all">
                  <div className="flex items-center gap-6 mb-6">
                    <span className="material-symbols-rounded text-3xl text-black/20">location_on</span>
                    <h3 className="text-2xl font-black uppercase">{landmark.title}</h3>
                  </div>
                  <p className="text-black/60 leading-relaxed text-sm font-light mb-8">
                    {landmark.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {landmark.badges.map((b, bIdx) => (
                      <Badge key={bIdx} variant="outline" className="text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 border-black/10 rounded-none">
                         {b}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}