// Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
  }, { threshold: 0.1 });
  reveals.forEach(r => obs.observe(r));

  // Animate accuracy bars on scroll
  const bars = document.querySelectorAll('.accuracy-fill');
  const barObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        const w = e.target.style.width;
        e.target.style.width = '0';
        setTimeout(() => { e.target.style.width = w; }, 100);
      }
    });
  }, { threshold: 0.5 });
  bars.forEach(b => barObs.observe(b));