// ─────────────────────────────────────────────────────────────────────────
// MULTIMEDIA GALLERY DATA
// ─────────────────────────────────────────────────────────────────────────

import precolonialImage from '../assets/images/historical/precolonial-boxer-codex.jpg';
import spanishImage from '../assets/images/historical/spanish-colonial-women.jpg';

export const galleryImages = [
  {
    id: 'img-1',
    size: 'feature',
    kind: 'photo',
    image: precolonialImage,
    caption: 'Pre-colonial community life',
    alt: 'Pre-colonial Filipino community life',
    attribution: '[INSERT SOURCE / ATTRIBUTION]',
  },

  {
    id: 'img-2',
    size: 'tall',
    kind: 'photo',
    image: spanishImage,
    caption: 'Spanish colonial-era household',
    alt: 'Spanish colonial-era household',
    attribution: '[INSERT SOURCE / ATTRIBUTION]',
  },
  {
    id: 'img-4',
    size: 'wide',
    kind: 'photo',
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
