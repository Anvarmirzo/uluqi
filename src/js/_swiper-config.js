/* Partner Swiper */
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
/* Stuff Swiper */
let stuffSwiper = new Swiper('.staff .swiper-container', {
  spaceBetween: 30,
  loop: true,
  centerMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
/* Certificates Swiper */
let certificatesSwiper = new Swiper('.certificates .swiper-container', {
  spaceBetween: 10,
  loop: false,
  centerMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
