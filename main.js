// ********************
// Hamburger Menu
// *********************
const menu = document.querySelector(".menu");
      const close = document.querySelector(".close");
      const nav = document.querySelector(".nav");

      menu.addEventListener("click", () => {
        nav.classList.add("open-nav");
      });

      close.addEventListener("click", () => {
        nav.classList.remove("open-nav");
      });

// ********************
// /Hamburger Menu
// *********************

// ********************
// Mobile Image Carousel
// *********************

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

// ********************
// /Mobile Image Carousel
// *********************