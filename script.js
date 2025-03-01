// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function slideLeft() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
}

function slideRight() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  });
}

// Country Dropdown Modal
function openCountryDropdown() {
  document.getElementById('countryModal').style.display = 'flex';
}

function closeCountryDropdown() {
  document.getElementById('countryModal').style.display = 'none';
}

// Language Dropdown Modal
function openLanguageDropdown() {
  document.getElementById('languageModal').style.display = 'flex';
}

function closeLanguageDropdown() {
  document.getElementById('languageModal').style.display = 'none';
}

function changeLanguage(lang) {
  // Add logic to change website language
}
