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

// Prevent transition on load
document.body.classList.remove('js-stop-transition');
