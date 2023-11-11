
// Add class body if header fix
if (document.querySelectorAll('.header-fix-wrap').length > 0) {
  document.querySelector('body').classList.add('header-fix');
}

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

// Header add div list
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

// Footer Accordion
const footerAccordion = document.querySelectorAll('.footer-nav-title');
footerAccordion.forEach((thisFooterAccordion) => {
  thisFooterAccordion.addEventListener('click', (event) => {
    thisFooterAccordion.classList.toggle('active');
    thisFooterAccordion.nextElementSibling.slideToggle();
  });
});