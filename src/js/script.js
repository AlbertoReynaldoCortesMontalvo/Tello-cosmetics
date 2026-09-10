/* ==========================================================================
   TELLO COSMETICS — Script principal
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.querySelector(".nav__menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("is-open");
      menu.classList.toggle("is-open");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.classList.remove("is-open");
        menu.classList.remove("is-open");
      });
    });
  }

  const categoryButtons = document.querySelectorAll(".blog-categories button");
  const cards = document.querySelectorAll(".blog-grid article");

  if (categoryButtons.length && cards.length) {
    categoryButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        categoryButtons.forEach(function (btn) {
          btn.classList.remove("is-active");
        });
        button.classList.add("is-active");

        const filter = button.dataset.filter;

        cards.forEach(function (card) {
          const cardCategory = card.dataset.category || "";
          const showAll = filter === "all" || cardCategory === filter;
          card.style.display = showAll ? "" : "none";
        });
      });
    });
  }
});