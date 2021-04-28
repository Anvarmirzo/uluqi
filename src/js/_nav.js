// ********** close links ************
const navToggle = document.querySelector('.burger__btn');
const linksContainer = document.querySelector('.links-container');
const phoneContainer = document.querySelector('.phone-wrapper');

navToggle.addEventListener('click', function (e) {
  linksContainer.classList.toggle('d-lg-none');
  phoneContainer.classList.toggle('d-lg-none');
  if (document.body.style.overflow == 'hidden') {
    document.body.style.overflow = 'visible';
  } else {
    document.body.style.overflow = 'hidden';
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById('nav');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
});

// ********** smooth scroll ************
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
  $('html').animate(
    {
      scrollTop:
        $($(this).addClass('active').attr('href')).offset().top -
        $('#nav').innerHeight(),
    },
    800
  );
  $('.header-top-menu a').removeClass('active');
});

$('.header-bottom-menu').on('click', 'a', function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 800);
});
$('.to-top-btn').on('click', function (event) {
  event.preventDefault();
  var id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 600);
});
