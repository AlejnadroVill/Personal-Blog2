const themeToggleButton = document.querySelector(".theme-toggle");
const body = document.body;

// Load the saved theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Toggle theme between light and dark
themeToggleButton.addEventListener("click", () => {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "");
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  }
});
