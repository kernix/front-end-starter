/**
 * Accessibility
 * @description This function adds accessibility features to the site.
 */

export const accessibility = () => {

  const modalFocus = document.querySelectorAll('.modal');
  modalFocus.forEach((modal) => {
    modal.addEventListener('shown.bs.modal', () => {
      if (document.querySelector('.dialog-off-canvas-main-canvas')) {
        document.querySelector('.dialog-off-canvas-main-canvas').setAttribute('aria-hidden', 'true');
      }
      const modalFocusClose = modal.querySelector('.btn-close');
      modalFocusClose.focus();
    });
    modal.addEventListener('hidden.bs.modal', () => {
      if (document.querySelector('.dialog-off-canvas-main-canvas')) {
        document.querySelector('.dialog-off-canvas-main-canvas').setAttribute('aria-hidden', 'false');
      }
    });
  });

  const accessMobiles = document.querySelectorAll('.access-mobile');
  const accessSmMobiles = document.querySelectorAll('.access-sm-mobile');

  accessMobiles.forEach((accessMobile) => {
    if (window.innerWidth < 768) {
      accessMobile.removeAttribute('tabindex');
      accessMobile.removeAttribute('aria-hidden');
    }
  });

  accessSmMobiles.forEach((accessSmMobile) => {
    if (window.innerWidth < 1024) {
      accessSmMobile.removeAttribute('tabindex');
      accessSmMobile.removeAttribute('aria-hidden');
    }
  });

  window.addEventListener('resize', () => {
    accessMobiles.forEach((accessMobile) => {
      if (window.innerWidth < 768) {
        accessMobile.removeAttribute('tabindex');
        accessMobile.removeAttribute('aria-hidden');
      } else {
        accessMobile.setAttribute('tabindex', '-1');
        accessMobile.setAttribute('aria-hidden', 'true');
      }
    });

    accessSmMobiles.forEach((accessSmMobile) => {
      if (window.innerWidth < 1024) {
        accessSmMobile.removeAttribute('tabindex');
        accessSmMobile.removeAttribute('aria-hidden');
      } else {
        accessSmMobile.setAttribute('tabindex', '-1');
        accessSmMobile.setAttribute('aria-hidden', 'true');
      }
    });
  });

  // Tableau
  const cmsContentTableHeaders = document.querySelectorAll('.cms-content table th');
  if (cmsContentTableHeaders.length > 0) {
    cmsContentTableHeaders.forEach(th => {
      th.setAttribute('scope', 'row');
    });
  }

  // Focus Link
  if (document.querySelectorAll('.html-core').length > 0) {
    const selectors = {
      container: '.html-core',
    };

    const classes = {
      containerHasFocus: 'html-focus',
    };

    const container = document.querySelector(selectors.container);
    const btn = document.querySelector(selectors.btn);

    // Add the focus class to the container if the keyboard
    // event is an element within the container
    document.addEventListener('keyup', (e) => {
      if (container.contains(e.target)) {
        container.classList.add(classes.containerHasFocus);
      } else {
        container.classList.remove(classes.containerHasFocus);
      }
    });

    // Remove the focus class on mouse click
    document.addEventListener('mousedown', (e) => {
      if (container.contains(e.target)) {
        container.classList.remove(classes.containerHasFocus);
      }
    });
  }

  /* Validation Events for changing response CSS classes */
  if (document.querySelectorAll('.wpcf7-response-output').length > 0) {
    const events = ['wpcf7invalid', 'wpcf7spam', 'wpcf7mailfailed', 'wpcf7mailsent'];
    events.forEach(event => {
      document.addEventListener(event, function () {
        $('.wpcf7-response-output').removeAttr('aria-hidden').attr('role', 'alert').attr('aria-live', 'polite');
      }, false);
    });
  }

}