// theme toggle button
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlElement = document.documentElement;

  // Default to light mode if nothing is saved
  const savedTheme = localStorage.getItem("theme") || "light";

  if (savedTheme === "light") {
    htmlElement.classList.add("light-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    htmlElement.classList.remove("light-mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }

  themeToggle.addEventListener("click", function () {
    htmlElement.classList.toggle("light-mode");

    const isLight = htmlElement.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    themeIcon.classList.toggle("fa-sun", isLight);
    themeIcon.classList.toggle("fa-moon", !isLight);
  });
});

// Scroll to top button

document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtns = document.querySelectorAll(".back-to-top");

  backToTopBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});
