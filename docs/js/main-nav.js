const mainNav = document.querySelector('.main-nav');
const navToogle = mainNav.querySelector('.main-nav__toogle');

mainNav.classList.remove('main-nav--nojs');

navToogle.addEventListener('click', ()=> {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
  }
});
