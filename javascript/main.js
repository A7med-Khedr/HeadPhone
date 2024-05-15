const menuBtn = document.querySelector(".nav-btn");
const menuBtnIcon = document.querySelector(".nav-btn i");
const navLinks = document.querySelector(".links");

console.log(menuBtn);
console.log(menuBtnIcon);
console.log(navLinks);

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-bars-staggered" : "fa-solid fa-bars"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");

  menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header_image .info-box", {
  duration: 1000,
  delay: 1500,
});

ScrollReveal().reveal(".prod-image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".prod-content", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});

ScrollReveal().reveal(".btn-1", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});

const swiperSection = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centerSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 30,
    depth: 250,
    modifier: 1,
    scale: 0.85,
    slideShadow: true,
    stretch: -100,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

ScrollReveal().reveal(".swiper", {
  ...scrollRevealOption,
  delay: 300,
  interval: 500,
});
