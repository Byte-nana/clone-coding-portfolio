'use strict';

//구현 계획
// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
// 2. intersectionObserver를 사용해서 모든 섹션들을 관찰해야 한다.
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// 보여지는 섹션:
// -다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션을 선택
// -마지막 contact 섹션이 보여진다면, 그러면 가장 마지막 섹션을 선택한다.
// ?? 다음 섹션이 몇 퍼센트 들어왔을 때 다음 섹션 아이템으로 옮겨가나요?

const sectionsId = [
  '#home',
  '#about',
  '#skills',
  '#work',
  '#testimonial',
  '#contact',
];
const sections = sectionsId.map((id) => document.querySelector(id));
const navItems = sectionsId.map((id) =>
  document.querySelector(`[href="${id}"]`)
);

const visibleSections = sectionsId.map(() => false);
let activeNavItem = navItems[0];

const options = {
  rootMargin: '-20% 0px 0px 0px',
  threshold: [0, 0.98],
};
const observer = new IntersectionObserver(observerCallback, options);
sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
  //flag variable
  let selectLastOne;
  entries.forEach((entry) => {
    const index = sectionsId.indexOf(`#${entry.target.id}`);
    visibleSections[index] = entry.isIntersecting;

    selectLastOne =
      index === sectionsId.length - 1 &&
      entry.isIntersecting &&
      entry.intersectionRatio >= 0.95;
  });

  const navIndex = selectLastOne
    ? sectionsId.length - 1
    : findFirstIntersection(visibleSections);

  const navItem = navItems[navIndex];
  activeNavItem.classList.remove('active');
  activeNavItem = navItem;
  activeNavItem.classList.add('active');
}
function findFirstIntersection(intersections) {
  const index = intersections.indexOf(true);
  return index >= 0 ? index : 0;
}
