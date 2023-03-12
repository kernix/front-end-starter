import { wrap, fadeOut } from "./helpers.js";
// import { gsap } from "gsap";
// import Swiper from 'swiper/bundle';

// Main JS
var ready = (callback) => {
if (document.readyState != "loading") callback();
else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {

  // Table Responsive CMS
  const rwdTable = document.querySelectorAll('.cms-content table');
  rwdTable.forEach(thisRwdTable => {
    wrap(thisRwdTable, document.createElement('div'), 'table-responsive');
  });

  // Iframe responsive CMS
  const iframeCms = document.querySelectorAll('.cms-content iframe');
  iframeCms.forEach(thisiframeCms => {
    wrap(thisiframeCms, document.createElement('div'), 'cms-ratio');
  });

  // Custom file input
  if(document.querySelectorAll('#custom-input-file').length > 0) {
    let customLabel = document.getElementById('custom-input-file');
    let inputFile = document.getElementById('formFileCustom');
    let customFilesName = customLabel.getElementsByClassName("files-chosen")[0];

    customLabel.addEventListener('change', (event) => {
      if(inputFile.files.length > 0) {
        customFilesName.innerHTML = "";
        for (let i = 0; i < inputFile.files.length; i++) {
          customFilesName.textContent += inputFile.files.item(i).name + ", ";
        }
        }
      else {
          customFilesName.innerHTML = "Aucun fichier choisi";
      }
    }) 

    // Bind select dropdown on ready
    let dropdownBind = document.getElementById('select1');
    function bindSelectDropdown(element) {
      let data = element.id;
      let selectValue = document.querySelectorAll(`[data-select='${data}']`)[0].value;
      
      let button = element.getElementsByTagName("button");
        button[0].innerHTML = selectValue;
    } 
    bindSelectDropdown(dropdownBind)
    // Bind select dropdown on change 
    
    dropdownBind.addEventListener('click', (event) => {
      let data = dropdownBind.id;
      var elem = event.target;
      var text = elem.innerHTML;
      let button = dropdownBind.getElementsByTagName("button");
      
      if (elem.classList.contains("dropdown-item")) {
          button[0].innerHTML = text;
          let selectValue = document.querySelectorAll(`[data-select='${data}']`)[0].value = text;
      };
    });
  }

  // // Swiper
  // const swiper = new Swiper('.default-carousel', {
  //   loop: false,
  //   slidesPerView: "auto",
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



  // // Video Play Placeholder
  // const iframesPlay = document.querySelectorAll('.iframe-placeholder');
  // for (const iframePlay of iframesPlay) {
  //   iframePlay.addEventListener('click', event => {
  //     event.preventDefault();

  //     fadeOut(iframePlay);
      
  //     const iframe = iframePlay.nextElementSibling.nodeName;
  //     if (iframe.length > 0 && iframe === 'IFRAME') {
  //       iframePlay.nextElementSibling.src += "&autoplay=1";
  //     } else if ( iframe.length > 0 && iframe === 'VIDEO') {
  //       iframePlay.nextElementSibling.play();
  //     } else {
  //       return;
  //     }
  //   });
  // }

  // // Accordion
  // const scrollOffset = document.querySelectorAll('.accordion-btn');
  // scrollOffset.forEach(thisScrollOffset => {
  //   thisScrollOffset.addEventListener('click', event => {
  //     setTimeout(() => {
  //       const offset = 0;
  //       const bodyRect = document.body.getBoundingClientRect().top;
  //       const elementRect = thisScrollOffset.getBoundingClientRect().top;
  //       const elementPosition = elementRect - bodyRect;
  //       const offsetPosition = elementPosition - offset;
  
  //       window.scrollTo({
  //         top: offsetPosition,
  //         behavior: 'smooth'
  //       });
  //     }, "500");
  //   });
  // });

  // // Add class body if header fix
  // if(document.querySelectorAll('.header-fix-wrap').length > 0) {
  //   document.querySelector('body').classList.add('header-fix');
  // }

  // // Menu
  // const btnMenu = document.querySelectorAll('.btn-menu');
  // btnMenu.forEach(thisBtnMenu => {
  //   thisBtnMenu.addEventListener('click', event => {
  //     thisBtnMenu.classList.toggle('clicked');
  //     document.querySelector('.header-wrap').classList.toggle('active');
  //     document.querySelector('html').classList.toggle('overflow');
  //     document.querySelector('body').classList.toggle('overflow');
  //     document.querySelector('.header-block').classList.toggle('active');
  //     const headerNavChidren = document.querySelectorAll('.header-nav>ul>li.menu-item-has-children');
  //     headerNavChidren.forEach(thisHeaderNavChidren => {
  //       thisHeaderNavChidren.classList.remove('active');
  //     });
  //   });
  // });

  // // Header add div list
  // const headerNav = document.querySelectorAll('.menu-item-has-children');
  // headerNav.forEach(thisHeaderNav => {
  //   // Title
  //   const title = document.createElement('div');
  //   title.classList.add('subnav-title');
  //   title.innerHTML = thisHeaderNav.querySelector('a').innerHTML;
  //   thisHeaderNav.querySelector('ul').prepend(title);

  //   // Back link
  //   const btnBack = document.createElement('a');
  //   btnBack.setAttribute('href', 'javascript:void(0)');
  //   btnBack.classList.add('btn-link');
  //   btnBack.classList.add('btn', 'btn-link', 'btn-nav-back', 'btn-full');
  //   btnBack.innerHTML = document.querySelector('.btn-back-text').innerHTML;
  //   thisHeaderNav.querySelector('ul').prepend(btnBack);

  //   btnBack.addEventListener('click', event => {
  //     event.preventDefault();
  //     // remove class
  //     thisHeaderNav.classList.remove('active');
  //     const itemChildren = document.querySelectorAll('.menu-item-has-children');
  //     itemChildren.forEach(thisitemChildren => {
  //       thisitemChildren.classList.remove('active');
  //     });
  //   }); 
  // });

  // // Header children link
  // const headerNavLink = document.querySelectorAll('.header-nav>ul>li.menu-item-has-children>a');
  // headerNavLink.forEach(thisHeaderNavLink => {
  //   thisHeaderNavLink.addEventListener('click', event => {
  //     event.preventDefault();
  //     thisHeaderNavLink.parentElement.classList.toggle('active');
  //   });
  // });

  // // Footer Accordion
  // const footerAccordion = document.querySelectorAll('.footer-nav-title');
  // footerAccordion.forEach(thisFooterAccordion => {
  //   thisFooterAccordion.addEventListener('click', event => {
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

  //   initMarquee();

  //   window.addEventListener("scroll", function(){
  //     initMarquee();
  //   });

  //   function initMarquee(){
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
  //   }
  // }

  // // Search Toggle
  // const btnSearch = document.querySelectorAll('.btn-toggle-search');
  // btnSearch.forEach(thisBtnSearch => {
  //   thisBtnSearch.addEventListener('click', event => {
  //     window.setTimeout(function () { 
  //       document.querySelector('.header-search-form .form-control').focus(); 
  //     }, 0); 
  //     document.querySelector('.header-search-form').slideToggle();
  //     document.querySelector('.header-search-overlay').classList.toggle('active');
  //     document.querySelector('html').classList.toggle('overflow-search');
  //     document.querySelector('body').classList.toggle('overflow-search');
  //   });
  // });

});


// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function( _, ns, handle ) {
    this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
  }
};
jQuery.event.special.touchmove = {
  setup: function( _, ns, handle ) {
    this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
  }
};