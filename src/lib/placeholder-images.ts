import imagesData from './images.json';

/**
 * A utility to safely retrieve images from the central registry.
 * Prevents empty string errors by returning a fallback.
 */
const safeImage = (url: string | undefined): string => {
  if (!url || typeof url !== 'string' || url.trim() === "") {
    return "https://picsum.photos/seed/fallback/1200/800";
  }
  return url;
};

export const Images = {
  hero: {
    main: safeImage(imagesData.hero),
    landscape: safeImage(imagesData.hero_primary_landscape),
  },
  heritage: {
    main: safeImage(imagesData.heritage),
  },
  landmarks: {
    main: safeImage(imagesData.landmarks),
    vultureIce: safeImage(imagesData.landmarks_vulture_valley_ice),
  },
  food: {
    main: safeImage(imagesData.food),
    steamed: safeImage(imagesData.food_traditional_buuz_steamed),
  },
  experience: {
    main: safeImage(imagesData.experience),
    eagleMountain: safeImage(imagesData.experience_eagle_hunter_mountain),
  },
  survival: {
    main: safeImage(imagesData.survival),
    gearPack: safeImage(imagesData.survival_wilderness_gear_pack),
  },
  gallery: {
    sunset: safeImage(imagesData.gallery_steppes_sunset),
    horse: safeImage(imagesData.gallery_horse_riding_culture),
    city: safeImage(imagesData.gallery_ulaanbaatar_modern_skyline),
  },
  footer: {
    branding: safeImage(imagesData.footer_branding_logo_background),
  }
};
