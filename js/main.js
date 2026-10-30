/* =========================================================
   RS Power and Infra — site scripts
   ========================================================= */

/* ---------- Site settings: edit these ---------- */
const CONFIG = {
  // WhatsApp number with country code, digits only, e.g. "919876543210".
  // Leave empty to keep the WhatsApp button in demo mode.
  whatsappNumber: "",
  whatsappMessage: "Hi RS Power and Infra, I'd like to know more about solar for my property.",
};

/* ---------- Icon sprite (used as <svg class="i"><use href="#i-name"/></svg>) ---------- */
const ICONS = {
  sun: '<circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none"/><g stroke-width="1.6"><path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/><path d="M8 2.3l.8 2.2M15.2 19.5l.8 2.2M2.3 16l2.2-.8M19.5 8.8l2.2-.8M2.3 8l2.2.8M19.5 15.2l2.2.8M8 21.7l.8-2.2M15.2 4.5l.8-2.2"/></g>',
  "arrow-right": '<path d="M5 12h14M13 6l6 6-6 6"/>',
  "arrow-left": '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  "arrow-up-right": '<path d="M7 17L17 7M8 7h9v9"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  pin: '<path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  handshake: '<path d="M11 17l2 2a1.4 1.4 0 0 0 2-2"/><path d="M14 14l2.5 2.5a1.4 1.4 0 0 0 2-2L15 11"/><path d="M2 11l5-5 4 2 2-1 4 0 5 5"/><path d="M2 11l3 3 1-1M22 11l-3.5 3.5"/><path d="M9 11l2-2 2 2"/><path d="M6 14l2 2a1.4 1.4 0 0 0 2-2"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  leaf: '<path d="M5 21c0-9 6-15 16-16-1 10-7 16-16 16z"/><path d="M5 21l8-8"/>',
  home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  building: '<rect x="4" y="3" width="16" height="18" rx="1"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2"/>',
  factory: '<path d="M3 21V10l6 4V10l6 4V5h6v16z"/><path d="M7 17h2M12 17h2M17 17h2"/>',
  battery: '<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2M6 10v4M10 10v4"/>',
  water: '<path d="M2 17c2 0 2-1.5 4-1.5S8 17 10 17s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"/><path d="M2 21c2 0 2-1.5 4-1.5S8 21 10 21s2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"/><path d="M5 13l3-7h8l3 7z"/><path d="M9.5 6l-1 7M14.5 6l1 7"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3"/><path d="M7.5 15h9"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  wifi: '<path d="M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0"/><circle cx="12" cy="19" r="1"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  monitor: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/><path d="M6 10h3l1.5-2 2 4 1.5-2h4"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  split: '<path d="M4 4v16M12 4v16M20 4v16"/><path d="M4 9h8M12 15h8"/>',
  gauge: '<path d="M4 18a8 8 0 1 1 16 0"/><path d="M12 18l4-6"/>',
  grid: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9.3h18M3 14.6h18M9 4v16M15 4v16"/>',
  meter: '<rect x="5" y="2" width="14" height="20" rx="2"/><rect x="8" y="5" width="8" height="5"/><path d="M9 14h.01M12 14h.01M15 14h.01M9 17h.01M12 17h.01M15 17h.01"/>',
  box: '<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  "check-circle": '<circle cx="12" cy="12" r="9.5"/><path d="M7.5 12l3 3 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  star: '<path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5L2.5 9.3l6.6-.8z" fill="currentColor" stroke="none"/>',
  rupee: '<path d="M7 4h11M7 9h11M8 4c6 0 6 10 0 10H7l8 7"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
  pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 7l3 3"/>',
  doc: '<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2" y="14" width="5" height="6" rx="1.5"/><rect x="17" y="14" width="5" height="6" rx="1.5"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/>',
  whatsapp: '<path fill="currentColor" stroke="none" d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.5 9.5 0 0 1-4.84-1.33l-.35-.21-3.6.94.96-3.5-.23-.36A9.46 9.46 0 0 1 2.5 12 9.54 9.54 0 0 1 12.04 2.5 9.5 9.5 0 0 1 21.5 12c0 5.26-4.27 9.5-9.46 9.5zm8.08-17.62A11.4 11.4 0 0 0 12.04.5C5.7.5.55 5.65.55 12c0 2.03.53 4 1.53 5.75L.5 23.5l5.9-1.55A11.43 11.43 0 0 0 12.04 23.5c6.34 0 11.5-5.15 11.5-11.5 0-3.07-1.2-5.96-3.42-8.12z"/>',
  facebook: '<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  youtube: '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7"/>',
};

