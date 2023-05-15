let mySlides = document.querySelectorAll(".mySwiper .swiper-slide");
let counter = document.querySelector(".slideItem-number");
let swiperLenght = mySlides.length;

let mySwiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  rewind: true,
  grabCursor: true,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".mySwiper-next",
    prevEl: ".mySwiper-prev",
  },
});

mySwiper.on("slideChange", function () {
  sliderTracker(mySwiper);
});
function sliderTracker(swiper) {
  let index = swiper.activeIndex + 1;
  counter.innerText = index;
}
counter.innerText = swiperLenght;
