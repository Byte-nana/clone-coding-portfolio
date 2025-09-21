'use strict';

//filtering projects
//when click each button, it shows only related projects

//1. addeventlistener to button
//2.filter and match projects

const categories = document.querySelector('.categories');
const project = document.querySelectorAll('.project');

categories.addEventListener('click', (e) => {
  const filter = e.target.dataset.categories;

  if (filter == null) return;

  project.forEach((project) => {
    if (filter === 'all' || project.dataset.type === filter) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
});
