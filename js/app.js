document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Optional: stop observing once it fires
        // observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Select all elements to animate
  const animatedElements = document.querySelectorAll('.fade-in-up, .scroll-reveal');
  animatedElements.forEach(el => observer.observe(el));

  // Handle form submission simply
  const roiForm = document.getElementById('roiForm');
  if(roiForm) {
    roiForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = roiForm.querySelector('button');
      const originalText = btn.textContent;
      btn.textContent = 'Request Confirmed!';
      btn.style.backgroundColor = 'var(--color-accent-secondary)'; // Turn cyan on success
      
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.backgroundColor = 'var(--color-accent-primary)';
        roiForm.reset();
      }, 3000);
    });
  }

  // AEO natural interaction
  const detailsItems = document.querySelectorAll('.faq-item');
  detailsItems.forEach(item => {
    item.addEventListener('click', () => {
      // Accordion behavior (close others)
      detailsItems.forEach(otherItem => {
        if(otherItem !== item) {
          otherItem.removeAttribute('open');
        }
      });
    });
  });
});
