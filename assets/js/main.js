const themeToggleButton = document.querySelector(".theme-toggle");
const body = document.body;

themeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
