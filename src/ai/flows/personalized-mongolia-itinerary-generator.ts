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
Mongolian food is simple, nourishing, and filling, suiting the country’s cold climate and nomadic lifestyle. Because farming is difficult in many areas, meals rely heavily on meat and dairy from wildlife such as sheep, cows, and goats. Dishes are usually made to give people enough energy for outdoor work and travel. Popular foods include Buuz (steamed meat dumpling), Khuushuur (fried meat pastries), and Tsuivan (a noodle and meat dish).

**Landmarks**
Yolyn Am: Yolyn Am is a deep narrow valley in the Gurvan Saikhan Mountains. Yolyn Am means "valley of the vultures" in Mongolian. Yolyn Am is a narrow mountain valley in the Gobi Desert where a long sheet of ice stays frozen for much of the year. The cliffs are so tall and close together that sunlight barely reaches the ground, keeping the valley cool even when the desert outside is hot. A small stream freezes again and again, building thick layers of ice that can last into summer, making the place feel like a hidden pocket of cold inside a dry, warm desert.

Yolyn Am, also known as Eagle's Beak Canyon, is a prominent natural landmark situated within the Gobi Gurvansaikhan National Park in Ömnögovi Province, Mongolia. While often described as being located in the Gobi Desert, it is technically positioned at the northern foothills where the mountainous terrain transitions into the arid basin, rather than in the deep, flat sandy expanse of the desert center. This specific topography is crucial to its existence, as the canyon's steep, narrow walls create a microclimate that blocks direct sunlight year-round, allowing a stream at the bottom to maintain a permanent patch of ice even during the region's extreme summer heat. Consequently, Yolyn Am represents a unique geological formation where the harsh desert environment meets protected mountainous shelter, making it a distinct feature within the broader Gobi ecosystem.

**Hospitality Reference**
Hospitality is an everyday part of life on the Mongolian steppe. Visitors to any rural ail (« encampment ») expect to be offered food, drink and, if need be, a place for the night. Mongolian everyday hospitality can be seen to be enactional, not transactional; its practices are materializations of the roles of host and guest and do not imply some sort of return. It is an expression of the status of the householders and their ability to fulfill a a public norm.

**Yurt Statistic Reference**
Approximately 25 to 30 percent of Mongolia’s population continues to live in traditional yurts. These dwellings remain central to nomadic and semi‑nomadic lifestyles in rural provinces, offering portability and resilience against Mongolia’s extreme climate. Yurts are also widespread in urban areas, with large districts in Ulaanbaatar formed by families migrating from the countryside. Estimates suggest between 200,000 and 250,000 yurts are in use today.

**Agriculture Hardships Reference**
Mongolia may be experiencing a more radical transformation of its traditional way of life than any other place in Asia. Thirty percent of Mongolians are still nomadic herders, living in traditional gers, or yurts, on the vast, empty steppes. But today those yurts sport solar panels and satellite dishes. Nearly half of Mongolia’s population now lives in the capital city of Ulaanbaatar.

**Diet Reference**
Traditional Mongolian diets rely heavily on meat and dairy products. This dietary pattern is deeply rooted in the country's nomadic heritage and its harsh continental climate, which limits the ability to grow crops for much of the year. The economy has been based on animal husbandry. Meat is crucial for surviving extreme winters. Dairy is a central component, especially during the summer milking season. Popular dairy products include Airag (fermented mare's milk) and Tsagaan Ail (dried curds, cheese, yogurt). Boiled Milk Tea is a daily staple. While modern urban lifestyles are introducing more variety, the traditional culinary identity is built on meat and dairy.

**Eagle Hunting Reference**
The ancient and enduring tradition of Berkutchi, or eagle hunting, is found in the rugged, snow-capped Altai Mountains of western Mongolia’s Bayan-Ulgii province. It represents one of the last remaining instances where nomadic cultures actively hunt large game using trained golden eagles as primary partners in survival. This practice is deeply rooted in the heritage of the ethnic Kazakh community. At the heart of this tradition is a profound, almost spiritual symbiosis between the hunter and the bird, where the eagle is not viewed merely as a tool but as a revered family member. The training regimen is a rigorous two-year odyssey involving trust-building and acclimation. Once fully trained, the eagle joins the hunter in the harsh winter months to hunt prey like foxes, hares, and occasionally wolves. This tradition is steeped in folklore and ceremonial rites, with eagles treated with immense respect and eventually released back into the wild. Modern challenges include tourism, commercialization, and ecological concerns, but the tradition endures, with even female eagle hunters now emerging, notably Aisholpan Nurgaiv.

Based on the user's travel interests: {{{travelInterests}}}

Generate a detailed, personalized travel itinerary for Mongolia. The itinerary should suggest relevant destinations, activities, and food experiences. Also include some practical advice relevant to the Mongolian climate or culture. The itinerary should be engaging and informative. Focus on making it appealing to someone with the stated interests.

Structure the response as follows:

**Itinerary Title**
[A catchy title for the itinerary]

**Introduction**
[A brief welcoming paragraph]

**Suggested Itinerary**
[Detailed daily or thematic itinerary. Combine relevant information from the context above based on interests. Suggest specific places or activities like: Ulaanbaatar exploration, Gobi Desert adventure (Yolyn Am), Altai Mountains (eagle hunting experience), nomadic ger stay, traditional food tastings (Buuz, Khuushuur, Airag), cultural performances, etc. Emphasize aspects related to the provided interests.]

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
