"use client"

import * as React from "react"
import { Sparkles, Loader2, ListChecks, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { personalizedMongoliaItineraryGenerator, type PersonalizedMongoliaItineraryOutput } from "@/ai/flows/personalized-mongolia-itinerary-generator"
import content from "@/lib/content.json"

export function Concierge() {
  const [interests, setInterests] = React.useState("")
  const [loading, setLoading] = React.useState(false)
  const [itinerary, setItinerary] = React.useState<PersonalizedMongoliaItineraryOutput | null>(null)

  const handleGenerate = async () => {
    if (!interests.trim()) return
    setLoading(true)
    try {
      const result = await personalizedMongoliaItineraryGenerator({ travelInterests: interests })
      setItinerary(result)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="itinerary" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20" variant="outline">
            {content.concierge.badge}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-headline mb-4">{content.concierge.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {content.concierge.description}
          </p>
        </div>

        <div className="space-y-8">
          <Card className="border-border shadow-sm">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Textarea
                  placeholder={content.concierge.placeholder}
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                  className="min-h-[120px] text-lg bg-background/50"
                />
                <Button 
                  onClick={handleGenerate} 
                  disabled={loading || !interests}
                  className="w-full h-12 text-lg bg-primary hover:bg-primary/90"
                >
                  {loading ? (
                    <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> {content.concierge.buttonLoading}</>
                  ) : (
                    <><Sparkles className="mr-2 h-5 w-5" /> {content.concierge.buttonDefault}</>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {itinerary && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Card className="border-primary/20 shadow-lg overflow-hidden">
                <div className="bg-primary p-6 text-white">
                  <h3 className="text-2xl font-headline font-bold">{content.concierge.resultsHeader}</h3>
                </div>
                <CardContent className="p-8 space-y-8">
                  <div className="prose prose-stone max-w-none">
                    <div className="whitespace-pre-wrap text-lg leading-relaxed text-slate-700">
                      {itinerary.itinerary}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-primary font-bold">
                        <ListChecks className="h-5 w-5" />
                        <h4>{content.concierge.highlightsHeader}</h4>
                      </div>
                      <ul className="space-y-2">
                        {itinerary.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 bg-background rounded-lg border border-border">
                      <div className="flex items-center gap-2 text-secondary font-bold mb-2">
                        <Info className="h-5 w-5" />
                        <h4>Travel Note</h4>
                      </div>
                      <p className="text-sm text-muted-foreground italic">
                        {content.concierge.travelNote}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}