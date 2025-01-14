/**
 * Full carousel function
 * @description This function initializes a Swiper carousel with default settings.
 */

import Swiper from 'swiper/bundle';

export const fullCarousel = () => {
  const carousels = document.querySelectorAll('.default-full-carousel');
  
  carousels.forEach(carousel => {
    const fullCarousel = new Swiper(carousel, {
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
        clickable: true,
        renderBullet: function (index, className) {
          const paginationEl = carousel.querySelector('.swiper-pagination');
          const ariaLabel = paginationEl ? paginationEl.getAttribute('aria-label') : '';
          const labelText = ariaLabel ? ariaLabel.slice(0, -1) : 'Diapositive';
          return `<button role="tab" class="btn btn-link ${className}" aria-selected="${index === 0}" aria-controls="diapo-${index + 1}">
                    <span class="visually-hidden">${labelText} ${index + 1}</span>
                  </button>`;
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: () => {
          const slides = carousel.querySelectorAll('.swiper-slide');
          slides.forEach(slide => {
            slide.setAttribute('aria-hidden', 'true');
            slide.querySelectorAll('.btn').forEach(button => {
              button.setAttribute('tabindex', '-1');
            });
          });
          const activeSlide = carousel.querySelector('.swiper-slide-active');
          if (activeSlide) {
            activeSlide.setAttribute('aria-hidden', 'false');
            activeSlide.querySelectorAll('.btn').forEach(button => {
              button.setAttribute('tabindex', '0');
            });
          }
        }
      }
    });

    // Play/Pause functionality
    const playButton = carousel.querySelector('.swiper-play');
    const pauseButton = carousel.querySelector('.swiper-pause');

    if (playButton && pauseButton) {
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
      playButton.setAttribute('aria-hidden', 'true');
      playButton.setAttribute('tabindex', '-1');
      pauseButton.removeAttribute('aria-hidden');
      pauseButton.removeAttribute('tabindex');

      playButton.addEventListener('click', () => {
        fullCarousel.autoplay.start();
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
        playButton.setAttribute('aria-hidden', 'true');
        playButton.setAttribute('tabindex', '-1');
        pauseButton.removeAttribute('aria-hidden');
        pauseButton.removeAttribute('tabindex');
        pauseButton.focus();
      });

      pauseButton.addEventListener('click', () => {
        fullCarousel.autoplay.stop();
        pauseButton.style.display = 'none';
        playButton.style.display = 'block';
        pauseButton.setAttribute('aria-hidden', 'true');
        pauseButton.setAttribute('tabindex', '-1');
        playButton.removeAttribute('aria-hidden');
        playButton.removeAttribute('tabindex');
        playButton.focus();
      });
    }
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
    on: {
      slideChange: function () {
        const slides = document.querySelectorAll('.default-carousel .swiper-slide');
        slides.forEach(slide => {
          slide.setAttribute('aria-hidden', 'true');
          slide.querySelectorAll('.btn').forEach(button => {
            button.setAttribute('tabindex', '-1');
          });
        });
        const activeSlide = document.querySelector('.default-carousel .swiper-slide-active');
        if (activeSlide) {
          activeSlide.setAttribute('aria-hidden', 'false');
          activeSlide.querySelectorAll('.btn').forEach(button => {
            button.setAttribute('tabindex', '0');
          });
        }
      }
    }
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
    on: {
      slideChange: function () {
        const slides = document.querySelectorAll('.logo-carousel .swiper-slide');
        slides.forEach(slide => {
          slide.setAttribute('aria-hidden', 'true');
          slide.querySelectorAll('.btn').forEach(button => {
            button.setAttribute('tabindex', '-1');
          });
        });
        const activeSlide = document.querySelector('.logo-carousel .swiper-slide-active');
        if (activeSlide) {
          activeSlide.setAttribute('aria-hidden', 'false');
          activeSlide.querySelectorAll('.btn').forEach(button => {
            button.setAttribute('tabindex', '0');
          });
        }
      }
    }
  });

  document.querySelectorAll('.splide').forEach(carousel => {
    const splide = new Splide(carousel, {
      type: 'loop',
      focus: 'center',
      autoWidth: true,
      focus: 0,
      omitEnd: true,
      autoScroll: {
        speed: 0.75,
      },
    });

    splide.mount({ AutoScroll });

    // Remove aria-label, aria-roledescription and role from splide__slide elements
    carousel.querySelectorAll('.splide__slide').forEach(slide => {
      slide.removeAttribute('aria-label');
      slide.removeAttribute('aria-roledescription');
      slide.removeAttribute('role');
    });

    // Play/Pause buttons
    const playButton = carousel.parentElement.querySelector('.logo-slider-play');
    const pauseButton = carousel.parentElement.querySelector('.logo-slider-pause');

    // Initial state - autoplay running
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
    playButton.setAttribute('aria-hidden', 'true');
    playButton.setAttribute('tabindex', '-1');
    pauseButton.removeAttribute('aria-hidden');
    pauseButton.removeAttribute('tabindex');

    playButton.addEventListener('click', () => {
      splide.Components.AutoScroll.play();
      
      // Update button states
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
      playButton.setAttribute('aria-hidden', 'true');
      playButton.setAttribute('tabindex', '-1');
      pauseButton.removeAttribute('aria-hidden');
      pauseButton.removeAttribute('tabindex');
      pauseButton.focus();
    });

    pauseButton.addEventListener('click', () => {
      splide.Components.AutoScroll.pause();
      
      // Update button states
      pauseButton.style.display = 'none';
      playButton.style.display = 'block';
      pauseButton.setAttribute('aria-hidden', 'true'); 
      pauseButton.setAttribute('tabindex', '-1');
      playButton.removeAttribute('aria-hidden');
      playButton.removeAttribute('tabindex');
      playButton.focus();
    });
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