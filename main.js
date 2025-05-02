document.addEventListener('DOMContentLoaded', function() {
    
    const particles = document.querySelector('.particles');
    
    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
 
      const size = Math.random() * 5 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.1;
      const animationDuration = Math.random() * 20 + 10;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = opacity;
      particle.style.animationDuration = `${animationDuration}s`;
      
      particles.appendChild(particle);
      
      
      setTimeout(() => {
        particle.remove();
      }, animationDuration * 1000);
    }
    
    
    for (let i = 0; i < 30; i++) {
      createParticle();
    }
    
    
    setInterval(createParticle, 2000);
  });