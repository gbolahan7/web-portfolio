# Abass Durodola — Web Portfolio

A dark-first, single-page personal portfolio built with vanilla HTML, CSS, and JavaScript. Showcases experience as an SDET / QA Engineer, selected projects, and contact details.

## Features

- Single-page layout (`index.html`)
- Dark-first theme with optional light mode
- Responsive navigation and scroll reveal motion
- Static assets in `assets/`
- No build step — open `index.html` or deploy as a static site

## Tech stack

- HTML5
- CSS3 (custom properties, responsive layout)
- Vanilla JavaScript

## Deploy

Push to the GitHub repo connected to Netlify. The site publishes from the repo root with no build command: https://abassinfo.netlify.app/

### Updating the CV

The **Download CV** link in `index.html` points to `assets/Abass_Durodola_CV.pdf`.
To publish a new CV, replace that PDF while keeping the same filename and path,
then commit and push the change to the production branch connected to Netlify.
Netlify will deploy the commit and serve the updated PDF; no HTML changes or
build step are needed.
