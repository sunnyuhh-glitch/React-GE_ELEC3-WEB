// ─────────────────────────────────────────────────────────────────────────
// SITE CONTENT
// This is the ONE file most groups will need to edit for text content.
// Replace every [BRACKETED] placeholder with your group's real information.
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
    "Progress in gender equality is rarely a clean break from the past — it is a layering of old expectations and new opportunities, still being sorted out.",
  pullQuoteAttribution: "Our group's synthesis, based on the comparison below",
  comparisonTitle: 'Historical vs. contemporary expectations',
  comparisonIntro:
    'Placing historical and contemporary gender expectations side by side makes both the progress and the continuities easier to see.',
  comparisonRows: [
    {
      theme: 'Leadership',
      historical: 'Spiritual and community leadership was open to women (e.g., the babaylan) in many pre-colonial communities; colonial rule later restricted women\'s formal authority.',
      contemporary: 'Women hold high public office and lead organizations, but remain underrepresented in many leadership positions overall.',
    },
    {
      theme: 'Work',
      historical: 'Pre-colonial gender division of labor existed but was often complementary; colonial-era ideals pushed women toward the domestic sphere.',
      contemporary: 'Women participate widely in paid work across sectors, though pay gaps and "glass ceiling" effects persist in some industries.',
    },
    {
      theme: 'Education',
      historical: 'Formal education access expanded unevenly across colonial periods, with women gaining broader access mainly during the American period.',
      contemporary: 'Access to education is broadly similar across genders, though field-of-study choices still reflect gendered assumptions.',
    },
    {
      theme: 'Family roles',
      historical: 'Bilateral (both-sided) kinship and shared property rights characterized many pre-colonial communities before colonial-era norms emphasized male household headship.',
      contemporary: 'Dual-income households are common, but caregiving and domestic labor still fall disproportionately on women.',
    },
  ],
  groupAnalysisLabel: 'Our group\'s analysis',
  groupAnalysis:
    "Based on our exploration, gender roles in the Philippines have changed over time due to historical, cultural, educational, and social influences. However, some expectations and inequalities continue to affect individuals and communities. [Replace this paragraph with your group's own analysis, written in your own words and grounded in the sources you gathered.]",
  reflectionQuestions: [
    'How have gender roles in the Philippines changed over time?',
    'What challenges continue to exist despite this change?',
    'How do gender expectations affect individuals in their daily lives?',
    'How do gender roles affect Philippine society more broadly?',
    'What can students learn from studying gender roles critically?',
  ],
}

// Gender Issues and Realities — required topics from the MCO 1 brief
export const genderIssues = [
  {
    id: 'stereotypes',
    title: 'Gender stereotypes',
    explanation:
      'Stereotypes are oversimplified, widely-held beliefs about how a gender "should" look, act, or feel. They flatten a diverse population into narrow, often inaccurate expectations.',
    context:
      'In the Philippines, common examples include the expectation that women are naturally nurturing and men are naturally providers, or that certain personality traits are inherently "masculine" or "feminine."',
    example:
      'Filipino media and advertising have long relied on stock characters — the devoted housewife, the tough breadwinner — that reduce complex people to a single trait. [Cite a specific media study or article here.]',
    whyItMatters:
      'Stereotypes narrow the choices people feel are available to them, from careers to emotional expression, and can be used to justify unequal treatment.',
    reflection: 'Where have you personally encountered a gender stereotype, and how did it affect a decision you made?',
  },
  {
    id: 'discrimination',
    title: 'Gender discrimination',
    explanation:
      'Discrimination happens when someone is treated unfairly because of their gender, rather than their ability or qualifications.',
    context:
      'This can appear in hiring practices, promotion decisions, access to loans or property, or everyday treatment in schools and workplaces.',
    example:
      'Republic Act No. 9710, the Magna Carta of Women, was enacted specifically to address discrimination against women in the Philippines. [Verify current provisions and add a direct citation.]',
    whyItMatters:
      'Discrimination limits individual opportunity and represents a broader social cost when talent and potential go unused.',
    reflection: 'What forms of gender discrimination are still common in Philippine workplaces or schools today?',
  },
  {
    id: 'opportunities',
    title: 'Equal opportunities',
    explanation:
      'Equal opportunity means that people of any gender have a fair and comparable chance to access education, employment, leadership, and other resources.',
    context:
      'The Philippines has made notable progress on gender parity in education access, but gaps remain in leadership representation and certain industries.',
    example:
      'The Philippines is frequently cited as a regional leader in closing gender gaps according to international indices. [Insert the specific index, year, and source.]',
    whyItMatters:
      'Equal opportunity is not the same as equal outcome — understanding the difference helps clarify what policies and attitudes still need to change.',
    reflection: 'What would truly equal opportunity look like in your own field of study or future profession?',
  },
  {
    id: 'media-representation',
    title: 'Representation in media',
    explanation:
      'How genders are portrayed in film, television, advertising, and social media shapes public expectations of what each gender "should" be.',
    context:
      'Philippine entertainment has historically featured limited, often stereotyped roles for women and for LGBTQ+ Filipinos, though representation has broadened in recent years.',
    example:
      '[Insert a specific, cited example of a Philippine film, show, or campaign that illustrates changing — or unchanging — representation.]',
    whyItMatters:
      'Representation influences self-image, aspiration, and the way audiences judge people who do not fit familiar media molds.',
    reflection: 'Can you think of a recent Philippine show, film, or ad that broke from a typical gender stereotype?',
  },
  {
    id: 'inequalities',
    title: 'Gender-based inequalities',
    explanation:
      'Beyond individual acts of discrimination, gender-based inequality refers to systemic patterns — in pay, unpaid labor, safety, or political power — that disadvantage a gender as a group.',
    context:
      'Examples often cited in Philippine research include unequal distribution of unpaid domestic and care work, and underrepresentation of women in certain leadership tiers.',
    example:
      '[Insert a specific statistic from a credible source, such as the Philippine Statistics Authority or PCW, with a full citation.]',
    whyItMatters:
      'Systemic inequality persists even when explicit discrimination is illegal, because it is embedded in everyday norms and institutions.',
    reflection: 'What is one systemic — not individual — gender inequality you notice in daily Philippine life?',
  },
]

export const conclusion = {
  title: 'Conclusion',
  paragraphs: [
    "Understanding gender roles in the Philippine context helps us recognize how historical experiences, social expectations, and contemporary realities shape people's lives. By examining both changes and continuing challenges, we can develop a more informed and respectful understanding of gender in society.",
    "[Replace this paragraph with your group's revised conclusion, once your research is finalized. Summarize your most important findings, connect the historical and contemporary sections, and state your group's overall insight.]",
  ],
}
