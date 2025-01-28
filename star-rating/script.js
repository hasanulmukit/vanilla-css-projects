// Select all star icons
const stars = document.querySelectorAll(".stars i");
// Select the rating text
const ratingText = document.querySelector(".rating-text");

// Array of rating descriptions
const ratingDescriptions = [
  "Very Poor",
  "Poor",
  "Average",
  "Good",
  "Excellent",
];

// Add click events to stars
stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    // Highlight clicked star and preceding stars
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
    // Update rating text
    ratingText.textContent = `You rated: ${ratingDescriptions[index1]}`;
  });
});
