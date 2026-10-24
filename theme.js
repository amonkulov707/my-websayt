// Yorug' / qorong'i rejim. Sahifa chizilishidan oldin ishlaydi, shuning uchun <head> ichida ulanadi.
(function () {
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  root.dataset.theme = saved || (systemDark ? "dark" : "light");

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".theme-toggle").addEventListener("click", function () {
      const next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  });
})();
