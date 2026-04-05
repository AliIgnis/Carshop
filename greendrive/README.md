# GreenDrive

A professional BYD electric vehicle showcase website built with Angular 18. Available in **English** and **German**.

![Angular](https://img.shields.io/badge/Angular-18-DD0031?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-Styles-CC6699?logo=sass)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)

## Features

- **Responsive** — Mobile-first design with fluid layouts
- **Bilingual (EN/DE)** — Full internationalization with ngx-translate
- **Accessible (WCAG AA)** — Semantic HTML, ARIA labels, reduced motion support
- **Docker-ready** — Multi-stage build with nginx
- **GitHub Pages CI/CD** — Automatic deployment via GitHub Actions
- **Performance** — OnPush change detection, lazy scroll animations

## Prerequisites

- Node.js 20+
- npm 10+

## Quick Start

```bash
git clone https://github.com/aliignis/carshop.git
cd carshop/greendrive
npm install
npx ng serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## Docker

```bash
docker build -t greendrive .
docker run -p 8080:80 greendrive
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

## Deployment

The project is configured for GitHub Pages deployment via GitHub Actions. Push to `main` to trigger automatic deployment.

## Project Structure

```
greendrive/
├── src/
│   ├── app/
│   │   ├── components/        # Navbar, Hero, About, Models, Why BYD, Testimonials, Contact, Footer
│   │   ├── directives/        # FadeInDirective (scroll-triggered animations)
│   │   ├── services/          # ScrollService (smooth scroll + active section tracking)
│   │   ├── models/            # TypeScript interfaces (CarModel, NavLink, Testimonial)
│   │   └── constants/         # All app constants (no magic values)
│   ├── assets/i18n/           # Translation files (en.json, de.json)
│   └── styles/                # SCSS design system (variables, mixins, animations)
├── Dockerfile                 # Multi-stage Docker build
├── nginx.conf                 # Nginx configuration for SPA
└── .github/workflows/         # GitHub Actions CI/CD
```

## Tech Stack

- **Framework:** Angular 18 (standalone components)
- **Styling:** SCSS with BEM methodology
- **i18n:** @ngx-translate/core + @ngx-translate/http-loader
- **Container:** Docker (nginx:alpine)
- **CI/CD:** GitHub Actions → GitHub Pages

## License

MIT
