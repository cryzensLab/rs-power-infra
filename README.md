# RS Power and Infra — Website

A static site with five pages: `index.html` (Home), `electrical.html` (Electrical & Energy: Solar, Control Panels), `building-automation.html` (Building Automation), `about.html` and `contact.html`. It uses plain HTML, CSS and JavaScript, with no build step.

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
| **PM Surya Ghar figures** | `index.html` → `.pmsg` block, and `SUBSIDY` near the top of `js/main.js` (used by both the subsidy selector and the calculator). Check these against pmsuryaghar.gov.in before going live. |
| **Solar content** | All solar material (Waaree products, PM Surya Ghar, solar services, planner) lives on `electrical.html`. Home only has a short solar teaser. |
| **Product images** | Module, inverter, solar kit and energy storage use official Waaree images from waaree.com (`assets/images/products/`). |
| **Inverter image** | `about.html` → `.inverter__media` (uses the Waaree inverter image). |
| **Phone, email, address** | Search all pages for `+91 00000 00000`, `info@rspowerinfra.com` and `Your office address here`. |
| **Google Map** | `contact.html` → iframe `src`: replace `q=India&z=5` with your address. |
| **Reviews** | `index.html` → `.quote` blocks are samples; replace them with real customer reviews. |
| **Social links** | Footer `.socials` links (currently `#`). |

The contact form has no backend yet. It validates the fields and shows a thank-you message, and once a WhatsApp number is set it also opens the enquiry in WhatsApp. To get enquiries by email, connect a service like Formspree.

After editing CSS or JS on a live server, bump `?v=46` in the `<link>` and `<script>` tags so visitors get the new version.
