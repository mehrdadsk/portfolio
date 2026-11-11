# Portfolio Update Guide

This guide assumes that the repository is **https://github.com/mehrdadsk/portfolio**.

## 1. First-time publishing

1. Sign in to GitHub and visit the repository.
2. Click **Settings**, then **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Set **Branch: main** and **Folder: /(root)**.
5. Click **Save**. Once GitHub finishes deployment, visit **https://mehrdadsk.github.io/portfolio/**.
6. If the site shows a 404 initially, check the Pages settings and deployment status before modifying code.

## 2. The fastest way to change your information

1. Open `content.js` in your repository.
2. Click the pencil icon (**Edit this file**).
3. Change only the intended text, preserving quotes, commas, braces and brackets.
4. Choose **Commit changes**.
5. Refresh the live website after GitHub Pages has deployed the change (hard refresh with Ctrl+F5 if needed).

Content uses ordinary JavaScript objects. A string is in quotes, objects use braces `{ }`, arrays use brackets `[ ]`, and adjacent items need commas.

Example — update your summary:

```js
description: "I design reliable data pipelines and turn complex research data into clear decisions.",
```

Example — set the email button once you decide which address you want public:

```js
contact: {
  email: "your-public-address@example.com",
  linkedin: "https://www.linkedin.com/in/mehrdadshoaekazemi/",
  github: "https://github.com/mehrdadsk",
  cv: "./cv.html"
},
```

An empty `email: ""` suppresses the Email button so no unconfirmed contact address is exposed.

## 3. Add a new project

In `content.js`, find `projects: [` and copy one existing project object within the array. Replace the fields. For example:

```js
{
  id: "synthetic-data-quality-demo",
  year: "2026",
  category: "Data Engineering",
  badge: "PUBLIC DEMO",
  title: "Quality control in a synthetic registry",
  summary: "An example showing reproducible checks on sample data.",
  outcome: "Interactive quality dashboard",
  symbol: "QC",
  art: "blue",
  role: "Personal project",
  demoUrl: "",
  plotsUrl: "",
  tableUrl: "",
  codeUrl: "",
  previewUrl: "",
  period: "2026",
  challenge: "Demonstrating consistent rules across messy input formats.",
  approach: [
    "Generate fake, non-identifiable example records.",
    "Write reusable quality rules.",
    "Document assumptions and export visual results."
  ],
  result: "A clear walkthrough that others can reproduce using synthetic data.",
  tools: ["Python", "pandas", "Quality control"],
  confidentiality: "All example data are synthetic."
},
```

**Allowed category values** (to make the filters work): `Data Engineering`, `Clinical Research`, `Data Science`, `Bioinformatics`.

**Allowed art values:** `green`, `violet`, `blue`, `amber`.

When adding a project, ensure there is a comma separating it from the previous/next project object. Every new project's `id` should be unique. Do not claim a GitHub demo exists until it is actually available.

## 4. Change an impact statistic

Within `impact: [`, use a record like:

```js
{ label: "REGISTRIES", value: "19", suffix: "", description: "European registries", icon: "✳" },
```

`value` and `suffix` are displayed together. The project cards, CV and biography are separate sections: update all relevant claims when the underlying number changes.

## 5. Update expertise and technology keywords

- Edit `expertise` to change the four clickable skill areas.
- Edit `tools` for the technology tag cloud.
- The résumé automatically reuses the same `tools` list.
- Make a distinction between production experience and training, e.g. **Databricks fundamentals (training)**.

## 6. Update career timeline / degrees / publications

- `timeline`: position title, organization, dates, summary and bullet points.
- `education`: degree, school, dates and research notes.
- `publications`: publication year, title, journal and optional verified public `link` URL.

Leave `link: ""` when you have not verified a public publication URL.

## 7. Download your brief or full résumé as PDF

1. Open **https://mehrdadsk.github.io/portfolio/cv.html** for the brief résumé or **https://mehrdadsk.github.io/portfolio/full-resume.html** for the full résumé once publishing is enabled.
2. Click **Print / Save as PDF**.
3. Select **Save as PDF** as the printer destination.
4. Check pagination and save the file.

The brief résumé is a concise recruiter-focused overview; the full résumé provides detailed experience, projects, bioinformatics toolchain and publications. Neither is an automatically tailored job application. You can tailor a separate CV for each vacancy.

## 8. Change the visual style

The portfolio now has one consistent black theme. To change the current color scheme, edit the CSS variables at the top of `palette.css`, which loads after `styles.css` and `hero.css`.

Useful variables:
- `--bg`: near-black background
- `--panel`: card backgrounds
- `--fg`: main text
- `--text`: muted body text
- `--accent`: primary orange accent
- `--border`: card/divider borders

The headline is in `index.html`. To change its wording, edit the text inside `<h1 id="hero-title">...`.

## 9. Add a professional photograph

