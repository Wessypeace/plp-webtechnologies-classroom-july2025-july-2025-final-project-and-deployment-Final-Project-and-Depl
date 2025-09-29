# Whispers in the Wind — Project README

This repository contains a small multipage website built for a web development assignment. The site demonstrates HTML5, CSS3, and JavaScript across multiple pages and includes a kid-friendly "GiggleGalaxy" section with simple interactive features.

## Live URL

- (Add your live site URL here after deployment)

## Pages

- `index.html` — Home page (hero, story excerpt with "Read More").

# GiggleGalaxy — Whispers in the Wind (Project README)

This repository contains a small multipage website built for a web development assignment. The site demonstrates HTML5, CSS3, and JavaScript across multiple pages and includes a kid-friendly "GiggleGalaxy" section with simple interactive features.

## Live URL

- (Add your live site URL here after deployment)

## Pages

- `index.html` — Home page (hero, story excerpt with "Read More").
- `about.html` — About the story.
- `contact.html` — Contact form (basic client-side behavior).
- `gigglegalaxy.html` — Kid-friendly interactive page: mini-games, Story Corner, Creative Zone (drawing canvas), Fun Facts, Joke Station.

## Key files

- `style.css` — All styling (responsive layout, GiggleGalaxy card styles).
- `main.js` — Site-wide scripts: menu toggle (accessible), "Read More" toggle, contact form handler.
- `gigglegalaxy.js` — Mini-games, jokes, facts, drawing canvas, lightweight audio feedback.

## Features implemented

- Responsive layout with media queries and a mobile-friendly menu.
- Semantic HTML structure using `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.
- CSS3 styling (gradients, grid, flexbox, responsive cards).
- JavaScript interactivity:
  - Accessible menu toggle (`aria-expanded`) and keyboard activation.
  - "Read More" toggling on the story excerpt.
  - Contact form handler showing a confirmation message on submit.
  - GiggleGalaxy: math mini-game (with audio feedback), jokes, facts, and a simple drawing canvas.

## Assignment checklist (mapped to project)

- Design a site with at least three pages: Done (`index.html`, `about.html`, `contact.html`) + `gigglegalaxy.html` (extra).
- Responsive design: Done (media queries, grid, responsive nav and cards).
- HTML5 semantics: Mostly done (header/nav/main/section/footer). Suggest adding `meta` description to pages where missing.
- CSS3 styling: Done.
- JavaScript interactivity: Done (see features). Note: image slider is not implemented (hero uses a static background). If required, a lightweight slider can be added.
- Form validation: Basic (HTML `required` + a small submit handler). I can add explicit JS validation if you want.
- Deployment & documentation: This README provides deployment steps; live URL should be added after you deploy.

## Run locally

1. Open the project folder in your file explorer.
2. Double-click `index.html` (or open it in a browser). For full testing of scripts and relative paths, you can also serve the folder with a simple local server.

Optional: serve with a tiny static server (PowerShell / Windows):

```powershell
# If you have Python installed (3.x)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Deploying

Recommended quick options:

- GitHub Pages (free):

  1. Create a GitHub repository and push this project.
  2. In the repo: Settings → Pages → Source → select the branch (e.g. `main`) and root.
  3. Save and wait a minute. Add the published URL to this README.

- Netlify (drag & drop or connect repository):

  1. Sign in to Netlify and create a new site from Git.
  2. Connect your GitHub repo and select the branch. For simple static sites, no build command is required.
  3. Deploy and copy the live URL.

- Vercel (connect repository):
  1. Sign in to Vercel and import the GitHub repo.
  2. For static sites, accept the defaults and deploy.

## Small improvements you may want to add

- Add explicit client-side form validation (name length, email pattern). I can implement this quickly.
- Add an image slider in the hero (vanilla JS) if the assignment expects an image carousel.
- Add real audio narration files to the Story Corner (`gigglegalaxy.html`) and point the `<audio>` source to them.
- Add a README entry with your deployed URL and screenshots.

## Troubleshooting

- If pages don't load styles, ensure `style.css` is in the same folder as the HTML files.
- If JS not running, open DevTools Console to see errors.

## Contact / Next steps

If you'd like, I can:

- Add form validation and user-friendly inline error messages.
- Implement a lightweight hero image slider.
- Create a `README` section with screenshots and the live URL after you deploy.

Add the live URL here after deployment and I can update the README with screenshots and any final polish.

---

Project created for a web dev assignment — files are ready to push and deploy. If you want me to implement one of the small improvements above, tell me which and I’ll add it.
