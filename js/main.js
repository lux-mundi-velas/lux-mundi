const whatsappNumber = '+553184206516';
const instagramUrl = 'https://www.instagram.com/luxmundi_velasday?utm_source=qr';

const getMessage = (element) => {
  return element.getAttribute('data-message') || 'Olá! Quero conversar com a Lux Mundi.';
};

const redirectToWhatsApp = (event) => {
  event.preventDefault();
  const message = getMessage(event.currentTarget);
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
};

const redirectToInstagram = (event) => {
  event.preventDefault();
  window.open(instagramUrl, '_blank', 'noopener,noreferrer');
};

const initRedirects = () => {
  document.querySelectorAll('.js-redirect').forEach((link) => {
    link.addEventListener('click', (event) => {
      const action = link.getAttribute('data-action');
      if (action === 'whatsapp') {
        redirectToWhatsApp(event);
      } else if (action === 'instagram') {
        redirectToInstagram(event);
      }
    });
  });
};

const initMenu = () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.header-menu');

  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  document.querySelectorAll('.header-menu a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
};

const initNewsletter = () => {
  const form = document.querySelector('#newsletter-form');
  const message = document.querySelector('#newsletter-message');

  if (!form || !message) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = form.querySelector('input[type="email"]');
    const email = input?.value?.trim();

    if (!email) {
      message.textContent = 'Por favor, informe um e-mail válido.';
      message.classList.remove('is-success', 'is-visible');
      message.classList.add('is-error', 'is-visible');
      return;
    }

    message.textContent = `Obrigado, ${email}! Você foi inscrito na nossa newsletter.`;
    message.classList.remove('is-error');
    message.classList.add('is-success', 'is-visible');
    form.reset();
  });
};

window.addEventListener('DOMContentLoaded', () => {
  initRedirects();
  initMenu();
  initNewsletter();
});
