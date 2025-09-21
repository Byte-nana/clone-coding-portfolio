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
//1. wrapped innerContent with div -> simplier
//2. get each elements
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
