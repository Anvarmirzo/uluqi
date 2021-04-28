/* MODALS */
let allModals = document.querySelectorAll('.modal-wrapper');
let priceModal = document.querySelector('.price-modal-wrapper');
let orderModal = document.querySelector('.order-modal-wrapper');
let contactModal = document.querySelector('.contact-modal-wrapper');

/* MODAL BTNS */
const showPriceBtn = document.querySelectorAll('.show-price');
const showOrderBtn = document.querySelectorAll('.show-order');
const showContactBtn = document.querySelectorAll('.show-contact');

/* MODAL CLOSE BTN*/
const closeModal = document.querySelectorAll('.close-modal-btn');

/* GLOBAL ELEMENTS */
let bodyStyle = document.body.style;

/* SHOW PRICE OPEN EVENT */
showPriceBtn.forEach((element) => {
  element.addEventListener('click', function (e) {
    priceModal.classList.add('modal-visible');
    bodyStyle.overflow = 'hidden';
  });
});
/* SHOW ORDER OPEN EVENT */
showOrderBtn.forEach((element) => {
  element.addEventListener('click', function (e) {
    orderModal.classList.add('modal-visible');
    bodyStyle.overflow = 'hidden';
  });
});
/* SHOW CONTACT OPEN EVENT */
showContactBtn.forEach((element) => {
  element.addEventListener('click', function (e) {
    contactModal.classList.add('modal-visible');
    bodyStyle.overflow = 'hidden';
  });
});

/* MODAL CLOSE EVENT */
closeModal.forEach((element) => {
  element.addEventListener('click', function (e) {
    allModals.forEach(function (item) {
      item.classList.remove('modal-visible');
      bodyStyle.overflow = 'initial';
    });
  });
});
