'use strict';

//filtering projects
//when click each button, it shows only related projects

//1. addeventlistener to button
//2.filter and match projects

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const category = document.querySelectorAll('.category');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (e) => {
  const filter = e.target.dataset.categories;

  if (filter == null) return;

  handleActiveSelection(e.target);
  filterProjects(filter);

  //animation
  projectsContainer.classList.add('anim-out');
  setTimeout(() => {
    projectsContainer.classList.remove('anim-out');
  }, 250);
});

function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  projects.forEach((project) => {
    if (filter === 'all' || project.dataset.type === filter) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}
