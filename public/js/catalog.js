(function () {
  "use strict";

  const pageSize = 6;
  let currentPage = 1;

  function initCatalog() {
    const form = document.querySelector("[data-catalog-filters]");
    const grid = document.querySelector("[data-catalog-grid]");
    if (!form || !grid || form.dataset.initialized === "true") return;
    form.dataset.initialized = "true";

    const search = form.querySelector("[name='search']");
    const category = form.querySelector("[name='category']");
    const material = form.querySelector("[name='material']");
    const moq = form.querySelector("[name='moq']");
    const sort = form.querySelector("[name='sort']");
    const count = document.querySelector("[data-result-count]");
    const empty = document.querySelector("[data-catalog-empty]");
    const pagination = document.querySelector("[data-pagination]");
    const pageLabel = document.querySelector("[data-page-label]");

    function filteredProducts() {
      const products = window.garmentDemoData.products.filter((product) => {
        const matchesSearch = `${product.name} ${product.id}`.toLowerCase().includes(search.value.trim().toLowerCase());
        const matchesCategory = !category.value || product.category === category.value;
        const matchesMaterial = !material.value || product.material === material.value;
        const matchesMoq = !moq.value || (moq.value === "under-1500" ? product.moq < 1500 : product.moq >= 1500);
        return matchesSearch && matchesCategory && matchesMaterial && matchesMoq;
      });

      return products.sort((a, b) => {
        if (sort.value === "name") return a.name.localeCompare(b.name);
        if (sort.value === "moq-low") return a.moq - b.moq;
        if (sort.value === "moq-high") return b.moq - a.moq;
        return 0;
      });
    }

    function render() {
      const products = filteredProducts();
      const pageCount = Math.max(1, Math.ceil(products.length / pageSize));
      currentPage = Math.min(currentPage, pageCount);
      const start = (currentPage - 1) * pageSize;
      const visible = products.slice(start, start + pageSize);
      grid.replaceChildren();
      visible.forEach((product) => {
        const card = document.createElement("article");
        card.className = "product-card";
        const visual = document.createElement("div");
        visual.className = "product-card__visual";
        visual.setAttribute("aria-hidden", "true");
        const reference = document.createElement("span");
        reference.textContent = product.id;
        visual.append(reference);
        const body = document.createElement("div");
        body.className = "product-card__body";
        const eyebrow = document.createElement("p");
        eyebrow.className = "eyebrow";
        eyebrow.textContent = product.category;
        const heading = document.createElement("h2");
        const link = document.createElement("a");
        link.href = `product-details.html?id=${encodeURIComponent(product.id)}`;
        link.textContent = product.name;
        heading.append(link);
        const details = document.createElement("p");
        details.textContent = `${product.material} · ${product.leadTime}`;
        const minimum = document.createElement("p");
        minimum.className = "product-card__meta";
        minimum.textContent = `Minimum order: ${product.moq.toLocaleString()} pieces`;
        body.append(eyebrow, heading, details, minimum);
        card.append(visual, body);
        grid.append(card);
      });
      count.textContent = `${products.length} ${products.length === 1 ? "product" : "products"} shown`;
      empty.hidden = products.length > 0;
      pagination.hidden = pageCount < 2;
      pageLabel.textContent = `Page ${currentPage} of ${pageCount}`;
      pagination.querySelector("[data-page-prev]").disabled = currentPage <= 1;
      pagination.querySelector("[data-page-next]").disabled = currentPage >= pageCount;
    }

    search.addEventListener("input", function () {
      currentPage = 1;
      render();
    });
    form.addEventListener("change", function () {
      currentPage = 1;
      render();
    });
    form.querySelector("[data-reset-filters]").addEventListener("click", function () {
      form.reset();
      currentPage = 1;
      render();
      search.focus();
    });
    pagination.querySelector("[data-page-prev]").addEventListener("click", function () {
      currentPage -= 1;
      render();
      grid.focus({ preventScroll: true });
    });
    pagination.querySelector("[data-page-next]").addEventListener("click", function () {
      currentPage += 1;
      render();
      grid.focus({ preventScroll: true });
    });

    const query = new URLSearchParams(window.location.search);
    const requestedCategory = query.get("category");
    if (requestedCategory && [...category.options].some((option) => option.value === requestedCategory)) {
      category.value = requestedCategory;
    }
    const materials = [...new Set(window.garmentDemoData.products.map((product) => product.material))];
    materials.forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      material.append(option);
    });
    render();
  }

  document.addEventListener("DOMContentLoaded", initCatalog);
}());
