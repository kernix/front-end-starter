/**
 * Marquee
 * @description This function initializes a marquee with play and pause functionality.
 */

import { gsap } from "gsap";

export const marquee = () => {
  
  let currentScroll = 0;
  let isScrollingDown = true;
  let isPaused = false;
  
  if (document.querySelectorAll('.marquee-right').length > 0 || document.querySelectorAll('.marquee-left').length > 0) {
  
    let marqueeMain = document.querySelector('main');
    marqueeMain.classList.add('marquee-main');
  
    let marqueeRight = gsap.to(".marquee-right", {xPercent: -100, repeat: 2, duration: 20, ease: "linear"}).totalProgress(0.5);
    gsap.set(".marquee-inner-right", {xPercent: 0});
    
    const initMarquee = () => {
      if (!isPaused) {
        if (window.pageYOffset > currentScroll) {
          isScrollingDown = true;
        } else {
          isScrollingDown = false;
        }
    
        gsap.to(marqueeRight, {
          timeScale: isScrollingDown ? 1 : -1
        });
    
        if (document.querySelectorAll('.marquee-left').length > 0) {
          let marqueeLeft = gsap.to(".marquee-left", {xPercent: 100, repeat: -1, duration: 20, ease: "linear"});
          gsap.to(marqueeLeft, {
            timeScale: isScrollingDown ? -1 : 1
          });
        }
    
        currentScroll = window.pageYOffset;
      }
    };
    const playButton = document.querySelector('.marquee-play');
    const pauseButton = document.querySelector('.marquee-pause');

    // Initial state - autoplay running
    playButton.style.display = 'none';
    pauseButton.style.display = 'block';
    playButton.setAttribute('aria-hidden', 'true');
    playButton.setAttribute('tabindex', '-1');
    pauseButton.removeAttribute('aria-hidden');
    pauseButton.removeAttribute('tabindex');

    playButton.addEventListener('click', () => {
      isPaused = false;
      marqueeRight.play();
      playButton.style.display = 'none';
      pauseButton.style.display = 'block';
      playButton.setAttribute('aria-hidden', 'true');
      playButton.setAttribute('tabindex', '-1');
      pauseButton.removeAttribute('aria-hidden');
      pauseButton.removeAttribute('tabindex');
      pauseButton.focus();
    });

    pauseButton.addEventListener('click', () => {
      isPaused = true;
      marqueeRight.pause();
      pauseButton.style.display = 'none';
      playButton.style.display = 'block';
      pauseButton.setAttribute('aria-hidden', 'true');
      pauseButton.setAttribute('tabindex', '-1');
      playButton.removeAttribute('aria-hidden');
      playButton.removeAttribute('tabindex');
      playButton.focus();
    });

    initMarquee();

    window.addEventListener("scroll", initMarquee);
  }
};
