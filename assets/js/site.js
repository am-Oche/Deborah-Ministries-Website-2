/* Deborah Ufedejo Ministries — site interactions */
(function () {
  'use strict';

  // --- Nav scroll state
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 40) nav.classList.add('nav--scrolled');
      else nav.classList.remove('nav--scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Mobile menu
  const burger = document.querySelector('.nav__burger');
  const mobile = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu__close');
  if (burger && mobile) {
    burger.addEventListener('click', () => mobile.classList.add('is-open'));
    if (closeBtn) closeBtn.addEventListener('click', () => mobile.classList.remove('is-open'));
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('is-open')));
  }

  // --- Reveal on scroll
  const revealables = document.querySelectorAll('.reveal, .img-reveal');
  if ('IntersectionObserver' in window && revealables.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    revealables.forEach(el => io.observe(el));
  } else {
    revealables.forEach(el => el.classList.add('is-in'));
  }

  // --- Invitation form submission (persist to localStorage)
  const form = document.getElementById('invite-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      data.id = 'INV-' + Math.floor(100000 + Math.random() * 900000);
      data.status = 'New';
      data.created_at = new Date().toISOString();
      data.updated_at = data.created_at;
      const store = JSON.parse(localStorage.getItem('dum_invitations') || '[]');
      store.unshift(data);
      localStorage.setItem('dum_invitations', JSON.stringify(store));
      const success = document.getElementById('invite-success');
      const container = document.getElementById('invite-container');
      if (success && container) {
        container.style.display = 'none';
        success.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // --- Contact form (toy)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.style.display = 'none';
      const s = document.getElementById('contact-success');
      if (s) s.style.display = 'block';
    });
  }
})();
