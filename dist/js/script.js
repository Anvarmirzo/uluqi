"use strict";

document.addEventListener('DOMContentLoaded', function (event) {
  'use strict';
  /* function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function (support) {
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }else{
  document.querySelector('body').classList.add('no-webp');
  }
  });*/

  ;
  /* Partner Swiper */

  var partnerSwiper = new Swiper('.partners-slider .swiper-container', {
    speed: 3000,
    freeMode: true,
    loop: true,
    allowTouchMove: false,
    autoplay: {
      delay: 1,
      enabled: true,
      waitForTransition: false
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1200: {
        slidesPerView: 7
      }
    }
  });
  /* Stuff Swiper */

  var stuffSwiper = new Swiper('.staff .swiper-container', {
    spaceBetween: 30,
    loop: true,
    centerMode: true,
    navigation: {
      nextEl: '.staff .swiper-button-next',
      prevEl: '.staff .swiper-button-prev'
    },
    pagination: {
      el: '.staff .swiper-pagination',
      type: 'bullets'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      }
    }
  });
  /* Certificates Swiper */

  var certificatesSwiper = new Swiper('.certificates .swiper-container', {
    spaceBetween: 10,
    loop: false,
    centerMode: true,
    navigation: {
      nextEl: '.certificates .swiper-button-next',
      prevEl: '.certificates .swiper-button-prev'
    },
    pagination: {
      el: '.certificates .swiper-pagination',
      type: 'bullets'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      },
      991: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });
  /* Certificates Swiper */

  var feedbackSwiper = new Swiper('.feedback .swiper-container', {
    spaceBetween: 10,
    loop: false,
    centerMode: true,
    navigation: {
      nextEl: '.feedback .swiper-button-next',
      prevEl: '.feedback .swiper-button-prev'
    },
    pagination: {
      el: '.feedback .swiper-pagination',
      type: 'bullets'
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      576: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      },
      991: {
        slidesPerView: 2
      },
      1200: {
        slidesPerView: 3
      }
    }
  });
  /* Partners Second Swiper */

  var partnersSecondSwiper = new Swiper('.partners-second .swiper-container', {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    centerMode: true,
    navigation: {
      nextEl: '.feedback .swiper-button-next',
      prevEl: '.feedback .swiper-button-prev'
    },
    breakpoints: {
      320: {
        slidesPerView: 3
      },
      991: {
        slidesPerView: 4
      },
      1200: {
        slidesPerView: 4
      }
    }
  });
  ;
});