# Project Prompt: Garment Factory B2B Portal & Order Tracking System

## 1. Project Overview

Act as a **Senior Frontend Developer, UI/UX Designer, Accessibility Specialist, and Technical SEO Engineer**. Design and develop a complete, professional, responsive, static portfolio demo website for the **Readymade Garments (RMG) & Apparel industry**.

The project will demonstrate how a modern B2B garment manufacturing platform could help international buyers discover manufacturers, explore product categories, submit inquiries, and track garment orders through a centralized portal.

This is a **frontend-only portfolio demonstration project**. Every piece of content, product, order, tracking event, statistic, notification, and user profile must use realistic static demo data.

Do not implement a real backend, database, authentication system, payment gateway, API integration, or actual order processing.

The final result must look like a polished, realistic enterprise B2B product rather than a generic business template.

## 2. Business and Industry Context

- **Industry:** Readymade Garments (RMG) & Apparel
- **Target Markets:** Bangladesh and global export markets
- **Product Verticals:**
  - Knitwear
  - Woven Garments
  - Denim and Jeans
  - Yarn and Spinning Mills
  - Trims and Accessories
- **Application Concept:** Garment Factory B2B Portal & Order Tracking System
- **Primary Audience:** International apparel buyers, sourcing managers, procurement teams, garment factory representatives, and export businesses.
- **Technology Stack:** HTML5, CSS3, Vanilla JavaScript, and Bootstrap 5 where useful.
- **Rendering:** Static HTML templates organized into the specified frontend view directories.
- **Data Source:** Hardcoded, realistic static demo data.
- **Build Tools:** No Node.js, npm, Vite, Webpack, or other build pipeline.
- **Backend:** None.
- **Database:** None.

Use Bootstrap 5 through a stable CDN if needed. Custom styles and functionality must remain organized in the project's own CSS and JavaScript files.

## 3. Required Folder Structure

Follow this structure exactly as the starting architecture. Add subdirectories and files where necessary, without moving the required directories.

```text
garment-b2b-portfolio/
│
├── index.html
│
├── public/
│   ├── css/
│   │   └── style.css
│   │
│   ├── assets/
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   ├── hero/
│   │   │   ├── products/
│   │   │   ├── factories/
│   │   │   ├── materials/
│   │   │   └── team/
│   │   │
│   │   └── icons/
│   │
│   └── js/
│       ├── main.js
│       ├── navigation.js
│       ├── catalog.js
│       ├── order-tracking.js
│       ├── forms.js
│       └── ui.js
│
└── resources/
    └── views/
        ├── frontend/
        │   ├── home.html
        │   ├── about.html
        │   ├── products.html
        │   ├── product-details.html
        │   ├── capabilities.html
        │   ├── sustainability.html
        │   ├── order-tracking.html
        │   ├── buyer-portal.html
        │   ├── contact.html
        │   ├── privacy-policy.html
        │   └── terms-of-use.html
        │
        └── components/
            ├── head.html
            ├── navbar.html
            ├── footer.html
            ├── breadcrumb.html
            ├── product-card.html
            ├── category-card.html
            ├── factory-card.html
            ├── stat-card.html
            ├── order-status-badge.html
            ├── order-timeline.html
            ├── inquiry-form.html
            ├── contact-info.html
            ├── newsletter-form.html
            └── pagination.html
```

Important architectural note: Browsers do not natively support PHP-style `include` or reusable HTML components across separate `.html` files. Because this project must remain static and have no build process, select a practical implementation strategy.

Use one of these approaches:

1. Develop a lightweight, reusable JavaScript component loader that fetches HTML partials and inserts them into designated page containers, served through a local HTTP server; or
2. Use a lightweight static HTML templating/build solution only if explicitly approved.

**Preferred approach:** Keep the requested HTML component files and use a small, dependency-free JavaScript partial loader. Do not introduce Node.js or a backend. Document how to run the project using a local development server, such as the VS Code Live Server extension.

Ensure all page paths, component paths, CSS links, JavaScript links, and asset paths work consistently from nested pages.

Provide graceful error handling for failed component loads. Avoid duplicating entire headers, footers, and common UI sections across pages.

Do not claim that separate HTML partials work with the `file://` protocol if the browser blocks their requests.

## 4. Design Direction

Create a simple, modern, premium, professional B2B interface inspired by established global apparel sourcing and manufacturing platforms.

### Visual characteristics

