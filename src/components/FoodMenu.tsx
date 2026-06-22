
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Utensils, Wheat, Beef } from "lucide-react"

export function FoodMenu() {
  const foodImg = PlaceHolderImages.find(img => img.id === 'mongolian-buuz')

  const items = [
    {
      name: "Buuz",
      desc: "Steamed meat dumplings, juicy and filling, a staple of every celebration.",
      icon: <Beef className="h-4 w-4" />
    },
    {
      name: "Khuushuur",
      desc: "Deep-fried meat pastries that provide essential energy for the nomadic life.",
      icon: <Utensils className="h-4 w-4" />
    },
    {
      name: "Tsuivan",
      desc: "A hearty noodle and meat dish, stir-fried to perfection with mountain herbs.",
      icon: <Wheat className="h-4 w-4" />
    },
    {
      name: "Airag",
      desc: "Fermented mare's milk, a national delicacy and a symbol of summer.",
      icon: <Utensils className="h-4 w-4" />
    }
  ]

  return (
    <section id="food" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline mb-4">Taste of the Steppe</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            "Meat for the winter, dairy for the summer." Discover a culinary tradition built on nourishment and resilience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <Card key={i} className="hover:border-primary/40 transition-colors border-border group">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded bg-background flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="font-headline font-bold text-xl mb-2">{item.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl border-8 border-background">
            {foodImg && (
              <Image
                src={foodImg.imageUrl}
                alt={foodImg.description}
                fill
                className="object-cover"
                data-ai-hint={foodImg.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Signature Dish</p>
                <h4 className="text-3xl font-headline">Handmade Buuz</h4>
                <p className="text-white/80">Traditionally prepared with high-fat mutton to sustain during cold winters.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
