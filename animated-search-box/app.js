// Select elements
const searchIcon = document.querySelector(".search-icon");
const closeIcon = document.querySelector(".close-icon");
const searchWrapper = document.querySelector(".search-wrapper");

// Open search box
searchIcon.addEventListener("click", () => {
  searchWrapper.classList.add("active");
  closeIcon.classList.remove("hidden");
});

// Close search box
closeIcon.addEventListener("click", () => {
  searchWrapper.classList.remove("active");
  closeIcon.classList.add("hidden");
});
