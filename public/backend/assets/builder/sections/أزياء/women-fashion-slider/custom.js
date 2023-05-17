let mySlides = document.querySelectorAll(".mySwiper .swiper-slide");
let counters = document.querySelectorAll(".slideItem-number");
let imageBg = document.querySelector(".mySwiper .mySwiper__sliderItem-container2")
let swiperLenght = mySlides.length;

if(window.innerWidth < 480) imageBg.style.backgroundSize = window.innerWidth;

let mySwiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".mySwiper-next",
    prevEl: ".mySwiper-prev",
  },
  
});

