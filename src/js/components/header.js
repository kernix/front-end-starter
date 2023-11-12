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
    const title = document.createElement('div');
    title.classList.add('subnav-title');
    title.innerHTML = thisHeaderNav.querySelector('a').innerHTML;
    thisHeaderNav.querySelector('ul').prepend(title);

  // Back link
    const btnBack = document.createElement('a');
    btnBack.setAttribute('href', 'javascript:void(0)');
    btnBack.classList.add('btn-link');
    btnBack.classList.add('btn', 'btn-link', 'btn-nav-back', 'btn-full');
    btnBack.innerHTML = document.querySelector('.btn-back-text').innerHTML;
    thisHeaderNav.querySelector('ul').prepend(btnBack);

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