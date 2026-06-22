'use server';
/**
 * @fileOverview A Genkit flow for generating personalized travel itineraries for Mongolia.
 *
 * - personalizedMongoliaItineraryGenerator - A function that generates a personalized travel itinerary for Mongolia.
 * - PersonalizedMongoliaItineraryInput - The input type for the personalizedMongoliaItineraryGenerator function.
 * - PersonalizedMongoliaItineraryOutput - The return type for the personalizedMongoliaItineraryGenerator function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PersonalizedMongoliaItineraryInputSchema = z.object({
  travelInterests: z
    .string()
    .describe(
      'A comma-separated list of travel interests (e.g., nomadic culture, adventure, food, historical sites).'
    ),
});
export type PersonalizedMongoliaItineraryInput = z.infer<
  typeof PersonalizedMongoliaItineraryInputSchema
>;

const PersonalizedMongoliaItineraryOutputSchema = z.object({
  itinerary: z
    .string()
    .describe(
      'A detailed, personalized travel itinerary for Mongolia based on the provided interests, including suggested destinations, activities, food, and practical advice.'
    ),
  highlights: z
    .array(z.string())
    .describe('A list of 3-5 key highlights or experiences recommended in the itinerary.'),
});
export type PersonalizedMongoliaItineraryOutput = z.infer<
  typeof PersonalizedMongoliaItineraryOutputSchema
>;

export async function personalizedMongoliaItineraryGenerator(
  input: PersonalizedMongoliaItineraryInput
): Promise<PersonalizedMongoliaItineraryOutput> {
  return personalizedMongoliaItineraryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedMongoliaItineraryPrompt',
  input: { schema: PersonalizedMongoliaItineraryInputSchema },
  output: { schema: PersonalizedMongoliaItineraryOutputSchema },
  prompt: `You are an AI Personal Concierge specializing in Mongolian travel. Your goal is to create a personalized travel itinerary for a potential traveler based on their interests.

Here is detailed information about Mongolia:

**Mongolia Research**
Mongolia is a large country in **East or Central Asia** known for its spectacular grasslands, freezing winters, and a long line of history. Much of the land is open where horses, sheep, and other wildlife are common. Their capital city, Ulaanbaatar, is where modern life is most alive. But still, many families follow a nomadic lifestyle, moving with their animals to find the **best grazing lands** for their herds. Mongolia has an extreme climate with freezing winters and short, scorching summers, which has shaped how people live and eat. Mongolia is also famous for the Mongol Empire, created by **Genghis Khan** in the 1200s. This empire once ruled much of Eurasia. Today, Mongolia is a democratic country that blends old tradition with new ways of living. **Despite** modern technology and growing cities, Mongolian culture still values hospitality, respect for nature, and strong family ties. About 1/3 of the Mongolian population still lives in traditional houses called "gers," which can be deconstructed and moved.

**Food**
Mongolian food is simple, nourishing, and filling, suiting the country’s cold climate and nomadic lifestyle. Dishes are usually made to give people enough energy for outdoor work and travel. Popular foods include Buuz (steamed meat dumpling), Khuushuur (fried meat pastries), and Tsuivan (a noodle and meat dish).

**Landmarks**
Yolyn Am (Valley of the Vultures) in the Gobi Desert is a narrow mountain valley where a sheet of ice stays frozen deep into summer. Steep cliffs block sunlight, keeping the floor cool even when the desert outside is scorching.

**Hospitality Reference**
Hospitality is an everyday part of life on the Mongolian steppe. Visitors to any rural ail (« encampment ») expect to be offered food, drink and, if need be, a place for the night. Mongolian everyday hospitality can be seen to be enactional, not transactional.

Based on the user's travel interests: {{{travelInterests}}}

Generate a detailed, personalized travel itinerary for Mongolia. The itinerary should suggest relevant destinations, activities, and food experiences. Also include some practical advice relevant to the Mongolian climate or culture.

Structure the response as follows:

**Itinerary Title**
[A catchy title for the itinerary]

**Introduction**
[A brief welcoming paragraph]

**Suggested Itinerary**
[Detailed daily or thematic itinerary. Suggest specific places or activities like: Ulaanbaatar exploration, Gobi Desert adventure (Yolyn Am), Altai Mountains (eagle hunting experience), nomadic ger stay, traditional food tastings (Buuz, Khuushuur, Airag), cultural performances, etc.]

**Practical Advice**
[Include tips on climate, packing, cultural etiquette, or other relevant advice based on the context and interests.]

**Highlights**
[List 3-5 unique experiences or destinations from the itinerary.]`,
});

const personalizedMongoliaItineraryFlow = ai.defineFlow(
  {
    name: 'personalizedMongoliaItineraryFlow',
    inputSchema: PersonalizedMongoliaItineraryInputSchema,
    outputSchema: PersonalizedMongoliaItineraryOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);