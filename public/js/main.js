(function () {
  "use strict";

  const partials = [
    ["#site-announcement", "../components/announcement-bar.html"],
    ["#site-header", "../components/navbar.html"],
    ["#site-footer", "../components/footer.html"]
  ];

  async function loadPartial(target, path) {
    const container = document.querySelector(target);
    if (!container) return;

    try {
      const response = await fetch(path);
      if (!response.ok) {
        throw new Error(`Component request failed (${response.status}): ${path}`);
      }
      container.innerHTML = await response.text();
    } catch (error) {
      console.error(error);
      const message = document.createElement("p");
      message.className = "component-error";
      message.setAttribute("role", "alert");
      message.textContent = "A shared page section could not be loaded. Open this demo through a local HTTP server (such as VS Code Live Server), not file://.";
      container.replaceChildren(message);
    }
  }

  function renderHomeCards() {
    const data = window.garmentDemoData;
    const categoryGrid = document.querySelector("[data-category-grid]");
    const productGrid = document.querySelector("[data-featured-products]");
    if (!data || !categoryGrid || !productGrid) return;

    data.categories.forEach((category, index) => {
      const card = document.createElement("a");
      card.className = `category-card category-card--${index + 1}`;
      card.href = `products.html?category=${encodeURIComponent(category.name)}`;
      const number = document.createElement("span");
      number.className = "category-card__number";
      number.textContent = `0${index + 1}`;
      const name = document.createElement("h3");
      name.textContent = category.name;
      const description = document.createElement("p");
      description.textContent = category.description;
      const linkLabel = document.createElement("span");
      linkLabel.className = "text-link";
      linkLabel.textContent = "Explore category";
      card.append(number, name, description, linkLabel);
      categoryGrid.append(card);
    });

    data.products.slice(0, 3).forEach((product) => {
      const card = document.createElement("article");
      card.className = "product-card";
      const image = document.createElement("div");
      image.className = "product-card__visual";
      const code = document.createElement("span");
      code.textContent = product.id;
      image.append(code);
      if (product.image) {
        const photo = document.createElement("img");
        photo.src = product.image;
        photo.alt = product.imageAlt || product.name;
        photo.width = 800;
        photo.height = 600;
        photo.loading = "lazy";
        photo.decoding = "async";
        photo.addEventListener("error", function () {
          photo.remove();
        });
        image.append(photo);
      }
      const body = document.createElement("div");
      body.className = "product-card__body";
      const category = document.createElement("p");
      category.className = "eyebrow";
      category.textContent = product.category;
      const title = document.createElement("h3");
      const link = document.createElement("a");
      link.href = `product-details.html?id=${encodeURIComponent(product.id)}`;
      link.textContent = product.name;
      title.append(link);
      const description = document.createElement("p");
      description.textContent = product.material;
      const meta = document.createElement("div");
      meta.className = "product-card__meta";
      meta.textContent = `MOQ ${product.moq.toLocaleString()} pcs`;
      body.append(category, title, description, meta);
      card.append(image, body);
      productGrid.append(card);
    });
  }

  async function initialize() {
    await Promise.all(partials.map(([target, path]) => loadPartial(target, path)));
    renderHomeCards();
    document.dispatchEvent(new CustomEvent("garment:components-ready"));
  }

  initialize();
}());
