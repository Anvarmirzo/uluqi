$('.catalog .col-lg-4').hide().slice(0, 6).show();
$('.show-all-btn').on('click', function (e) {
  e.preventDefault();
  $('.catalog .col-lg-4:hidden').slice(0, 2).slideDown();
  if ($('.catalog .col-lg-4:hidden').length == 0) {
    $('.show-all-btn').text('').addClass('noContent');
  }
});