(function injectSprite() {
  const symbols = Object.entries(ICONS)
    .map(([name, body]) => `<symbol id="i-${name}" viewBox="0 0 24 24">${body}</symbol>`)
    .join("");
  const holder = document.createElement("div");
  holder.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none">${symbols}</svg>`;
  document.body.prepend(holder.firstChild);
})();

/* ---------- Helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasGsap = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

/* PM Surya Ghar central subsidy (indicative). Used by the subsidy selector and the calculator.
   Check these against pmsuryaghar.gov.in before going live. */
const SUBSIDY = {
  // homes: ₹30,000/kW for the first 2 kW, ₹18,000/kW for the next 1 kW, capped at 3 kW (₹78,000)
  home: (kw) => 30000 * Math.min(kw, 2) + 18000 * Math.min(Math.max(kw - 2, 0), 1),
  // housing societies (common facilities): ₹18,000/kW, up to 500 kW
  society: (kw) => 18000 * Math.min(kw, 500),
};

function toast(msg) {
  let t = $(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    t.setAttribute("role", "status");
    document.body.appendChild(t);
  }
  t.innerHTML = `<svg class="i"><use href="#i-check-circle"/></svg><span>${msg}</span>`;
  requestAnimationFrame(() => t.classList.add("is-show"));
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("is-show"), 3600);
}

