// script.js - small interactivity to match reference behavior

document.addEventListener('DOMContentLoaded', () => {
    // set copyright year
    document.getElementById('copyright-year').textContent = new Date().getFullYear();
  
    // progress bar scroll indicator
    const progress = document.getElementById('progress');
    window.addEventListener('scroll', () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const pct = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;
      progress.style.width = pct + '%';
    });
  
    // smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
      });
    });
  
    // "Say Hello" CTA opens mail client
    const sayBtn = document.getElementById('say-hello');
    if (sayBtn) {
      sayBtn.addEventListener('click', () => {
        window.location.href = 'mailto:jafarshaik7866@gmail.com?subject=Hello%20Jafar';
      });
    }
  
    // lazy add 'visible' to sections as they enter viewport (similar reveal animation)
    const revealTargets = document.querySelectorAll('section');
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
        }
      });
    }, {threshold: 0.12});
  
    revealTargets.forEach(s => io.observe(s));
  
    // small canvas noise/fill (optional visual, non-blocking)
    const canvas = document.getElementById('bg-canvas');
    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext('2d');
      // draw subtle vertical gradient like reference
      const g = ctx.createLinearGradient(0,0,0,canvas.height);
      g.addColorStop(0,'rgba(7,12,22,0.02)');
      g.addColorStop(1,'rgba(7,12,22,0.00)');
      ctx.fillStyle = g;
      ctx.fillRect(0,0,canvas.width,canvas.height);
    }
  });
  