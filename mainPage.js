document.addEventListener('DOMContentLoaded', function() {
    const planetLinks = document.querySelectorAll('.planet-link');
    
    planetLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
       
        this.classList.toggle('clicked');
      });
    });
  });
  