import Swiper from 'swiper/bundle';
// Default full carousel
const fullSwiper = new Swiper('.default-full-carousel', {
  effect: 'jump',
  speed: 2,
  autoplay: {
    delay: 10000,
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Précedent',
    nextSlideMessage: 'Suivant',
  }
});

// Default carousel
const swiper = new Swiper('.default-carousel', {
  loop: false,
  slidesPerView: "auto",
  watchOverflow: true,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  a11y: {
    prevSlideMessage: 'Précedent',
    nextSlideMessage: 'Suivant',
  },
  breakpoints: {
    768: {
      spaceBetween: 30,
    },
  },
});

// Add class parent lock for swiper pagination
const addClassParentLock = () => {
  const swiperPagination = document.querySelectorAll('.swiper-pagination');
  swiperPagination.forEach((thisSwiperPagination) => {
    const isSwiperPaginationLock = thisSwiperPagination.classList.contains('swiper-pagination-lock');
    thisSwiperPagination.parentNode.classList.toggle('swiper-nav-lock', isSwiperPaginationLock);
  });
};

addClassParentLock();

window.addEventListener('resize', addClassParentLock);