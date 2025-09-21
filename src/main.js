'use strict';

// Apply dark styling for header when scroll
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});

//Home section fade-out
// 1. wrapped innerContent with div -> simplier
// 2. get each elements
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Arrow-up fade-out
const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = '1';
  } else {
    arrowUp.style.opacity = '0';
  }
});

// hamburger bar for mobile screen (less than 768px)
// 1. bar - toggle(버튼 누르면 header menu display block으로 바꾸기)
const headerToggle = document.querySelector('.header__toggle');
const headerMenu = document.querySelector('.header__menu');

headerToggle.addEventListener('click', () => {
  headerMenu.classList.toggle('open');
});

// 2. item click -> move to that section -> disappear menubar
headerMenu.addEventListener('click', () => {
  headerMenu.classList.remove('open');
});
