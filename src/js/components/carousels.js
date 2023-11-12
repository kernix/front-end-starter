/**
 * Full carousel function
 * @description This function initializes a Swiper carousel with default settings.
 */

import Swiper from 'swiper/bundle';

export const fullCarousel = () => {
  const fullCarousel = new Swiper('.default-full-carousel', {
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
}

/**
 * Default carousel function
 * @description This function initializes a Swiper carousel with default settings.
 */
export const defaultCarousel = () => {
  const defaultCarousel = new Swiper('.default-carousel', {
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
      prevSlideMessage: 'Previous',
      nextSlideMessage: 'Next',
    },
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
    },
  });
}

/**
 * Pagination carousel function
 * @description This function adds a class to the parent element of the swiper pagination to lock the navigation.
 */
export const paginationCarousel = () => {

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
}
