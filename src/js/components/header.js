/**
 * Header Fix
 * @description Adds header-fix class to body if header-fix-wrap exists
 */
export const headerFix = () => {
  const headerFixWrap = document.querySelector('.header-fix-wrap');
  if (headerFixWrap) {
    document.body.classList.add('header-fix');
  }
}

/**
 * Menu mobile button
 * @description Handles mobile menu button functionality and focus trap
 */
export const menuMobileBtn = () => {
  const btnMenu = document.querySelectorAll('.btn-menu');
  
  btnMenu.forEach(btn => {
    const toggleMenu = () => {
      const headerWrap = document.querySelector('.header-wrap');
      const headerBlock = document.querySelector('.header-block');
      const headerNav = document.querySelector('.header-nav');
      const html = document.documentElement;
      const body = document.body;

      // Toggle classes
      btn.classList.toggle('clicked');
      headerWrap.classList.toggle('active');
      html.classList.toggle('overflow');
      body.classList.toggle('overflow');
      headerBlock.classList.toggle('active');
      headerNav?.classList.toggle('active');

      // Reset child menus
      document.querySelectorAll('.header-nav>ul>li.menu-item-has-children')
        .forEach(child => child.classList.remove('active'));

      // Handle focus trap
      if (headerBlock.classList.contains('active')) {
        const focusableElements = headerBlock.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        firstFocusable.focus();

        headerBlock.addEventListener('keydown', e => {
          const isTabKey = e.key === 'Tab';
          const isEscapeKey = e.key === 'Escape';

          if (isEscapeKey) {
            toggleMenu();
            btn.focus();
            return;
          }

          if (!isTabKey) return;

          if (e.shiftKey && document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          } else if (!e.shiftKey && document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        });
      }
    };

    btn.addEventListener('click', toggleMenu);
  });
}

/**
 * Header menu mobile
 * @description Handles mobile menu functionality
 */
export const menuMobile = () => {
  if (window.innerWidth >= 1280) return;

  const headerNav = document.querySelectorAll('.menu-item-has-children');
  headerNav.forEach(nav => {
    const subMenu = nav.querySelector('ul');
    if (!subMenu) return;

    // Add title to submenu
    const parentLink = nav.querySelector('a');
    const title = document.createElement('li');
    title.classList.add('subnav-title');
    title.setAttribute('aria-hidden', 'true'); 
    title.setAttribute('tabindex', '-1');
    title.textContent = parentLink.textContent;
    subMenu.prepend(title);

    // Add back button
    const backBtn = document.createElement('button');
    backBtn.type = 'button';
    backBtn.className = 'btn btn-link btn-nav-back btn-full';
    const backText = document.querySelector('.btn-back-text');
    if (backText) {
      backBtn.textContent = backText.textContent;
    }

    const backItem = document.createElement('li');
    backItem.className = 'back-item';
    backItem.appendChild(backBtn);
    subMenu.prepend(backItem);

    // Handle back button click
    backBtn.addEventListener('click', e => {
      e.preventDefault();
      nav.classList.remove('active');
      const parentLink = nav.querySelector('a');
      if (parentLink) {
        parentLink.focus();
      }
    });
  });

  // Handle parent menu clicks 
  const parentMenuLinks = document.querySelectorAll('.header-nav>ul>li.menu-item-has-children>a');
  parentMenuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const parent = link.parentElement;
      const subMenu = link.nextElementSibling;
      
      // Toggle active states
      parent.classList.toggle('active');
      if (subMenu) {
        subMenu.classList.toggle('active-sub-menu');
      }
    });
  });
}

/**
 * Menu accessibility
 * @description Handles menu accessibility features
 */
export const menuAccessibility = () => {
  const menuItems = document.querySelectorAll('.menu-item-has-children');
  if (!menuItems.length) return;

  // Handle menu buttons
  document.querySelectorAll('.menu-item-has-children > a[href="#"]')
    .forEach(button => {
      const handleButtonInteraction = (event, isKeyboard = false) => {
        event.preventDefault();
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        
        if (isKeyboard) {
          button.parentElement.classList.toggle('active');
          const firstFocusable = button.nextElementSibling?.querySelector(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          setTimeout(() => firstFocusable?.focus(), 200);
        }
      };

      button.addEventListener('click', e => handleButtonInteraction(e));
      button.addEventListener('keydown', e => {
        if (e.key === 'Enter') handleButtonInteraction(e, true);
      });
    });

  // Handle submenus
  document.querySelectorAll('.sub-menu').forEach(subMenu => {
    const focusableElements = subMenu.querySelectorAll(
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    subMenu.addEventListener('keydown', e => {
      const isTab = e.key === 'Tab';
      const isEscape = e.key === 'Escape';

      if (isEscape) {
        e.preventDefault();
        const parentButton = subMenu.previousElementSibling;
        if (parentButton) {
          parentButton.setAttribute('aria-expanded', 'false');
          parentButton.focus();
          console.log(parentButton);
          subMenu.parentElement.classList.remove('active');
        }
        return;
      }

      if (!isTab) return;

      if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    });

    const parentButton = subMenu.previousElementSibling;
    if (parentButton) {
      parentButton.addEventListener('click', () => {
        setTimeout(() => {
          if (subMenu.classList.contains('show')) {
            firstFocusable?.focus();
            firstFocusable?.classList.remove('active');
          }
        }, 100);
      });
    }
  });
}
