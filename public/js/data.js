window.garmentDemoData = {
  categories: [
    { name: "Knitwear", slug: "knitwear", description: "Everyday essentials, engineered for comfort." },
    { name: "Woven garments", slug: "woven", description: "Considered construction for work and lifestyle." },
    { name: "Denim & jeans", slug: "denim", description: "Versatile denim with thoughtful finishes." },
    { name: "Yarn & spinning", slug: "yarn", description: "Material options for a range of applications." },
    { name: "Trims & accessories", slug: "trims", description: "The details that bring a collection together." }
  ],
  products: [
    { id: "KN-001", name: "Classic cotton crew tee", category: "Knitwear", material: "Organic cotton", moq: 1200, leadTime: "45–60 days", description: "A versatile jersey tee with a clean neckline and customizable finish.", image: "../../../public/assets/images/products/kn-001-classic-crew-tee.svg", imageAlt: "Cream organic cotton crew-neck t-shirt shown flat" },
    { id: "KN-002", name: "Relaxed pique polo", category: "Knitwear", material: "Cotton pique", moq: 1500, leadTime: "50–65 days", description: "A structured polo silhouette suitable for private-label programs.", image: "../../../public/assets/images/products/kn-002-pique-polo.svg", imageAlt: "Sage cotton pique polo shirt with ribbed collar shown flat" },
    { id: "WV-014", name: "Everyday poplin shirt", category: "Woven garments", material: "Cotton poplin", moq: 1000, leadTime: "45–60 days", description: "A timeless woven shirt, available with a range of collar and cuff details.", image: "../../../public/assets/images/products/wv-014-poplin-shirt.svg", imageAlt: "Light blue cotton poplin button-up shirt shown flat" },
    { id: "WV-021", name: "Utility overshirt", category: "Woven garments", material: "Cotton twill", moq: 1200, leadTime: "55–70 days", description: "A layer-ready overshirt with configurable pocket and button details.", image: "../../../public/assets/images/products/wv-021-utility-overshirt.svg", imageAlt: "Khaki cotton twill utility overshirt with chest pockets shown flat" },
    { id: "DN-008", name: "Straight-leg denim", category: "Denim & jeans", material: "Cotton denim", moq: 1800, leadTime: "60–75 days", description: "A classic five-pocket fit with wash and trim options for development.", image: "../../../public/assets/images/products/dn-008-straight-leg-denim.svg", imageAlt: "Indigo straight-leg five-pocket jeans shown flat" },
    { id: "YR-003", name: "Combed cotton yarn", category: "Yarn & spinning", material: "Combed cotton", moq: 2500, leadTime: "35–50 days", description: "A versatile yarn specification for knit and jersey applications.", image: "../../../public/assets/images/products/yr-003-combed-cotton-yarn.svg", imageAlt: "Three cones of cream combed cotton yarn" },
    { id: "TR-012", name: "Woven brand label set", category: "Trims & accessories", material: "Recycled polyester", moq: 5000, leadTime: "25–40 days", description: "Customizable woven labels for a consistent garment identity.", image: "../../../public/assets/images/products/tr-012-woven-brand-labels.svg", imageAlt: "Woven brand labels, a care label, and a kraft hang tag" },
    { id: "DN-011", name: "Denim work jacket", category: "Denim & jeans", material: "Cotton denim", moq: 1500, leadTime: "60–75 days", description: "A durable jacket silhouette with configurable hardware and washes.", image: "../../../public/assets/images/products/dn-011-denim-work-jacket.svg", imageAlt: "Indigo denim work jacket with chest pockets shown flat" }
  ],
  orders: [
    {
      id: "GW-24018", buyerReference: "NORTH-SS26-04", product: "Classic cotton crew tee",
      quantity: "2,400 pcs", statusIndex: 5, estimatedShipment: "18 November 2026",
      destination: "Rotterdam, Netherlands",
      events: [
        ["Inquiry received", "12 August 2026", "Requirements added to the sample order."],
        ["Sample approved", "29 August 2026", "Buyer approval recorded in this demonstration."],
        ["Purchase order confirmed", "03 September 2026", "Order details prepared for production."],
        ["Materials sourced", "16 September 2026", "Core fabric and trims listed as received."],
        ["Production in progress", "02 October 2026", "Garment production is underway."]
      ]
    },
    {
      id: "GW-24027", buyerReference: "ATELIER-HW-12", product: "Everyday poplin shirt",
      quantity: "1,200 pcs", statusIndex: 3, estimatedShipment: "09 December 2026",
      destination: "Hamburg, Germany",
      events: [
        ["Inquiry received", "22 September 2026", "Product brief received."],
        ["Sample development", "01 October 2026", "A sample is being prepared for review."],
        ["Sample approved", "12 October 2026", "Approval is simulated for this demonstration."],
        ["Purchase order confirmed", "17 October 2026", "Order details prepared for production."]
      ]
    },
    {
      id: "GW-24031", buyerReference: "STUDIO-RESORT-02", product: "Utility overshirt",
      quantity: "1,200 pcs", statusIndex: 1, estimatedShipment: "21 December 2026",
      destination: "Copenhagen, Denmark", approvalPending: true,
      buyerAction: "Review development sample",
      events: [
        ["Inquiry received", "06 October 2026", "A sample product brief was received."],
        ["Sample development", "14 October 2026", "A development sample is being prepared for review."]
      ]
    },
    {
      id: "GW-23981", buyerReference: "FIELD-CORE-08", product: "Straight-leg denim",
      quantity: "1,800 pcs", statusIndex: 8, estimatedShipment: "02 October 2026",
      destination: "Melbourne, Australia",
      events: [
        ["Inquiry received", "18 June 2026", "Product brief received."],
        ["Sample approved", "04 July 2026", "Buyer approval recorded in this demonstration."],
        ["Purchase order confirmed", "12 July 2026", "Order details prepared for production."],
        ["Production in progress", "02 August 2026", "Garment production completed."],
        ["Quality inspection", "18 August 2026", "Inspection status is simulated."],
        ["Packing completed", "25 August 2026", "Packing status is simulated."],
        ["Shipment dispatched", "02 September 2026", "Shipment status is simulated."]
      ]
    }
  ],
  orderStatuses: [
    "Inquiry received", "Sample development", "Sample approved", "Purchase order confirmed",
    "Fabric and material sourcing", "Production in progress", "Quality inspection",
    "Packing completed", "Shipment dispatched", "Delivered"
  ]
};
