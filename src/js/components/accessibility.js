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

  const a11yXs = document.querySelectorAll('.a11y-xs');
  const a11ySm = document.querySelectorAll('.a11y-sm');
  const a11yMd = document.querySelectorAll('.a11y-md');
  const a11yLg = document.querySelectorAll('.a11y-lg');

  const a11yXsInverse = document.querySelectorAll('.a11y-xs-inverse');
  const a11ySmInverse = document.querySelectorAll('.a11y-sm-inverse');
  const a11yMdInverse = document.querySelectorAll('.a11y-md-inverse');
  const a11yLgInverse = document.querySelectorAll('.a11y-lg-inverse');

  const updateAccessibility = (elements, breakpoint, inverse = false) => {
    elements.forEach((element) => {
      if ((inverse && window.innerWidth >= breakpoint) || (!inverse && window.innerWidth < breakpoint)) {
        element.removeAttribute('tabindex');
        element.removeAttribute('aria-hidden');
      } else {
        element.setAttribute('tabindex', '-1');
        element.setAttribute('aria-hidden', 'true');
      }
    });
  };

  const handleResize = () => {
    updateAccessibility(a11yXs, 768);
    updateAccessibility(a11ySm, 1024);
    updateAccessibility(a11yMd, 1280);
    updateAccessibility(a11yLg, 1440);

    updateAccessibility(a11yXsInverse, 0, true);
    updateAccessibility(a11ySmInverse, 768, true);
    updateAccessibility(a11yMdInverse, 1024, true);
    updateAccessibility(a11yLgInverse, 1280, true);
  };

  handleResize();

  window.addEventListener('resize', handleResize);

  // Tableau
  const cmsContentTableHeaders = document.querySelectorAll('.cms-content table th');
  if (cmsContentTableHeaders.length > 0) {
    cmsContentTableHeaders.forEach(th => {
      th.setAttribute('scope', 'col');
    });
  }



  // Focus Link
  if (document.querySelectorAll('html').length > 0) {
    const selectors = {
      container: 'html',
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
        document.querySelectorAll('.wpcf7-response-output').forEach(el => {
          el.removeAttribute('aria-hidden');
          el.setAttribute('role', 'alert');
          el.setAttribute('aria-live', 'polite');
        });
      }, false);
    });
  }

}