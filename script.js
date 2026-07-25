// ------------------------------------------------------------
// Revelado de secciones al hacer scroll
// ------------------------------------------------------------
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach((el) => revealObserver.observe(el));

// ------------------------------------------------------------
// Raíz decorativa: se "dibuja" a medida que el usuario avanza
// en la página, como las raíces de la tapa del libro.
// ------------------------------------------------------------
const rootPath = document.getElementById('rootPath');

if (rootPath) {
  const totalLength = rootPath.getTotalLength();
  rootPath.style.strokeDasharray = `${totalLength}`;
  rootPath.style.strokeDashoffset = `${totalLength}`;

  const updateRoot = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
    rootPath.style.strokeDashoffset = `${totalLength * (1 - progress)}`;
  };

  updateRoot();
  window.addEventListener('scroll', updateRoot, { passive: true });
  window.addEventListener('resize', updateRoot);
}
