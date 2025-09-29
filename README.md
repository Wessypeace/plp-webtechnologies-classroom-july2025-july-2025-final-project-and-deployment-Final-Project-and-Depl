# GiggleGalaxy — Whispers in the Wind (Project README)

This repository contains a small multipage website built for a web development assignment. The site demonstrates HTML5, CSS3, and JavaScript across multiple pages and includes a kid-friendly "GiggleGalaxy" section with simple interactive features.

## Live URL

[(https://wessypeace.github.io/plp-webtechnologies-classroom-july2025-july-2025-final-project-and-deployment-Final-Project-and-Depl/)]


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
- JavaScript interactivity: Done (see features). Note: image slider is not implemented (hero uses a static background). 
- Form validation: Basic (HTML `required` + a small submit handler). 
- Deployment & documentation: This README provides deployment steps;

## Run locally

1. Open the project folder in your file explorer.
2. Double-click `index.html` (or open it in a browser). For full testing of scripts and relative paths, you can also serve the folder with a simple local server.

Optional: serve with a tiny static server (PowerShell / Windows):

```powershell
# If you have Python installed (3.x)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

