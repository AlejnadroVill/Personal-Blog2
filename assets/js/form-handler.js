document.addEventListener("DOMContentLoaded", () => {
  const formElement = document.querySelector("form");

  formElement.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.querySelector("#usernameInput").value.trim();
    const titlePost = document.querySelector("#titleInput").value.trim();
    const contentPost = document.querySelector("#contentInput").value.trim();

    if (userName && titlePost && contentPost) {
      const blogPost = {
        username: userName,
        title: titlePost,
        post: contentPost,
      };

      let existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
      existingPosts.push(blogPost);
      localStorage.setItem("blogPosts", JSON.stringify(existingPosts));

      // Redirect to blog.html after saving the post
      location.href = "blog.html";
    } else {
      alert("Please fill in all the fields.");
    }

    // Clear form fields after submission
    formElement.reset();
  });
});
