import Image from "next/image"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"
import { Badge } from "@/components/ui/badge"

export default function LandmarksPage() {
  const landmarks = [
    {
      title: uiText["ui.mapExplorer.landmark1.title"],
      desc: uiText["ui.mapExplorer.landmark1.description"],
      badges: [uiText["ui.mapExplorer.landmark1.badge1"], uiText["ui.mapExplorer.landmark1.badge2"]]
    },
    {
      title: uiText["ui.mapExplorer.landmark2.title"],
      desc: uiText["ui.mapExplorer.landmark2.description"],
      badges: [uiText["ui.mapExplorer.landmark2.badge1"], uiText["ui.mapExplorer.landmark2.badge2"]]
    }
  ]

  return (
    <main className="pt-40 pb-32">
      <div className="section-container">
        <div className="space-y-24">
          <div className="max-w-4xl space-y-8">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30">Topographic Nodes</span>
            <h1 className="heading-lg">{uiText["ui.mapExplorer.title"]}</h1>
            <p className="text-2xl text-black/60 font-light leading-relaxed">
              {uiText["ui.mapExplorer.description"]}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="relative aspect-square overflow-hidden border border-black/5 bg-slate-50">
              <Image 
                src={Images.landmarks.main}
                alt="Map Region"
                fill
                className="object-cover grayscale"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="relative aspect-square overflow-hidden border border-black/5 bg-slate-50">
              <Image 
                src={Images.landmarks.vultureIce}
                alt="Yolyn Am Detail"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute bottom-0 inset-x-0 glass-dark p-12 text-white">
                 <h3 className="text-4xl font-headline font-black uppercase mb-4">Permanent Archive</h3>
                 <p className="text-xs text-white/40 font-light leading-relaxed max-w-sm">Geographic anomalies documented within the Gobi Gurvansaikhan region.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {landmarks.map((l, i) => (
              <div key={i} className="p-16 border border-black/10 hover:bg-black hover:text-white transition-all duration-700 group">
                <span className="material-symbols-rounded text-5xl mb-12 text-black/10 group-hover:text-white/20 transition-colors">location_on</span>
                <h3 className="text-3xl font-headline font-black uppercase mb-6 tracking-tight">{l.title}</h3>
                <p className="text-lg font-light opacity-60 leading-relaxed mb-10">{l.desc}</p>
                <div className="flex gap-4">
                  {l.badges.map((b, bi) => (
                    <Badge key={bi} variant="outline" className="rounded-none border-current/20 uppercase text-[9px] font-black tracking-widest px-4 py-1.5">{b}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
