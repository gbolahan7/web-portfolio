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

// Theme toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
  });
});


// Theme persist after reload
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});