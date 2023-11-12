/**
 * Marquee
 * @description This function initializes a marquee.
 */

import { gsap } from "gsap";

export const marquee = () => {
  
  let currentScroll = 0;
  let isScrollingDown = true;
  
  if (document.querySelectorAll('.marquee-right').length > 0 || document.querySelectorAll('.marquee-left').length > 0) {
  
    let marqueeMain = document.querySelector('main');
    marqueeMain.classList.add('marquee-main');
  
    let marqueeRight = gsap.to(".marquee-right", {xPercent: -100, repeat: 2, duration: 20, ease: "linear"}).totalProgress(0.5);
    gsap.set(".marquee-inner-right", {xPercent: 0});
    
    const initMarquee = () => {
      if ( window.pageYOffset > currentScroll ) {
        isScrollingDown = true;
      } else {
        isScrollingDown = false;
      }
  
      gsap.to(marqueeRight , {
        timeScale: isScrollingDown ? 1 : -1
      });
  
      if (document.querySelectorAll('.marquee-left').length > 0) {
        gsap.to(marqueeLeft , {
          timeScale: isScrollingDown ? -1 : 1
        });
      } 
  
      currentScroll = window.pageYOffset
    };
  
    initMarquee();
  
    window.addEventListener("scroll", initMarquee);
  }
};
