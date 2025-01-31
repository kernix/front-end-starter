/**
 * Search function
 * @description This function displays a search form when a button is clicked.
 */
import "../utils/utils";

export const search = () => {

  const btnSearch = document.querySelectorAll('.btn-toggle-search');

  btnSearch.forEach(thisBtnSearch => {
    thisBtnSearch.addEventListener('click', event => {
      const headerSearchForm = document.querySelector('.header-search-form');
      const isFormVisible = window.getComputedStyle(headerSearchForm).display !== 'none';

      if (!isFormVisible) {
        window.setTimeout(function () { 
          document.querySelector('.header-search-form .form-control').focus(); 
        }, 0);
        thisBtnSearch.setAttribute('aria-expanded', 'true');
      } else {
        const focusableElements = document.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');
        let found = false;
        for (let i = 0; i < focusableElements.length; i++) {
          if (focusableElements[i].classList.contains('btn-search') || focusableElements[i].classList.contains('btn-toggle-search')) {
            for (let j = i + 1; j < focusableElements.length; j++) {
              if (focusableElements[j].offsetParent !== null) {
                focusableElements[j].focus();
                found = true;
                break;
              }
            }
            if (found) break;
          }
        }
        thisBtnSearch.setAttribute('aria-expanded', 'false');
      }

      headerSearchForm.slideToggle();
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

  const headerSearchForm = document.querySelector('.header-search-form');

  // Function to trap focus within the header search form
  function trapFocus(event) {
    const focusableElements = headerSearchForm.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
      }
    }
  }

  // Add event listener to trap focus when header search form is displayed
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName === 'style') {
        const displayStyle = window.getComputedStyle(headerSearchForm).display;
        if (displayStyle === 'block') {
          document.addEventListener('keydown', trapFocus);
        } else {
          document.removeEventListener('keydown', trapFocus);
        }
      }
    });
  });

  observer.observe(headerSearchForm, { attributes: true });

  // Add event listener for the Enter key on the search submit button
  const btnSubmitSearch = document.querySelector('.btn-submit-search');
  if (btnSubmitSearch) {
    btnSubmitSearch.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        btnSubmitSearch.click();
      }
    });
  }
}