The homepage now shows your own uploaded `portrait.webp` inside an animated portrait frame. To replace it with another professional photo:
1. Add a photo you own (for example `assets/portrait.webp`) to the repository.
2. Find the `<img class="portrait-photo" id="profile-photo"` element in `index.html` and change its `src` to `./assets/portrait.webp`.
3. Find the sidebar image in `full-resume.html` and also change its `src` to `./assets/portrait.webp`.
4. Use appropriate `alt` text and adjust cropping in `hero.css` under `.portrait-photo`.
5. Avoid uploading private metadata with photos.

For better social previews, you may replace `social-card.svg` with your own graphic. Update the corresponding `og:image` tag in `index.html`.

## 10. Work with Git locally

```bash
git clone https://github.com/mehrdadsk/portfolio.git
cd portfolio
python -m http.server 8000
```

Edit in VS Code, then publish with:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

For substantial design or code changes, create a separate branch and open a pull request before merging.

## 11. Troubleshooting

**Blank cards / missing sections:** There may be a JavaScript syntax error in `content.js`. Open the browser Developer Tools (F12) and inspect **Console**. Check commas and quotes.

**Changes not visible:** Confirm the commit is on `main`, check Pages deployment, then refresh with Ctrl+F5.

**Github Pages 404:** In Settings → Pages, confirm main / root is selected and allow time for deployment.

**Email button absent:** This is intentional while `contact.email` is blank.

**Projects filter incorrectly:** Check that every project's `category` matches one of the values in `filters`.

**PDF looks different:** Use Chrome or Edge's print preview; enable background graphics if you want decorative background colors.

## 12. Publication checklist

- Confirm all claims, names, dates, publications and metrics.
- Choose and add your preferred public email address.
- Confirm LinkedIn and GitHub links.
- Ensure screenshots and datasets are either synthetic or approved for public release.
- Review mobile layout and all case studies.
- Test a CV export.
- Enable and verify GitHub Pages before sharing the portfolio link with recruiters.

### Suggested future improvements
- Personal portrait and optional introduction video
- Separate dedicated project demos using synthetic datasets
- GitHub-backed case studies with runnable examples
- Custom domain and basic search engine performance review
- Validated PDF version of a selected master CV


## 13. Maintaining both résumé versions

**Brief résumé:**
- Page: `cv.html`
- Main content source: `content.js`
- Short career highlights and summary: `cv.js`
- CSS: embedded in `cv.html`
- Designed to be easy to scan or print as a short CV.

**Full résumé:**
- Page: `full-resume.html`
- Career content source: `full-resume-data.js`
- Layout and print design: `full-resume.css`
- Interaction and print expansion: `full-resume.js`
- All work roles are expandable on screen and expand automatically when printing.

Update `content.js`, `cv.js` and `full-resume-data.js` consistently when you revise job dates, metrics or research accomplishments.

## 14. Changing the animated introduction

- The short summary on the homepage is in `content.js` under `description`.
- The hero title, portrait, primary navigation and buttons live in `index.html`.
- Portrait frame design, orbit movement, floating stat tags and mobile layout are in `hero.css`.
- Cursor tilt and scroll reveals live in `hero.js`.
- The website honours the user's **Reduce motion** preference.

To change the photo, upload an image you own and modify both image `src` references. The currently selected picture is `portrait.webp`, stored in the root of the GitHub repository.

## 15. Customize the black, orange, pink and purple theme

The palette is in `palette.css`, with these main colors:

```css
:root {
  --bg: #09070d;       /* near-black */
  --accent: #ff9a4b;   /* orange */
  --burnt: #d87034;    /* dark orange */
  --pink: #ff78c1;     /* pink */
  --purple: #c29aff;   /* purple */
}
```

To change it, open `palette.css` on GitHub, click the pencil icon, edit the values, and commit. Edit `resume-palette.css` to match the résumé colors. The brief and full résumé pages intentionally print on white. The old light/dark switch was removed to keep the requested black appearance consistent.

## 16. Adjust homepage size and fix overlapping elements

The homepage now uses `hero-fit.css` for layout adjustments. It is deliberately loaded **after** the main `styles.css`, `hero.css`, and `palette.css` so its spacing rules take precedence without changing the rest of the website.

- **Photo size:** find `.hero-portrait-stage .portrait-card` and adjust `width` / `height`.
- **Headline size:** find `.hero-v2 h1` and adjust `font-size`.
- **Photo achievement cards:** find `.hero-portrait-stage .portrait-stats`. They are in a separate row **below** the portrait; do not move them back over the image.
- **Spacing:** find `.hero-v2` and change `gap`, `padding-top` or `padding-bottom`.
- **Phones/tablets:** edit the `@media` rules near the end of `hero-fit.css`.
- **Colors:** edit `palette.css`, not `hero-fit.css`.

Changes are committed directly to GitHub's `main` branch and will be picked up by GitHub Pages. If you have a local clone, use GitHub Desktop **Fetch origin → Pull origin**, or run `git pull origin main` from the portfolio folder. Avoid local modifications to the same CSS file before pulling, or merge conflicts may occur.

## 17. Transparent portrait background (checkerboard removal)

