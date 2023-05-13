

const thumbsSwiper = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    
  });


let mySwiper = new Swiper('.mySwiper', {
  spaceBetween: 10,
  loop: true,
  grabCursor:true,
  slidesPerView: 'auto',
  thumbs:{
    swiper:thumbsSwiper,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
