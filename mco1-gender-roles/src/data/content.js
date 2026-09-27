// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT
// This is the ONE file most groups will need to edit for text content.
// Replace every [BRACKETED]  with your group's real information.
// Do not invent statistics, quotes, or facts — if you're not sure something
// is accurate, mark it "()" and check it against a credible source
// before your final submission.
// ─────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  projectTitle: 'Critical Exploration and Creative Presentation of Gender Roles in the Philippine Context',
  courseOutput: 'MCO 1 — Major Course Output',
  websiteTopic: 'Gender Roles in the Philippines: Historical and Contemporary Perspectives',
  groupName: 'WONDER PETS',
  members: [
    'SEAN CASIRACAN',
    'SUNNY CORPIN',
    'SEAN BENEDICK DE ATRAS',
    'JOHN GITTER PERITO',
  ],
  courseSection: 'BS INFO. TECH - 3A',
  instructor: 'RHEA MAE P. TICONG, LPT',
  school: 'NORTHWEST SAMAR STATE UNIVERSITY',
}

export const hero = {
  eyebrow: 'A Major Course Output',
  title: 'Gender Roles in the Philippine Context',
  intro:
    "Gender roles shape the expectations, responsibilities, and opportunities of individuals in society. In the Philippines, these roles have evolved through historical traditions, colonial influences, and contemporary social changes. This website explores how gender roles have developed over time, how they affect Filipino society today, and what challenges continue to exist.",
  cta: 'Explore the Topic',
  previewNote: 'Scroll through nine sections — from foundational concepts to historical change, present-day realities, and our group\'s own analysis.',
}

// Brief section-by-section preview shown on the homepage
export const sectionPreviews = [
  { id: 'understanding', label: 'Understanding Gender Roles', blurb: 'What gender roles are, and how they differ from biological sex.' },
  { id: 'historical', label: 'Historical Perspective', blurb: 'An interactive timeline from pre-colonial society to today.' },
  { id: 'contemporary', label: 'Contemporary Gender Roles', blurb: 'Family, education, work, media, leadership, and community life.' },
  { id: 'issues', label: 'Gender Issues & Realities', blurb: 'Stereotypes, discrimination, and inequality in the Philippine context.' },
  { id: 'analysis', label: 'Analysis & Reflection', blurb: 'Comparing past and present, and our group\'s own critical take.' },
  { id: 'multimedia', label: 'Multimedia', blurb: 'Images, infographics, and video to support the research.' },
  { id: 'conclusion', label: 'Conclusion', blurb: 'What we learned, and why it matters.' },
  { id: 'references', label: 'References', blurb: 'The sources behind every claim on this site.' },
]

// "Why This Matters" — short editorial intro shown right after the hero
export const introSection = {
  kicker: 'Why this matters',
  title: 'Understanding Gender in Philippine Society',
  body:
    "Gender shapes who gets heard, who does the caring, who leads, and who is expected to simply adapt. Looking closely at how these expectations formed in the Philippines — and how they persist — is the first step toward examining them critically rather than accepting them as given.",
  concepts: [
    {
      id: 'history',
      label: 'History',
      title: 'How roles developed over time',
      body: 'From pre-colonial communities through centuries of colonial rule, each era left its own layer of expectation behind.',
    },
    {
      id: 'society',
      label: 'Society',
      title: 'How expectations shape daily life',
      body: 'Family, school, work, and media all quietly teach what a person "should" do based on gender — often without anyone stating it outright.',
    },
    {
      id: 'change',
      label: 'Change',
      title: 'How roles continue to evolve',
      body: 'Legal reform, education, and shifting attitudes mean today\'s expectations are not fixed — and won\'t look the same a generation from now.',
    },
  ],
}

