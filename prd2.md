# Garment Factory B2B Portal & Order Tracking System

## Reusable Development Checklist

**Project type:** Static portfolio demo  
**Industry:** Readymade Garments (RMG) & Apparel  
**Market:** Bangladesh and Global Export  
**Technology:** HTML5, CSS3, Vanilla JavaScript, optional Bootstrap 5  
**Backend/database:** None  
**CSS location:** `public/css/style.css`  
**JavaScript location:** `public/js/`  
**HTML pages:** `resources/views/frontend/`  
**Reusable components:** `resources/views/components/`

**Image-generation resource:** https://imgenerate.com/

---

## Phase 1 — Project Setup and Architecture

### 1.1 Folder and file structure

- [ ] Create the project root and `index.html`.
- [ ] Create `public/css/style.css`.
- [ ] Create `public/assets/images/` and its subdirectories.
- [ ] Create `public/assets/icons/`.
- [ ] Create `public/js/`.
- [ ] Create `resources/views/frontend/`.
- [ ] Create `resources/views/components/`.
- [ ] Create all required page and component files.
- [ ] Verify relative paths from both the root page and nested pages.

### 1.2 Technical foundation

- [ ] Establish the HTML5 document structure.
- [ ] Decide how `index.html` opens the homepage.
- [ ] Implement a reusable HTML partial loader.
- [ ] Define component loading order and error handling.
- [ ] Ensure page-specific JavaScript runs after required components load.
- [ ] Avoid duplicate event listeners and repeated component initialization.
- [ ] Configure local development using VS Code Live Server or an equivalent static server.
- [ ] Confirm no Node.js, npm, backend, or database is required.

### 1.3 Design system

- [ ] Define colors, typography, spacing, borders, radii, and transitions in `:root`.
- [ ] Establish reusable container and layout classes.
- [ ] Establish button, form, badge, card, and section styles.
- [ ] Define responsive breakpoints.
- [ ] Define visible keyboard focus styles.
- [ ] Establish reduced-motion and accessibility utilities.
- [ ] Verify that all custom CSS remains in `style.css`.

## Phase 2 — Reusable Components

- [ ] Document head and metadata conventions.
- [ ] Announcement bar.
- [ ] Responsive navigation.
- [ ] Footer.
- [ ] Breadcrumbs.
- [ ] Product card.
- [ ] Category card.
- [ ] Factory/capability card.
- [ ] Statistic card.
- [ ] Order status badge.
- [ ] Order timeline.
- [ ] Inquiry form.
- [ ] Contact information block.
- [ ] Newsletter form, if included.
- [ ] Pagination.
- [ ] Reusable modal or dialog, if required.
- [ ] Reusable empty, success, and error states.

**Acceptance criteria:** Shared markup must not be copied repeatedly across pages. Components must render correctly on every page where they are used.

## Phase 3 — Shared Static Data and JavaScript

### 3.1 Data structures

- [ ] Create a shared product dataset.
- [ ] Create category and material data.
- [ ] Create consistent product identifiers.
- [ ] Create a shared sample order dataset.
- [ ] Create order status history and shipment estimates.
- [ ] Create dashboard summary data.
- [ ] Create FAQ and testimonial data.
- [ ] Clearly identify fictional data as demonstration content.

### 3.2 JavaScript utilities

- [ ] Implement common application initialization in `main.js`.
- [ ] Implement navigation interactions in `navigation.js`.
- [ ] Implement catalog functionality in `catalog.js`.
- [ ] Implement tracking functionality in `order-tracking.js`.
- [ ] Implement validation in `forms.js`.
- [ ] Implement reusable UI utilities in `ui.js`.
- [ ] Add `data.js` or another shared data file if useful.
- [ ] Separate data, rendering, and event handling.
- [ ] Avoid inline event handlers and unsafe HTML insertion.

## Phase 4 — Public Website Pages

### Page 1: Homepage — `home.html`

- [ ] Announcement bar and navigation.
- [ ] Hero headline, description, imagery, and CTAs.
- [ ] Illustrative factory and export statistics.
- [ ] Five product category cards.
- [ ] Manufacturing capabilities section.
- [ ] Six-stage sourcing and production workflow.
- [ ] Featured product grid.
- [ ] Order tracking preview.
- [ ] Quality and compliance section.
- [ ] Sustainability section.
- [ ] Fictional demo testimonials.
- [ ] FAQ accordion.
- [ ] Final buyer inquiry CTA.
- [ ] Shared footer.

**Acceptance test:** Visitors can navigate from the homepage to product categories, product details, tracking, and contact pages.

### Page 2: About Us — `about.html`

- [ ] Company introduction.
- [ ] Mission and vision.
- [ ] Manufacturing and sourcing approach.
- [ ] Industry verticals.
- [ ] Quality management approach.
- [ ] Global buyer support.
- [ ] Team or facility highlights.
- [ ] Contact CTA.
- [ ] Page-specific title and metadata.

