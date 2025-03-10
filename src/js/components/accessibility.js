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
    updateAccessibility(a11yMd, 1270);
    updateAccessibility(a11yLg, 1440);

    updateAccessibility(a11yXsInverse, 1, true);
    updateAccessibility(a11ySmInverse, 769, true);
    updateAccessibility(a11yMdInverse, 1025, true);
    updateAccessibility(a11yLgInverse, 1271, true);
  };

  setTimeout(handleResize, 100);

  window.addEventListener('resize', handleResize);

  // Tableau
  const cmsContentTables = document.querySelectorAll('.cms-content table');
  cmsContentTables.forEach(table => {
    const rows = table.querySelectorAll('tr');
    rows.forEach(row => {
      const headers = row.querySelectorAll('th');
      if (headers.length > 1) {
        headers.forEach(th => {
          th.setAttribute('scope', 'col');
        });
      } else if (headers.length === 1 && row.firstElementChild.tagName === 'TH') {
        headers[0].setAttribute('scope', 'row');
      }
    });
  });
  
  // Br
  const cmsContentBr = document.querySelectorAll('.cms-content br');
  if (cmsContentBr.length > 0) {
    cmsContentBr.forEach(br => {
      br.setAttribute('aria-hidden', 'true');
    });
  }

  // Figure
  const cmsContentFigure = document.querySelectorAll('figure');
  if (cmsContentFigure.length > 0) {
    cmsContentFigure.forEach(figure => {
      const figcaption = figure.querySelector('figcaption');
      figure.setAttribute('role', 'figure');
      if (figcaption) {
        figure.setAttribute('aria-label', figcaption.textContent);
      }
    });
  }

  // Label required
  const cmsContentLabelRequired = document.querySelectorAll('label.required');
  if (cmsContentLabelRequired.length > 0) {
    cmsContentLabelRequired.forEach(label => {
      label.textContent += ' *';
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

  /* Remove all empty paragraphs ( not required but recommended ) */
  const paragraphs = document.querySelectorAll('.cms-content p');
  if( paragraphs.length > 0 ){
    paragraphs.forEach((p) => {
        if (!p.textContent.trim()) {
            p.remove();
        }
    });
  }

  /* Show/Hide video's textual transcription */
  const transcriptionBtns = document.querySelectorAll('.btn-transcription');
  if (transcriptionBtns.length > 0) {
    transcriptionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        
        if (content) {
          if (content.style.display === 'none' || !content.style.display) {
            content.slideDown();
            btn.setAttribute('aria-expanded', 'true');
            btn.querySelector('.show').setAttribute('aria-hidden', 'true');
            btn.querySelector('.hide').setAttribute('aria-hidden', 'false');
          } else {
            content.slideUp();
            btn.setAttribute('aria-expanded', 'false');
            btn.querySelector('.show').setAttribute('aria-hidden', 'false');
            btn.querySelector('.hide').setAttribute('aria-hidden', 'true');
          }
        }
      });
    });
  }

  /* Add role and aria-label to figures */
  const figures = document.querySelectorAll('figure');
  if (figures.length > 0) {
    figures.forEach(figure => {
      const figcaption = figure.querySelector('figcaption');
      figure.setAttribute('role', 'figure');
      if (figcaption && figcaption.textContent.trim()) {
        figure.setAttribute('aria-label', figcaption.textContent.trim());
      }
    });
  }

  /* Focus trap for each .dropdown */
  const dropdowns = document.querySelectorAll('.dropdown');
  if (dropdowns.length > 0) {
    dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('.btn.dropdown-toggle');
      const menu = dropdown.querySelector('.dropdown-menu');
      const focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';
      const focusableElements = menu.querySelectorAll(focusableElementsString);
      const firstFocusableElement = focusableElements[0];
      const lastFocusableElement = focusableElements[focusableElements.length - 1];

      button.addEventListener('click', () => {
        setTimeout(() => {
          if (menu.classList.contains('show')) {
            firstFocusableElement.focus();
          }
        }, 100);
      });

      menu.addEventListener('keydown', (e) => {
        const isTabPressed = (e.key === 'Tab' || e.keyCode === 9);
        const isEscapePressed = (e.key === 'Escape' || e.keyCode === 27);
        if (isEscapePressed) {
          e.preventDefault();
          button.click();
          button.focus();
          return;
        }

        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
              lastFocusableElement.focus();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
              firstFocusableElement.focus();
          }
        }
      });
    });
  }
}