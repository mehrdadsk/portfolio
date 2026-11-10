# Mehrdad Shoae Kazemi — Professional Portfolio

A custom-built, responsive professional portfolio for data engineering, clinical real-world data, data science and bioinformatics.

**Repository:** https://github.com/mehrdadsk/portfolio

**Intended live URL (after enabling GitHub Pages):** https://mehrdadsk.github.io/portfolio/

## Features

- Custom dark editorial visual identity with an optional light theme
- Interactive homepage with a gentle abstract data-network animation
- Impact metrics grounded in career history
- Filterable project cards with detailed, accessible case-study dialogs
- Interactive expertise explorer and career timeline
- Research, education and publications
- Dedicated résumé page, printable directly to PDF
- Mobile-responsive design, reduced-motion support and keyboard interaction
- No npm, external libraries, build tools, tracking scripts or paid hosting required
- All public-facing career content maintained in **one editable file: \`content.js\`**

## Run it locally

1. Download the repository as a ZIP from GitHub using **Code → Download ZIP** and extract it.
2. Open a terminal in the extracted folder.
3. Start a simple web server:

   Windows / macOS / Linux, with Python installed:

   \`\`\`bash
   python -m http.server 8000
   \`\`\`

4. Open **http://localhost:8000** in Chrome or Edge.
5. Navigate to **http://localhost:8000/cv.html** for the printable résumé.

You can also simply open \`index.html\`, but serving it locally is recommended for consistent browser behaviour.

## Publish with GitHub Pages

1. Open this repository on GitHub.
2. Select **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose **main** and **/(root)** and click **Save**.
5. GitHub will publish the website at **https://mehrdadsk.github.io/portfolio/**. Deployment may take a few minutes.
6. Every future commit to the \`main\` branch automatically updates the site.

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
- \`contact.email\` is deliberately blank until you choose which email should appear publicly.
- Check job titles, dates, all published research links, and any confidential study descriptions.
- Do not add patient data, study-only figures, registry exports, proprietary code, internal URLs, or private work screenshots.
- This website uses conceptual or synthetic graphics only. It does not claim to publish clinical production systems.

See **UPDATE_GUIDE.md** for illustrated-by-example editing instructions and troubleshooting.

## File layout

\`\`\`text
portfolio/
├── index.html           # Homepage layout and accessible sections
├── styles.css           # Entire design, responsiveness and themes
├── content.js           # ALL editable professional content
├── app.js               # Project filters, dialogs, expertise, timeline, animation
├── cv.html              # Printable résumé layout
├── cv.js                # Generates résumé from content.js
├── favicon.svg          # Browser icon
├── social-card.svg      # Sharing graphic
├── README.md            # Overview and setup
└── UPDATE_GUIDE.md      # Step-by-step maintenance instructions
\`\`\`

## Styling and customization

- Colors and backgrounds are CSS variables at the top of \`styles.css\`.
- The desktop-to-mobile responsive breakpoints are near the bottom of \`styles.css\`.
- Edit the page structure in \`index.html\`.
- Edit behaviour (filters, interactions, card dialogs) in \`app.js\`.
- The project is designed for **no build step**, so GitHub Pages will serve it as-is.

## Public claims, privacy, and accessibility

Professional achievements are based on the supplied CV/career history. They should be re-checked for external publication; some are approximate. Generated visuals are decorative illustrations, not real data or proof of production deployments. The UI includes keyboard-accessible buttons, semantic headings, focus indicators, dialog dismissal and reduced-motion handling.

**License:** Personal portfolio content belongs to its author. No separate open-source license is granted for use of the site's source code by default.
