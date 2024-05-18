function navigateTo(sectionId) {
  // Hide all sections
  document.querySelectorAll("section").forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected section
  document.getElementById(sectionId).classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  // Fetch blog posts from your backend or CMS
  fetch("https://api.example.com/blog-posts?category=technology")
    .then((response) => response.json())
    .then((data) => {
      // Display blog posts
      displayBlogPosts(data);
    })
    .catch((error) => {
      console.error("Error fetching blog posts:", error);
    });
});

function displayBlogPosts(posts) {
  const blogPostsContainer = document.getElementById("blog-posts");

  // Clear previous content
  blogPostsContainer.innerHTML = "";

  // Loop through each blog post and create HTML elements to display them
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("blog-post");

    const titleElement = document.createElement("h2");
    titleElement.textContent = post.title;

    const contentElement = document.createElement("p");
    contentElement.textContent = post.content;

    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);

    blogPostsContainer.appendChild(postElement);
  });
}
