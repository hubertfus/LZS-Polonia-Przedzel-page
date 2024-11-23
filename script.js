document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const navLinks = document.getElementById('navLinks');
  
    menuToggle.addEventListener('click', function() {
      navLinks.classList.add('active');
    });
  
    closeMenu.addEventListener('click', function() {
      navLinks.classList.remove('active');
    });
  
    document.addEventListener('click', function(event) {
      const isClickInsideNav = navLinks.contains(event.target);
      const isClickOnMenuToggle = menuToggle.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnMenuToggle && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        navLinks.classList.remove('active');
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    {const animateOnScroll = function() {
      const elements = document.querySelectorAll('.news-item, .player, .gallery-item');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
  
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add('animate');
        }
      });
    };
  
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    const animatedElements = document.querySelectorAll(".animate-slide");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });
  
    animatedElements.forEach((el) => observer.observe(el));}
});