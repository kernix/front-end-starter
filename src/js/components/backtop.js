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
      }
    });
  }

  if (typeof tarteaucitron !== 'undefined' && btnTop) {
    btnTop.classList.add('btn-top-cookie');
  }

}