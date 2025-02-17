
var blogPostsContainer = document.querySelector(".kun-posts_list");
var blogPosts = blogPostsContainer.querySelectorAll(".kun-posts_card");
var showMoreBtn = document.querySelector(".kun-posts_show-more");
var visiblePosts = 2; // Number of initially visible blog posts

// Function to toggle visibility of blog posts
function toggleBlogPosts() {
  for (var i = 0; i < blogPosts.length; i++) {
    if (i < visiblePosts) {
      blogPosts[i].style.display = "block";
    } else {
      blogPosts[i].style.display = "none";
    }
  }
}

// Initial setup
toggleBlogPosts();

// Event listener for "Show More" button click
showMoreBtn.addEventListener("click", function() {
  visiblePosts += 2; // Increase the number of visible posts
  toggleBlogPosts();

  // Hide the "Show More" button if all blog posts are visible
  if (visiblePosts >= blogPosts.length) {
    showMoreBtn.style.display = "none";
  }
});
