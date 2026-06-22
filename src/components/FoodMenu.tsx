import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Utensils, Wheat, Beef } from "lucide-react"
import content from "@/lib/content.json"

const iconMap: Record<string, any> = {
  "Buuz": Beef,
  "Khuushuur": Utensils,
  "Tsuivan": Wheat,
  "Airag": Utensils
}

export function FoodMenu() {
  const foodImg = PlaceHolderImages.find(img => img.id === 'mongolian-buuz')

  return (
    <section id="food" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-headline mb-4">{content.food.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto italic">
            {content.food.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid sm:grid-cols-2 gap-4">
            {content.food.items.map((item, i) => {
              const Icon = iconMap[item.name] || Utensils
              return (
                <Card key={i} className="hover:border-primary/40 transition-colors border-border group">
                  <CardContent className="p-6">
                    <div className="h-10 w-10 rounded bg-background flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="font-headline font-bold text-xl mb-2">{item.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
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
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">{content.food.featured.badge}</p>
                <h4 className="text-3xl font-headline">{content.food.featured.title}</h4>
                <p className="text-white/80">{content.food.featured.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}