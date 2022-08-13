$(function () {
  let bg = $('#bg');
  let wd = $(window).width();
  wd > 768 ? bg.attr('src', './assets/bg.jpg') : bg.attr('src', './assets/bg-sm.jpg');
});
