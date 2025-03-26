// theme toggle button

document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const htmlElement = document.documentElement;

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    htmlElement.classList.add("light-mode");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  } else {
    htmlElement.classList.remove("light-mode");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  }

  themeToggle.addEventListener("click", function () {
    htmlElement.classList.toggle("light-mode");

    if (htmlElement.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light");
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    } else {
      localStorage.setItem("theme", "dark");
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    }
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
