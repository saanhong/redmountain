// Back to top button
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  btn.classList.toggle('visible', window.scrollY > 600);
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
