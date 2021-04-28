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
  ; // ********** close links ************

  var navToggle = document.querySelector('.burger__btn');
  var linksContainer = document.querySelector('.links-container');
  navToggle.addEventListener('click', function (e) {
    linksContainer.classList.toggle('d-lg-none');

    if (document.body.style.overflow == 'hidden') {
      document.body.style.overflow = 'visible';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }); // ********** fixed navbar ************

  var navbar = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    var scrollHeight = window.pageYOffset;
    var navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
      navbar.classList.add('fixed-nav');
    } else {
      navbar.classList.remove('fixed-nav');
    }
  }); // ********** smooth scroll ************
  // select links

  var scrollLinks = document.querySelectorAll('.header-menu li a');
  scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var id = e.currentTarget.getAttribute('href').slice(1);
      var element = document.getElementById(id); // calculate the heights

      var navHeight = navbar.getBoundingClientRect().height;
      var containerHeight = linksContainer.getBoundingClientRect().height;
      var fixedNav = navbar.classList.contains('fixed-nav');
      var position = element.offsetTop - navHeight;

      if (!fixedNav) {
        position -= navHeight;
      }

      if (navHeight > 82) {
        position += containerHeight;
      }

      window.scrollTo({
        left: 0,
        top: position
      }); // linksContainer.style.height = 0;
    });
  });
  ;
});