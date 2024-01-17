let currentSlide = 0;

function showSlide() {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
  const totalSlides = document.querySelectorAll('.slide').length;
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide();
}

function prevSlide() {
  const totalSlides = document.querySelectorAll('.slide').length;
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide();
}

// Optionally, you can add automatic slideshow functionality:
// setInterval(nextSlide, 3000); // Slide changes every 3 seconds
