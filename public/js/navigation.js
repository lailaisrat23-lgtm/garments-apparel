(function () {
  "use strict";

  document.addEventListener("garment:components-ready", function () {
    const toggle = document.querySelector("[data-nav-toggle]");
    const menu = document.querySelector("[data-primary-nav]");
    if (!toggle || !menu || toggle.dataset.initialized === "true") return;
    toggle.dataset.initialized = "true";

    function closeMenu() {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    }

    toggle.addEventListener("click", function () {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      menu.classList.toggle("is-open", !isExpanded);
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeMenu();
        toggle.focus();
      }
    });

    const currentPage = window.location.pathname.split("/").pop() || "home.html";
    menu.querySelectorAll("a[data-page]").forEach((link) => {
      if (link.dataset.page === currentPage) link.setAttribute("aria-current", "page");
    });
  });
}());
