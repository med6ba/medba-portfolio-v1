document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtns = document.querySelectorAll(".back-to-top");

  backToTopBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});