export const understanding = {
  intro:
    'Before exploring how gender roles have changed across Philippine history, it helps to be clear about what the term actually means — and what it does not.',
  definitionCard: {
    title: 'What are gender roles?',
    body:
      'Gender roles are the behaviors, responsibilities, and expectations that a society assigns to people based on their perceived gender. They are learned through family, school, media, religion, and community life, and they can change over time and differ from one culture to the next.',
  },
  comparisonTitle: 'Gender roles vs. biological sex',
  comparison: [
    {
      heading: 'Biological sex',
      points: [
        'Refers to physical and biological characteristics.',
        'Generally consistent across cultures.',
        'A matter of biology and medicine.',
      ],
    },
    {
      heading: 'Gender roles',
      points: [
        'Refers to socially assigned behaviors and expectations.',
        'Varies across cultures, time periods, and communities.',
        'A matter of culture, upbringing, and social norms.',
      ],
    },
  ],
  whyItMatters: {
    title: 'Why study gender roles?',
    body:
      'Studying gender roles helps us understand how expectations around work, family, leadership, and identity are formed — and why some of them create unequal opportunities. For Filipino students, this means looking closely at our own history and culture rather than assuming that today\'s norms have always existed, or that they are the only way society could be organized.',
  },
  phExamples: {
    title: 'A Philippine starting point',
    body:
      'Filipino society today carries traces of very different gender systems layered on top of each other: pre-colonial customs, centuries of Spanish colonial rule, decades of American administration, and modern global influences. Later sections of this website trace how each of these periods shaped the roles Filipinos are expected to play today.',
  },
}

// Contemporary Gender Roles — six domains required by the MCO 1 brief
export const contemporaryDomains = [
  {
  id: 'family',
  size: 'feature',
  title: 'Family',
  icon: 'Home',
  summary: 'Household responsibilities, parenting, and caregiving.',
  points: [
    'Unpaid care and domestic work — including cooking, cleaning, household maintenance, childcare, and care for elderly, sick, or disabled family members — remains an important part of everyday family life in the Philippines.',
    'Women and girls continue to carry a disproportionate share of unpaid care and domestic work, reflecting gender norms that have traditionally associated caregiving and household responsibilities with women.',
    'Recognizing, reducing, and redistributing unpaid care work among household members and through public and community support is increasingly emphasized as part of efforts toward greater gender equality.',
  ],
  sources: [
    {
      name: 'Philippine Commission on Women',
      url: 'https://pcw.gov.ph/care-on-care-work-ph-holds-consultation-on-valuing-and-investing-in-unpaid-care-and-domestic-work/',
    },
  ],
},
  {
  id: 'education',
  size: 'medium',
  title: 'Education',
  icon: 'GraduationCap',
  summary: 'Access, expectations, and fields of study.',
  points: [
    'Women and girls have substantial participation in Philippine education. Data from the 2020 Census of Population and Housing show that females accounted for a larger share of people with college or academic degrees than males.',
    'Educational participation does not necessarily remove gender expectations about academic and career choices. Students may still encounter stereotypes about which subjects, courses, or occupations are considered more appropriate for women or men.',
    'Gender-responsive education therefore involves not only access to schooling but also challenging stereotypes and creating learning environments where students can pursue fields based on their interests and abilities rather than gender expectations.',
  ],
  sources: [
    {
      name: 'Philippine Statistics Authority',
      url: 'https://psa.gov.ph/content/literacy-rate-and-educational-attainment-among-persons-five-years-old-and-over-philippines',
    },
    {
      name: 'Philippine Commission on Women',
      url: 'https://pcw.gov.ph/education/',
    },
  ],
},
 {
  id: 'workplace',
  size: 'medium',
  title: 'Workplace',
  icon: 'Briefcase',
  summary: 'Participation, opportunity, and equality at work.',
  points: [
    'Women and men participate across a wide range of occupations and industries in the Philippine labor market, although their patterns of employment and representation are not identical.',
    'Gender inequality in the workplace can involve differences in economic participation, access to opportunities, representation in decision-making positions, and exposure to discrimination or sexual harassment.',
    'Efforts toward gender equality at work therefore include protecting labor rights, preventing discrimination and harassment, expanding economic opportunities, and supporting women\'s participation in higher-income and decision-making roles.',
  ],
  sources: [
    {
      name: 'Philippine Statistics Authority',
      url: 'https://psa.gov.ph/statistics/labor-force-survey/special-release/stat-tables',
    },
    {
      name: 'Philippine Commission on Women',
      url: 'https://pcw.gov.ph/assets/files/2020/05/GEWE-Plan-2019-2025-Results-Matrices.pdf?x12374=',
    },
  ],
},
 {
  id: 'media',
  size: 'medium',
  title: 'Media',
  icon: 'Tv',
  summary: 'Representation, stereotypes, and gender-fair communication.',
  points: [
    'Media can influence how people understand gender by shaping the images, roles, behaviors, and expectations associated with women and men in news, entertainment, advertising, and digital content.',
    'Gender stereotypes and discriminatory or objectifying portrayals can reinforce unequal expectations, while balanced and respectful representation can help challenge rigid ideas about gender roles.',
    'Philippine gender-fair media guidelines encourage balanced representation, non-discriminatory portrayals, gender-fair language, and media content that recognizes the dignity, rights, and contributions of women.',
  ],
  sources: [
    {
      name: 'Philippine Commission on Women — Gender-Fair Media Guidebook',
      url: 'https://pcw.gov.ph/mgec-launches-revised-gender-fair-media-guidebook-2/',
    },
    {
      name: 'Magna Carta of Women — Media and Film',
      url: 'https://pcw.gov.ph/magna-carta-of-women/',
    },
  ],
},
  {
    id: 'leadership',
    size: 'split',
    title: 'Leadership',
    icon: 'Landmark',
    summary: 'Public office, organizations, and barriers.',
    points: [
  'Women participate in political and public leadership in the Philippines, but they remain substantially underrepresented in elective positions compared with men.',
  'Based on the 2025 election results reported by the Philippine Statistics Authority, women held 24.2% of occupied elective positions, while men held 75.8%.',
  'Philippine gender-equality policy promotes women\'s meaningful participation in decision-making and seeks greater representation of women in government, development councils, planning bodies, and other leadership positions.',
],
sources: [
  {
    name: 'Philippine Statistics Authority — 2026 Fact Sheet on Women and Men',
    url: 'https://psa.gov.ph/gender-statistics',
  },
  {
    name: 'Philippine Commission on Women — Magna Carta of Women',
    url: 'https://pcw.gov.ph/magna-carta-of-women/',
  },
],
  },
  {
    id: 'community',
    size: 'split',
    title: 'Community',
    icon: 'Users',
    summary: 'Civic life and community responsibilities.',
    points: [
  'Gender roles also shape participation in community life, including local organizations, development activities, public services, and decision-making processes.',
  'Philippine law promotes women\'s meaningful participation in local development and requires women to make up at least 40% of the membership of development councils from the regional, provincial, city, municipal, and barangay levels.',
  'Gender-responsive local governance also involves integrating Gender and Development concerns into local planning, budgeting, implementation, monitoring, and evaluation, with participation from women, civil society organizations, and other community stakeholders.',
],
sources: [
  {
    name: 'Philippine Commission on Women — Magna Carta of Women',
    url: 'https://pcw.gov.ph/magna-carta-of-women/',
  },
  {
    name: 'PCW — Localization of the Magna Carta of Women',
    url: 'https://pcw.gov.ph/pcw-dilg-dbm-neda-joint-memorandum-circular-2024-01-revised-guidelines-on-the-localization-of-the-magna-carta-of-women/',
  },
],
  },
]

