
import Image from "next/image"
import { Navigation } from "@/components/Navigation"
import { Concierge } from "@/components/Concierge"
import { HeritageHub } from "@/components/HeritageHub"
import { FoodMenu } from "@/components/FoodMenu"
import { Berkutchi } from "@/components/Berkutchi"
import { MapExplorer } from "@/components/MapExplorer"
import { SurvivalGuide } from "@/components/SurvivalGuide"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { ArrowRight, Compass } from "lucide-react"

export default function Home() {
  const hero = PlaceHolderImages.find(img => img.id === 'hero-landscape')

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            {hero && (
              <Image
                src={hero.imageUrl}
                alt={hero.description}
                fill
                className="object-cover brightness-50"
                priority
                data-ai-hint={hero.imageHint}
              />
            )}
          </div>
          
          <div className="relative z-10 max-w-5xl px-4 text-center space-y-8 fade-in-sunrise">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-bold uppercase tracking-widest">
              <Compass className="h-4 w-4 text-primary" />
              <span>Gateway to the East</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline font-bold leading-tight">
              Steppe <span className="text-primary italic">Odyssey</span>
            </h1>
            <p className="text-xl md:text-2xl font-body max-w-3xl mx-auto text-white/90 leading-relaxed">
              Venture into the land of eternal blue sky. From nomadic heritage to the spirit of the Khan, your Mongolian adventure begins here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a href="#itinerary" className="px-10 py-5 bg-primary text-white font-bold rounded-full text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
                Plan Your Journey <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#heritage" className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold rounded-full text-lg hover:bg-white/20 transition-all">
                Explore Culture
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-px h-16 bg-gradient-to-b from-white to-transparent" />
          </div>
        </section>

        <HeritageHub />
        <MapExplorer />
        <Concierge />
        <FoodMenu />
        <Berkutchi />
        <SurvivalGuide />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Compass className="h-6 w-6 text-primary" />
                <span className="text-2xl font-headline font-bold text-white tracking-tight">Steppe Odyssey</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                Dedicated to promoting the sustainable tourism and rich cultural heritage of the Mongolian people.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-headline font-bold text-lg">Quick Links</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#itinerary" className="hover:text-primary transition-colors">AI Concierge</a></li>
                <li><a href="#heritage" className="hover:text-primary transition-colors">Cultural Heritage</a></li>
                <li><a href="#food" className="hover:text-primary transition-colors">Nomadic Cuisine</a></li>
                <li><a href="#experience" className="hover:text-primary transition-colors">Berkutchi Experience</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-headline font-bold text-lg">Discover</h4>
              <ul className="space-y-2 text-white/60 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Gobi Desert</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Altai Mountains</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Lake Khuvsgul</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Ulaanbaatar</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-headline font-bold text-lg">Connect</h4>
              <p className="text-white/60 text-sm">Join our newsletter for exclusive travel tips and nomadic stories.</p>
              <div className="flex gap-2">
                <input className="bg-white/10 border-white/20 rounded-lg px-4 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-primary" placeholder="Email" />
                <button className="bg-primary px-4 py-2 rounded-lg text-sm font-bold">Join</button>
              </div>
            </div>
          </div>
          
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
            <p>&copy; 2024 Steppe Odyssey. Preserving the Nomadic Soul.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
