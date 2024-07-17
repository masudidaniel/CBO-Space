document.addEventListener('DOMContentLoaded', () => {
  const images = [
      'collection.jpeg', 
      'background2.jpg',
      'background3.jpg'
  ];

  let currentIndex = 0;

  function changeBackground() {
      currentIndex = (currentIndex + 1) % images.length;
      document.body.style.backgroundImage = `url('${images[currentIndex]}')`;
  }

  setInterval(changeBackground, 5000); // Change image every 5 seconds
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded");
    document.querySelectorAll('nav ul li a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    
    });
        
    });