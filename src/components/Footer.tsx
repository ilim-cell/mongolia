import Image from "next/image"
import { Images } from "@/lib/placeholder-images"
import { uiText } from "@/lib/ui-text"
import { Compass } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-black text-white pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Image
          src={Images.footer.branding}
          alt="Footer background"
          fill
          className="object-cover grayscale"
          unoptimized
        />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-24 items-end">
          <div className="space-y-12">
            <div className="flex items-center gap-3">
              <Compass className="h-6 w-6 text-white" />
              <span className="text-2xl font-headline font-black tracking-tighter uppercase">{uiText["ui.nav.logo"]}</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm font-light">
              {uiText["ui.footer.description"]}
            </p>
          </div>
          
          <div className="md:text-right space-y-4">
            <div className="h-px w-full bg-white/10 mb-8" />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">
              {uiText["ui.footer.copyright"]}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
