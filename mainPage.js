document.addEventListener('DOMContentLoaded', function() {
    const planetLinks = document.querySelectorAll('.planet-link');
    
    planetLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
       
        this.classList.toggle('clicked');
      });
    });
  });
  
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  