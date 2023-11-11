// Back to top page
const backToTopButton = document.querySelector('#back-to-top');
if (backToTopButton) {
  backToTopButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

// Show back to top button
  window.addEventListener('scroll', () => {
    if (backToTopButton) {
      backToTopButton.classList.toggle('show', window.scrollY > 200);
    }
  });
}

// Cookie
setTimeout(() => {
  const tarteaucitronRoot = document.querySelector('#tarteaucitronRoot');
  const btnTop = document.querySelector('.btn-top');
  if (tarteaucitronRoot && btnTop) {
    btnTop.classList.add('btn-top-cookie');
  }
}, 500);