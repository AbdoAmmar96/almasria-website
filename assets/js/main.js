/* الشركة المصرية لمهمات المصانع — main.js */
(function () {
  "use strict";

  /* Mobile nav */
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function (e) {
        // expand dropdown parent on mobile instead of navigating (first tap)
        var li = a.parentElement;
        if (window.innerWidth <= 1080 && li.querySelector(".dropdown") && a.parentElement.classList.contains("has-dd") && !li.classList.contains("exp")) {
          e.preventDefault();
          li.classList.add("exp");
          return;
        }
        nav.classList.remove("open");
        burger.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  /* Header shadow on scroll */
  var header = document.querySelector(".header");
  var onScroll = function () {
    if (header) header.classList.toggle("scrolled", window.scrollY > 10);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Reveal on scroll */
  var rvs = document.querySelectorAll(".rv");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    rvs.forEach(function (el) { io.observe(el); });
  } else {
    rvs.forEach(function (el) { el.classList.add("in"); });
  }

  /* Counters */
  var counters = document.querySelectorAll("[data-count]");
  var animate = function (el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var dur = 1400, start = null;
    var step = function (ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ("IntersectionObserver" in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { animate(en.target); cio.unobserve(en.target); }
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { cio.observe(el); });
  }

  /* Quote form → WhatsApp */
  var form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = function (id) { var el = form.querySelector("#" + id); return el ? el.value.trim() : ""; };
      var msg =
        "طلب عرض سعر — من موقع elmasriasupplies.com\n" +
        "----------------------------\n" +
        "الاسم: " + v("fName") + "\n" +
        "الشركة/الجهة: " + (v("fCompany") || "-") + "\n" +
        "رقم التليفون: " + v("fPhone") + "\n" +
        "الخدمة المطلوبة: " + v("fService") + "\n" +
        "التفاصيل: " + v("fMsg");
      window.open("https://wa.me/201098956061?text=" + encodeURIComponent(msg), "_blank", "noopener");
      var ok = document.getElementById("formOk");
      if (ok) ok.style.display = "block";
      form.reset();
    });
  }
})();
