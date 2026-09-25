(function () {
  document.querySelectorAll(".lang-toggle a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (!location.hash) return;
      event.preventDefault();
      var href = link.getAttribute("href").split("#")[0];
      location.assign(href + location.hash);
    });
  });

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });
})();
