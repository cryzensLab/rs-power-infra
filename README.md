# RS Power and Infra — Website

A static site with three pages: `index.html` (Home), `about.html` and `contact.html`. It uses plain HTML, CSS and JavaScript, with no build step.

## Run locally
Open `index.html` in a browser, or serve the folder (recommended):

```bash
npx http-server -p 5500 -c-1
```

## Things to update

| What | Where |
|---|---|
| **WhatsApp number** | `js/main.js` → `CONFIG.whatsappNumber` (e.g. `"919876543210"`). Until it's set, WhatsApp buttons show a "coming soon" message. |
| **Logo** (180 × 60) | Put your file in `assets/logo/` and replace each `<span class="logo-box">…</span>` with `<img src="assets/logo/logo.png" width="180" height="60" alt="RS Power and Infra">` (header, menu and footer on all 3 pages). |
| **Hero slideshow** (3 images, 2000px wide) | `index.html` → the three `<img class="hero__slide">` tags at the top. To add or remove a slide, also add or remove a button in `.hero__dots`. |
| **PM Surya Ghar figures** | `index.html` → `.pmsg` block, and `amounts` in `initSubsidy()` in `js/main.js`. Check these against pmsuryaghar.gov.in before going live. |
| **Product images** | Module, inverter, solar kit and energy storage use official Waaree images from waaree.com (`assets/images/products/`). Smart Meters and Transformers still have placeholders: replace their `<div class="ph">…</div>` in `index.html` with an `<img>`. |
| **Inverter image** | `about.html` → `.inverter__media` (uses the Waaree inverter image). |
| **Phone, email, address** | Search all pages for `+91 00000 00000`, `info@rspowerinfra.com` and `Your office address here`. |
| **Google Map** | `contact.html` → iframe `src`: replace `q=India&z=5` with your address. |
| **Reviews** | `index.html` → `.quote` blocks are samples; replace them with real customer reviews. |
| **Social links** | Footer `.socials` links (currently `#`). |

The contact form has no backend yet. It validates the fields and shows a thank-you message, and once a WhatsApp number is set it also opens the enquiry in WhatsApp. To get enquiries by email, connect a service like Formspree.

After editing CSS or JS on a live server, bump `?v=31` in the `<link>` and `<script>` tags so visitors get the new version.
