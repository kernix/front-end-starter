/**
 * Search function
 * @description This function displays a search form when a button is clicked.
 */

export const search = () => {

  const btnSearch = document.querySelectorAll('.btn-toggle-search');
  
  btnSearch.forEach((thisBtnSearch) => {
    const searchForm = document.querySelector('.header-search-form');
    const searchOverlay = document.querySelector('.header-search-overlay');
    const searchInput = document.querySelector('.header-search-form .form-control');

    thisBtnSearch.addEventListener('click', (event) => {
      window.setTimeout(() => { 
        searchInput.focus(); 
      }, 0); 
      searchForm.classList.toggle('active');
      searchOverlay.classList.toggle('active');
      document.documentElement.classList.toggle('overflow-search');
      document.body.classList.toggle('overflow-search');
    });
  });

}