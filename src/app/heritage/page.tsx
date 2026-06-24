import { Navigation } from "@/components/Navigation"
import { HeritageHub } from "@/components/HeritageHub"
import { Compass } from "lucide-react"
import { uiText } from "@/lib/ui-text"

export default function HeritagePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-grow pt-24 md:pt-32">
        <HeritageHub />
      </main>
      <footer className="bg-black text-white py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
             <div className="flex items-center gap-3">
                <Compass className="h-5 w-5 text-white" />
                <span className="text-xl font-headline font-bold tracking-tighter uppercase">{uiText["ui.nav.logo"]}</span>
              </div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
                {uiText["ui.footer.copyright"]}
              </p>
          </div>
        </div>
      </footer>
    </div>
  )
}