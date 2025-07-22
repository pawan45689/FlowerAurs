//header

   let lastScrollTop = 0;
  const header = document.querySelector(".main-header");

  window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  });

// first carausel 
let currentIndex = 0;
const slides = document.querySelector(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const totalSlides = dots.length;

function moveToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

setInterval(autoSlide, 3000);

// second carausel
let currentIndex2 = 0;
const slides2 = document.querySelector(".carousel-slide2");
const dots2 = document.querySelectorAll(".dot2");
const totalSlides2 = dots2.length;

function moveToSlide2(index) {
  currentIndex2 = index;
  updateCarousel2();
}

function updateCarousel2() {
  slides2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
  dots2.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex2);
  });
}

function autoSlide2() {
  currentIndex2 = (currentIndex2 + 1) % totalSlides2;
  updateCarousel2();
}

setInterval(autoSlide2, 3000);
  // read more
   function toggleReadMore() {
    const wrapper = document.getElementById('readMoreWrapper');
    const content = document.getElementById('readMoreContent');
    const btn = wrapper.querySelector('.read-more-btn');

    wrapper.classList.toggle('expanded');
    content.classList.toggle('expanded');

    btn.textContent = content.classList.contains('expanded') ? 'Read Less' : 'Read More';
  }


