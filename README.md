# Mehrdad Shoae Kazemi — Professional Portfolio

A custom-built, responsive professional portfolio for data engineering, clinical real-world data, data science and bioinformatics.

**Repository:** https://github.com/mehrdadsk/portfolio

**Intended live URL (after enabling GitHub Pages):** https://mehrdadsk.github.io/portfolio/

## Features

- Black-first Noir / Ember / Orchid identity with orange, burnt orange, pink and purple accents
- Portrait-first homepage with interactive hover depth, ambient movement, and scroll reveals
- Four short, non-clickable summary lists on the homepage; detailed information on separate pages
- Year-labeled projects with featured 2026 synthetic Power BI demo, visible GitHub/plot/table links, and accessible case-study dialogs
- Skills and career-history detail available only on their own pages
- Dedicated pages for About me, Education, Skills, Experience, Projects and Achievements
- Both a concise brief résumé and an expandable full résumé, printable to PDF
- Mobile-responsive design, reduced-motion support and keyboard interaction
- No npm, external libraries, build tools, tracking scripts or paid hosting required
- Main portfolio content in **`content.js`** and detailed full résumé data in **`full-resume-data.js`**

## Run it locally

1. Download the repository as a ZIP from GitHub using **Code → Download ZIP** and extract it.
2. Open a terminal in the extracted folder.
3. Start a simple web server:

   Windows / macOS / Linux, with Python installed:

   ```bash
   python -m http.server 8000
   ```

4. Open **http://localhost:8000** in Chrome or Edge.
5. Open **http://localhost:8000/cv.html** for the brief résumé, or **http://localhost:8000/full-resume.html** for the detailed résumé.

You can also simply open `index.html`, but serving it locally is recommended for consistent browser behaviour.

## Publish with GitHub Pages

1. Open this repository on GitHub.
2. Select **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose **main** and **/(root)** and click **Save**.
5. GitHub will publish the website at **https://mehrdadsk.github.io/portfolio/**. Deployment may take a few minutes.
6. Every future commit to the `main` branch automatically updates the site.

GitHub Pages might need to be enabled manually in your account; the repository files alone do not mean that the live website is currently published.

## Edit content

Open **content.js** in GitHub and click the pencil icon, or edit the file in VS Code. You can change:

- Name, headline, professional summary and availability status
- Public contact links and preferred email
- Impact numbers and text
- Project case studies (categories, challenges, methods, outcomes, tools)
- Skills, expertise areas and technology keywords
- Career timeline, degrees and publications

**Important before publishing:**
- `contact.email` is deliberately blank until you choose which email should appear publicly.
- Check job titles, dates, all published research links, and any confidential study descriptions.
- Do not add patient data, study-only figures, registry exports, proprietary code, internal URLs, or private work screenshots.
- This website uses conceptual or synthetic graphics only. It does not claim to publish clinical production systems.

See **UPDATE_GUIDE.md** for illustrated-by-example editing instructions and troubleshooting.

## File layout

```text
portfolio/
├── index.html           # Brief homepage with links to dedicated pages
├── about.html           # Personal background
├── education.html       # Education and publications
├── skills.html          # Detailed expertise
├── experience.html      # Employment history
├── projects.html        # Projects, filters and case studies
├── achievements.html    # Detailed professional achievements
├── portfolio-pages.css  # Homepage tiles and detailed page layout
├── styles.css           # Original layout and responsive design
├── palette.css          # Black/orange/pink/purple main visual theme
├── content.js           # ALL editable professional content
├── app.js               # Renders full content on its dedicated page(s)
├── hero.css             # Animated portrait landing-page design
├── hero-fit.css         # Compact hero dimensions and overlap-safe layout
├── hero.js              # Portrait pointer motion and scroll reveals
├── cv.html              # Brief résumé with print-to-PDF option
├── cv.js                # Brief résumé renderer
├── full-resume.html     # Detailed résumé with section navigation
├── full-resume.css      # Full résumé and printing styles
├── resume-palette.css   # Dark screen palette for both résumé pages
├── full-resume-data.js  # Editable detailed career history
├── full-resume.js       # Full résumé renderer and interactions
├── favicon.svg          # Browser icon
├── social-card.svg      # Sharing graphic
├── README.md            # Overview and setup
└── UPDATE_GUIDE.md      # Step-by-step maintenance instructions
```

## Styling and customization

- To change the current colors, edit the variables at the top of `palette.css`. This file overrides the original stylesheet and keeps the site black.
- The desktop-to-mobile responsive breakpoints are near the bottom of `styles.css`.
- Edit the page structure in `index.html`.
- Edit behaviour (filters, interactions, card dialogs) in `app.js`. The old light-mode toggle has been removed; the current site uses black throughout.
- The project is designed for **no build step**, so GitHub Pages will serve it as-is.

## Public claims, privacy, and accessibility

Professional achievements are based on the supplied CV/career history. They should be re-checked for external publication; some are approximate. Generated visuals are decorative illustrations, not real data or proof of production deployments. The UI includes keyboard-accessible buttons, semantic headings, focus indicators, dialog dismissal and reduced-motion handling.

**License:** Personal portfolio content belongs to its author. No separate open-source license is granted for use of the site's source code by default.


## New homepage and both résumé versions

The landing page presents your uploaded professional portrait (`portrait.webp`), a short professional introduction, key navigation, and immediate links to **Brief résumé**, **Full résumé**, LinkedIn and GitHub.

