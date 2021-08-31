"use strict";

$(document).ready(function () {
  // 'use strict';
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
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
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
      nextEl: '.partners-second .swiper-button-next',
      prevEl: '.partners-second .swiper-button-prev'
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
  var phoneContainer = document.querySelector('.phone-wrapper');
  navToggle.addEventListener('click', function (e) {
    linksContainer.classList.toggle('d-lg-none');
    phoneContainer.classList.toggle('d-lg-none');

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

  $(window).on('scroll', function scrolled() {
    var scroll = $(this).scrollTop();
    $('.header-top-menu a').each(function () {
      var attr = $(this).attr('href');
      var position = $(attr).offset().top - 120;

      if (scroll >= position) {
        $('.header-top-menu a').removeClass('active');
        $(this).addClass('active');
      }
    });
  });
  $('.header-top-menu a').click(function (e) {
    e.preventDefault();
    $('html').animate({
      scrollTop: $($(this).addClass('active').attr('href')).offset().top - $('#nav').innerHeight()
    }, 800);
    $('.header-top-menu a').removeClass('active');
  });
  $('.header-bottom-menu').on('click', 'a', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 800);
  });
  $('.to-form-btn').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top - 90;
    $('body,html').animate({
      scrollTop: top
    }, 800);
  });
  $('.to-top-btn').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 600);
  });
  ;
  $('.catalog .col-lg-4').hide().slice(0, 6).show();
  $('.show-all-btn').on('click', function (e) {
    e.preventDefault();
    $('.catalog .col-lg-4:hidden').slice(0, 6).slideDown();

    if ($('.catalog .col-lg-4:hidden').length == 0) {
      $('.show-all-btn').text('').addClass('noContent');
    }
  });
  ;
  /* MODALS */

  var allModals = document.querySelectorAll('.modal-wrapper');
  var priceModal = document.querySelector('.price-modal-wrapper');
  var orderModal = document.querySelector('.order-modal-wrapper');
  var contactModal = document.querySelector('.contact-modal-wrapper');
  var goToPage = document.querySelector('.go-to-page');
  /* MODAL BTNS */

  var showPriceBtn = document.querySelectorAll('.show-price');
  var showOrderBtn = document.querySelectorAll('.show-order');
  var showContactBtn = document.querySelectorAll('.show-contact');
  /* MODAL CLOSE BTN*/

  var closeModal = document.querySelectorAll('.close-modal-btn');
  /* GLOBAL ELEMENTS */

  var bodyStyle = document.body.style;
  /* SHOW PRICE OPEN EVENT */

  showPriceBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      priceModal.classList.add('modal-visible');
      bodyStyle.overflow = 'hidden';
    });
  });
  /* SHOW ORDER OPEN EVENT */

  showOrderBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      orderModal.classList.add('modal-visible');
      bodyStyle.overflow = 'hidden';
    });
  });
  /* SHOW CONTACT OPEN EVENT */

  showContactBtn.forEach(function (element) {
    element.addEventListener('click', function (e) {
      contactModal.classList.add('modal-visible');
      bodyStyle.overflow = 'hidden';
    });
  });
  /* MODAL CLOSE EVENT */

  closeModal.forEach(function (element) {
    element.addEventListener('click', function (e) {
      allModals.forEach(function (item) {
        item.classList.remove('modal-visible');
        bodyStyle.overflow = 'initial';
      });
    });
  });
  goToPage.classList.add('modal-visible');
  ;
  AOS.init({
    once: true,
    offset: 20
  });
  ;
});