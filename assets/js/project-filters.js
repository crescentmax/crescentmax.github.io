(function () {
  "use strict";

  function initializeProjectFilters() {
    var filterGroup = document.querySelector(".project-filters");
    var cards = Array.prototype.slice.call(document.querySelectorAll(".project-card[data-project-category]"));
    var status = document.getElementById("project-filter-status");

    if (!filterGroup || !cards.length) {
      return;
    }

    var buttons = Array.prototype.slice.call(filterGroup.querySelectorAll("[data-project-filter]"));
    var labels = {
      all: "all projects",
      professional: "professional projects",
      project: "personal projects",
      game: "games"
    };

    function applyFilter(category) {
      var visibleCount = 0;

      buttons.forEach(function (button) {
        var isActive = button.getAttribute("data-project-filter") === category;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
      });

      cards.forEach(function (card) {
        var isVisible = category === "all" || card.getAttribute("data-project-category") === category;
        card.hidden = !isVisible;

        if (isVisible) {
          visibleCount += 1;
          card.classList.remove("project-card--revealed");
          window.requestAnimationFrame(function () {
            card.classList.add("project-card--revealed");
          });
        }
      });

      if (status) {
        status.textContent = "Showing " + visibleCount + " " + labels[category] + ".";
      }
    }

    filterGroup.addEventListener("click", function (event) {
      var button = event.target.closest("[data-project-filter]");

      if (!button || !filterGroup.contains(button)) {
        return;
      }

      applyFilter(button.getAttribute("data-project-filter"));
    });

    applyFilter("all");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeProjectFilters);
  } else {
    initializeProjectFilters();
  }
}());
