/* MODALS */
let allModals = document.querySelectorAll('.modal-wrapper');
let priceModal = document.querySelector('.price-modal-wrapper');
let orderModal = document.querySelector('.order-modal-wrapper');

/* MODAL BTNS */
const showPriceBtn = document.querySelectorAll('.show-price');
const showOrderBtn = document.querySelectorAll('.show-order');
/* MODAL CLOSE BTN*/
const closeModal = document.querySelectorAll('.close-modal-btn');

/* SHOW PRICE OPEN EVENT */
showPriceBtn.forEach((element) => {
  element.addEventListener('click', function (e) {
    priceModal.classList.add('modal-visible');
  });
});
/* SHOW ORDER OPEN EVENT */
showOrderBtn.forEach((element) => {
  element.addEventListener('click', function (e) {
    orderModal.classList.add('modal-visible');
  });
});

/* MODAL CLOSE EVENT */
closeModal.forEach((element) => {
  element.addEventListener('click', function (e) {
    allModals.forEach(function (item) {
      item.classList.remove('modal-visible');
    });
  });
});