function openWhatsApp(message) {
  if (!CONFIG.whatsappNumber) {
    toast("WhatsApp chat is coming soon. Please call or email us meanwhile.");
    return;
  }
  const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message || CONFIG.whatsappMessage)}`;
  window.open(url, "_blank", "noopener");
}

/* Split text into words / chars for reveal animations */
function splitText(el) {
  const mode = el.dataset.split || "words";
  const words = el.textContent.trim().split(/\s+/);
  el.setAttribute("aria-label", el.textContent.trim());
  el.innerHTML = words
    .map((w) => {
      if (mode === "chars") {
        const chars = [...w].map((c) => `<span class="c" aria-hidden="true"><span class="ci">${c}</span></span>`).join("");
        return `<span class="w" aria-hidden="true" style="overflow:visible">${chars}</span>`;
      }
      return `<span class="w" aria-hidden="true"><span class="wi">${w}</span></span>`;
    })
    .join(" ");
}

/* ---------- Header ---------- */
function initHeader() {
  const header = $(".header");
  if (!header) return;
  let lastY = 0;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("is-scrolled", y > 40);
    header.classList.toggle("is-hidden", y > 400 && y > lastY && !document.body.classList.contains("no-scroll"));
    lastY = y;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---------- Full screen menu ---------- */
function initMenu() {
  const menu = $(".menu");
  if (!menu) return;
  const burgers = $$("[data-menu-open]");
  const open = () => {
    // morph the hamburger into an X, then reveal the menu
    burgers.forEach((b) => b.classList.add("is-open"));
    setTimeout(() => {
      menu.classList.add("is-open");
      menu.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
      window.__lenis?.stop();
    }, 280);
  };
  let closing = false;
  const close = () => {
    if (!menu.classList.contains("is-open") || closing) return;
    closing = true;
    // 1) links and info glide up and fade, 2) the circle shrinks back (links stay hidden meanwhile),
    // 3) the X morphs back into lines, 4) reset link positions once the panel is fully hidden
    const LINKS_OUT = 520, PANEL_SHRINK = 900;
    menu.classList.add("is-closing");
    setTimeout(() => {
      menu.classList.remove("is-open");
      menu.setAttribute("aria-hidden", "true");
      document.body.classList.remove("no-scroll");
      window.__lenis?.start();
    }, LINKS_OUT);
    setTimeout(() => burgers.forEach((b) => b.classList.remove("is-open")), LINKS_OUT + 500);
    setTimeout(() => {
      menu.classList.remove("is-closing");
      closing = false;
    }, LINKS_OUT + PANEL_SHRINK);
  };
  $$("[data-menu-open]").forEach((b) => b.addEventListener("click", open));
  $$("[data-menu-close]").forEach((b) => b.addEventListener("click", close));
  document.addEventListener("keydown", (e) => e.key === "Escape" && close());
}

/* ---------- WhatsApp buttons ---------- */
function initWhatsApp() {
  $$("[data-whatsapp]").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      openWhatsApp(btn.dataset.whatsapp || "");
    })
  );
  const float = $(".wa-float");
  if (float) {
    setTimeout(() => float.classList.add("show-tip"), 4000);
    setTimeout(() => float.classList.remove("show-tip"), 8000);
  }
}

/* ---------- Product cards: whole card is tappable ---------- */
function initProductCards() {
  $$(".pr-card").forEach((card) => {
    const link = $(".pr-card__link", card);
    if (!link) return;
    card.style.cursor = "pointer";
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      link.click();
    });
  });
}

/* ---------- Hero slideshow ---------- */
function initHeroSlides() {
  const slides = $$(".hero__slide");
  const dots = $$(".hero__dots button");
  if (slides.length < 2) return;
  let i = 0;
  let timer;
  const lines = $$(".hero__tagline span");
  const show = (n) => {
    const next = (n + slides.length) % slides.length;
    if (next === i) return;
    // keep the outgoing image underneath while the new one wipes in
    slides.forEach((s) => s.classList.remove("is-prev"));
    slides[i].classList.add("is-prev");
    slides[i].classList.remove("is-active");
    void slides[next].offsetWidth; // restart the wipe animation
    slides[next].classList.add("is-active");
    // swap the headline in step with the image
    if (lines.length) {
      const out = lines[i % lines.length];
      out.classList.remove("is-active");
      out.classList.add("is-leaving");
      setTimeout(() => out.classList.remove("is-leaving"), 800);
      lines[next % lines.length].classList.add("is-active");
    }
    i = next;
    dots.forEach((d, k) => {
      d.classList.remove("is-active");
      if (k === i) { void d.offsetWidth; d.classList.add("is-active"); } // restart the progress fill
    });
  };
  // the slideshow is the hero's main feature, so it runs even with reduced motion on
  const play = () => {
    clearInterval(timer);
    timer = setInterval(() => show(i + 1), 5000);
  };
  dots.forEach((d, k) => d.addEventListener("click", () => { show(k); play(); }));
  play();
}

/* ---------- PM Surya Ghar subsidy selector ---------- */
function initSubsidy() {
  const root = $("[data-subsidy]");
  if (!root) return;
  const out = $("[data-subsidy-out]", root);
  const bar = $("[data-subsidy-bar]", root);
  const max = SUBSIDY.home(3);
  let current = max;
  $$("[data-kw]", root).forEach((btn) =>
    btn.addEventListener("click", () => {
      $$("[data-kw]", root).forEach((b) => { b.classList.toggle("is-active", b === btn); b.setAttribute("aria-checked", b === btn); });
      const to = SUBSIDY.home(Number(btn.dataset.kw));
      bar.style.setProperty("--w", (to / max) * 100 + "%");
      if (hasGsap && !reduceMotion) {
        const o = { v: current };
        gsap.to(o, { v: to, duration: 0.9, ease: "power3.out", onUpdate: () => (out.textContent = inr(o.v)) });
      } else out.textContent = inr(to);
      current = to;
    })
  );
}

/* ---------- Building automation demo: tap tiles to switch devices ---------- */
function initBADemo() {
  const root = $("[data-ba-demo]");
  if (!root) return;
  const tiles = $$(".tile", root);
  const count = $("[data-ba-count]", root);
  const power = $("[data-ba-power]", root);
  const update = () => {
    const on = tiles.filter((t) => t.classList.contains("is-on"));
    const kw = on.reduce((sum, t) => sum + (parseFloat(t.dataset.watts) || 0), 0) / 1000;
    count.textContent = `${on.length} on`;
    power.textContent = `${kw.toFixed(1)} kW`;
  };
  const set = (tile, state) => {
    tile.classList.toggle("is-on", state);
    tile.setAttribute("aria-pressed", state);
  };
  tiles.forEach((t) => t.addEventListener("click", () => { set(t, !t.classList.contains("is-on")); update(); }));
  $$("[data-ba-scene]", root).forEach((b) =>
    b.addEventListener("click", () => {
      const work = b.dataset.baScene === "work";
      // "Work mode": everything on except the door lock tile; "All off": everything off
      tiles.forEach((t, k) => set(t, work && k < 5));
      update();
    })
  );
  update();
}

/* ---------- Testimonials ---------- */
function initQuotes() {
  const quotes = $$(".quote");
  const dots = $$(".quote-card__dots span");
  if (quotes.length < 2) return;
  let i = 0;
  const show = (n) => {
    quotes[i].classList.remove("is-active");
    dots[i]?.classList.remove("is-active");
    i = n % quotes.length;
    quotes[i].classList.add("is-active");
    dots[i]?.classList.add("is-active");
  };
  if (!reduceMotion) setInterval(() => show(i + 1), 5500);
}

/* ---------- Services list + sticky image ---------- */
function initServices() {
  const root = $("[data-svc]");
  if (!root) return;
  const items = $$(".svc__item", root);
  const imgs = $$(".svc__media > img", root);
  const count = $("[data-svc-count]", root);
  const name = $("[data-svc-name]", root);
  const activate = (n) => {
    items.forEach((x, k) => x.classList.toggle("is-active", k === n));
    imgs.forEach((x, k) => x.classList.toggle("is-active", k === n));
    if (count) count.textContent = String(n + 1).padStart(2, "0");
    if (name) name.textContent = $("h3", items[n]).textContent;
  };
  items.forEach((t, k) => {
    t.addEventListener("click", (e) => { if (!e.target.closest("a")) activate(k); });
    if (canHover) t.addEventListener("mouseenter", () => activate(k));
    t.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), activate(k)));
  });
}

/* ---------- Solar calculator ---------- */
function initCalculator() {
  const form = $("#calc-form");
  if (!form) return;
  const bill = $("#bill", form);
  const range = $("#bill-range", form);
  const property = $("#property", form);
  const roof = $("#roof", form);

  const out = {
    score: $("[data-out=score]"),
    bar: $(".score__bar"),
    savings: $("[data-out=savings]"),
    size: $("[data-out=size]"),
    cost: $("[data-out=cost]"),
    payback: $("[data-out=payback]"),
    co2: $("[data-out=co2]"),
  };

  const syncRange = () => {
    const p = ((range.value - range.min) / (range.max - range.min)) * 100;
    range.style.setProperty("--p", p + "%");
  };
  range.addEventListener("input", () => { bill.value = range.value; syncRange(); });
  bill.addEventListener("input", () => {
    range.value = Math.min(Math.max(bill.value, range.min), range.max);
    syncRange();
  });

  const tariffs = { home: 8, shop: 10, factory: 9, society: 8 };
  const roofScore = { flat: 94, sloped: 86, metal: 82, ground: 90 };

  const animateNum = (el, to, fmt) => {
    const from = parseFloat(el.dataset.v || 0);
    el.dataset.v = to;
    if (!hasGsap || reduceMotion) { el.textContent = fmt(to); return; }
    const o = { v: from };
    gsap.to(o, { v: to, duration: 1.2, ease: "power3.out", onUpdate: () => (el.textContent = fmt(o.v)) });
  };

  // quiet: while the user is still typing, skip a too-low bill without flagging it
  const calc = (quiet = false) => {
    const b = Math.max(0, parseFloat(bill.value) || 0);
    const field = bill.closest(".field");
    if (b < 300) { if (!quiet) field.classList.add("has-error"); return; }
    field.classList.remove("has-error");

    const type = property.value;
    const tariff = tariffs[type] || 8;
    const units = b / tariff;                                   // monthly units consumed
    const kw = Math.min(500, Math.max(1, Math.round((units / 120) * 2) / 2)); // ~120 units / kW / month in India
    const generation = kw * 120;
    const savings = Math.min(b * 0.9, generation * tariff);
    const perKw = kw <= 3 ? 60000 : kw <= 10 ? 55000 : 48000;
    const gross = kw * perKw;
    const subsidy = SUBSIDY[type] ? SUBSIDY[type](kw) : 0;     // PM Surya Ghar (indicative)
    const net = Math.max(0, gross - subsidy);
    const payback = savings > 0 ? net / (savings * 12) : 0;
    const score = Math.min(99, roofScore[roof.value] + (kw >= 3 ? 2 : 0));
    const co2 = (generation * 12 * 0.82) / 1000;

    animateNum(out.score, score, (v) => Math.round(v));
    out.bar.style.strokeDashoffset = 427.3 * (1 - score / 100);
    animateNum(out.savings, savings, inr);
    animateNum(out.size, kw, (v) => v.toFixed(1) + " kW");
    animateNum(out.cost, net, inr);
    animateNum(out.payback, payback, (v) => v.toFixed(1) + " yrs");
    animateNum(out.co2, co2, (v) => v.toFixed(1) + " t");
  };

  // update as the bill is typed or the slider is dragged, once input pauses
  let liveTimer;
  const calcLive = () => { clearTimeout(liveTimer); liveTimer = setTimeout(() => calc(true), 350); };

  form.addEventListener("submit", (e) => { e.preventDefault(); clearTimeout(liveTimer); calc(); });
  [property, roof].forEach((s) => s.addEventListener("change", () => calc()));
  [bill, range].forEach((el) => el.addEventListener("input", calcLive));
  syncRange();

  // run once the section is visible
  const io = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) { calc(); io.disconnect(); }
  }, { threshold: 0.3 });
  io.observe($(".result"));
}

/* ---------- FAQ ---------- */
function initFaq() {
  $$(".faq-item").forEach((item) => {
    const q = $(".faq-q", item);
    q.addEventListener("click", () => {
      const open = item.classList.contains("is-open");
      $$(".faq-item.is-open").forEach((x) => { x.classList.remove("is-open"); $(".faq-q", x).setAttribute("aria-expanded", "false"); });
      if (!open) { item.classList.add("is-open"); q.setAttribute("aria-expanded", "true"); }
    });
  });
}

/* ---------- Contact form ---------- */
function initContactForm() {
  const form = $("#contact-form");
  if (!form) return;
  const card = form.closest(".form-card");
  const rules = {
    name: (v) => v.trim().length >= 2 || "Please enter your name",
    phone: (v) => /^[6-9]\d{9}$/.test(v.replace(/\D/g, "").slice(-10)) || "Enter a valid 10-digit mobile number",
    email: (v) => !v || /^\S+@\S+\.\S+$/.test(v) || "Enter a valid email",
    service: (v) => !!v || "Select what you need",
    property: (v) => !!v || "Select a property type",
  };
  const check = (input) => {
    const rule = rules[input.name];
    if (!rule) return true;
    const res = rule(input.value);
    const field = input.closest(".field");
    field.classList.toggle("has-error", res !== true);
    const err = $(".field__err", field);
    if (err) err.textContent = res === true ? "" : res;
    return res === true;
  };
  $$("input, select, textarea", form).forEach((el) => el.addEventListener("blur", () => check(el)));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ok = $$("input, select, textarea", form).map(check).every(Boolean);
    if (!ok) return;
    const d = Object.fromEntries(new FormData(form));
    const msg = `New enquiry\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email || "-"}\nService: ${d.service}\nProperty: ${d.property}\nMonthly bill: ${d.bill || "-"}\nMessage: ${d.message || "-"}`;
    // Demo mode: no backend yet. If a WhatsApp number is set, the enquiry opens in WhatsApp.
    if (CONFIG.whatsappNumber) openWhatsApp(msg);
    card.classList.add("is-sent");
    form.reset();
  });
}

/* ---------- Magnetic buttons ---------- */
function initMagnetic() {
  if (!canHover || reduceMotion) return;
  $$(".magnetic").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.3;
      const y = (e.clientY - r.top - r.height / 2) * 0.4;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener("mouseleave", () => (el.style.transform = ""));
  });
}

/* ---------- Tilt cards ---------- */
function initTilt() {
  if (!canHover || reduceMotion) return;
  $$("[data-tilt]").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
    });
    el.addEventListener("mouseleave", () => (el.style.transform = ""));
  });
}

/* ---------- Page transitions ---------- */
function initPageLinks() {
  const wipe = $(".page-wipe");
  if (!wipe || !hasGsap || reduceMotion) return;
  $$("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || !/\.html(#.*)?$/.test(href) || a.target === "_blank") return;
    a.addEventListener("click", (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      // same page (only the #section changes): no page load, so no wipe, just let the browser scroll
      if (new URL(a.href, location.href).pathname === location.pathname) return;
      e.preventDefault();
      // tell the next page to continue from this teal cover instead of showing the loading screen
      try { sessionStorage.setItem("rs-wipe", "1"); } catch (err) {}
      gsap.set(wipe, { transformOrigin: "bottom" });
      gsap.to(wipe, { scaleY: 1, duration: 0.6, ease: "power4.inOut", onComplete: () => (window.location.href = href) });
    });
  });
  window.addEventListener("pageshow", (e) => { if (e.persisted) gsap.set(wipe, { scaleY: 0 }); });
}

/* ---------- Smooth scroll ---------- */
function initLenis() {
  if (reduceMotion || typeof window.Lenis === "undefined" || !hasGsap) return;
  const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  window.__lenis = lenis;
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  $$('a[href^="#"]:not([href="#"])').forEach((a) =>
    a.addEventListener("click", (e) => {
      const target = $(a.getAttribute("href"));
      if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -80 }); }
    })
  );
}

/* ---------- Loader + intro ---------- */
function runLoader(onDone) {
  const loader = $(".loader");
  // arrived through a site link: the teal cover from the previous page slides away (CSS), no loading screen
  if (document.documentElement.classList.contains("is-arriving")) {
    try { sessionStorage.removeItem("rs-wipe"); sessionStorage.setItem("rs-seen", "1"); } catch (e) {}
    loader?.remove();
    const wipe = $(".page-wipe");
    const done = () => document.documentElement.classList.remove("is-arriving");
    wipe?.addEventListener("animationend", done, { once: true });
    setTimeout(done, 1500);
    setTimeout(onDone, 350);
    return;
  }
  if (!loader || !hasGsap || reduceMotion) { loader?.remove(); onDone(); return; }
  let seen = false;
  try { seen = sessionStorage.getItem("rs-seen") === "1"; sessionStorage.setItem("rs-seen", "1"); } catch (e) {}

  const tl = gsap.timeline({ onComplete: () => loader.remove() });
  if (seen) {
    gsap.set(loader.children, { autoAlpha: 0 });
    tl.to(loader, { yPercent: -100, duration: 0.8, ease: "power4.inOut", delay: 0.1 });
    tl.add(onDone, 0.35);
  } else {
    // the logo builds itself: letters wipe in, the bolt strikes, the dot drops in last
    tl.to(".loader__letters", { clipPath: "inset(0 0% 0 0)", duration: 0.95, ease: "power3.inOut" })
      .fromTo(".loader__bolt", { autoAlpha: 0, scale: 0.55, transformOrigin: "80% 40%" },
        { autoAlpha: 1, scale: 1, duration: 0.5, ease: "back.out(2.2)" }, "-=0.25")
      .fromTo(".loader__bolt", { filter: "drop-shadow(0 0 0px rgba(125,220,85,0))" },
        { filter: "drop-shadow(0 0 22px rgba(125,220,85,0.95))", duration: 0.18, yoyo: true, repeat: 1, ease: "power1.out" }, "<")
      .fromTo(".loader__dot", { autoAlpha: 0, yPercent: -45 },
        { autoAlpha: 1, yPercent: 0, duration: 0.7, ease: "bounce.out" }, "-=0.3")
      .to(".loader__bar span", { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, 0.2)
      .to({}, { duration: 0.25 })
      .to(loader.children, { autoAlpha: 0, y: -20, duration: 0.4 })
      .to(loader, { yPercent: -100, duration: 0.9, ease: "power4.inOut" }, "-=0.1");
    tl.add(onDone, "-=0.55");
  }
}

/* ---------- GSAP scroll animations ---------- */
function initAnimations() {
  $$("[data-split]").forEach(splitText);
  if (!hasGsap || reduceMotion) return null;
  gsap.registerPlugin(ScrollTrigger);
  let heroTl = null;

  // Hero intro (paused until the loader lifts)
  const hero = $(".hero, .page-hero");
  if (hero) {
    const tl = (heroTl = gsap.timeline({ paused: true, defaults: { ease: "power4.out" } }));
    // fromTo with explicit end values so a re-init (e.g. ScrollTrigger refresh) can't lock elements hidden
    tl.fromTo(".header", { y: -40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, clearProps: "transform,opacity,visibility" })
      .fromTo($$(".ci, .wi", $("[data-hero-title]", hero) || hero).slice(0, 80), { yPercent: 115 }, { yPercent: 0, duration: 1.2, stagger: 0.035 }, 0.1)
      .fromTo($$("[data-hero-fade]", hero), { y: 30, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.12 }, 0.4);
    // single-image heroes get a GSAP zoom-in; the home slideshow zooms via CSS
    const still = $(".hero__bg img:not(.hero__slide)", hero);
    if (still) tl.fromTo(still, { scale: 1.25 }, { scale: 1, duration: 2.2, ease: "power3.out" }, 0);

    // scroll parallax on hero
    gsap.to($(".hero__bg", hero), {
      yPercent: 12, scale: 1.08, ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
    });
    const title = $("[data-hero-title]", hero);
    if (title) gsap.to(title, { yPercent: -30, autoAlpha: 0.2, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
  }

  // Split headings (outside hero)
  $$("[data-split]").forEach((el) => {
    if (el.closest(".hero, .page-hero")) return;
    gsap.fromTo($$(".wi, .ci", el), { yPercent: 115 }, {
      yPercent: 0, duration: 1.1, ease: "power4.out", stagger: el.dataset.split === "chars" ? 0.02 : 0.05,
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });

  // Fade up
  $$("[data-reveal]").forEach((el) => {
    gsap.fromTo(el, { y: 50, autoAlpha: 0 }, {
      y: 0, autoAlpha: 1, duration: 1.1, ease: "power3.out", delay: parseFloat(el.dataset.reveal) || 0,
      scrollTrigger: { trigger: el, start: "top 88%" },
    });
  });

  // Staggered children
  $$("[data-stagger]").forEach((el) => {
    gsap.fromTo(el.children, { y: 50, autoAlpha: 0 }, {
      y: 0, autoAlpha: 1, duration: 1, ease: "power3.out", stagger: 0.1,
      // drop the inline transform once revealed so CSS hover lifts still work
      clearProps: "transform",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });

  // Clip-path image reveal + inner parallax
  $$("[data-clip]").forEach((el) => {
    gsap.fromTo(el,
      { clipPath: "inset(12% 10% 12% 10% round 40px)" },
      { clipPath: "inset(0% 0% 0% 0% round 0px)", duration: 1.5, ease: "power3.inOut", scrollTrigger: { trigger: el, start: "top 85%" },
        onComplete: () => (el.style.clipPath = "") }
    );
    const img = $("img", el);
    if (img) gsap.fromTo(img, { yPercent: -8 }, { yPercent: 0, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
  });

  // Parallax elements
  $$("[data-speed]").forEach((el) => {
    gsap.to(el, { y: () => parseFloat(el.dataset.speed) * 100, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
  });

  // Counters
  $$("[data-count]").forEach((el) => {
    const to = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.decimals || 0, 10);
    const o = { v: 0 };
    el.textContent = (0).toFixed(dec);
    gsap.to(o, {
      v: to, duration: 2, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%" },
      onUpdate: () => (el.textContent = o.v.toFixed(dec)),
    });
  });

  // Timeline line (about page)
  const line = $(".timeline__line span");
  if (line) {
    gsap.to(line, { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".timeline", start: "top 70%", end: "bottom 60%", scrub: true } });
    $$(".step").forEach((s) => {
      const wide = window.innerWidth > 760;
      gsap.fromTo($(".step__card", s), { x: wide ? (s.matches(":nth-child(even)") ? 60 : -60) : 0, y: wide ? 0 : 40, autoAlpha: 0 }, { x: 0, y: 0, autoAlpha: 1, duration: 1, ease: "power3.out", scrollTrigger: { trigger: s, start: "top 85%" } });
      gsap.fromTo($(".step__dot", s), { scale: 0 }, { scale: 1, duration: 0.6, ease: "back.out(2)", scrollTrigger: { trigger: s, start: "top 80%" } });
    });
  }

  // CTA mouse parallax
  const cta = $(".cta");
  if (cta && canHover) {
    const img = $(".cta__img", cta);
    const badge = $(".spin-badge", cta);
    cta.addEventListener("mousemove", (e) => {
      const r = cta.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(img, { x: x * 30, y: y * 30, rotate: x * 4, duration: 1, ease: "power3.out" });
      gsap.to(badge, { x: x * -40, y: y * -40, duration: 1, ease: "power3.out" });
    });
    cta.addEventListener("mouseleave", () => gsap.to([img, badge], { x: 0, y: 0, rotate: 0, duration: 1 }));
  }

  // refresh once images load
  window.addEventListener("load", () => ScrollTrigger.refresh());
  return heroTl;
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.remove("no-js");
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  if (!location.hash) window.scrollTo(0, 0);
  if (reduceMotion) document.documentElement.classList.add("reduced");
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  initHeader();
  initMenu();
  initWhatsApp();
  initProductCards();
  initHeroSlides();
  initSubsidy();
  initBADemo();
  initQuotes();
  initServices();
  initCalculator();
  initFaq();
  initContactForm();
  initMagnetic();
  initTilt();
  initLenis();
  initPageLinks();

  // build splits + timelines behind the loader, then play the hero intro as it lifts
  const heroTl = initAnimations();
  runLoader(() => heroTl && heroTl.play());
});
