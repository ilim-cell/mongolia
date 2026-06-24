import Image from "next/image"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"

export default function ExperiencePage() {
  return (
    <main className="pt-40 pb-32">
      <div className="section-container">
        <div className="space-y-24">
          <div className="grid lg:grid-cols-2 gap-24 items-end">
             <div className="space-y-8">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-black/30">Field Expedition</span>
               <h1 className="heading-lg">{uiText["ui.berkutchi.title"]}</h1>
               <p className="text-2xl text-black/60 font-light leading-relaxed">
                 {uiText["ui.berkutchi.description"]}
               </p>
             </div>
             <div className="p-8 border-l border-black/10">
               <span className="material-symbols-rounded text-6xl text-black/10 mb-6">flight</span>
               <p className="text-sm font-light text-black/40 leading-relaxed italic">
                 "The eagle is not a tool, but a partner in survival. They see the world from the eternal blue sky, and we see it from the steppe."
               </p>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/5] overflow-hidden border border-black/5">
              <Image 
                src={Images.experience.main}
                alt="Eagle Hunting"
                fill
                className="object-cover grayscale"
                unoptimized
              />
              <div className="absolute top-10 left-10 glass p-8 text-black">
                 <span className="text-[10px] font-black uppercase tracking-[0.4em]">{uiText["ui.berkutchi.badge"]}</span>
              </div>
            </div>
            <div className="space-y-8">
              <div className="relative aspect-video overflow-hidden border border-black/5 bg-slate-50">
                <Image 
                  src={Images.experience.eagleMountain}
                  alt="Altai Peaks"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="grid gap-6">
                {[
                  { title: uiText["ui.berkutchi.card1.title"], desc: uiText["ui.berkutchi.card1.description"] },
                  { title: uiText["ui.berkutchi.card2.title"], desc: uiText["ui.berkutchi.card2.description"] }
                ].map((card, i) => (
                  <div key={i} className="p-12 bg-black text-white space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.4em] text-white/40">{card.title}</h3>
                    <p className="text-lg font-light leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
