/**
 * Full carousel function
 * @description This function initializes a Swiper carousel with default settings.
 */

import Swiper from 'swiper/bundle';

export const fullCarousel = () => {
  const fullCarousel = new Swiper('.default-full-carousel', {
    a11y: false,
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
    // a11y: {
    //   prevSlideMessage: '',
    //   nextSlideMessage: '',
    // }
  });
}

/**
 * Default carousel function
 * @description This function initializes a Swiper carousel with default settings.
 */
export const defaultCarousel = () => {
  const defaultCarousel = new Swiper('.default-carousel', {
    a11y: false,
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
    // a11y: {
    //   prevSlideMessage: '',
    //   nextSlideMessage: '',
    // },
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
    },
  });
}

/**
 * Logo carousel function
 * @description This function initializes a Swiper carousel with default settings.
 */
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export const logoCarousel = () => {
  const logoCarousel = new Swiper('.logo-carousel', {
    a11y: false,
    loop: true,
    slidesPerView: 2,
    slidesPerGroupSkip: 2,
    watchOverflow: true,
    centeredSlides: true,
    spaceBetween: 22,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // a11y: {
    //   prevSlideMessage: '',
    //   nextSlideMessage: '',
    // },
    breakpoints: {
      0: {
        centeredSlides: false,
        slidesPerView: 2,
        slidesPerGroupSkip: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroupSkip: 3,
        spaceBetween: 100,
      },
      1280: {
        slidesPerView: 5,
        slidesPerGroupSkip: 5,
        spaceBetween: 120,
      },
    },
  });

  if (document.querySelectorAll('.splide').length) {
    const splide = new Splide( '.splide', {
      type   : 'loop',
      focus  : 'center',
      autoWidth: true,
      focus    : 0,
      omitEnd  : true,
      autoScroll: {
        speed: 0.75,
      },
    } );
  
    splide.mount({ AutoScroll });
  }
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

/**
 * Pagination carousel function
 * @description This function adds a class to the parent element of the swiper pagination to lock the navigation.
 */
