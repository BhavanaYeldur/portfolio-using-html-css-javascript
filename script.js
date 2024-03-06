document.addEventListener("DOMContentLoaded", function () {
    // Navbar toggle functionality
    const navbarToggle = document.querySelector(".navbar-toggle");
    const navbarMenu = document.querySelector(".navbar-menu");
  
    navbarToggle.addEventListener("click", function () {
      navbarMenu.classList.toggle("active");
    });
  
    // Smooth scroll functionality
    const navLinks = document.querySelectorAll(".navbar a");
  
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector(".navbar").offsetHeight,
          behavior: "smooth",
        });
  
        navbarMenu.classList.remove("active");
      });
    });
  });
  