### Page 3: Product Catalog — `products.html`

- [ ] Product grid rendered from shared data.
- [ ] Search by product name.
- [ ] Filter by category.
- [ ] Filter by material.
- [ ] Filter by MOQ.
- [ ] Sort by product name and MOQ.
- [ ] Display matching product count.
- [ ] Empty search results message.
- [ ] Reset filters.
- [ ] Pagination or load-more behavior.
- [ ] Responsive filters and product cards.
- [ ] Links to the correct product detail records.

**Acceptance test:** Search, filters, sorting, and pagination work together without a server or API.

### Page 4: Product Details — `product-details.html`

- [ ] Read the product ID from the query string.
- [ ] Display the correct product record.
- [ ] Product image gallery.
- [ ] Product reference and category.
- [ ] Fabric and material composition.
- [ ] Colors and sizes.
- [ ] MOQ and estimated lead time.
- [ ] Customization and packaging details.
- [ ] Request a Quote form.
- [ ] Related products.
- [ ] Graceful invalid or missing product ID state.

### Page 5: Manufacturing Capabilities — `capabilities.html`

- [ ] Product development and sampling.
- [ ] Fabric and yarn sourcing.
- [ ] Knitwear and woven manufacturing.
- [ ] Denim production.
- [ ] Trims and accessories.
- [ ] Quality inspection.
- [ ] Packaging and export preparation.
- [ ] Manufacturing workflow.
- [ ] Illustrative capacity metrics.
- [ ] CTA to discuss sourcing requirements.

### Page 6: Sustainability — `sustainability.html`

- [ ] Responsible sourcing.
- [ ] Material efficiency.
- [ ] Waste reduction.
- [ ] Water and energy efficiency.
- [ ] Supply-chain transparency.
- [ ] Product durability.
- [ ] Sustainability goals.
- [ ] Avoid unsupported environmental claims.

### Page 7: Contact — `contact.html`

- [ ] Business contact details.
- [ ] Office location example.
- [ ] Email and phone examples.
- [ ] Buyer inquiry form.
- [ ] Company name and buyer name fields.
- [ ] Business email and country fields.
- [ ] Product interest and estimated quantity.
- [ ] Message and privacy consent.
- [ ] Client-side validation.
- [ ] Accessible error and success feedback.
- [ ] Clear notice that the form does not send real messages.

### Page 8: Privacy Policy — `privacy-policy.html`

- [ ] Information collection.
- [ ] Intended data use.
- [ ] Data security and storage.
- [ ] Cookies and analytics.
- [ ] Third-party services.
- [ ] Data retention and user rights.
- [ ] Contact information.
- [ ] Sample policy/legal review notice.

### Page 9: Terms of Use — `terms-of-use.html`

- [ ] Website usage terms.
- [ ] Product information and illustrative MOQ.
- [ ] Quotations and order confirmation.
- [ ] Intellectual property.
- [ ] Limitation of liability.
- [ ] External links.
- [ ] Terms updates.
- [ ] Demo-only commercial disclaimer.

## Phase 5 — Interactive B2B Features

### Page 10: Order Tracking — `order-tracking.html`

- [ ] Order number input.
- [ ] Example tracking number.
- [ ] Search interaction.
- [ ] Multiple sample order records.
- [ ] Order summary.
- [ ] Product and quantity details.
- [ ] Current order status.
- [ ] Timeline of order events.
- [ ] Estimated shipment date.
- [ ] Shipping details.
- [ ] Invalid order feedback.
- [ ] Keyboard and screen-reader accessibility.
- [ ] Clear simulated-data notice.

**Acceptance test:** Different sample order numbers show different order states and timelines. Invalid numbers show a clear error without breaking the page.

### Page 11: Buyer Portal — `buyer-portal.html`

- [ ] Responsive dashboard layout.
- [ ] Sidebar navigation.
- [ ] Buyer profile summary.
- [ ] Total sample orders.
- [ ] Orders in production.
- [ ] Pending approvals.
- [ ] Completed orders.
- [ ] Recent orders table.
- [ ] Status badges.
- [ ] Recent activity.
- [ ] Sample approval cards.
- [ ] Outstanding buyer actions.
- [ ] Order status filters.
- [ ] Sample order details.
- [ ] Mobile-friendly tables or alternative layouts.
- [ ] Visible static-demo notice.

**Acceptance test:** Dashboard statistics, order rows, and order detail views use consistent sample data. Do not imply that a real user is authenticated.

## Phase 6 — Image Generation and Asset Management

