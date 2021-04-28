$(document).ready(function () {
  // 'use strict';
  @@include('check-webp.js');
  @@include('_swiper-config.js');
  @@include('_nav.js');
  @@include('_load-more.js');
  $('.subdivisions__content').hide().slice(0, 6).show();
  $('.show-all-btn').on('click', function (e) {
    e.preventDefault();
    $('.subdivisions__content:hidden').slice(0, 4).slideDown();
    if ($('.subdivisions__content:hidden').length == 0) {
      $('.show-all-btn').text('').addClass('noContent');
    }
  });
});
