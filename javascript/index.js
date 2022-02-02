'use strict';
const btn = document.querySelector('.nav-hamburger');
const menu = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
  const visibility = menu.getAttribute('data-visible');

  visibility === 'false'
    ? (menu.setAttribute('data-visible', 'true'),
      btn.setAttribute('data-active', 'true'))
    : (menu.setAttribute('data-visible', 'false'),
      btn.setAttribute('data-active', 'false'));
});

document.querySelectorAll('.menu-item').forEach((e) =>
  e.addEventListener('click', () => {
    menu.setAttribute('data-visible', 'false');
    btn.setAttribute('data-active', 'false');
  }),
);
