(function () {
  "use strict";

  function initBuyerPortal() {
    const dashboard = document.querySelector("[data-buyer-dashboard]");
    if (!dashboard) return;

    const orders = window.garmentDemoData.orders;
    const statuses = window.garmentDemoData.orderStatuses;
    const orderRows = dashboard.querySelector("[data-dashboard-orders]");
    const orderCount = dashboard.querySelector("[data-dashboard-order-count]");
    const filter = dashboard.querySelector("[data-dashboard-status-filter]");
    const resultCount = dashboard.querySelector("[data-dashboard-result-count]");
    const approvalList = dashboard.querySelector("[data-approval-list]");
    const emptyApprovals = dashboard.querySelector("[data-no-approvals]");
    const details = dashboard.querySelector("[data-dashboard-details]");

    function updateMetrics() {
      dashboard.querySelector("[data-metric-total]").textContent = orders.length;
      dashboard.querySelector("[data-metric-production]").textContent = orders.filter((order) => order.statusIndex === 5).length;
      dashboard.querySelector("[data-metric-approvals]").textContent = orders.filter((order) => order.approvalPending).length;
      dashboard.querySelector("[data-metric-completed]").textContent = orders.filter((order) => order.statusIndex >= 8).length;
    }

    function renderOrders() {
      const matchingOrders = orders.filter((order) => !filter.value || statuses[order.statusIndex] === filter.value);
      orderRows.replaceChildren();
      matchingOrders.forEach((order) => {
        const row = document.createElement("tr");
        const reference = document.createElement("th");
        reference.scope = "row";
        reference.textContent = order.id;
        const product = document.createElement("td");
        product.textContent = order.product;
        const status = document.createElement("td");
        status.textContent = statuses[order.statusIndex];
        const shipment = document.createElement("td");
        shipment.textContent = order.estimatedShipment;
        const actions = document.createElement("td");
        const viewButton = document.createElement("button");
        viewButton.className = "text-button";
        viewButton.type = "button";
        viewButton.dataset.viewOrder = order.id;
        viewButton.textContent = "View details";
        actions.append(viewButton);
        row.append(reference, product, status, shipment, actions);
        orderRows.append(row);
      });
      orderCount.textContent = `${matchingOrders.length} ${matchingOrders.length === 1 ? "order" : "orders"}`;
      resultCount.textContent = `Showing ${matchingOrders.length} of ${orders.length} demo orders`;
    }

    function renderApprovals() {
      const approvals = orders.filter((order) => order.approvalPending);
      approvalList.replaceChildren();
      approvals.forEach((order) => {
        const card = document.createElement("article");
        card.className = "dashboard-action-card";
        const heading = document.createElement("h3");
        heading.textContent = `${order.buyerAction} · ${order.id}`;
        const description = document.createElement("p");
        description.textContent = `${order.product} · ${order.buyerReference}`;
        const button = document.createElement("button");
        button.className = "button button--quiet";
        button.type = "button";
        button.dataset.approveOrder = order.id;
        button.textContent = "Mark reviewed for this demo";
        card.append(heading, description, button);
        approvalList.append(card);
      });
      emptyApprovals.hidden = approvals.length > 0;
      updateMetrics();
    }

    function showOrderDetails(order) {
      details.replaceChildren();
      const heading = document.createElement("h2");
      heading.tabIndex = -1;
      heading.textContent = `Order ${order.id}`;
      const closeButton = document.createElement("button");
      closeButton.className = "text-button";
      closeButton.type = "button";
      closeButton.textContent = "Close order details";
      closeButton.addEventListener("click", function () {
        details.hidden = true;
      });
      const summary = document.createElement("dl");
      summary.className = "tracking-summary";
      [
        ["Product", order.product],
        ["Quantity", order.quantity],
        ["Buyer reference", order.buyerReference],
        ["Current status", statuses[order.statusIndex]],
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
      const timelineHeading = document.createElement("h3");
      timelineHeading.textContent = "Order activity";
      const timeline = document.createElement("ol");
      timeline.className = "timeline";
      order.events.forEach(([title, date, description]) => {
        const item = document.createElement("li");
        const eventHeading = document.createElement("h4");
        eventHeading.textContent = title;
        const time = document.createElement("time");
        time.textContent = date;
        const eventDescription = document.createElement("p");
        eventDescription.textContent = description;
        item.append(eventHeading, time, eventDescription);
        timeline.append(item);
      });
      const trackingLink = document.createElement("a");
      trackingLink.className = "text-link";
      trackingLink.href = `order-tracking.html?id=${encodeURIComponent(order.id)}`;
      trackingLink.textContent = "Open tracking page";
      details.append(closeButton, heading, summary, timelineHeading, timeline, trackingLink);
      details.hidden = false;
      heading.focus();
    }

    filter.addEventListener("change", renderOrders);
    orderRows.addEventListener("click", function (event) {
      const button = event.target.closest("[data-view-order]");
      if (!button) return;
      const order = orders.find((item) => item.id === button.dataset.viewOrder);
      showOrderDetails(order);
    });
    approvalList.addEventListener("click", function (event) {
      const button = event.target.closest("[data-approve-order]");
      if (!button) return;
      const order = orders.find((item) => item.id === button.dataset.approveOrder);
      order.approvalPending = false;
      order.buyerAction = null;
      renderApprovals();
      dashboard.querySelector("[data-approval-feedback]").textContent = `${order.id} was marked reviewed in this demo only. No approval was transmitted or saved.`;
    });

    statuses.forEach((status) => {
      const option = document.createElement("option");
      option.value = status;
      option.textContent = status;
      filter.append(option);
    });

    renderOrders();
    renderApprovals();
  }

  document.addEventListener("DOMContentLoaded", initBuyerPortal);
}());