Your original `portrait.webp` was created from a photo with a **visible gray/white checkerboard baked into the image pixels**, not actual transparency. The site now removes that pattern with a subject-specific silhouette mask, keeping the original face and suit unchanged.

- `portrait-mask.svg`: transparent/opaque silhouette matching the current original portrait.
- `portrait-cutout.css`: applies that mask to both homepage and full résumé pictures.
- `portrait.webp`: original picture, kept unchanged; checkerboard is hidden on the published site by the mask.

**If you upload a different photo:** its silhouette may not line up with the existing mask. Replace it with a truly transparent PNG/WebP and either remove the mask rules from `portrait-cutout.css`, or generate a new silhouette mask matching the new photograph. To keep the current face and remove only the squares, do not replace the face with an AI-generated portrait.

## 18. Integrated, unframed portrait

The homepage no longer shows a rectangular picture card, name caption, or metrics floating over the image. Instead the portrait appears directly in the right side of the hero, with a natural gradient fade toward the bottom. Its position and size are defined in **`portrait-integrated.css`**, loaded last so it overrides the older card styling. The visual cutout uses **`portrait-integrated-mask.svg`** because the current `portrait.webp` contains checkerboard squares embedded in the image. This is a display mask; the source photograph itself is unchanged.

When replacing the portrait with a truly transparent photo, remove the `mask-image` and `-webkit-mask-image` URL rules in `portrait-integrated.css`, retaining or adding only a bottom gradient fade if desired. For a different photo with an opaque background, the silhouette mask must be replaced to match its outline. The matching small profile image in the full résumé uses the same style; the brief résumé is intentionally text-only.

## Homepage with separate detailed pages (November 2026)

The homepage is intentionally brief: the profile introduction, portrait, and four simple **non-clickable lists** of skills, positions, project titles and achievements. The existing top navigation links to `skills.html`, `experience.html`, `projects.html`, `achievements.html`, `about.html` and `education.html` for full details.

**To update the professional details**, edit `content.js` as usual. The same data populates the dedicated pages automatically:

- Skills: `expertise` in `content.js` → `skills.html`
- Employment: `timeline` → `experience.html`
- Case studies: `projects` and `filters` → `projects.html`
- Achievements: `impact` → `achievements.html`
- Education and publications: `education` and `publications` → `education.html`
- Personal background: `personalStory` → `about.html`

**To update the homepage summary lists**, edit `content.js` under `expertise`, `timeline`, `projects` or `impact`. `app.js` automatically fills the four plain `ul` lists in the `overview-grid` container of `index.html`. The lists are not clickable; leave the navigation links in the page header unchanged. To change list appearance, edit `portfolio-pages.css`.

The two résumé pages (`cv.html` and `full-resume.html`) remain independent of the six detail pages. Contact links are displayed in the header and brief homepage contact row.

## 19. Add code links, plots, tables and animated previews to projects

All projects are listed in `content.js` under `projects: [`. Each object should have a meaningful `year` (a range such as `"2023–present"` is acceptable when the project spans multiple years). The year is displayed in the Projects page cards and case-study dialog.

The **2026 EuroSpA synthetic Power BI** project is the current example. Open:
- [Projects page](https://mehrdadsk.github.io/portfolio/projects.html#project-eurospa-dashboard)
- [Public interactive charts and table](https://mehrdadsk.github.io/portfolio/projects/eurospa-powerbi/)
- [Demo code and notes](./projects/eurospa-powerbi/README.md)

To add resources to a project, edit the corresponding object in `content.js`:

```js
year: "2026",
demoUrl: "./projects/my-project/index.html",
plotsUrl: "./projects/my-project/index.html#visuals",
tableUrl: "./projects/my-project/index.html#data-table",
codeUrl: "https://github.com/YOUR_USERNAME/your-public-repository",
codeLabel: "GitHub source code",
previewUrl: "./projects/my-project/preview.svg",
codeNote: "This example uses synthetic data only.",
```

- Use actual, working public URLs only. Leave missing links as `""`. Projects without public code or plots display a status instead of a dead link.
- For a true Power BI source project, link the sanitized `.pbip` project folder or a new GitHub repository once it is public. **Do not call the browser demo the original Power BI code.**
- Add screenshots, animated SVGs, short GIFs or figures within `projects/my-project/`. Link the relative path in `previewUrl` (the preview is displayed on the featured project card and inside its detail dialog).
- To feature a project at full width, set `featured: true` on that project and move it to the first position in `projects`.
- The browser demo for EuroSpA relies on summarized synthetic counts only. The public source is `projects/eurospa-powerbi/data.js`, with visual code in `demo.js`. The original local pipeline and `.pbip` are not published yet.
- Verify that externally shared screenshots, data and code contain no real patient records or confidential hospital URLs, filenames, passwords or credentials.

The homepage displays a small static list of the first five projects even if JavaScript is disabled. When reordering or renaming projects, also update the five fallback `<li>` items under `id="home-projects"` in `index.html`, or the old text may remain visible when scripts fail to load. The live JavaScript updates those items when available.
