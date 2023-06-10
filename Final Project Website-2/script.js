// Had to get help from chat gpt due to slides not working properly
const slideshowContainer = document.getElementById('slideshow');

// Get the sidebar elements (images) within the slideshow container
const sidebarElements = slideshowContainer.querySelectorAll('aside');

let currentSlideIndex = 0;

// Function to change the slide
function changeSlide() {
  sidebarElements.forEach((element) => {
    element.style.display = 'none';
  });

  // Show the current slide
  sidebarElements[currentSlideIndex].style.display = 'block';

  // Increment the slide index
  currentSlideIndex++;

  // Reset the slide index if it exceeds the number of slides which it shouldn't
  if (currentSlideIndex >= sidebarElements.length) {
    currentSlideIndex = 0;
  }
}

// Call the changeSlide function initially to display the first slide
changeSlide();

// Set the interval to change the slide every 3 seconds (3000 milliseconds)
setInterval(changeSlide, 3000);