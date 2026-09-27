// ─────────────────────────────────────────────────────────────────────────
// HISTORICAL TIMELINE DATA
// ─────────────────────────────────────────────────────────────────────────
import precolonialImage from '../assets/images/historical/precolonial-boxer-codex.jpg'
import spanishColonialImage from '../assets/images/historical/spanish-colonial-women.jpg'
import americanColonialImage from '../assets/images/historical/american-colonial-girls-school.jpg'
import contemporaryImage from '../assets/images/historical/contemporary-magna-carta-women.jpg'
export const timelineData = [
  {
  id: 'precolonial',
  period: 'Pre-Colonial Philippines',
  range: 'Before c. 1521',
  summary:
    'Before Spanish colonization, many Philippine communities had relatively flexible gender relations, with women holding important roles in family life, economic activity, spirituality, and community leadership.',
  details: [
    'Historical accounts describe women in many pre-colonial Philippine communities as having significant social and economic standing, including the ability to own property and manage family resources.',
    'Babaylan, known by different names across Philippine communities, served as spiritual leaders, healers, advisers, and important figures in community life. These roles were predominantly associated with women, although some men also performed babaylan roles.',
    'Women could exercise influence beyond the household, while women and men contributed to the economic and social life of their communities through different but often complementary responsibilities.',
    'Gender roles varied among the diverse communities of the Philippine archipelago, so pre-colonial society should not be understood as having one uniform system of gender relations.',
  ],
    imageSrc: precolonialImage,
    imageAlt: 'Boxer Codex illustration depicting inhabitants of the Philippines around the time of early Spanish contact',
    imageCaption: 'Boxer Codex illustration, c. 1590',
    imageCredit: 'Cultural Center of the Philippines Encyclopedia of Philippine Art / Courtesy of Lilly Library, Indiana University',
  sources: [
  {
    name: 'Philippine Commission on Women',
    url: 'https://pcw.gov.ph/2026-tinig-ng-kababaihan/',
  },
],
},
  {
  id: 'spanish',
  period: 'Spanish Colonial Period',
  range: 'c. 1565–1898',
  summary:
    'Spanish colonization reshaped gender relations in the Philippines through Catholic religious institutions and colonial social structures that increasingly emphasized patriarchal authority and particular ideals of womanhood.',
  details: [
    'Spanish colonial rule and Catholic missionary activity introduced and reinforced patriarchal ideas that reduced many of the social and religious roles previously held by women in indigenous communities.',
    'Religious and social expectations increasingly emphasized qualities such as modesty, obedience, religious devotion, and responsibility for family and household life among women.',
    'Educational opportunities for women remained limited for much of the Spanish colonial period, although some women, particularly from more privileged families, gained access to formal or religious education.',
    'Women were not simply passive under colonial rule. They continued to participate in household economies and community life, while some Filipino women also became involved in social and resistance movements during the later colonial period.',
  ],
    imageSrc: spanishColonialImage,
    imageAlt: 'Historical photograph of women from the province of Pampanga during the Spanish colonial period, from the Álbum de Filipinas',
    imageCaption: 'Indias de la provincia de la Pampanga, Álbum de Filipinas, c. 1870',
    imageCredit: 'Biblioteca Nacional de España',
  sources: [
  {
    name: 'Philippine Commission on Women',
    url: 'https://pcw.gov.ph/pcw-calls-for-an-end-of-violence-against-women-vaw-and-its-colonial-roots-towards-a-bagong-pilipinas/',
  },
  {
    name: 'UP Asian Studies',
    url: 'https://asj.upd.edu.ph/',
  },
],
},
 {
  id: 'american',
  period: 'American Colonial Period',
  range: 'c. 1898–1946',
  summary:
    'American colonial rule expanded public education and created new opportunities for Filipino women to participate in education, professional work, civic organizations, and public life.',
  details: [
    'A centralized public school system was established in 1901 under Act No. 74. Expanded access to formal education contributed to higher literacy among Filipino women and opened opportunities beyond traditional domestic roles.',
    'Education helped women enter new forms of professional and public work, including teaching and other occupations associated with the expanding colonial bureaucracy and economy.',
    'Filipino women organized for political rights through women\'s organizations and the suffrage movement. In the April 30, 1937 plebiscite, 447,725 women voted in favor of suffrage, surpassing the required 300,000 affirmative votes and securing Filipino women\'s right to vote.',
    'These developments expanded women\'s participation in public life, but they did not eliminate gender inequality. Patriarchal expectations concerning women\'s roles in family and society continued alongside these new opportunities.',
  ],
   imageSrc: americanColonialImage,
    imageAlt: 'Historical photograph of an American teacher with Filipino schoolgirls in the Philippines during the American colonial period',
    imageCaption: 'Girls\' school at Maiate: American teacher and Filipino girls, 1902',
    imageCredit: 'Library of Congress, Prints and Photographs Division',
 sources: [
  {
    name: 'Department of Education',
    url: 'https://www.deped.gov.ph/about-deped/history/',
  },
  {
    name: 'UP Asian Studies',
    url: 'https://asj.upd.edu.ph/',
  },
  {
    name: 'Philippine Commission on Women',
    url: 'https://pcw.gov.ph/pcw-statement-on-the-78th-anniversary-of-womens-suffrage-in-the-philippines/',
  },
],
},
 {
  id: 'contemporary-history',
  period: 'Later 20th Century to Present',
  range: 'c. 1946–Present',
  summary:
    'Since independence, the Philippines has expanded legal protections for women and increased women\'s participation in education, employment, leadership, and public life, although gender inequalities and traditional expectations continue to persist.',
  details: [
    'The 1987 Philippine Constitution strengthened the legal foundation for gender equality by recognizing the role of women in nation-building and guaranteeing the fundamental equality before the law of women and men.',
    'Women have increasingly participated in professional, civic, and political life. The Philippines has had two women serve as President, although women continue to be underrepresented in many elected and decision-making positions.',
    'Republic Act No. 9710, or the Magna Carta of Women, was enacted in 2009 as a comprehensive women\'s human rights law that seeks to eliminate discrimination and promote the rights and empowerment of Filipino women, especially those in marginalized sectors.',
    'Contemporary Philippine gender policy increasingly emphasizes gender mainstreaming, women\'s participation in decision-making, protection from discrimination, and the recognition that greater opportunities do not automatically eliminate persistent gender stereotypes and inequalities.',
  ],
    imageSrc: contemporaryImage,
    imageAlt: 'Launch of the Implementing Rules and Regulations of the Magna Carta of Women in the Philippines in 2010',
    imageCaption: 'Launch of the Implementing Rules and Regulations of the Magna Carta of Women, 2010',
    imageCredit: 'Philippine Commission on Women',
  sources: [
  {
    name: '1987 Philippine Constitution',
    url: 'https://lawphil.net/consti/cons1987.html',
  },
  {
    name: 'Philippine Commission on Women',
    url: 'https://pcw.gov.ph/magna-carta-of-women/',
  },
  {
    name: 'Republic Act No. 9710 — Magna Carta of Women',
    url: 'https://lawphil.net/statutes/repacts/ra2009/ra_9710_2009.html',
  },
],
},
]
