function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }



  document.addEventListener('DOMContentLoaded', () => {
    ScrollReveal().reveal('#about', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 300
    });

    ScrollReveal().reveal('#experience', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        delay: 300
    });

    ScrollReveal().reveal('#projects', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 300
    });
});