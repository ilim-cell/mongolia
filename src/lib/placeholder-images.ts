import imagesData from './images.json';

/**
 * A utility to safely retrieve images from the central registry.
 * Prevents empty string errors by returning a null or fallback.
 */
const safeImage = (url: string | undefined): string => {
  if (!url || url.trim() === "") return "https://picsum.photos/seed/fallback/1200/800";
  return url;
};

export const Images = {
  hero: {
    url: safeImage(imagesData.hero),
    detailed: safeImage(imagesData.hero_primary_landscape),
    hint: "mongolia landscape steppe horizon"
  },
  heritage: {
    url: safeImage(imagesData.heritage),
    detailed: safeImage(imagesData.heritage),
    hint: "mongolian nomadic culture ger yurt"
  },
  landmarks: {
    url: safeImage(imagesData.landmarks),
    detailed: safeImage(imagesData.landmarks_vulture_valley_ice),
    hint: "mongolia nature canyon mountains"
  },
  food: {
    url: safeImage(imagesData.food),
    detailed: safeImage(imagesData.food_traditional_buuz_steamed),
    hint: "mongolian cuisine traditional meat"
  },
  experience: {
    url: safeImage(imagesData.experience),
    detailed: safeImage(imagesData.experience_eagle_hunter_mountain),
    hint: "mongolian eagle hunter mountains snow"
  },
  survival: {
    url: safeImage(imagesData.survival),
    detailed: safeImage(imagesData.survival_wilderness_gear_pack),
    hint: "mongolia wilderness survival gear"
  },
  gallery: {
    sunset: safeImage(imagesData.gallery_steppes_sunset),
    horse: safeImage(imagesData.gallery_horse_riding_culture),
    city: safeImage(imagesData.gallery_ulaanbaatar_modern_skyline)
  },
  extra: {
    map: safeImage(imagesData.landmarks),
    prep: safeImage(imagesData.food_traditional_buuz_steamed),
    peaks: safeImage(imagesData.experience_eagle_hunter_mountain),
    kit: safeImage(imagesData.survival_wilderness_gear_pack),
    tea: safeImage(imagesData.heritage)
  }
};