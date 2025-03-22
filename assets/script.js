document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "light") {
    htmlElement.classList.add("light-mode");
  }

  themeToggle.addEventListener("click", () => {
    htmlElement.classList.toggle("light-mode");
    const newTheme = htmlElement.classList.contains("light-mode")
      ? "light"
      : "dark";
    localStorage.setItem("theme", newTheme);
  });
});