document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.mobile-only');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});