export const analysis = {
  pullQuote:
  'Changes in gender roles in the Philippines reflect both progress and continuity: opportunities have expanded across education, work, and leadership, while some gender expectations and inequalities continue to shape family and social life.',

pullQuoteAttribution:
  "Our group's synthesis, based on the historical and contemporary comparison",
  comparisonTitle: 'Historical vs. contemporary expectations',
  comparisonIntro:
    'Placing historical and contemporary gender expectations side by side makes both the progress and the continuities easier to see.',
  comparisonRows: [
   {
  theme: 'Leadership',

  historical:
    'Women held important spiritual and community roles in many pre-colonial Philippine communities, including as babaylan. Spanish colonial rule later reshaped gender relations through religious and social institutions that increasingly emphasized patriarchal authority and more restrictive expectations for women.',

  historicalSources: [
    {
      name: 'Philippine Commission on Women',
      url: 'https://pcw.gov.ph/2026-tinig-ng-kababaihan/',
    },
    {
      name: 'Philippine Commission on Women — Colonial Roots of Gender Inequality',
      url: 'https://pcw.gov.ph/pcw-calls-for-an-end-of-violence-against-women-vaw-and-its-colonial-roots-towards-a-bagong-pilipinas/',
    },
  ],

  contemporary:
    'Women participate in political and public leadership in the Philippines, but they remain underrepresented in elective positions. Based on 2025 election results reported by the Philippine Statistics Authority, women held 24.2% of occupied elective positions, compared with 75.8% held by men.',

  contemporarySources: [
    {
      name: 'Philippine Statistics Authority — 2026 Fact Sheet on Women and Men',
      url: 'https://psa.gov.ph/gender-statistics',
    },
  ],
},
{
  theme: 'Work',

  historical:
    'Women and men contributed to the economic and social life of many pre-colonial Philippine communities through different but often complementary responsibilities. During Spanish colonial rule, gender expectations increasingly emphasized women’s responsibilities in family and household life.',

  historicalSources: [
    {
      name: 'Philippine Commission on Women — Tinig ng Kababaihan',
      url: 'https://pcw.gov.ph/2026-tinig-ng-kababaihan/',
    },
    {
      name: 'Philippine Commission on Women — Colonial Roots of Gender Inequality',
      url: 'https://pcw.gov.ph/pcw-calls-for-an-end-of-violence-against-women-vaw-and-its-colonial-roots-towards-a-bagong-pilipinas/',
    },
  ],

  contemporary:
    'Women participate across a wide range of occupations and industries in the Philippine labor market, but differences in economic participation remain. The Philippine Statistics Authority’s 2026 Fact Sheet on Women and Men reports that in 2025, the labor-force participation rate was 53.4% for women and 74.6% for men.',

  contemporarySources: [
    {
      name: 'Philippine Statistics Authority — 2026 Fact Sheet on Women and Men',
      url: 'https://psa.gov.ph/gender-statistics',
    },
  ],
},
   {
  theme: 'Education',

  historical:
    'Educational opportunities for women were limited for much of the Spanish colonial period, although some women, particularly from more privileged families, received formal or religious education. During the American colonial period, the expansion of the public school system broadened access to formal education for both girls and boys.',

  historicalSources: [
    {
      name: 'Philippine Commission on Women — Colonial Roots of Gender Inequality',
      url: 'https://pcw.gov.ph/pcw-calls-for-an-end-of-violence-against-women-vaw-and-its-colonial-roots-towards-a-bagong-pilipinas/',
    },
    {
      name: 'Department of Education — History',
      url: 'https://www.deped.gov.ph/about-deped/history/',
    },
  ],

  contemporary:
    'Women and girls have substantial participation in Philippine education. Data from the 2020 Census of Population and Housing show that females accounted for a larger share of people with college or academic degrees than males. However, gender stereotypes can still influence perceptions of which fields of study or careers are considered appropriate for women and men.',

  contemporarySources: [
    {
      name: 'Philippine Statistics Authority — Literacy and Educational Attainment',
      url: 'https://psa.gov.ph/content/literacy-rate-and-educational-attainment-among-persons-five-years-old-and-over-philippines',
    },
    {
      name: 'Philippine Commission on Women — Education',
      url: 'https://pcw.gov.ph/education/',
    },
  ],
},
{
  theme: 'Family roles',

  historical:
    'Many pre-colonial Philippine communities had relatively flexible gender relations, with women holding important roles in family and economic life and having significant social and economic standing. Spanish colonial rule later reinforced gender expectations that increasingly emphasized women’s domestic, caregiving, and religious responsibilities.',

  historicalSources: [
    {
      name: 'Philippine Commission on Women — Tinig ng Kababaihan',
      url: 'https://pcw.gov.ph/2026-tinig-ng-kababaihan/',
    },
    {
      name: 'Philippine Commission on Women — Colonial Roots of Gender Inequality',
      url: 'https://pcw.gov.ph/pcw-calls-for-an-end-of-violence-against-women-vaw-and-its-colonial-roots-towards-a-bagong-pilipinas/',
    },
  ],

  contemporary:
    'Family roles have become less rigid, but unpaid care and domestic work remain unequally distributed. Women and girls continue to carry a disproportionate share of responsibilities such as household work, childcare, and care for elderly, sick, or disabled family members.',

  contemporarySources: [
    {
      name: 'Philippine Commission on Women — Unpaid Care and Domestic Work',
      url: 'https://pcw.gov.ph/care-on-care-work-ph-holds-consultation-on-valuing-and-investing-in-unpaid-care-and-domestic-work/',
    },
  ],
},
  ],
  groupAnalysisLabel: 'Our group\'s analysis',
  groupAnalysis:
  'Based on our comparison, we see gender roles in the Philippines as changing rather than simply disappearing. Historical shifts in religion, education, family life, and social institutions influenced what was expected of women and men, while later developments expanded opportunities in education, employment, leadership, and public participation. At the same time, the contemporary evidence shows that greater access does not automatically remove gender inequality. Differences in labor-force participation, women’s underrepresentation in elective positions, and the unequal distribution of unpaid care and domestic work show that some gender expectations continue in new forms. For our group, this suggests that understanding gender roles requires looking at both the progress that has been made and the social expectations and institutional patterns that continue to influence everyday life.',
  reflectionQuestions: [
  'How have gender roles and expectations in the Philippines changed from earlier historical periods to the present?',
  'Which gender expectations or inequalities appear to have continued despite expanded opportunities in education, work, and public life?',
  'How can gender expectations influence people’s choices, responsibilities, and opportunities in everyday life?',
  'How can family, education, media, workplaces, and public institutions reinforce or challenge gender roles in Philippine society?',
  'Why is it important for students to examine both historical change and continuing gender inequalities critically?',
],
}

