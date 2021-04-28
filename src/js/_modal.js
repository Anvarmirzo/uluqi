/* MODALS */
let priceModal = document.querySelector('.price-modal-wrapper');
let allModals = document.querySelectorAll('.modal-wrapper');

/* MODAL BTNS */
const showPriceBtn = document.querySelectorAll('.show-price');

/* MODAL CLOSE BTN*/
const closeModal = document.querySelectorAll('.close-modal-btn');

/* SHOW PRICE OPEN EVENT */
showPriceBtn.forEach((element) => {
  element.addEventListener('click', function (e) {
    allModals.forEach(function (item) {
      item.classList.add('modal-visible');
    });
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
