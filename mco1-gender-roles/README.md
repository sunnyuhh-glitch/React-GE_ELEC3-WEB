# Gender Roles in the Philippine Context — MCO 1 Website

A React + Vite website built for the Major Course Output (MCO 1): *Critical Exploration and Creative
Presentation of Gender Roles in the Philippine Context*.

## 1. Requirements

- [Node.js](https://nodejs.org/) 18 or later (includes npm)
- Visual Studio Code (recommended)

## 2. Installation

1. Unzip this project and open the folder in Visual Studio Code.
2. Open a terminal in the project folder and run:

   ```bash
   npm install
   ```

## 3. Running the website

```bash
npm run dev
```

This starts a local development server (usually at `http://localhost:5173`). Open that address in your
browser. The page reloads automatically whenever you save a file.

To build a production version (for deployment):

```bash
npm run build
npm run preview   # preview the production build locally
```

## 4. Project structure

```
src/
├── assets/                  Put your own images here
├── hooks/
│   └── useReveal.js           Scroll-into-view fade/rise reveal hook
├── components/               One file per section of the site
│   ├── Navbar.jsx
│   ├── Hero.jsx               Homepage / hero section
│   ├── Intro.jsx              "Why This Matters" editorial intro
│   ├── Reveal.jsx             Wrapper that fades content in on scroll
│   ├── SectionHeader.jsx      Reusable heading used by every section
│   ├── GenderRoles.jsx        "Understanding Gender Roles"
│   ├── HistoricalTimeline.jsx "Historical Perspective"
│   ├── ContemporaryRoles.jsx  "Contemporary Gender Roles" (bento layout)
│   ├── GenderIssues.jsx       "Gender Issues and Realities"
│   ├── AnalysisReflection.jsx "Analysis & Reflection"
│   ├── MultimediaGallery.jsx  "Multimedia" (magazine grid)
│   ├── Conclusion.jsx
│   ├── References.jsx
│   ├── Footer.jsx
│   └── BackToTop.jsx
├── data/                     All editable content lives here
│   ├── content.js             Group info, hero text, intro concepts,
│   │                          understanding section, contemporary domains
│   │                          (with layout "size"), gender issues, analysis
│   │                          + pull quote, reflection questions, conclusion
│   ├── timelineData.js        The four historical periods
│   ├── references.js          Citation list
│   └── mediaData.js           Gallery image captions, sizes & video placeholders
├── App.jsx                   Assembles all sections in order
├── main.jsx                  React entry point
└── index.css                 All styling (design tokens at the top)
```

## 5. How to replace your group's information

Open **`src/data/content.js`** and edit the `siteConfig` object at the top of the file:

```js
export const siteConfig = {
  projectTitle: '...',
  groupName: 'Group 3',
  members: ['Juan Dela Cruz', 'Maria Santos', '...'],
  courseSection: 'BSED-SocStud 2A',
  instructor: 'Prof. ...',
  school: '...',
}
```

This single object feeds the hero section, group card, and footer — so you only need to update it once.

## 6. How to replace images and videos

1. Add your image files to `src/assets/`.
2. Open **`src/data/mediaData.js`** and update `galleryImages` with a real `src` reference (you'll need to
   `import` each image at the top of `MultimediaGallery.jsx` and pass it in, or reference a path inside
   `public/` directly), a caption, and an attribution. The `size` field (`'feature'`, `'tall'`, or `'wide'`)
   controls how large the card appears in the magazine-style grid — leave it as-is unless you want to
   rearrange the layout.
3. For video, replace the placeholder entry in `galleryVideos` with a real embed. If you use a YouTube
   video, swap the placeholder block in `MultimediaGallery.jsx` for an `<iframe>` using the video's
   **embed URL** (Share → Embed on YouTube), and keep the description explaining why the video supports
   your content.
4. Only use images and videos you have the right to use — public domain, Creative Commons, your own
   original work, or properly licensed material — and always credit the source in `references.js`.

## 7. How to add credible references

Open **`src/data/references.js`**. Each reference is an object like:

```js
{
  id: 'ref-unique-id',
  type: 'journal', // 'book' | 'journal' | 'government' | 'website' | 'image' | 'video'
  title: 'Full title of the source',
  author: 'Author name or organization',
  year: '2021',
  url: 'https://example.com',
  note: 'Optional short note',
}
```

Every fact in `content.js` and `timelineData.js` that is marked **[VERIFY]** should have a matching entry
here once you've found and confirmed a credible source. Do not invent authors, years, or URLs — if you
can't verify a claim, either remove it or clearly mark it as your own group's interpretation rather than
an established fact.

## 8. Design notes

This version uses a premium **editorial magazine** design system instead of the earlier plain layout:

- **Colors** — deep navy (`#0B1733`) for the hero, navigation, and conclusion; warm cream (`#F6F0E5`) and soft
  beige (`#E5D9C8`) alternate across content sections for visual rhythm; antique gold (`#C59A3A`) marks
  accents, buttons, and timeline points; muted terracotta (`#A95145`) is used for editorial highlights and
  labels. All tokens live at the top of `src/index.css` — change them there to re-theme the whole site.
- **Type** — Fraunces (serif) for headings and pull quotes, Work Sans (sans-serif) for body copy and UI.
- **Hero** — a two-column magazine layout: eyebrow label, editorial title, intro, and two calls to action on
  the left; a layered card composition with a vertical era marker on the right, over a restrained paper-grain
  texture (not a repeating pattern).
- **Historical timeline** — a museum-exhibit style list with a gold marker, expandable detail panels, and a
  gentle one-time reveal as each period scrolls into view.
- **Contemporary Gender Roles** — an editorial "bento" grid: a large feature card for Family, medium cards
  for Education and Workplace, a full-width band for Media, and split cards for Leadership and Community —
  instead of six identical boxes.
- **Multimedia** — a magazine-style image grid with a large feature image, a tall image, and wide cards,
  plus a dedicated video block.
- **Analysis & Reflection** — a comparison table paired with a sticky pull-quote, followed by the group's
  own analysis and the reflection questions.
- **Motion** — a single restrained fade/rise entrance per section (via the `Reveal` component and
  `useReveal` hook in `src/hooks/`), plus hover states on cards and links. Reduced-motion preferences are
  respected automatically — the animation is skipped and content simply appears.

## 9. Before you submit

- Replace every `[BRACKETED]` placeholder in `src/data/`.
- Replace every `[VERIFY]` note with a real, checked fact and a matching reference.
- Replace placeholder gallery images and the video block with real, attributed media.
- Read through `GenderIssues.jsx` and `content.js` content for tone — make sure it reflects your group's
  own research and voice, not just the starter text.
