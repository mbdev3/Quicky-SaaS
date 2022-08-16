$(function () {
  let navElems = $('#navelems')[0];
  let button = $('#nav-toggle');
  let btn = $('#nav-toggle')[0];
  // const nav = document.getElementById('navelems');
  console.log(button);

  button.on('click', function () {
    btn.classList.toggle('open');
    navElems.classList.toggle('hidden');
    navElems.classList.toggle('flex');
    button.hasClass('open')
      ? $('#nav-toggle img:first-child').attr('src', './src/assets/close.png')
      : $('#nav-toggle img:first-child').attr('src', './src/assets/more.png');
  });
});
