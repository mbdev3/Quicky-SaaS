$(function () {
  let bg = $('#bg');
  let wd = $(window).width();
  wd > 768 ? bg.attr('src', './src/assets/bg.jpg') : bg.attr('src', './src/assets/bg-sm.jpg');
});
