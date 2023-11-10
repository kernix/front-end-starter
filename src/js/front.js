import { ready } from './utils/utils';
// import { gsap } from "gsap";
// import Swiper from 'swiper/bundle';

// Main JS
ready(() => {
// // Default full carousel
// const fullSwiper = new Swiper('.default-full-carousel', {
//   effect: 'jump',
//   speed: 2,
//   autoplay: {
//     delay: 10000,
//   },
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 0,
//   keyboard: {
//     enabled: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   a11y: {
//     prevSlideMessage: 'Précedent',
//     nextSlideMessage: 'Suivant',
//   }
// });

// // Default carousel
// const swiper = new Swiper('.default-carousel', {
//   loop: false,
//   slidesPerView: "auto",
//   watchOverflow: true,
//   spaceBetween: 20,
//   keyboard: {
//     enabled: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     type: "progressbar"
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   a11y: {
//     prevSlideMessage: 'Précedent',
//     nextSlideMessage: 'Suivant',
//   },
//   breakpoints: {
//     768: {
//       spaceBetween: 30,
//     },
//   },
// });

// // Back to top page
// const backToTopButton = document.querySelector('#back-to-top');
// if (backToTopButton) {
//   backToTopButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });

// // Show back to top button
//   window.addEventListener('scroll', () => {
//     if (backToTopButton) {
//       backToTopButton.classList.toggle('show', window.scrollY > 200);
//     }
//   });
// }

// // Add class parent lock for swiper pagination
// const addClassParentLock = () => {
//   const swiperPagination = document.querySelectorAll('.swiper-pagination');
//   swiperPagination.forEach((thisSwiperPagination) => {
//     const isSwiperPaginationLock = thisSwiperPagination.classList.contains('swiper-pagination-lock');
//     thisSwiperPagination.parentNode.classList.toggle('swiper-nav-lock', isSwiperPaginationLock);
//   });
// };

// addClassParentLock();

// window.addEventListener('resize', addClassParentLock);

// // Video Play Placeholder
// const iframesPlay = document.querySelectorAll('.iframe-placeholder');
// iframesPlay.forEach((iframePlay) => {
//   iframePlay.addEventListener('click', (event) => {
//     event.preventDefault();

//     fadeOut(iframePlay);

//     const iframe = iframePlay.nextElementSibling.nodeName;
//     if (iframe.length > 0 && iframe === 'IFRAME') {
//       iframePlay.nextElementSibling.src += "&autoplay=1";
//     } else if (iframe.length > 0 && iframe === 'VIDEO') {
//       iframePlay.nextElementSibling.play();
//     } else {
//       return;
//     }
//   });
// });

// // Accordion
// const scrollOffset = document.querySelectorAll('.accordion-btn');
// scrollOffset.forEach((thisScrollOffset) => {
//   thisScrollOffset.addEventListener('click', (event) => {
//     setTimeout(() => {
//       const headerFixWrap = document.querySelector('.header-fix-wrap');
//       const headerHeight = headerFixWrap ? headerFixWrap.offsetHeight : 0;
//       const offset = 0;
//       const bodyRect = document.body.getBoundingClientRect().top;
//       const elementRect = thisScrollOffset.getBoundingClientRect().top;
//       const elementPosition = elementRect - bodyRect;
//       const offsetPosition = elementPosition - offset - headerHeight;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }, 500);
//   });
// });

// // Add class body if header fix
// if (document.querySelectorAll('.header-fix-wrap').length > 0) {
//   document.querySelector('body').classList.add('header-fix');
// }

// // Cookie
// setTimeout(() => {
//   const tarteaucitronRoot = document.querySelector('#tarteaucitronRoot');
//   const btnTop = document.querySelector('.btn-top');
//   if (tarteaucitronRoot && btnTop) {
//     btnTop.classList.add('btn-top-cookie');
//   }
// }, 500);

// // Menu
// const btnMenu = document.querySelectorAll('.btn-menu');
// btnMenu.forEach((thisBtnMenu) => {
//   thisBtnMenu.addEventListener('click', (event) => {
//     thisBtnMenu.classList.toggle('clicked');
//     document.querySelector('.header-wrap').classList.toggle('active');
//     document.querySelector('html').classList.toggle('overflow');
//     document.querySelector('body').classList.toggle('overflow');
//     document.querySelector('.header-block').classList.toggle('active');
//     const headerNavChidren = document.querySelectorAll('.header-nav>ul>li.menu-item-has-children');
//     headerNavChidren.forEach((thisHeaderNavChidren) => {
//       thisHeaderNavChidren.classList.remove('active');
//     });
//   });
// });

// // Header add div list
// const headerNav = document.querySelectorAll('.menu-item-has-children');
// headerNav.forEach((thisHeaderNav) => {
// // Title
//   const title = document.createElement('div');
//   title.classList.add('subnav-title');
//   title.innerHTML = thisHeaderNav.querySelector('a').innerHTML;
//   thisHeaderNav.querySelector('ul').prepend(title);

// // Back link
//   const btnBack = document.createElement('a');
//   btnBack.setAttribute('href', 'javascript:void(0)');
//   btnBack.classList.add('btn-link');
//   btnBack.classList.add('btn', 'btn-link', 'btn-nav-back', 'btn-full');
//   btnBack.innerHTML = document.querySelector('.btn-back-text').innerHTML;
//   thisHeaderNav.querySelector('ul').prepend(btnBack);

//   btnBack.addEventListener('click', (event) => {
//     event.preventDefault();
//     // remove class
//     thisHeaderNav.classList.remove('active');
//     const itemChildren = document.querySelectorAll('.menu-item-has-children');
//     itemChildren.forEach((thisitemChildren) => {
//       thisitemChildren.classList.remove('active');
//     });
//   });
// });

// // Header children link
// const headerNavLink = document.querySelectorAll('.header-nav>ul>li.menu-item-has-children>a');
// headerNavLink.forEach((thisHeaderNavLink) => {
//   thisHeaderNavLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     thisHeaderNavLink.parentElement.classList.toggle('active');
//   });
// });

// // Footer Accordion
// const footerAccordion = document.querySelectorAll('.footer-nav-title');
// footerAccordion.forEach((thisFooterAccordion) => {
//   thisFooterAccordion.addEventListener('click', (event) => {
//     thisFooterAccordion.classList.toggle('active');
//     thisFooterAccordion.nextElementSibling.slideToggle();
//   });
// });

// //Marquee anime
// let currentScroll = 0;
// let isScrollingDown = true;

// if (document.querySelectorAll('.marquee-right').length > 0 || document.querySelectorAll('.marquee-left').length > 0) {
//   let marqueeRight = gsap.to(".marquee-right", {xPercent: -100, repeat: 2, duration: 20, ease: "linear"}).totalProgress(0.5);
//   gsap.set(".marquee-inner-right", {xPercent: 0});

//   const initMarquee = () => {
//     if ( window.pageYOffset > currentScroll ) {
//       isScrollingDown = true;
//     } else {
//       isScrollingDown = false;
//     }

//     gsap.to(marqueeRight , {
//       timeScale: isScrollingDown ? 1 : -1
//     });

//     if (document.querySelectorAll('.marquee-left').length > 0) {
//       gsap.to(marqueeLeft , {
//         timeScale: isScrollingDown ? -1 : 1
//       });
//     } 

//     currentScroll = window.pageYOffset
//   };

//   initMarquee();

//   window.addEventListener("scroll", initMarquee);
// }

// // Search Toggle
// const btnSearch = document.querySelectorAll('.btn-toggle-search');
// btnSearch.forEach((thisBtnSearch) => {
//   thisBtnSearch.addEventListener('click', (event) => {
//     window.setTimeout(() => { 
//       document.querySelector('.header-search-form .form-control').focus(); 
//     }, 0); 
//     document.querySelector('.header-search-form').slideToggle();
//     document.querySelector('.header-search-overlay').classList.toggle('active');
//     document.querySelector('html').classList.toggle('overflow-search');
//     document.querySelector('body').classList.toggle('overflow-search');
//   });
// });

// if (document.querySelectorAll('.autoplay-lazyload-video').length > 0) {
//   const videoLazy = () => {
//     const realisationVideo = document.querySelectorAll('.autoplay-lazyload-video');
//     realisationVideo.forEach((el) => {
//       if (window.scrollY + window.innerHeight > el.offsetTop) {
//         el.play();
//       }
//     });
//   };

//   videoLazy();

//   window.addEventListener('scroll', videoLazy);
// }
});