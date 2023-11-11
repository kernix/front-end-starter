
// Accordion
const scrollOffset = document.querySelectorAll('.accordion-btn');
scrollOffset.forEach((thisScrollOffset) => {
  thisScrollOffset.addEventListener('click', (event) => {
    setTimeout(() => {
      const headerFixWrap = document.querySelector('.header-fix-wrap');
      const headerHeight = headerFixWrap ? headerFixWrap.offsetHeight : 0;
      const offset = 0;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = thisScrollOffset.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }, 500);
  });
});