# Garment Works — Apparel Manufacturing B2B Portal (Portfolio Demo)

A frontend-only portfolio demonstration of a modern B2B garment manufacturing platform. It shows how international buyers could discover manufacturers, explore product categories, submit inquiries, and track garment orders through a centralized portal.

> **Demo only.** All company, product, order, metric, and testimonial content is fictional/simulated. Forms do not transmit or store data, order records are not real, and no authentication or real shipment service is connected.

## Tech Stack

- HTML5, CSS3, Vanilla JavaScript
- Bootstrap 5 (via CDN, where useful)
- No backend, database, authentication, API integration, package manager, or build process

## Features

- **Homepage** — hero, sourcing journey metrics, featured products
- **Product catalog** — search, category/material/MOQ filters, sort, result counts, reset, pagination/load-more, empty state
- **Product details** — query-string lookup, related products, quote inquiry
- **Capabilities** — factory/capability cards
- **Sustainability** — environmental claims (labeled as demo)
- **Order tracking** — simulated order lookup and timeline rendering (valid/invalid IDs handled)
- **Buyer portal** — responsive dashboard with summary metrics, status filters, sample approvals/actions, simulated-data notice
- **About, Contact, Privacy Policy, Terms of Use** pages with unique metadata and demo/legal disclaimers
- Client-side form validation with clear no-transmission behavior
- Reusable HTML partial loader (announcement bar, navbar, footer) with visible failure feedback
- Responsive layout, keyboard-operable controls, focus styles, reduced-motion support

## Folder Structure

```
garments-apparel/
├── index.html                      # Root entry point → redirects to homepage
├── public/
│   ├── css/
│   │   └── style.css               # All custom styles (design tokens, components, responsive rules)
│   ├── assets/
│   │   ├── icons/
│   │   └── images/                 # hero, products, factories, materials, team
│   └── js/
│       ├── main.js
│       ├── navigation.js
│       ├── catalog.js
│       ├── order-tracking.js
│       ├── buyer-portal.js
│       ├── product-details.js
│       ├── forms.js
│       └── data.js
└── resources/
    └── views/
        ├── components/             # announcement-bar, navbar, footer
        └── frontend/              # home, about, products, product-details, capabilities,
                                   # sustainability, order-tracking, buyer-portal, contact,
                                   # privacy-policy, terms-of-use
```

## Running Locally

Serve the project over HTTP (do **not** use `file://`, since browsers may block the HTML partial requests).

```bash
# Option 1 — PHP built-in server
php -S 127.0.0.1:8000
# then open http://127.0.0.1:8000/

# Option 2 — VS Code Live Server
# Right-click index.html → "Open with Live Server"

# Option 3 — Laragon
# Place the folder under www/ and open via Laragon's local domain
```

Open the root `index.html` route to reach the homepage.

## Demo Constraints

- No backend, database, authentication, payment gateway, API integration, or real order processing.
- All product/order/metric/testimonial content is fictional and labeled as simulated where relevant.
- Forms validate client-side only and never transmit or store data.
- Product artwork is currently decorative CSS/SVG illustration; the product detail page does not yet include a real multi-image gallery.
- Full-page keyboard/screen-reader testing and contrast measurement have not been completed.

## Accessibility & Quality Notes

- Semantic markup, page-specific metadata, keyboard-operable controls
- Clear focus states, accessible form/result feedback
- Reduced-motion support
- Shared markup is loaded via a dependency-free partial loader (no duplication across pages)

## License

Portfolio demonstration project. All content is fictional.
