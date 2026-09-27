import precolonialImage from '../assets/images/pre-colonial_ph.webp';
import spanishImage from '../assets/images/spanish-period.jpg';
import americanClassroomImage from '../assets/images/american-period.jpg';
import contemporaryWorkplaceImage from '../assets/images/modern-women.jpg';
// import genderRolesInfographic from '../assets/gender-roles-infographic.png';

// ─────────────────────────────────────────────────────────────────────────
// MULTIMEDIA GALLERY DATA
// Replace placeholder image paths with your own files in src/assets/,
// or with properly licensed and attributed external images.
// "size" controls placement in the magazine-style grid: 'feature' (large),
// 'tall', or 'wide'. For videos, replace the placeholder embed URL with a
// real, public, embeddable educational video URL and credit it in
// references.js.
// ─────────────────────────────────────────────────────────────────────────

export const galleryImages = [
  {
    id: 'img-1',
    size: 'feature',
    kind: 'photo',
    image: precolonialImage,
    caption: 'Pre-colonial community life',
    alt: 'Placeholder illustration representing pre-colonial Filipino community life — replace with a properly licensed image',
    attribution: '[INSERT SOURCE / ATTRIBUTION]',
  },
  {
    id: 'img-2',
    size: 'tall',
    kind: 'photo',
    image: spanishImage,
    caption: 'Spanish colonial-era household',
    alt: 'Placeholder illustration representing the Spanish colonial period — replace with a properly licensed image',
    attribution: '[INSERT SOURCE / ATTRIBUTION]',
  },
  {
    id: 'img-3',
    size: 'wide',
    kind: 'photo',
    image: americanClassroomImage,
    caption: 'American-era classroom',
    alt: 'Placeholder illustration representing American-era public education — replace with a properly licensed image',
    attribution: '[INSERT SOURCE / ATTRIBUTION]',
  },
  {
    id: 'img-4',
    size: 'wide',
    kind: 'photo',
    image: contemporaryWorkplaceImage,
    caption: 'Contemporary Filipino workplace',
    alt: 'Placeholder illustration representing a contemporary Filipino workplace — replace with a properly licensed image',
    attribution: '[INSERT SOURCE / ATTRIBUTION]',
  },
  {
    id: 'infographic-1',
    size: 'wide',
    kind: 'infographic',
    caption: 'Historical vs. contemporary roles, at a glance',
    alt: 'Placeholder for an infographic summarizing how gender roles have changed across Philippine history',
    attribution: '[INSERT SOURCE / ATTRIBUTION — build this from your own verified research]',
  },
]

export const galleryVideos = [
  {
    id: 'video-1',
    title: '[INSERT VIDEO TITLE]',
    description: 'PLACEHOLDER — replace with a real, public, embeddable educational video URL and a short description of why it supports this section.',
    embedUrl: '',
  },
]
