document.addEventListener('DOMContentLoaded', () => {

  // ── Scroll Animations ──────────────────────────────
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fire once
      }
    });
  }, { threshold: 0.12 });

  // Supports both old class name (fade-in-up) and new (fade-in)
  document.querySelectorAll('.fade-in, .fade-in-up, .scroll-reveal').forEach(el => {
    observer.observe(el);
  });

  // ── Logo Ticker: pause on hover (handled in CSS) ───
  // No JS needed — CSS animation-play-state handles it.

});
