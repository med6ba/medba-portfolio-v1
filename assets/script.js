document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlElement = document.documentElement;

  themeToggle.addEventListener("click", function () {
    // Toggle the light mode
    htmlElement.classList.toggle("light-mode");

    // Toggle the icon between moon and sun
    if (htmlElement.classList.contains("light-mode")) {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    } else {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    }
  });
});
