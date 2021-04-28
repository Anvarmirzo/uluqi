// ********** close links ************
const navToggle = document.querySelector('.burger__btn');
const linksContainer = document.querySelector('.links-container');

navToggle.addEventListener('click', function (e) {
  linksContainer.classList.toggle('d-lg-none');
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
// select links
const scrollLinks = document.querySelectorAll('.header-menu li a');
scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navHeight;
    if (!fixedNav) {
      position -= navHeight;
    }
    if (navHeight > 82) {
      position += containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    // linksContainer.style.height = 0;
  });
});
