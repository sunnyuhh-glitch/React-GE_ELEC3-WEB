// ─────────────────────────────────────────────────────────────────────────
// MULTIMEDIA GALLERY DATA


import precolonialImage from '../assets/images/historical/precolonial-boxer-codex.jpg';
import spanishImage from '../assets/images/historical/spanish-colonial-women.jpg';
import americanClassroomImage from '../assets/images/historical/american-colonial-girls-school.jpg';
import contemporaryWorkplaceImage from '../assets/images/historical/contemporary-filipino-workplace.jpg';
import infographicImage from '../assets/images/historical/gender-roles-then-now.png.png';


export const galleryImages = [
{
  id: 'img-1',
  size: 'feature',
  kind: 'illustration',
  image: precolonialImage,
  caption: 'Boxer Codex illustration, c. 1590',
  alt: 'Boxer Codex illustration depicting inhabitants of the Philippines around the time of early Spanish contact',
  attribution:
    'Cultural Center of the Philippines Encyclopedia of Philippine Art / Courtesy of Lilly Library, Indiana University',
},
{
  id: 'img-2',
  size: 'tall',
  kind: 'photo',
  image: spanishImage,
  caption: 'Indias de la provincia de la Pampanga, Álbum de Filipinas, c. 1870',
  alt: 'Historical photograph of women from the province of Pampanga during the Spanish colonial period, from the Álbum de Filipinas',
  attribution: 'Biblioteca Nacional de España',
},
{
  id: 'img-3',
  size: 'wide',
  kind: 'photo',
  image: americanClassroomImage,
  caption: "Girls' school at Maiate: American teacher and Filipino girls, 1902",
  alt: 'Historical photograph of an American teacher with Filipino schoolgirls in the Philippines during the American colonial period',
  attribution: 'Library of Congress, Prints and Photographs Division',
},
{
  id: 'img-4',
  size: 'wide',
  kind: 'photo',
  image: contemporaryWorkplaceImage,
  caption: 'Filipino woman working in the construction industry',
  alt: 'Filipino woman operating heavy equipment in a contemporary construction workplace',
  attribution:
    'International Labour Organization / Cebu Contractors Association, Inc.',
},
{
  id: 'infographic-1',
  size: 'infographic',
  kind: 'infographic',
  image: infographicImage,
  caption: 'Gender Roles in the Philippines: Then & Now',
  alt: 'Infographic comparing historical and contemporary gender roles in the Philippines across leadership, work, education, and family life',
  attribution: 'Original infographic created for this project based on the verified historical and contemporary sources cited throughout the website.',
},
]

export const galleryVideos = [
  {
    id: 'video-1',
    title: "PCW's 50th Founding Anniversary Video",
    description:
      'This video from the Philippine Commission on Women looks back on the agency’s journey in advancing women’s rights, gender equality, and women’s empowerment in the Philippines. It complements this project by connecting historical developments with continuing efforts toward a more gender-equal Philippine society.',
    embedUrl: 'https://www.youtube.com/embed/6BwGIw-AqZM',
    sourceName: 'Philippine Commission on Women',
    sourceUrl: 'https://www.youtube.com/watch?v=6BwGIw-AqZM',
  },
]