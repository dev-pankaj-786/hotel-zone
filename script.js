const toggleButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".mobile-header");

toggleButton.addEventListener("click", () => {
  nav.classList.toggle("open");

  toggleButton.classList.toggle("open");
});

// slider-js
(function () {
  const track = document.querySelector(".clients__track");
  const slides = Array.from(track.children);
  const prevButton = document.querySelector(".clients__control--prev");
  const nextButton = document.querySelector(".clients__control--next");

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.classList.add("clone");
  lastClone.classList.add("clone");

  // Append/prepend
  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  let slideWidth = slides[0].getBoundingClientRect().width;
  let currentIndex = 0;

  function setSlidePositions() {
    slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + "px";
    });
  }
  setSlidePositions();
  window.addEventListener("resize", setSlidePositions);

  function moveToSlide(index) {
    track.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
  }

  prevButton.addEventListener("click", () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    moveToSlide(newIndex);
  });
  nextButton.addEventListener("click", () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    moveToSlide(newIndex);
  });

  setInterval(() => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    moveToSlide(newIndex);
  }, 3000);
})();
