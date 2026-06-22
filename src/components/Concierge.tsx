"use client"

import * as React from "react"
import { Sparkles, Loader2, ListChecks, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { personalizedMongoliaItineraryGenerator, type PersonalizedMongoliaItineraryOutput } from "@/ai/flows/personalized-mongolia-itinerary-generator"
import { uiText } from "@/lib/ui-text"

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
    <section id="itinerary" className="py-32 bg-background border-y border-border/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-slate-950 text-white border-none rounded-none px-6 py-2 text-[10px] tracking-[0.3em]" variant="outline">
            {uiText["ui.concierge.badge"]}
          </Badge>
          <h2 className="text-5xl md:text-6xl font-headline text-slate-900">{uiText["ui.concierge.title"]}</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-light leading-relaxed">
            {uiText["ui.concierge.description"]}
          </p>
        </div>

        <div className="space-y-12">
          <div className="space-y-6">
            <Textarea
              placeholder={uiText["ui.concierge.placeholder"]}
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              className="min-h-[160px] text-lg bg-white/50 border-border rounded-none focus:ring-primary p-8 transition-all"
            />
            <Button 
              onClick={handleGenerate} 
              disabled={loading || !interests}
              className="w-full h-16 text-xs font-bold uppercase tracking-[0.4em] bg-slate-950 hover:bg-slate-900 text-white rounded-none transition-all"
            >
              {loading ? (
                <><Loader2 className="mr-3 h-4 w-4 animate-spin" /> {uiText["ui.concierge.buttonLoading"]}</>
              ) : (
                <><Sparkles className="mr-3 h-4 w-4" /> {uiText["ui.concierge.buttonDefault"]}</>
              )}
            </Button>
          </div>

          {itinerary && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <Card className="border-border shadow-2xl rounded-none overflow-hidden bg-white">
                <div className="bg-slate-50 border-b border-border px-8 py-6">
                  <h3 className="text-xl font-headline font-bold text-slate-900 tracking-tight">{uiText["ui.concierge.resultsHeader"]}</h3>
                </div>
                <CardContent className="p-10 space-y-12">
                  <div className="prose prose-slate max-w-none">
                    <div className="whitespace-pre-wrap text-lg leading-relaxed text-slate-700 font-light">
                      {itinerary.itinerary}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10 pt-10 border-t border-border/50">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-widest text-xs">
                        <ListChecks className="h-4 w-4" />
                        <h4>{uiText["ui.concierge.highlightsHeader"]}</h4>
                      </div>
                      <ul className="space-y-4">
                        {itinerary.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-4 text-sm text-slate-500 leading-relaxed">
                            <span className="text-primary mt-1 font-bold">0{i+1}</span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-10 bg-slate-50 border border-border/50">
                      <div className="flex items-center gap-3 text-slate-400 font-bold uppercase tracking-widest text-xs mb-4">
                        <Info className="h-4 w-4" />
                        <h4>Reference</h4>
                      </div>
                      <p className="text-xs text-slate-400 italic leading-relaxed">
                        {uiText["ui.concierge.travelNote"]}
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
