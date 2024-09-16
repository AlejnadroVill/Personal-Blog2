const themeToggleButton = document.querySelector(".theme-toggle");
const body = document.body;

themeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});

const backButton = document.querySelector(".back-button");
const blogPostsContainer = document.getElementById("blogPosts");

const blogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

blogPosts.forEach((post) => {
  const postElement = document.createElement("div");
  postElement.classList.add("blog-card");
  postElement.innerHTML = `
        <h2 class="blog-title">${post.title}</h2>
        <p class="blog-content">${post.post}</p>
        <p class="blog-user"><strong>By:</strong> ${post.username}</p>`;
  blogPostsContainer.appendChild(postElement);
});

backButton.addEventListener("click", () => {
  location.href = "index.html";
});
