/**
 * Header Fix
 * @description 
 */
export const headerFix = () => {
  // Add class body if header fix
  if (document.querySelectorAll('.header-fix-wrap').length > 0) {
    document.querySelector('body').classList.add('header-fix');
  }
}


/**
 * Menu mobile button
 * @description  
 */
export const menuMobileBtn = () => {

  // Menu
  const btnMenu = document.querySelectorAll('.btn-menu');
  btnMenu.forEach((thisBtnMenu) => {
    thisBtnMenu.addEventListener('click', (event) => {
      thisBtnMenu.classList.toggle('clicked');
      document.querySelector('.header-wrap').classList.toggle('active');
      document.querySelector('html').classList.toggle('overflow');
      document.querySelector('body').classList.toggle('overflow');
      document.querySelector('.header-block').classList.toggle('active');
      const headerNav = document.querySelector('.header-nav');
      if (headerNav) {
        headerNav.classList.toggle('active');
        const firstLink = headerNav.querySelector('a');
        if (firstLink) {
          firstLink.focus();
        }
      }
      const headerNavChidren = document.querySelectorAll('.header-nav>ul>li.menu-item-has-children');
      headerNavChidren.forEach((thisHeaderNavChidren) => {
        thisHeaderNavChidren.classList.remove('active');
      });
    });
  });

}

/**
 * Header menu mobile
 * @description 
 */
export const menuMobile = () => {
  const headerNav = document.querySelectorAll('.menu-item-has-children');
  headerNav.forEach((thisHeaderNav) => {
    // Title
    const title = document.createElement('li');
    title.classList.add('subnav-title');
    title.setAttribute('aria-hidden', 'true');
    title.setAttribute('tabindex', '-1');
    title.innerHTML = thisHeaderNav.querySelector('a').innerHTML;
      
    thisHeaderNav.querySelector('ul').prepend(title);

    // Back link
    const btnBack = document.createElement('a');
    btnBack.setAttribute('href', 'javascript:void(0)');
    btnBack.classList.add('btn-link');
    btnBack.classList.add('btn', 'btn-link', 'btn-nav-back', 'btn-full');
    if (window.innerWidth > 1280) { 
      btnBack.setAttribute('aria-hidden', 'true');
      btnBack.setAttribute('tabindex', '-1');
    }
    btnBack.innerHTML = document.querySelector('.btn-back-text').innerHTML;

    const liElement = document.createElement('li');
    liElement.classList.add('back-item');
    liElement.appendChild(btnBack);
    thisHeaderNav.querySelector('ul').prepend(liElement);

    btnBack.addEventListener('click', (event) => {
      event.preventDefault();
      // remove class
      thisHeaderNav.classList.remove('active');
      const itemChildren = document.querySelectorAll('.menu-item-has-children');
      itemChildren.forEach((thisitemChildren) => {
        thisitemChildren.classList.remove('active');
      });
    });
  });

  // Header children link
  const headerNavLink = document.querySelectorAll('.header-nav>ul>li.menu-item-has-children>a');
  headerNavLink.forEach((thisHeaderNavLink) => {
    thisHeaderNavLink.addEventListener('click', (event) => {
      event.preventDefault();
      thisHeaderNavLink.parentElement.classList.toggle('active');
    });
  });
}

/**
 * Menu accessibility
 * @description 
 */
export const menuAccessibility = () => {
  const menuItems = document.querySelectorAll('.menu-item-has-children');

  if (menuItems.length > 0) {
    const menuButtons = document.querySelectorAll('.menu-item-has-children > a[href="#"]');

    if (menuButtons.length > 0) {
      menuButtons.forEach(button => {
        const submenu = button.nextElementSibling;

        button.addEventListener('click', function (event) {
          event.preventDefault();
          const expanded = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', !expanded);

          if (submenu) {
            submenu.setAttribute('aria-hidden', expanded);
            submenu.setAttribute('tabindex', expanded ? '-1' : '0');
          }
        });

        if (submenu) {
          submenu.setAttribute('aria-hidden', 'true');
          submenu.setAttribute('tabindex', '-1');
        }
      });
    }
  }
}