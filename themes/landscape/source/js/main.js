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

  if (!chips.length || !panels.length) {
    return;
  }

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
});
