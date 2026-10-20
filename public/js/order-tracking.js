(function () {
  "use strict";

  function initTracking() {
    const form = document.querySelector("[data-tracking-form]");
    const result = document.querySelector("[data-tracking-result]");
    const feedback = document.querySelector("[data-tracking-feedback]");
    if (!form || !result || form.dataset.initialized === "true") return;
    form.dataset.initialized = "true";

    const input = form.querySelector("[name='order-id']");

    function renderOrder(order) {
      result.replaceChildren();
      const heading = document.createElement("h2");
      heading.textContent = `Order ${order.id}`;
      const notice = document.createElement("p");
      notice.className = "demo-note";
      notice.textContent = "All order, shipment, and date information below is simulated for this portfolio demo.";
      const summary = document.createElement("dl");
      summary.className = "tracking-summary";
      [
        ["Product", order.product],
        ["Quantity", order.quantity],
        ["Buyer reference", order.buyerReference],
        ["Current status", window.garmentDemoData.orderStatuses[order.statusIndex]],
        ["Estimated shipment", order.estimatedShipment],
        ["Destination", order.destination]
      ].forEach(([label, value]) => {
        const group = document.createElement("div");
        const term = document.createElement("dt");
        term.textContent = label;
        const description = document.createElement("dd");
        description.textContent = value;
        group.append(term, description);
        summary.append(group);
      });
      const timelineTitle = document.createElement("h3");
      timelineTitle.textContent = "Order activity";
      const timeline = document.createElement("ol");
      timeline.className = "timeline";
      order.events.forEach(([title, date, description]) => {
        const item = document.createElement("li");
        const eventTitle = document.createElement("h4");
        eventTitle.textContent = title;
        const time = document.createElement("time");
        time.textContent = date;
        const detail = document.createElement("p");
        detail.textContent = description;
        item.append(eventTitle, time, detail);
        timeline.append(item);
      });
      result.append(heading, notice, summary, timelineTitle, timeline);
      result.hidden = false;
      feedback.textContent = "";
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const requestedId = input.value.trim().toUpperCase();
      const order = window.garmentDemoData.orders.find((item) => item.id === requestedId);
      if (!order) {
        result.hidden = true;
        result.replaceChildren();
        feedback.textContent = "We couldn't find that demo order. Check the number or try GW-24018.";
        input.setAttribute("aria-invalid", "true");
        input.focus();
        return;
      }
      input.removeAttribute("aria-invalid");
      renderOrder(order);
    });

    input.addEventListener("input", function () {
      input.removeAttribute("aria-invalid");
      feedback.textContent = "";
    });
    form.querySelector("[data-example-order]").addEventListener("click", function () {
      input.value = "GW-24018";
      input.focus();
    });
    const orderId = new URLSearchParams(window.location.search).get("id");
    if (orderId) {
      input.value = orderId;
      form.requestSubmit();
    }
  }

  document.addEventListener("DOMContentLoaded", initTracking);
}());
