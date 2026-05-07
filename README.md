# yourname.github.io

Personal UX design portfolio — hosted on GitHub Pages.

## Structure

```
/
├── index.html              Homepage / work listing
├── about.html              About page
├── contact.html            Contact form (Formspree)
├── 404.html                Custom error page
├── CNAME                   Custom domain (edit to match yours)
├── sitemap.xml             SEO sitemap (update as you add pages)
├── site.webmanifest        Favicon + PWA metadata
├── css/
│   ├── variables.css       Design tokens — edit colors/fonts here first
│   ├── style.css           Main styles (imports variables.css)
│   └── print.css           Print / PDF styles
├── js/
│   ├── main.js             Nav highlighting, scroll behavior
│   └── password.js         Case study password protection
├── fonts/                  Self-hosted font files (.woff2)
├── images/
│   ├── favicon.svg         Replace with your logo from Figma
│   ├── og-preview.webp     Social share preview image (1200×630px)
│   └── case-studies/       Project images (export as .webp from Figma)
└── case-studies/
    └── project-one.html    Case study template
```

## Getting started

1. Find and replace every instance of `Your Name` with your actual name
2. Update `CNAME` with your real domain
3. Edit `css/variables.css` to match your brand colors and fonts
4. Replace `images/favicon.svg` with your logo exported from Figma
5. Set up Formspree and update the form action URL in `contact.html`
6. Add your case studies by duplicating `case-studies/project-one.html`

## Password-protecting a case study

Add `data-password="yourpassword"` to the `<main>` element in any case
study page. `password.js` handles the rest. Remove the attribute to make
the page public.

## Deploying

Push to the `main` branch. GitHub Pages publishes automatically within ~60 seconds.
