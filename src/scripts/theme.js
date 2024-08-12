(function () {
  const storedTheme = localStorage.getItem("theme");
  const userPreferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dracula"
    : "pastel";
  const theme = storedTheme || userPreferredTheme;
  document.documentElement.setAttribute("data-theme", theme);
})();
