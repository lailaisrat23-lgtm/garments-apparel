(function () {
  "use strict";

  function appendDetail(list, label, value) {
    const item = document.createElement("div");
    const term = document.createElement("dt");
    term.textContent = label;
    const description = document.createElement("dd");
    description.textContent = value;
    item.append(term, description);
    list.append(item);
  }

  function initProductDetails() {
    const panel = document.querySelector("[data-product-details]");
    if (!panel) return;
    const productId = new URLSearchParams(window.location.search).get("id");
    const product = window.garmentDemoData.products.find((item) => item.id === productId);
    const unavailable = document.querySelector("[data-product-unavailable]");

    if (!product) {
      panel.hidden = true;
      unavailable.hidden = false;
      return;
    }

    unavailable.hidden = true;
    panel.hidden = false;
    panel.querySelector("[data-product-category]").textContent = product.category;
    panel.querySelector("[data-product-name]").textContent = product.name;
    panel.querySelector("[data-product-id]").textContent = `Reference ${product.id}`;
    panel.querySelector("[data-product-description]").textContent = product.description;
    const visual = panel.querySelector("[data-product-visual]");
    if (product.image) {
      const photo = document.createElement("img");
      photo.src = product.image;
      photo.alt = product.imageAlt || product.name;
      photo.width = 800;
      photo.height = 600;
      photo.decoding = "async";
      visual.replaceChildren(photo);
    }
    const specs = panel.querySelector("[data-product-specifications]");
    appendDetail(specs, "Material", product.material);
    appendDetail(specs, "Illustrative minimum", `${product.moq.toLocaleString()} pieces`);
    appendDetail(specs, "Estimated lead time", product.leadTime);
    appendDetail(specs, "Sampling", "Available for discussion; timing depends on the brief.");
    appendDetail(specs, "Customization", "Fit, color, trims, and packaging are subject to development.");

    panel.querySelector("[data-quote-link]").href = `contact.html?product=${encodeURIComponent(product.id)}`;
    const related = panel.querySelector("[data-related-products]");
    window.garmentDemoData.products
      .filter((item) => item.id !== product.id && item.category === product.category)
      .slice(0, 2)
      .forEach((item) => {
        const link = document.createElement("a");
        link.className = "related-product";
        link.href = `product-details.html?id=${encodeURIComponent(item.id)}`;
        const name = document.createElement("span");
        name.textContent = item.name;
        const reference = document.createElement("small");
        reference.textContent = item.id;
        link.append(name, reference);
        related.append(link);
      });
    if (!related.children.length) {
      const note = document.createElement("p");
      note.textContent = "Explore the full catalog to find related product options.";
      related.append(note);
    }
  }

  document.addEventListener("DOMContentLoaded", initProductDetails);
}());
