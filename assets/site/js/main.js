(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- theme ---------- */
  var themeBtn = document.getElementById("theme-toggle");
  function currentTheme() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }
  themeBtn.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  });

  /* ---------- nav ---------- */
  var nav = document.getElementById("nav");
  var menuBtn = document.getElementById("menu-btn");
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 12);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // highlight the section in view
  var links = {};
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    links[a.getAttribute("href").slice(1)] = a;
  });
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          Object.keys(links).forEach(function (k) {
            links[k].classList.toggle("active", k === e.target.id);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    Object.keys(links).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  /* ---------- reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if (!reduceMotion && "IntersectionObserver" in window) {
    var rv = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            rv.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    revealEls.forEach(function (el) {
      rv.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---------- lazy autoplay videos (play only while visible) ---------- */
  function loadSources(v) {
    var changed = false;
    v.querySelectorAll("source[data-src]").forEach(function (s) {
      s.src = s.getAttribute("data-src");
      s.removeAttribute("data-src");
      changed = true;
    });
    if (changed) v.load();
  }
  var autoVids = document.querySelectorAll("video[data-autoplay]");
  if (!reduceMotion && "IntersectionObserver" in window) {
    var vo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          var v = e.target;
          if (e.isIntersecting) {
            loadSources(v);
            var p = v.play();
            if (p && p.catch) p.catch(function () {});
          } else {
            v.pause();
          }
        });
      },
      { rootMargin: "120px 0px", threshold: 0.15 }
    );
    autoVids.forEach(function (v) {
      vo.observe(v);
    });
  }

  /* ---------- hero reel ---------- */
  var reel = document.getElementById("reel");
  if (reel) {
    var clips = Array.prototype.slice.call(reel.querySelectorAll("video"));
    var caption = document.getElementById("reel-caption");
    var count = document.getElementById("reel-count");
    var dotsWrap = document.getElementById("reel-dots");
    var idx = 0;
    var timer = null;
    var DUR = 6500;
    var dots = clips.map(function (v, i) {
      var b = document.createElement("button");
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", v.getAttribute("data-cap"));
      b.addEventListener("click", function () {
        show(i);
      });
      dotsWrap.appendChild(b);
      return b;
    });
    dotsWrap.style.setProperty("--dur", DUR + "ms");

    function prime(v) {
      if (!v.src) {
        v.src = v.getAttribute("data-src");
        v.preload = "auto";
      }
    }
    function show(i) {
      clearTimeout(timer);
      var prev = clips[idx];
      idx = (i + clips.length) % clips.length;
      var v = clips[idx];
      prime(v);
      prime(clips[(idx + 1) % clips.length]);
      clips.forEach(function (c) {
        c.classList.toggle("on", c === v);
      });
      if (prev !== v) {
        setTimeout(function () {
          prev.pause();
        }, 900);
      }
      try {
        v.currentTime = 0;
      } catch (e) {}
      if (!reduceMotion) {
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      }
      caption.innerHTML = "<b>" + v.getAttribute("data-tag") + "</b>" + v.getAttribute("data-cap");
      count.textContent = ("0" + (idx + 1)).slice(-2) + " / " + ("0" + clips.length).slice(-2);
      dots.forEach(function (d, j) {
        d.classList.remove("on");
        if (j === idx) {
          void d.offsetWidth; // restart progress animation
          d.classList.add("on");
        }
        d.setAttribute("aria-selected", j === idx ? "true" : "false");
      });
      if (!reduceMotion) {
        timer = setTimeout(function () {
          show(idx + 1);
        }, DUR);
      }
    }
    clips.forEach(function (v) {
      v.loop = true;
    });
    show(0);

    // pause the reel when off-screen or the tab is hidden
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        var vis = entries[0].isIntersecting;
        if (vis && !reduceMotion) {
          clips[idx].play().catch(function () {});
        } else {
          clips[idx].pause();
        }
      }).observe(reel);
    }
  }

  /* ---------- news: show all ---------- */
  var newsItems = document.querySelectorAll("#news-list li");
  var newsBtn = document.getElementById("news-more");
  var VISIBLE = 7;
  if (newsItems.length > VISIBLE) {
    newsItems.forEach(function (li, i) {
      if (i >= VISIBLE) li.hidden = true;
    });
    newsBtn.addEventListener("click", function () {
      var expanded = newsBtn.getAttribute("aria-expanded") === "true";
      newsItems.forEach(function (li, i) {
        if (i >= VISIBLE) li.hidden = expanded;
      });
      newsBtn.setAttribute("aria-expanded", expanded ? "false" : "true");
      newsBtn.textContent = expanded ? "Show all news" : "Show less";
    });
  } else {
    newsBtn.hidden = true;
  }

  /* ---------- project filters ---------- */
  var filters = document.querySelectorAll(".filter");
  var projs = document.querySelectorAll(".proj");
  filters.forEach(function (f) {
    f.addEventListener("click", function () {
      var cat = f.getAttribute("data-filter");
      filters.forEach(function (x) {
        x.classList.toggle("on", x === f);
      });
      projs.forEach(function (p) {
        var cats = (p.getAttribute("data-cat") || "").split(" ");
        p.hidden = !(cat === "all" || cats.indexOf(cat) !== -1);
      });
    });
  });

  /* ---------- BibTeX toggle + copy ---------- */
  document.querySelectorAll("[data-bib]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var pre = document.getElementById(btn.getAttribute("data-bib"));
      var open = pre.classList.toggle("open");
      if (open && navigator.clipboard) {
        navigator.clipboard.writeText(pre.textContent).then(
          function () {
            var label = btn.lastChild;
            var old = label.textContent;
            label.textContent = "Copied";
            setTimeout(function () {
              label.textContent = old;
            }, 1400);
          },
          function () {}
        );
      }
    });
  });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
