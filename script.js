// ==========================================================================
// Pet Clínica Amigo Fiel — interações da interface
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Header: sombra ao rolar ---------- */
  const header = document.getElementById('header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Menu mobile ---------- */
  const menuToggle = document.getElementById('menu-toggle');
  const navMobile = document.getElementById('nav-mobile');

  menuToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Animações de entrada (fade-up discreto) ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in-view'));
  }

  /* ---------- Botão flutuante do WhatsApp ---------- */
  const whatsFloat = document.getElementById('whats-float');
  const toggleFloat = () => {
    whatsFloat.classList.toggle('visible', window.scrollY > 400);
  };
  toggleFloat();
  window.addEventListener('scroll', toggleFloat, { passive: true });

});
