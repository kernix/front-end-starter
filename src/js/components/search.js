// Search Toggle
const btnSearch = document.querySelectorAll('.btn-toggle-search');
btnSearch.forEach((thisBtnSearch) => {
  thisBtnSearch.addEventListener('click', (event) => {
    window.setTimeout(() => { 
      document.querySelector('.header-search-form .form-control').focus(); 
    }, 0); 
    document.querySelector('.header-search-form').slideToggle();
    document.querySelector('.header-search-overlay').classList.toggle('active');
    document.querySelector('html').classList.toggle('overflow-search');
    document.querySelector('body').classList.toggle('overflow-search');
  });
});