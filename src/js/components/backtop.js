/**
 * Back to top button
 * @description This function displays a button to scroll back to the top of the page when clicked.
 */

export const backTop = () => {
  const backToTopButton = document.querySelector('#back-to-top');
  const btnTop = document.querySelector('.btn-top');
  
  if (backToTopButton) {
    backToTopButton.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Show the back to top button
    window.addEventListener('scroll', () => {
      if (backToTopButton) {
        backToTopButton.classList.toggle('show', window.scrollY > 200);
        backToTopButton.setAttribute('aria-hidden', window.scrollY > 200 ? 'false' : 'true');
        backToTopButton.setAttribute('tabindex', window.scrollY > 200 ? '0' : '-1');
      }
      else {
        backToTopButton.setAttribute('aria-hidden', 'true');
        backToTopButton.setAttribute('tabindex', '-1');
      }
    });
  }

  if (typeof tarteaucitron !== 'undefined' && btnTop) {
    btnTop.classList.add('btn-top-cookie');
  }

}