- Update the portrait in `index.html` at `id="profile-photo"` and in `full-resume.html` (sidebar photo). A recommended replacement is a personally supplied file such as `assets/portrait.webp`.
- Update homepage copy, metrics, case studies and skills in `content.js`.
- The brief résumé is `cv.html`; most of its information comes from `content.js`, with concise curated summary bullets in `cv.js`.
- The full résumé is `full-resume.html`; update its expanded career information in `full-resume-data.js`.
- Both résumé pages have a Print / Save PDF control.
- The design is managed in `styles.css` and `hero.css`; the hover tilt and scroll reveal behavior lives in `hero.js`.
- Sensitive or restricted datasets and study-specific internal documents should never be published.

**Editing note:** Some key career facts appear in multiple content sources. When a fact changes, keep `content.js`, `cv.js`, and `full-resume-data.js` consistent.

## Noir / Ember / Orchid theme

The website uses a black background and four typography accents: orange (#ff9a4b), burnt orange (#d87034), pink (#ff78c1), and purple (#c29aff). Major headings use smooth color gradients; body paragraphs use softer peach and lavender for contrast. `palette.css` controls the main website colors; `resume-palette.css` handles both résumé pages on screen. Résumés still print on a white background.

## Adjust homepage layout and portrait scale

The main home-page scale and spacing are now defined in `hero-fit.css` (loaded after `palette.css`). Modify `.hero-v2 h1` to change headline size, `.hero-portrait-stage .portrait-card` to change portrait dimensions, and `.hero-portrait-stage .portrait-stats` for the achievement cards. The two cards sit below the picture instead of overlapping it. Screen-specific adjustments are grouped at the bottom of `hero-fit.css`. Leave `palette.css` for colors.

## Freestanding portrait (November 2026)

The homepage picture now floats directly on the dark theme, with **no rectangular frame, card, or caption box**. Achievement numbers appear on the dedicated Achievements page instead of covering the photo. The visible portrait is still the original uploaded `portrait.webp`. Because its checkerboard pattern was baked into the bitmap, `portrait-integrated-mask.svg` hides the patterned background and gradually fades the torso at the bottom; `portrait-integrated.css` controls the composition and responsiveness. The same CSS styles the small full résumé picture. Replacing the photograph may require updating the silhouette mask too. A truly transparent original PNG/WebP can be substituted later and the mask rule removed.

## Landing page vs detailed pages (November 2026)

The homepage (`index.html`) has your portrait, short professional introduction and **four concise summary lists**: Skills, Experience, Projects and Achievements. Each list contains only names/titles or brief numerical headlines—**no detailed descriptions**; only project titles link directly to case-study pages. The existing top navigation opens the dedicated **About me**, **Education**, **Skills**, **Experience**, **Projects** and **Achievements** pages. Each detailed section has its own shareable HTML file.

| Navigation | Detailed page | Where to edit the content |
|---|---|---|
| About me | `about.html` | `content.js` → `personalStory` |
| Education | `education.html` | `content.js` → `education`, `publications` |
| Skills | `skills.html` | `content.js` → `expertise` |
| Experience | `experience.html` | `content.js` → `timeline` |
| Projects | `projects.html` | `content.js` → `projects`, `filters` |
| Achievements | `achievements.html` | `content.js` → `impact` |

The detail pages reuse `app.js`; it renders only the content whose target containers are present on that page. To change the **homepage list headings**, edit `index.html` under `portfolio-overview`; the list items themselves are derived automatically by `app.js` from `content.js`. For visual spacing, use `portfolio-pages.css`. Only the project titles link to project-specific pages; the skills, experience and achievements remain plain text. For top navigation links, edit the header markup in each HTML page. The two résumé files remain separate and printable.

## Featured project: Synthetic EuroSpA Power BI reporting (2026)

The top project on `projects.html` is a Power BI reporting prototype built on synthetic pooled EuroSpA data. The portfolio includes a [four-dashboard interactive browser demo](https://mehrdadsk.github.io/portfolio/projects/eurospa-powerbi/) (Registry Overview, Treatment Lines, Contribution to Pooled Data, and synthetic Visit Coverage), a [looping treatment-line preview](https://mehrdadsk.github.io/portfolio/projects/eurospa-powerbi/animated-preview.svg), reproducible public demonstration code and a country summary table. These examples are synthesized from the project's aggregated synthetic workbook, not screenshots or a public Power BI embed.

[Demo code and provenance](./projects/eurospa-powerbi/README.md). The original local Power BI `.pbip` project and Python/R pipeline are **not** yet published; the code link refers only to this openly viewable demonstration. To publish original code later, first remove all sensitive or internal content, and update the project URLs in `content.js`.

All project objects in `content.js` now have a `year`. Optional `demoUrl`, `plotsUrl`, `tableUrl`, `codeUrl`, `previewUrl` and `codeNote` fields allow screenshots, small animations and GitHub source references to be added incrementally. Empty URLs are shown as a neutral status, **not** fake links. See `UPDATE_GUIDE.md` for instructions.

## Direct project links from the homepage

The five project titles shown in the homepage overview are clickable. The featured Power BI project opens `projects/eurospa-powerbi/index.html`, where visitors can switch among **all four dashboard tabs**. Other projects open `project.html?id=<project-id>`, a shareable single-project case study rendered from the same `content.js` project data. The Projects navigation item still opens the full project listing.

When adding a new project, include a unique `id`, `year`, context, contribution, outcome and optional verified code/plot links in `content.js`. The homepage shows the first five entries. Keep the static five-item fallback in `index.html` consistent with those entries for visitors whose JavaScript is disabled.

**Completeness scope:** the new public completeness panel is an *illustrative visit-checkpoint coverage example* based on synthetic `VisitByTreatment` flags. It does not represent missingness of specific EuroSpA clinical variables or imply that every later visit should exist. The original private completeness dashboard is not published.
