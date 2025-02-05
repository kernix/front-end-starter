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
      const elements = {
        headerWrap: document.querySelector('.header-wrap'),
        headerBlock: document.querySelector('.header-block'), 
        headerNav: document.querySelector('.header-nav'),
        html: document.documentElement,
        body: document.body
      };

      // Toggle states
      const isActive = !elements.headerBlock.classList.contains('active');
      
      btn.classList.toggle('clicked');
      elements.headerWrap.classList.toggle('active');
      elements.html.classList.toggle('overflow');
      elements.body.classList.toggle('overflow');
      elements.headerBlock.classList.toggle('active');
      elements.headerBlock.slideToggle();
      elements.headerNav?.classList.toggle('active');

      // Update aria-expanded
      btn.setAttribute('aria-expanded', isActive.toString());

      // Reset child menus
      document.querySelectorAll('.header-nav>ul>li.menu-item-has-children')
        .forEach(child => child.classList.remove('active'));

      // Handle focus trap when menu is active
      if (isActive) {
          const focusableElements = elements.headerBlock.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          );
          
          const firstFocusable = focusableElements[0];
          const lastFocusable = focusableElements[focusableElements.length - 1];

          firstFocusable?.focus();

          const handleKeydown = e => {
            const isTabKey = e.key === 'Tab';
            const isEscapeKey = e.key === 'Escape';

            // Check if any menu-item-has-children is active
            const hasActiveSubmenu = document.querySelector('.menu-item-has-children.active');
            
            if (isEscapeKey) {
              if (hasActiveSubmenu) {
                // If submenu is active, let submenu handle escape
                return;
              }
              btn.focus();
              btn.setAttribute('aria-expanded', 'false');
              btn.classList.remove('clicked');
              elements.headerBlock.slideUp();
              elements.headerBlock.classList.remove('active');
              return;
            }

            if (!isTabKey) return;

            if (hasActiveSubmenu) {
              return; // Disable focus trap if submenu is active
            }

            if (e.shiftKey && document.activeElement === firstFocusable) {
              e.preventDefault();
              lastFocusable?.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusable) {
              e.preventDefault(); 
              firstFocusable?.focus();
            }
          };

          elements.headerBlock.addEventListener('keydown', handleKeydown);
        
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
  if (window.matchMedia('(max-width: 1279px)').matches) {
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
    // Get all focusable elements including the back button
    const focusableElements = subMenu.querySelectorAll(
      'a[href]:not([aria-hidden="true"]), area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    let backBtn;

    if (window.matchMedia('(max-width: 1279px)').matches) {
      // Add title to submenu
      const parentLink = subMenu.previousElementSibling;
      const title = document.createElement('li');
      title.classList.add('subnav-title');
      title.setAttribute('aria-hidden', 'true'); 
      title.setAttribute('tabindex', '-1');
      title.textContent = parentLink.textContent;
      subMenu.prepend(title);

      // Create back button
      backBtn = document.createElement('button');
      backBtn.type = 'button';
      backBtn.className = 'btn btn-link btn-nav-back btn-full';
      const backText = document.querySelector('.btn-back-text');
      if (backText) {
        backBtn.textContent = backText.textContent;
      }

      // Add back button to start of submenu
      const backItem = document.createElement('li');
      backItem.className = 'back-item';
      backItem.appendChild(backBtn);
      subMenu.prepend(backItem);

      // Handle back button click
      backBtn.addEventListener('click', () => {
        const parentButton = subMenu.previousElementSibling;
        if (parentButton) {
          parentButton.setAttribute('aria-expanded', 'false');
          parentButton.focus();
          subMenu.parentElement.classList.remove('active');
          subMenu.classList.remove('active-sub-menu');
        }
      });
    }

    // Get updated focusable elements including new back button
    let allFocusableElements;
    if (window.matchMedia('(max-width: 1279px)').matches) {
      allFocusableElements = [
        backBtn,
        ...Array.from(focusableElements)
      ];
    }
    else {
      allFocusableElements = [
        ...Array.from(focusableElements)
      ];
    }
    
    const firstFocusable = allFocusableElements[0]; // Back button
    const lastFocusable = allFocusableElements[allFocusableElements.length - 1];

    subMenu.addEventListener('keydown', e => {
      const isTab = e.key === 'Tab';
      const isEscape = e.key === 'Escape';
      
      if (isEscape) {
        e.preventDefault();
        e.stopPropagation(); // Prevent header block from handling escape
        const parentButton = subMenu.previousElementSibling;
        if (parentButton) {
          parentButton.setAttribute('aria-expanded', 'false');
          parentButton.focus();
          subMenu.parentElement.classList.remove('active');
          subMenu.classList.remove('active-sub-menu');
        }
        return;
      }

      if (!isTab) return;

      // Trap focus within submenu
      if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    });

    // Focus first element when submenu opens
    const parentButton = subMenu.previousElementSibling;
    if (parentButton) {
      parentButton.addEventListener('click', () => {
        if (!subMenu.classList.contains('active-sub-menu')) {
          setTimeout(() => {
            firstFocusable?.focus();
          }, 100);
        }
      });
    }
  });
}
