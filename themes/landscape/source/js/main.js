document.addEventListener("mousemove", function (event) {
  var one = document.querySelector(".ambient-one");
  var two = document.querySelector(".ambient-two");

  if (!one || !two) {
    return;
  }

  var x = event.clientX / window.innerWidth;
  var y = event.clientY / window.innerHeight;

  one.style.transform = "translate(" + x * -24 + "px," + y * -18 + "px)";
  two.style.transform = "translate(" + x * 18 + "px," + y * 24 + "px)";
});

document.addEventListener("DOMContentLoaded", function () {
  var chips = document.querySelectorAll(".filter-chip");
  var panels = document.querySelectorAll(".post-panel");
  var floatCards = document.querySelectorAll(".cover-card, .post-panel, .archive-item, .sticky-panel");
  var revealItems = document.querySelectorAll(".reveal-item");

  if (!chips.length || !panels.length) {
  } else {
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var value = chip.getAttribute("data-filter");

        chips.forEach(function (item) {
          item.classList.toggle("is-active", item === chip);
        });

        panels.forEach(function (panel) {
          var categories = panel.getAttribute("data-categories") || "";
          var visible = value === "all" || categories.split(/\s+/).indexOf(value) !== -1;
          panel.classList.toggle("is-hidden", !visible);
        });
      });
    });
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
    return;
  }

  if ("IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px"
      }
    );

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  floatCards.forEach(function (card) {
    card.addEventListener("mousemove", function (event) {
      var rect = card.getBoundingClientRect();
      var px = (event.clientX - rect.left) / rect.width;
      var py = (event.clientY - rect.top) / rect.height;
      var tiltY = (px - 0.5) * 6;
      var tiltX = (0.5 - py) * 5;

      card.style.setProperty("--tilt-x", tiltX.toFixed(2) + "deg");
      card.style.setProperty("--tilt-y", tiltY.toFixed(2) + "deg");
      card.style.setProperty("--glow-x", (px * 100).toFixed(2) + "%");
      card.style.setProperty("--glow-y", (py * 100).toFixed(2) + "%");
    });

    card.addEventListener("mouseleave", function () {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.setProperty("--glow-x", "50%");
      card.style.setProperty("--glow-y", "50%");
    });
  });
});
