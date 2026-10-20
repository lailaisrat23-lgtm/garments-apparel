(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-demo-form]").forEach((form) => {
      if (form.dataset.initialized === "true") return;
      form.dataset.initialized = "true";
      const feedback = form.querySelector("[data-form-feedback]");
      const productId = new URLSearchParams(window.location.search).get("product");
      const productField = form.querySelector("[name='interest']");
      const matchingProduct = window.garmentDemoData && window.garmentDemoData.products.find((product) => product.id === productId);
      if (matchingProduct && productField) productField.value = matchingProduct.category;
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!form.reportValidity()) return;
        feedback.textContent = "Thank you. This is a demonstration form only; no message was sent or stored.";
        feedback.classList.add("form-feedback--success");
        form.reset();
      });
    });
  });
}());