- [ ] Visit https://imgenerate.com/ to generate suitable visual assets.
- [ ] Generate a hero image showing garment manufacturing or apparel production.
- [ ] Generate or source knitwear product images.
- [ ] Generate or source woven garment images.
- [ ] Generate or source denim and jeans images.
- [ ] Generate or source yarn and spinning imagery.
- [ ] Generate or source trims and accessories imagery.
- [ ] Generate factory and quality inspection imagery.
- [ ] Save the final assets locally under `public/assets/images/`.
- [ ] Use descriptive, consistent filenames.
- [ ] Check image usage rights and the generation service's terms.
- [ ] Optimize image dimensions and file sizes.
- [ ] Add meaningful alt text.
- [ ] Set image dimensions or aspect ratios.
- [ ] Lazy-load below-the-fold images.
- [ ] Check for missing assets and broken external URLs.

**Suggested asset naming convention:**

```text
hero-garment-manufacturing.webp
category-knitwear.webp
category-woven-garments.webp
category-denim-jeans.webp
category-yarn-spinning.webp
category-trims-accessories.webp
factory-quality-inspection.webp
product-cotton-tshirt.webp
product-denim-jeans.webp
```

Generated images should be treated as local project assets. The website should not need to contact Imgenerate when a visitor opens a page.

## Phase 7 — SEO and Accessibility

### SEO checklist

- [ ] Unique page title for every HTML page.
- [ ] Unique meta description for every page.
- [ ] One clear primary heading per page.
- [ ] Semantic HTML5 elements.
- [ ] Descriptive internal links.
- [ ] Appropriate image alt attributes.
- [ ] Canonical URL placeholders.
- [ ] Open Graph metadata.
- [ ] Logical internal linking.
- [ ] Correct product-detail links.
- [ ] Deployment-ready sitemap and robots configuration, if included.
- [ ] No invented certifications, reviews, or verified company claims.

### WCAG 2.2 AAA-oriented checklist

- [ ] Complete keyboard navigation.
- [ ] Skip-to-content link.
- [ ] Visible and unobscured focus indicators.
- [ ] Proper form labels and instructions.
- [ ] Accessible validation and status messages.
- [ ] Correct heading hierarchy.
- [ ] Meaningful image alternatives.
- [ ] Sufficient text contrast, targeting 7:1 for normal text.
- [ ] Appropriate non-text contrast.
- [ ] No information conveyed through color alone.
- [ ] Text resizing without loss of content or functionality.
- [ ] Comfortable interactive target sizes.
- [ ] Accessible dropdowns, accordions, and dialogs.
- [ ] Logical focus management for dynamic content.
- [ ] Reduced-motion support.
- [ ] Browser zoom and responsive accessibility testing.
- [ ] Automated accessibility checks.
- [ ] Manual keyboard and screen-reader checks.
- [ ] Document remaining accessibility limitations.

## Phase 8 — Final Quality Assurance

### Functional testing

- [ ] Every page opens correctly.
- [ ] Navigation links lead to implemented destinations.
- [ ] Breadcrumbs work.
- [ ] Product search and filters work.
- [ ] Product detail links show the correct product.
- [ ] Order tracking works for valid and invalid IDs.
- [ ] Dashboard data is consistent.
- [ ] Forms validate without transmitting data.
- [ ] Buttons perform their advertised actions.
- [ ] No broken images or internal links.

### Code quality

- [ ] All custom CSS is in `public/css/style.css`.
- [ ] No inline CSS attributes.
- [ ] No inline `<style>` blocks.
- [ ] No inline JavaScript event handlers.
- [ ] JavaScript is organized into reusable files.
- [ ] Shared data is not duplicated unnecessarily.
- [ ] Common markup uses reusable components.
- [ ] No avoidable JavaScript console errors.
- [ ] No unnecessary third-party dependencies.
- [ ] No unsafe dynamic HTML insertion.

### Responsive testing

- [ ] Small mobile screens.
- [ ] Large mobile screens.
- [ ] Tablet portrait and landscape.
- [ ] Laptop.
- [ ] Desktop and wide desktop.
- [ ] Browser zoom.
- [ ] Long product names and order IDs.
- [ ] Empty and error states.
- [ ] Navigation at narrow widths.
- [ ] Dashboard table overflow.

## Phase 9 — Final Deliverables

- [ ] Complete source folder.
- [ ] All required HTML pages.
- [ ] Reusable HTML components.
- [ ] Complete stylesheet.
- [ ] All JavaScript files.
- [ ] Shared static datasets.
- [ ] Local image assets.
- [ ] Local run instructions.
- [ ] Page-by-page functionality report.
- [ ] Accessibility test results.
- [ ] SEO checklist results.
- [ ] Known limitations.
- [ ] Final project demonstration walkthrough.

---

## Definition of Done

The project is ready to present as a portfolio demo when every required page is implemented, reusable components work correctly, the main interactions function with static data, responsive layouts have been tested, and the accessibility and SEO checks have been documented.

The demo must clearly distinguish simulated company information, fictional testimonials, order statuses, and shipment dates from verified real-world information.

**Recommended priority:** Complete Phases 1–3 first, then the homepage, product catalog, order tracking, and buyer portal. Finish the informational pages and quality assurance afterward.
