const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

var loader = document.getElementById('preloader');

window.addEventListener('load', function () {
  loader.style.display = 'none';
});
