import { CarModel } from '../models/car-model.interface';
import { NavLink } from '../models/nav-link.interface';
import { Testimonial } from '../models/testimonial.interface';

// Language
export const DEFAULT_LANGUAGE = 'en';
export const AVAILABLE_LANGUAGES: readonly string[] = ['en', 'de'];
export const LANGUAGE_STORAGE_KEY = 'greendrive-lang';

// Navigation
export const NAV_LINKS: readonly NavLink[] = [
  { labelKey: 'NAV.ABOUT', sectionId: 'about' },
  { labelKey: 'NAV.MODELS', sectionId: 'models' },
  { labelKey: 'NAV.WHY_BYD', sectionId: 'why-byd' },
  { labelKey: 'NAV.TESTIMONIALS', sectionId: 'testimonials' },
  { labelKey: 'NAV.CONTACT', sectionId: 'contact' },
];

// Scroll
export const SCROLL_OFFSET = 72;
export const INTERSECTION_THRESHOLD = 0.3;

// Contact
export const CONTACT_EMAIL = 'info@greendrive.eu';
export const CONTACT_PHONE = '+49 123 456 7890';
export const CONTACT_LOCATION = 'Frankfurt am Main';
export const EMAIL_SUBJECT_KEY_EN = 'BYD Inquiry — GreenDrive';
export const EMAIL_SUBJECT_KEY_DE = 'BYD-Anfrage — GreenDrive';

// Testimonials
export const TESTIMONIAL_MAX_STAR_RATING = 5;

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 'marcus',
    customerName: 'Marcus W.',
    carModel: 'BYD Seal',
    rating: 5,
    quoteKey: 'TESTIMONIALS.MARCUS_QUOTE',
  },
  {
    id: 'sophie',
    customerName: 'Sophie L.',
    carModel: 'BYD Dolphin',
    rating: 5,
    quoteKey: 'TESTIMONIALS.SOPHIE_QUOTE',
  },
  {
    id: 'thomas',
    customerName: 'Thomas R.',
    carModel: 'BYD Atto 3',
    rating: 4,
    quoteKey: 'TESTIMONIALS.THOMAS_QUOTE',
  },
  {
    id: 'elena',
    customerName: 'Elena K.',
    carModel: 'BYD Tang',
    rating: 5,
    quoteKey: 'TESTIMONIALS.ELENA_QUOTE',
  },
];

// Car Models
export const CAR_MODELS: readonly CarModel[] = [
  {
    id: 'atto3',
    nameKey: 'BYD Atto 3',
    taglineKey: 'MODELS.ATTO3_TAGLINE',
    rangeKm: 420,
    accelerationSeconds: 7.3,
    priceEur: 38990,
    gradientFrom: '#d4ede0',
    gradientTo: '#a8d5ba',
  },
  {
    id: 'seal',
    nameKey: 'BYD Seal',
    taglineKey: 'MODELS.SEAL_TAGLINE',
    rangeKm: 570,
    accelerationSeconds: 3.8,
    priceEur: 44990,
    gradientFrom: '#c5e8d5',
    gradientTo: '#7bbf92',
  },
  {
    id: 'dolphin',
    nameKey: 'BYD Dolphin',
    taglineKey: 'MODELS.DOLPHIN_TAGLINE',
    rangeKm: 427,
    accelerationSeconds: 7.0,
    priceEur: 29990,
    gradientFrom: '#e0f0e8',
    gradientTo: '#a8d5ba',
  },
  {
    id: 'tang',
    nameKey: 'BYD Tang',
    taglineKey: 'MODELS.TANG_TAGLINE',
    rangeKm: 400,
    accelerationSeconds: 4.6,
    priceEur: 69990,
    gradientFrom: '#b8dcc8',
    gradientTo: '#2d6a4f',
  },
  {
    id: 'han',
    nameKey: 'BYD Han',
    taglineKey: 'MODELS.HAN_TAGLINE',
    rangeKm: 521,
    accelerationSeconds: 3.9,
    priceEur: 49990,
    gradientFrom: '#c8e4d4',
    gradientTo: '#5a9a74',
  },
  {
    id: 'seal-u',
    nameKey: 'BYD Seal U',
    taglineKey: 'MODELS.SEAL_U_TAGLINE',
    rangeKm: 500,
    accelerationSeconds: 7.5,
    priceEur: 41990,
    gradientFrom: '#d8efe2',
    gradientTo: '#8cc9a0',
  },
];

// Why BYD
export const WHY_BYD_ITEMS_COUNT = 3;

// Footer
export const COPYRIGHT_YEAR = 2026;
export const BRAND_NAME = 'GreenDrive';