// Gender Issues and Realities — required topics from the MCO 1 brief
export const genderIssues = [
 {
  id: 'stereotypes',
  title: 'Gender stereotypes',
  explanation:
    'Gender stereotypes are generalized beliefs and expectations about the characteristics, roles, and behaviors considered appropriate for women and men. These expectations can restrict people to roles based on gender rather than their individual abilities, interests, and choices.',
  context:
    'In the Philippines, traditional gender norms have often associated women with homemaking and caregiving while men are viewed as primary family providers. These expectations can influence responsibilities at home as well as opportunities in education, employment, and leadership.',
  example:
    'Gender stereotypes can also appear in media and advertising through portrayals that repeatedly associate women and men with particular roles, characteristics, products, or responsibilities. Philippine gender-fair media guidelines encourage media practitioners to avoid rigid gender stereotypes and promote balanced and respectful representation.',
  whyItMatters:
    'Gender stereotypes can limit opportunities and aspirations by influencing what people are expected or encouraged to do. Challenging these assumptions allows individuals to make choices based more on their abilities, interests, and circumstances rather than prescribed gender roles.',
  reflection:
    'Where do you notice gender stereotypes in everyday Philippine life, and how might these expectations influence people’s choices?',
  sources: [
    {
      name: 'Philippine Commission on Women — Unpaid Care and Domestic Work',
      url: 'https://pcw.gov.ph/care-on-care-work-ph-holds-consultation-on-valuing-and-investing-in-unpaid-care-and-domestic-work/',
    },
    {
      name: 'Philippine Commission on Women — Gender-Fair Media Guidebook',
      url: 'https://pcw.gov.ph/mgec-launches-revised-gender-fair-media-guidebook-2/',
    },
  ],
},
  {
  id: 'discrimination',
  title: 'Gender discrimination',
  explanation:
    'Gender discrimination occurs when a person experiences unequal treatment, exclusion, or restriction because of gender, affecting their ability to exercise rights or access opportunities, benefits, and resources.',
  context:
    'In the Philippines, discrimination against women may occur through laws, policies, administrative measures, institutional practices, or individual actions that directly or indirectly restrict women’s rights or access to opportunities and benefits.',
  example:
    'Republic Act No. 9710, or the Magna Carta of Women, is the Philippines’ comprehensive women’s human rights law. It seeks to eliminate discrimination against women and requires the State to protect and promote women’s rights. Section 35 of the law expressly prohibits discrimination against women.',
  whyItMatters:
    'Discrimination can restrict access to education, employment, resources, decision-making, and other opportunities. Addressing both direct and indirect discrimination is therefore important to achieving substantive equality.',
  reflection:
    'What forms of gender discrimination might still occur in Philippine schools, workplaces, institutions, or communities today?',
  sources: [
    {
      name: 'Philippine Commission on Women — Magna Carta of Women FAQ',
      url: 'https://pcw.gov.ph/faq-republic-act-9710-the-magna-carta-of-women/',
    },
    {
      name: 'Republic Act No. 9710 — Magna Carta of Women',
      url: 'https://lawphil.net/statutes/repacts/ra2009/ra_9710_2009.html',
    },
  ],
},
  {
  id: 'opportunities',
  title: 'Equal opportunities',
  explanation:
    'Equal opportunity means creating conditions in which women and men can access rights, resources, education, employment, leadership, and other opportunities without discrimination based on gender.',
  context:
    'In the Philippines, gender equality is supported by laws and policies that seek to provide women with equal opportunities and access to resources. However, achieving equal opportunity involves addressing not only formal rules but also social, economic, and institutional barriers that can affect women’s participation.',
  example:
    'Republic Act No. 9710, or the Magna Carta of Women, requires the State to promote women’s empowerment, pursue equal opportunities for women and men, and ensure equal access to resources and development results. It also recognizes substantive equality, which considers both equality under the law and equality in actual conditions and outcomes.',
  whyItMatters:
    'Having the same formal rights does not always mean that people experience the same opportunities in practice. Addressing barriers that limit participation helps make equality more meaningful in education, employment, leadership, and other areas of life.',
  reflection:
    'What barriers might prevent women and men from having genuinely equal opportunities in education, employment, or leadership?',
  sources: [
    {
      name: 'Republic Act No. 9710 — Magna Carta of Women',
      url: 'https://lawphil.net/statutes/repacts/ra2009/ra_9710_2009.html',
    },
  ],
},
  {
  id: 'media-representation',
  title: 'Representation in media',
  explanation:
    'Media representation refers to how women, men, and people of diverse gender identities are portrayed in news, entertainment, advertising, film, television, and digital media. These portrayals can influence public ideas about appropriate roles, behavior, appearance, and opportunities.',
  context:
    'In the Philippines, gender-fair media initiatives have sought to address stereotyping, discriminatory portrayals, imbalanced representation, and the use of language or images that diminish the dignity and contributions of women.',
  example:
    'The Philippine Gender-Fair Media Guidebook provides practical guidance for evaluating news, entertainment, advertising, and communication materials. It encourages balanced representation, avoidance of gender stereotypes, gender-fair language, and non-discriminatory portrayals in media content.',
  whyItMatters:
    'Media helps shape public perceptions. Repeated stereotypes can reinforce narrow expectations, while diverse and respectful representation can make visible a wider range of roles, experiences, and contributions in society.',
  reflection:
    'When watching Philippine television, films, advertisements, or online content, what gender stereotypes or examples of gender-fair representation do you notice?',
  sources: [
    {
      name: 'Philippine Commission on Women — Gender-Fair Media Guidebook',
      url: 'https://pcw.gov.ph/mgec-launches-revised-gender-fair-media-guidebook-2/',
    },
    {
      name: 'Philippine Commission on Women — Gender-Sensitive IEC Materials',
      url: 'https://pcw.gov.ph/pcw-reminds-govt-agencies-on-gender-sensitive-iec-materials/',
    },
  ],
},
  {
  id: 'inequalities',
  title: 'Gender-based inequalities',
  explanation:
    'Gender-based inequality refers to persistent differences in access to opportunities, resources, responsibilities, safety, economic participation, and decision-making that are associated with gender and can extend beyond individual acts of discrimination.',
  context:
    'In the Philippines, gender inequalities can be observed in areas such as labor-force participation, unpaid care and domestic work, economic opportunities, and representation in decision-making. These patterns can be influenced by social expectations, institutional practices, and the unequal distribution of paid and unpaid responsibilities.',
  example:
    'The Philippine Statistics Authority’s 2026 Fact Sheet on Women and Men reports that in 2025, the labor-force participation rate was 53.4% for women and 74.6% for men. The same fact sheet reports that unpaid family workers accounted for 10.1% among employed women compared with 4.3% among employed men.',
  whyItMatters:
    'Gender-based inequalities can affect economic independence, access to opportunities, time available for paid work or education, and participation in public life. Measuring these differences helps identify where policies and institutions may need to address persistent barriers.',
  reflection:
    'What gender-based inequality do you notice in everyday Philippine life, and what social or institutional factors might contribute to it?',
  sources: [
    {
      name: 'Philippine Statistics Authority — 2026 Fact Sheet on Women and Men',
      url: 'https://psa.gov.ph/gender-statistics',
    },
    {
      name: 'Philippine Statistics Authority — Unpaid Care and Domestic Work',
      url: 'https://rsso07.psa.gov.ph/content/psa-cebu-conducts-april-2026-labor-force-survey-rider-questions-informal-statistics-and',
    },
  ],
},
]

export const conclusion = {
  title: 'Conclusion',
  paragraphs: [
    'The history of gender roles in the Philippines shows that expectations about women and men have changed alongside broader transformations in society. Women held important spiritual, family, economic, and community roles in many pre-colonial communities, while Spanish colonial institutions contributed to more restrictive gender expectations. Later developments, including the expansion of formal education and changing social and economic conditions, created wider opportunities for women to participate in education, employment, leadership, and public life.',

    'Contemporary evidence, however, shows that expanded opportunities have not eliminated gender inequality. Women continue to participate substantially in education, work, community life, and leadership, yet differences remain in areas such as labor-force participation, representation in elective positions, and the distribution of unpaid care and domestic work. These patterns demonstrate that gender roles are not fixed: they are shaped by historical experience, social institutions, cultural expectations, and continuing social change. Understanding both the progress achieved and the inequalities that remain can help us examine gender roles more critically and recognize the importance of creating opportunities that are not limited by gender stereotypes or discrimination.',
  ],
}
