/**
 * Search function
 * @description This function displays a search form when a button is clicked.
 */
import "../utils/utils";

export const search = () => {

  const btnSearch = document.querySelectorAll('.btn-toggle-search');

  btnSearch.forEach(thisBtnSearch => {
    thisBtnSearch.addEventListener('click', event => {
      window.setTimeout(function () { 
        document.querySelector('.header-search-form .form-control').focus(); 
      }, 0); 
      document.querySelector('.header-search-form').slideToggle();
      const headerSearchForm = document.querySelector('.header-search-form');
      const isAriaHidden = headerSearchForm.getAttribute('aria-hidden') === 'true';
      headerSearchForm.setAttribute('aria-hidden', !isAriaHidden);
      const currentTabIndex = headerSearchForm.getAttribute('tabindex');
      if (currentTabIndex === '-1') {
        headerSearchForm.setAttribute('tabindex', '0');
      } else {
        headerSearchForm.setAttribute('tabindex', '-1');
      }
      document.querySelector('.header-search-overlay').classList.toggle('active');
      document.querySelector('html').classList.toggle('overflow-search');
      document.querySelector('body').classList.toggle('overflow-search');
    });
  });

}