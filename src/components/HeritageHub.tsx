
import Image from "next/image"
import { Heart, Users, Home, ShieldCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function HeritageHub() {
  const landscape = PlaceHolderImages.find(img => img.id === 'nomadic-ger')

  return (
    <section id="heritage" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-headline leading-tight">The Soul of the <span className="text-primary">Steppe</span></h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Mongolian culture is a tapestry woven from nomadic freedom, hospitality, and a deep respect for the natural world.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-headline">Radical Hospitality</h3>
                <p className="text-muted-foreground">
                  In the vast steppe, hospitality is enactional, not transactional. Every visitor to a rural ail (encampment) is welcomed as a public norm.
                </p>
              </div>
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <Home className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-headline">The Ger Lifestyle</h3>
                <p className="text-muted-foreground">
                  About 30% of Mongolians still live in traditional gers (yurts). These portable dwellings offer resilience against extreme climates.
                </p>
              </div>
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-headline">Legacy of Empire</h3>
                <p className="text-muted-foreground">
                  Founded by Genghis Khan in the 1200s, the Mongol Empire's influence on Eurasian history remains a point of deep pride.
                </p>
              </div>
              <div className="space-y-3">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-headline">Modern Harmony</h3>
                <p className="text-muted-foreground">
                  Ulaanbaatar blends modern urban life with ancient traditions, creating a unique democratic cultural identity.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              {landscape && (
                <Image
                  src={landscape.imageUrl}
                  alt={landscape.description}
                  width={800}
                  height={1000}
                  className="object-cover h-[600px] w-full"
                  data-ai-hint={landscape.imageHint}
                />
              )}
            </div>
            <div className="absolute -bottom-8 -left-8 z-20 bg-white p-8 rounded-xl shadow-xl max-w-xs border border-border">
              <p className="text-primary font-bold text-4xl font-headline mb-1">30%</p>
              <p className="text-muted-foreground font-medium">of the population still follow the nomadic way of life on the steppe.</p>
            </div>
            <div className="absolute -top-12 -right-12 h-64 w-64 bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
