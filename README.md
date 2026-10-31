# RS Power and Infra — Website

A static site: `index.html` (Home); four solar pages under the **Solar** dropdown, `solar.html` (Corporates & Industries, the main focus), `solar-residential.html`, `solar-water-pump.html` and `solar-rural.html`; `building-automation.html` (the second service); `about.html` and `contact.html`. The Solar dropdown and the "explore other solar services" rows are the same on every page; to add or rename a solar page, update the dropdown in each page's header. `electrical.html` only redirects old links to `solar.html`. RSPI offers solar and building automation only. It uses plain HTML, CSS and JavaScript, with no build step.

## Run locally
Open `index.html` in a browser, or serve the folder (recommended):

```bash
npx http-server -p 5500 -c-1
```

## Things to update

| What | Where |
|---|---|
| **WhatsApp number** | `js/main.js` → `CONFIG.whatsappNumber` (e.g. `"919876543210"`). Until it's set, WhatsApp buttons show a "coming soon" message. |
| **Logo** | Official artwork is in `assets/logo/`: `logo.png` (header, menu, footer; sits on a white plate so it reads on dark backgrounds), `favicon.png`, and `logo-letters/bolt/dot.webp` (the three parts animated by the loading screen). To change it, replace those files, keeping the three loader parts the same size so they stack. |
| **Hero slideshow** (3 images, 2000px wide) | `index.html` → the three `<img class="hero__slide">` tags at the top. To add or remove a slide, also add or remove a button in `.hero__dots`. |
| **Subsidy figure** | The PM Surya Ghar "up to ₹78,000" line is in the "Also for homes" band on `solar.html` and in the FAQ on `contact.html`. Check it against pmsuryaghar.gov.in. |
| **Solar content** | `solar.html`: benefits for industries, what we build, Waaree products, how it works, and a short "also for homes" band. Home gives a one-screen overview of both services. The "40% accelerated depreciation" and "3–5 year payback" claims (Home, Solar, FAQ) are typical figures; keep the footnote. |
| **Building automation demo** | `building-automation.html` → the `.phone` mockup. Tiles are plain buttons with `data-watts`; the live count and kW are worked out in `initBADemo()` in `js/main.js`. |
| **Product images** | Module, inverter, solar kit and energy storage use official Waaree images from waaree.com (`assets/images/products/`). |
| **Team** | `about.html` → the four `.team-card` blocks under "Our team": replace the name and role, and swap the silhouette for `<img src="assets/team/name.jpg" alt="Full name" loading="lazy" />` (photos go in `assets/team/`, about 800 × 1000px). Duplicate or delete cards as needed. |
| **Phone, email, address** | Search all pages for `+91 00000 00000`, `info@rspowerinfra.com` and `Your office address here`. |
| **Google Map** | `contact.html` → iframe `src`: replace `q=India&z=5` with your address. |
| **Social links** | Footer `.socials` links (currently `#`). |

The contact form has no backend yet. It validates the fields and shows a thank-you message, and once a WhatsApp number is set it also opens the enquiry in WhatsApp. To get enquiries by email, connect a service like Formspree.

After editing CSS or JS on a live server, bump `?v=55` in the `<link>` and `<script>` tags so visitors get the new version.
