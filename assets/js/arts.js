
let slideIndexes = {
  "2D": 1,
  "pixel": 1,
  "texture": 1,
  "vfx": 1
};

function showSlides(n, type) {
  let slides = document.getElementsByClassName("slide-" + type);
  if (n > slides.length) {
    slideIndexes[type] = 1;
  }
  if (n < 1) {
    slideIndexes[type] = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexes[type] - 1].style.display = "block";
}

function moveSlides(n, type) {
  showSlides(slideIndexes[type] += n, type);
}

// Initialize sliders
document.addEventListener("DOMContentLoaded", function() {
  showSlides(1, "2D");
  showSlides(1, "pixel");
  showSlides(1, "texture");
  showSlides(1, "vfx");
});

