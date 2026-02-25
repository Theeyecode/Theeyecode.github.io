// ── EmailJS Init ──
emailjs.init("fI_zwNG12vU7It9zf");

// ── Form submission ──
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  btn.textContent = 'Sending...';
  btn.disabled = true;

  emailjs.send("service_dc0h1mq", "template_hopouep", {
    name: name,
    email: email,
    message: message,
    title: message.substring(0, 60)
  })
  .then(() => {
    btn.textContent = '✓ Message Sent';
    btn.style.background = '#4ac9a0';
    this.reset();
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      btn.disabled = false;
    }, 4000);
  }, (error) => {
    console.error('Failed to send:', error);
    btn.textContent = 'Failed — Try Again';
    btn.style.background = '#e05555';
    btn.disabled = false;
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
    }, 4000);
  });
});

// ── Smooth scrolling ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // close mobile menu if open
      document.getElementById('mobileMenu').classList.remove('open');
    }
  });
});

// ── Mobile menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// ── Navbar scroll effect ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(10,10,10,0.97)';
  } else {
    navbar.style.background = 'rgba(10,10,10,0.85)';
  }
});

// ── Reveal on scroll ──
const reveals = document.querySelectorAll('.reveal, .project-card, .mobile-card, .timeline-item, .project-featured');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // apply to cards that don't have the reveal class
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

// Apply initial hidden state and observe
document.querySelectorAll('.project-card, .mobile-card, .timeline-item, .project-featured, .skills-block').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

reveals.forEach(el => observer.observe(el));

// ── Color the TL tags dynamically ──
document.querySelectorAll('.tl-tag').forEach(tag => {
  tag.setAttribute('data-type', tag.textContent.trim());
});

// ── Staggered card animations ──
document.querySelectorAll('.projects-grid .project-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.07}s`;
});
document.querySelectorAll('.mobile-grid .mobile-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.07}s`;
});