- Minimal and clean layouts.
- Professional typography with strong readability.
- Generous whitespace and consistent spacing.
- Clear information hierarchy.
- High-quality garment, fabric, production, and factory photography.
- Subtle borders and restrained shadows.
- Consistent buttons, forms, badges, cards, and navigation.
- Professional dashboards with clear data visualization.
- Responsive layouts for mobile, tablet, laptop, and desktop.

Use a restrained visual identity featuring deep navy, off-white, neutral gray, and a carefully selected textile-inspired accent color.

Create a consistent design system using CSS custom properties rather than scattered, hardcoded style values.

Avoid excessive gradients, unnecessary animation, oversized decorative elements, cluttered dashboards, and generic AI-generated design patterns.

The website must feel suitable for an actual garment export company presenting its capabilities to international buyers.

## 5. CSS Architecture and Coding Rules

All custom CSS must exist in:

`public/css/style.css`

**Do not use inline CSS under any circumstances.**

Prohibited examples include:

- `style="..."` attributes in HTML.
- Inline `<style>` blocks.
- Dynamically injecting style attributes through JavaScript.
- Repeating the same component styles throughout multiple pages.

Use reusable CSS custom properties defined in `:root`.

Example:

```css
:root {
    --color-primary: #17324d;
    --color-primary-hover: #10263a;
    --color-accent: #b77945;

    --color-background: #ffffff;
    --color-surface: #f5f7f9;
    --color-text: #202b36;
    --color-text-muted: #526170;
    --color-border: #d5dce3;

    --font-family-base: Arial, Helvetica, sans-serif;

    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;

    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-12: 3rem;
    --space-16: 4rem;

    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;

    --container-max-width: 1200px;

    --transition-fast: 180ms ease;
}
```

These values are illustrative. Adjust the final design tokens based on the actual visual design.

Organize the stylesheet into clearly labeled sections:

1. CSS reset and base styles.
2. Design tokens and `:root` variables.
3. Typography.
4. Accessibility utilities.
5. Layout and container utilities.
6. Header and navigation.
7. Buttons and links.
8. Forms and validation states.
9. Cards and badges.
10. Homepage sections.
11. Product catalog and product details.
12. Order tracking.
13. Buyer portal dashboard.
14. Footer.
15. Responsive breakpoints.
16. Reduced-motion and accessibility overrides.

Follow these CSS rules:

- Prefer reusable classes over page-specific duplication.
- Use mobile-first responsive styles.
- Use CSS Grid and Flexbox appropriately.
- Use semantic, descriptive class names.
- Use `rem` for typography and most spacing.
- Avoid unnecessary IDs for styling.
- Avoid overly specific selectors and excessive `!important`.
- Do not use inline CSS.
- Avoid duplicating Bootstrap styles unnecessarily.
- Use a consistent spacing scale.
- Keep the stylesheet readable and maintainable.

## 6. HTML Architecture and Semantic Markup

All individual frontend page files must be located inside:

`resources/views/frontend/`

All reusable HTML component files must be located inside:

`resources/views/components/`

