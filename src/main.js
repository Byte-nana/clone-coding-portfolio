// Apply dark styling for header when scroll
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }

  //   const y = scrollY;
  //   y > headerHeight
  //     ? (header.style.backgroundColor = 'var(--color-primary)')
  //     : (header.style.backgroundColor = 'transparent');
});
