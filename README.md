# Mehrdad Shoae Kazemi — Professional Portfolio

A custom-built, responsive professional portfolio for data engineering, clinical real-world data, data science and bioinformatics.

**Repository:** https://github.com/mehrdadsk/portfolio

**Intended live URL (after enabling GitHub Pages):** https://mehrdadsk.github.io/portfolio/

## Features

- Black-first Noir / Ember / Orchid identity with orange, burnt orange, pink and purple accents
- Portrait-first homepage with interactive hover depth, ambient movement, and scroll reveals
- Impact metrics grounded in career history
- Filterable project cards with detailed, accessible case-study dialogs
- Interactive expertise explorer and career timeline
- Research, education and publications
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
├── index.html           # Homepage layout and accessible sections
├── styles.css           # Original layout and responsive design
├── palette.css          # Black/orange/pink/purple main visual theme
├── content.js           # ALL editable professional content
├── app.js               # Project filters, dialogs, expertise, timeline, animation
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

The landing page presents a portrait sourced from your public GitHub profile avatar, a short professional introduction, key navigation, and immediate links to **Brief résumé**, **Full résumé**, LinkedIn and GitHub.

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
