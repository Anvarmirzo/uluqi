let partnerSwiper = new Swiper('.partners-slider .swiper-container', {
  speed: 3000,
  freeMode: true,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 1,
    enabled: true,
    waitForTransition: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 7,
    },
  },
});