Use valid HTML5 and semantic elements such as:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<aside>`
- `<footer>`
- `<figure>`
- `<form>`
- `<fieldset>`
- `<legend>`
- `<address>`
- `<time>`

Use a logical heading hierarchy. Each page must have one clear primary `<h1>`, followed by appropriately nested headings.

Provide meaningful page titles, meta descriptions, canonical URL placeholders, and Open Graph metadata where appropriate.

Use descriptive image alt text for informative images and empty alt attributes for decorative images.

Use real buttons for actions and links for navigation.

Avoid using generic `<div>` elements when a semantic element is more appropriate.

Never use placeholder links such as `href="#"` for functional navigation. Every navigation link must lead to an implemented page or a meaningful section.

## 7. Website Pages and Required Sections

### A. Homepage — `home.html`

Create a polished homepage with the following sections.

**1. Announcement bar**

- Global sourcing or manufacturing capability announcement.
- A short export-oriented message.
- Optional link to the product catalog.

**2. Main navigation**

- Company logo.
- Home.
- About Us.
- Products.
- Manufacturing Capabilities.
- Sustainability.
- Order Tracking.
- Contact.
- Primary CTA: Request a Quote.
- Responsive mobile navigation with keyboard support.

**3. Hero section**

Suggested headline:

"Your Trusted Partner in Global Apparel Manufacturing"

Supporting text should explain garment manufacturing capabilities, sourcing support, quality control, and export-oriented production.

Include two CTAs:

- Explore Our Products.
- Request a Quote.

Use a high-quality garment factory or apparel manufacturing image.

**4. Trust and capability indicators**

Display clearly labeled static demonstration metrics, such as:

- Manufacturing Partners.
- Annual Production Capacity.
- Export Markets.
- Product Categories.

Clearly identify these as illustrative portfolio-demo figures, not verified company claims.

**5. Product categories**

Display five categories:

- Knitwear.
- Woven Garments.
- Denim & Jeans.
- Yarn & Spinning.
- Trims & Accessories.

Each category card should include an image, short description, and relevant navigation link.

**6. Manufacturing capabilities**

Show capabilities such as:

- Product Development.
- Sampling.
- Fabric Sourcing.
- Bulk Production.
- Quality Assurance.
- Packaging and Export Preparation.

**7. How the B2B process works**

Create a clear process:

Buyer Inquiry → Product Development → Sample Approval → Production → Quality Inspection → Shipment.

**8. Featured products**

Show realistic sample products, including category, product name, material, MOQ, and a Request Quote CTA.

**9. Order tracking preview**

Introduce the order tracking feature with a sample order number and a CTA to the tracking page.

**10. Quality and compliance**

Present responsible manufacturing, quality control, material traceability, and compliance documentation as capabilities or illustrative examples. Do not claim actual certifications without evidence.

**11. Sustainability section**

Discuss responsible sourcing, waste reduction, material efficiency, and production transparency without making unsupported environmental claims.

**12. Buyer testimonials**

Use clearly labeled fictional demo testimonials. Do not attribute invented statements to real companies or identifiable people.

**13. Frequently asked questions**

Include questions about MOQ, samples, lead times, custom designs, materials, and export orders.

**14. Call to action**

Encourage buyers to discuss their sourcing requirements.

**15. Footer**

Include company information, quick links, product categories, contact details, policy links, and a demo-project notice.

### B. About Us — `about.html`

Include:

- Company introduction.
- Mission and vision.
- Manufacturing approach.
- Industry expertise.
- Sourcing and production workflow.
- Quality management.
- Global buyer support.
- Team or facility highlights.
- CTA to discuss sourcing requirements.

Treat all company-specific information as fictional demonstration content.

### C. Product Catalog — `products.html`

Build a functional static product catalog featuring:

- Product category filters.
- Search by product name.
- Material filters.
- MOQ range filters.
- Sort by product name or MOQ.
- Responsive product grid.
- Product count.
- Empty search results state.
- Reset filters.
- Pagination or a lightweight load-more interaction if useful.

Populate the catalog with realistic static products from all five verticals.

All filters must operate on local JavaScript data. No API requests are allowed.

### D. Product Details — `product-details.html`

Include:

- Product image gallery.
- Product name and category.
- Product reference code.
- Material and fabric composition.
- Available colors and sizes.
- Minimum order quantity.
- Sample availability.
- Production lead-time estimate.
- Customization options.
- Quality and packaging information.
- Related products.
- Request a Quote form.

Product information must come from a local static data object or array rather than duplicated markup.

Use a query parameter such as `?id=KN-001` to identify the product, with a sensible fallback for missing or invalid IDs.

### E. Manufacturing Capabilities — `capabilities.html`

Include:

- Product development.
- Fabric and yarn sourcing.
- Sampling.
- Knitwear and woven production.
- Denim manufacturing.
- Trims and accessories sourcing.
- Quality inspection.
- Packaging.
- Export documentation support.
- Manufacturing workflow.
- Illustrative capacity indicators.

Avoid representing a fictional company as having verified factory certifications or facilities.

### F. Sustainability — `sustainability.html`

Include:

- Responsible sourcing.
- Material efficiency.
- Waste reduction.
- Water and energy efficiency.
- Supply-chain transparency.
- Quality and durability.
- Sustainability goals and improvement opportunities.

Separate general industry practices from fictional company-specific claims.

### G. Order Tracking — `order-tracking.html`

This page is a major feature of the demo.

Build a professional order-tracking interface containing:

- Order number input.
- Search button.
- Example tracking number.
- Order summary.
- Product information.
- Order quantity.
- Buyer reference.
- Current status.
- Order progress timeline.
- Estimated shipment date.
- Shipping information.
- Recent order events.

Use realistic sample statuses:

1. Inquiry Received.
2. Sample Development.
3. Sample Approved.
4. Purchase Order Confirmed.
5. Fabric and Material Sourcing.
6. Production in Progress.
7. Quality Inspection.
8. Packing Completed.
9. Shipment Dispatched.
10. Delivered.

Use a local JavaScript data object containing multiple sample orders with different statuses.

When the user searches for a valid demo order number, display its details and timeline. For an invalid number, show an accessible error message.

Clearly label all dates, shipment details, and order events as simulated demo data.

Do not connect to real courier services, logistics providers, or APIs.

### H. Buyer Portal — `buyer-portal.html`

Create a static, dashboard-style B2B buyer portal preview.

Include:

- Sidebar or responsive dashboard navigation.
- Welcome header.
- Buyer profile summary.
- Total sample orders.
- Orders in production.
- Pending approvals.
- Completed orders.
- Recent orders table.
- Order status badges.
- Recent activity.
- Sample approval cards.
- Outstanding buyer actions.
- Quick links to product catalog and order tracking.

Add working local interactions such as sidebar toggling, status filters, and sample order detail views.

Do not implement actual login, registration, sessions, account persistence, or real customer data.

Display a visible notice that this is a demonstration dashboard using simulated information.

### I. Contact — `contact.html`

Include:

- Contact introduction.
- Business contact information.
- Office location example.
- Email and phone examples using fictional contact details.
- Business inquiry form.
- Inquiry type selection.
- Company name.
- Buyer name.
- Business email.
- Country.
- Product interest.
- Estimated order quantity.
- Message.
- Privacy consent checkbox.

Validate the form using JavaScript. Display accessible success or error feedback.

Do not actually send messages, store submissions remotely, or claim that an inquiry has been delivered.

### J. Privacy Policy — `privacy-policy.html`

Create a clearly structured sample privacy policy suitable for a portfolio demonstration.

Cover:

- Information collected by a real implementation.
- Intended use.
- Data storage and security.
- Third-party services.
- Cookies and analytics.
- Data retention.
- User rights.
- Contact information.

Label it as sample policy content requiring legal review before production use.

### K. Terms of Use — `terms-of-use.html`

Include sample sections covering:

- Website usage.
- Product information.
- Illustrative prices and MOQs.
- Quotations and order confirmation.
- Intellectual property.
- Limitation of liability.
- External links.
- Changes to terms.
- Contact information.

Make clear that the demo does not create binding purchase orders or commercial commitments.

## 8. Reusable Component System

Create reusable HTML components under `resources/views/components/`.

At a minimum, implement:

- Shared document head and metadata conventions.
- Announcement bar and navigation.
- Footer.
- Breadcrumbs.
- Product card.
- Category card.
- Factory or capability card.
- Statistic card.
- Order status badge.
- Order timeline.
- Inquiry form.
- Contact information block.
- Newsletter form if included.
- Pagination.

The component architecture must follow the DRY principle.

Do not repeat the same navigation, footer, product card, order timeline, or form markup across multiple pages.

For repeated product cards, category cards, status badges, and order events, render reusable markup from JavaScript data.

Because plain HTML has no native component include mechanism, explain how the lightweight partial loader works and how it interacts with page initialization.

Ensure JavaScript initializes only after the required components have loaded. Prevent duplicate event listeners and duplicate initialization if a component is re-rendered.

## 9. JavaScript Architecture

All custom JavaScript must be located in `public/js/`.

Organize responsibilities as follows:

**`main.js`**
- Shared application initialization.
- Common page setup.
- Safe initialization sequencing.
- Global error handling where appropriate.

**`navigation.js`**
- Mobile navigation.
- Accessible menu toggling.
- Active navigation state.
- Keyboard interactions where required.

**`catalog.js`**
- Static product dataset or imported shared data.
- Product rendering.
- Search.
- Filtering.
- Sorting.
- Pagination.
- Product detail lookup.

**`order-tracking.js`**
- Static sample order dataset.
- Order lookup.
- Status timeline rendering.
- Tracking error and empty states.

**`forms.js`**
- Form validation.
- Required field validation.
- Email validation.
- Consent validation.
- Accessible status messages.
- Demo-only submission behavior.

**`ui.js`**
- Reusable UI helpers.
- Accordion behavior if needed.
- Modal and dropdown interactions.
- Small reusable DOM utilities.

If shared datasets require another JavaScript file, add one, such as `data.js`, rather than duplicating data in multiple modules.

Follow these JavaScript principles:

- Use modern Vanilla JavaScript.
- Use `const` and `let` appropriately.
- Prefer small, reusable functions.
- Avoid global-variable pollution.
- Use event delegation for repeated interactive elements where appropriate.
- Avoid unnecessary DOM queries and repeated rendering.
- Use safe DOM APIs such as `textContent` for untrusted or dynamic text.
- Do not inject user input through unsafe `innerHTML`.
- Do not use `eval`.
- Do not make unnecessary network requests.
- Do not use inline event handlers such as `onclick`.
- Avoid duplicate event listeners.
- Keep data, rendering, and event handling separate.
- Include useful comments only where they explain non-obvious logic.

Since this is a static demo, data persistence is not required. Refreshing the page may reset interactions unless session-only state is genuinely useful.

## 10. Accessibility Requirements — WCAG 2.2 AAA Target

Treat **WCAG 2.2 Level AAA** as the target for the complete interface.

Do not merely claim AAA compliance. Apply accessibility principles during design and verify the implementation using automated checks and manual testing.

Implement:

- Semantic HTML.
- A logical heading hierarchy.
- A skip-to-content link.
- Complete keyboard navigation.
- Visible, unobscured focus indicators.
- Proper labels for all inputs.
- Accessible error and success messages.
- Correct accessible names for buttons and controls.
- Appropriate ARIA attributes only where necessary.
- Sufficient text and UI contrast.
- Meaningful alt text for informative images.
- Screen-reader-friendly order timelines and tables.
- Accessible mobile navigation.
- No keyboard traps.
- Reduced-motion support.
- Accessible accordions, dialogs, and dropdowns if implemented.
- Proper table headers and captions where useful.
- Large, comfortable interactive targets.
- Clear validation instructions.
- No color-only status communication.
- Support for browser zoom and text resizing.
- Logical focus management when displaying dynamic results.
- Accessible empty states and loading-independent feedback.

For a stricter AAA-oriented implementation, use the following design goals where applicable:

- Normal text contrast of at least 7:1.
- Large text contrast of at least 4.5:1.
- Enhanced contrast for relevant non-text UI elements.
- Support text resizing up to 200% without loss of content or functionality.
- Aim for enhanced target sizes of at least 44 × 44 CSS pixels where practical.
- Avoid unnecessary time limits and flashing content.
- Respect `prefers-reduced-motion`.

These are design targets, not a guarantee of full conformance. Evaluate every applicable WCAG 2.2 Level AAA success criterion, including those that may not apply to every page.

Document any criteria that cannot be met or verified. Never claim certified WCAG AAA compliance solely because automated tools report no errors.

## 11. SEO Requirements

Although this is a static portfolio demo, implement proper technical SEO fundamentals.

Every page must have:

- A unique, descriptive title.
- A unique meta description.
- A single primary heading.
- Semantic HTML.
- Descriptive link text.
- Correct image alt attributes.
- A logical URL and navigation structure.
- Canonical URL placeholders appropriate for deployment.
- Open Graph metadata where relevant.
- Responsive mobile layouts.
- Meaningful internal links.
- Descriptive image filenames.
- Sensible heading hierarchy.

Use appropriate structured data only when the represented information is accurate. Do not invent real business ratings, certifications, customer reviews, or verified company details.

If a sitemap or `robots.txt` is provided, document how deployment URLs must be configured.

Because the project uses static files and no server-side rendering, explain that metadata must exist in each HTML document and that dynamic query-string product details need an SEO strategy before production deployment.

## 12. Images and Assets

Store all local images inside `public/assets/`.

Use high-quality, relevant garment and apparel imagery for:

- Homepage hero.
- Product categories.
- Finished garments.
- Denim.
- Knitwear.
- Fabric and yarn.
- Trims and accessories.
- Manufacturing facilities.
- Quality inspection.

Use original assets, properly licensed photographs, or reliable image sources with appropriate usage rights.

Optimize images for performance. Use responsive image techniques where useful, specify image dimensions or aspect ratios to reduce layout shifts, and lazy-load below-the-fold images.

Do not rely on broken URLs or randomly chosen external images.

Create a consistent image treatment with reusable CSS classes.

## 13. Static Demo Data

Create believable but explicitly fictional data for:

- Product categories.
- Products.
- Materials.
- Colors and sizes.
- Minimum order quantities.
- Manufacturing capabilities.
- Buyer profiles.
- Order records.
- Order status history.
- Shipment estimates.
- Testimonials.
- Dashboard statistics.
- FAQs.

Use consistent identifiers across the catalog, product detail pages, buyer dashboard, and tracking page.

For example:

- `KN-001` — Cotton Knit T-Shirt.
- `WV-002` — Woven Formal Shirt.
- `DN-003` — Classic Denim Jeans.
- `YR-004` — Cotton Ring-Spun Yarn.
- `TR-005` — Woven Garment Labels.

These are illustrative identifiers, not real commercial inventory.

Keep all related data in a shared, organized JavaScript dataset when possible.

## 14. Performance and Code Quality

Even though the project is static, implement production-minded frontend practices:

- Minimize unnecessary JavaScript.
- Avoid loading the same script multiple times.
- Reuse common UI components.
- Optimize images.
- Avoid layout shifts.
- Avoid expensive DOM operations.
- Use event delegation where appropriate.
- Keep selectors and event handlers efficient.
- Avoid unnecessary third-party libraries.
- Keep the project usable on slower mobile connections.
- Provide meaningful empty and error states.
- Ensure there are no broken internal links or missing local assets.

Do not over-engineer a static portfolio into a complex application framework.

## 15. Functional Acceptance Criteria

The project is complete only when:

1. Every specified page has been implemented.
2. The shared header, footer, and reusable components work across all pages.
3. The homepage presents the complete B2B product concept.
4. Product search, filters, sorting, and detail navigation work.
5. Order tracking returns different results for valid demo order numbers.
6. Invalid tracking numbers display accessible error feedback.
7. The buyer portal displays coherent sample order data.
8. Forms validate correctly and explain that submissions are not transmitted.
9. Mobile navigation and all primary interactions work with a keyboard.
10. All custom CSS is contained in `public/css/style.css`.
11. All custom JavaScript is contained in `public/js/`.
12. No inline CSS or inline JavaScript event handlers are present.
13. All pages use semantic HTML.
14. All internal links, local scripts, images, and component paths are valid.
15. The layout works across mobile, tablet, laptop, and desktop sizes.
16. The project can be run without a backend, database, Node.js, or npm.
17. The code follows the DRY principle and uses reusable functions and components.
18. The interface has been checked against the WCAG 2.2 AAA target, with limitations documented.
19. The browser console has no avoidable errors.
20. All fictional business information and simulated interactions are clearly disclosed.

## 16. Development Workflow

Work in the following sequence.

**Phase 1 — Architecture**
- Confirm the folder structure.
- Establish component-loading strategy.
- Define design tokens and CSS conventions.
- Define shared static data structures.

**Phase 2 — Shared UI**
- Build the header, navigation, footer, breadcrumbs, buttons, cards, forms, badges, and common utilities.

**Phase 3 — Public Pages**
- Implement the homepage, about page, product catalog, product details, capabilities, sustainability, contact, and policy pages.

**Phase 4 — Interactive Features**
- Implement product search and filters.
- Implement product details using query parameters.
- Implement the order tracking timeline.
- Implement the buyer portal dashboard.
- Implement form validation and feedback.

**Phase 5 — Quality Assurance**
- Test every page and link.
- Test keyboard-only navigation.
- Test screen-reader semantics and accessible names.
- Check color contrast.
- Test responsive breakpoints and zoom.
- Check for broken assets and console errors.
- Verify that no inline styles or event handlers have been introduced.
- Document accessibility limitations and how to run the project locally.

## 17. Final Deliverables

Provide:

1. The complete folder and file structure.
2. All HTML page files.
3. All reusable HTML components.
4. The complete `public/css/style.css` file.
5. All required JavaScript files.
6. Static datasets for products and orders.
7. Local image assets or a documented asset manifest with reliable sources.
8. Instructions for running the website locally.
9. A page-by-page functionality checklist.
10. An accessibility testing checklist.
11. A short explanation of the reusable component architecture.
12. A list of known limitations caused by the static-only implementation.

Do not return only a design mockup, pseudocode, or a partial homepage.

Build a complete, coherent, functional static portfolio demo.

**Final instruction:** Before writing the implementation, inspect the requirements, resolve architectural conflicts, and establish a consistent design system. Then build the project systematically. Prioritize maintainability, accessibility, performance, semantic HTML, responsive design, and the DRY principle over unnecessary visual complexity.