import Image from "next/image"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"

export default function GuidePage() {
  const guides = [
    { title: uiText["ui.survival.guide1.title"], desc: uiText["ui.survival.guide1.description"], icon: "thermostat" },
    { title: uiText["ui.survival.guide2.title"], desc: uiText["ui.survival.guide2.description"], icon: "backpack" },
    { title: uiText["ui.survival.guide3.title"], desc: uiText["ui.survival.guide3.description"], icon: "temple_buddhist" },
    { title: uiText["ui.survival.guide4.title"], desc: uiText["ui.survival.guide4.description"], icon: "explore" },
  ]

  return (
    <main className="pt-40 pb-32">
      <div className="section-container">
        <div className="space-y-32">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30">Protocol & Logistics</span>
                <h1 className="heading-lg">{uiText["ui.survival.title"]}</h1>
                <p className="text-2xl text-black/60 font-light leading-relaxed">
                  {uiText["ui.survival.description"]}
                </p>
              </div>
              <div className="grid gap-4">
                {guides.map((g, i) => (
                  <div key={i} className="flex items-center gap-10 p-8 border border-black/5 bg-slate-50 hover:bg-black hover:text-white transition-all duration-500 group">
                    <span className="material-symbols-rounded text-3xl text-black/20 group-hover:text-white/40">{g.icon}</span>
                    <div className="space-y-1">
                      <h3 className="text-[11px] font-black uppercase tracking-[0.4em]">{g.title}</h3>
                      <p className="text-xs font-light opacity-50">{g.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <div className="relative aspect-[4/5] overflow-hidden border border-black/5 shadow-2xl">
                <Image 
                  src={Images.survival.main}
                  alt="Survival Main"
                  fill
                  className="object-cover grayscale"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="relative h-[600px] w-full overflow-hidden border border-black/5 bg-black">
             <Image 
               src={Images.survival.gearPack}
               alt="Survival Gear Detail"
               fill
               className="object-cover opacity-50 grayscale"
               unoptimized
             />
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="glass-dark p-20 text-center space-y-8 max-w-2xl border border-white/10">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Technical Deployment</span>
                  <h2 className="text-5xl font-headline font-black text-white uppercase leading-none">Gear Critical</h2>
                  <p className="text-sm text-white/60 font-light leading-relaxed">Ensure all field operations are supported by verified medical and logistical data provided by local nomadic nodes. Prepare for extreme seasonal temperature swings (dzud).</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </main>
  )
}
