/**
 * Marquee
 * @description Initializes marquees with play/pause. Supports multiple marquee blocks per page;
 * each block gets its own GSAP tween and its own play/pause controls.
 */

import { gsap } from "gsap";

const MARQUEE_DURATION = 20;

export const marquee = () => {
  const containers = document.querySelectorAll(".marquee");
  if (!containers.length) return;

  const main = document.querySelector("main");
  if (main) main.classList.add("marquee-main");

  let currentScroll = window.pageYOffset;
  let isScrollingDown = true;

  /** @type {Array<{ tweens: gsap.core.Tween[], isPaused: boolean, playBtn: Element | null, pauseBtn: Element | null }>} */
  const instances = [];

  containers.forEach((container) => {
    const trackRight = container.querySelector(".marquee-right");
    const trackLeft = container.querySelector(".marquee-left");
    const playBtn = container.querySelector(".marquee-play");
    const pauseBtn = container.querySelector(".marquee-pause");

    const tweens = [];

    if (trackRight) {
      gsap.set(container.querySelector(".marquee-inner-right"), { xPercent: 0 });
      const tween = gsap.to(trackRight, {
        xPercent: -100,
        repeat: -1,
        duration: MARQUEE_DURATION,
        ease: "linear",
      }).totalProgress(0.5);
      tweens.push(tween);
    }

    if (trackLeft) {
      gsap.set(container.querySelector(".marquee-inner-left"), { xPercent: 0 });
      const tween = gsap.to(trackLeft, {
        xPercent: -100,
        repeat: -1,
        duration: MARQUEE_DURATION,
        ease: "linear",
        immediateRender: true,
        paused: false,
      });
      tween.play();
      tweens.push(tween);
    }

    if (tweens.length === 0) return;

    const instance = { tweens, isPaused: false, playBtn, pauseBtn };

    const setButtonsState = (paused) => {
      instance.isPaused = paused;
      if (!playBtn || !pauseBtn) return;
      if (paused) {
        playBtn.style.display = "block";
        pauseBtn.style.display = "none";
        playBtn.removeAttribute("aria-hidden");
        playBtn.removeAttribute("tabindex");
        pauseBtn.setAttribute("aria-hidden", "true");
        pauseBtn.setAttribute("tabindex", "-1");
      } else {
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
        playBtn.setAttribute("aria-hidden", "true");
        playBtn.setAttribute("tabindex", "-1");
        pauseBtn.removeAttribute("aria-hidden");
        pauseBtn.removeAttribute("tabindex");
      }
    };

    setButtonsState(false);

    if (playBtn) {
      playBtn.addEventListener("click", () => {
        tweens.forEach((t) => t.play());
        setButtonsState(false);
        pauseBtn?.focus();
      });
    }
    if (pauseBtn) {
      pauseBtn.addEventListener("click", () => {
        tweens.forEach((t) => t.pause());
        setButtonsState(true);
        playBtn?.focus();
      });
    }

    instances.push(instance);
  });

  const updateScrollDirection = () => {
    const scroll = window.pageYOffset;
    isScrollingDown = scroll > currentScroll;
    currentScroll = scroll;

    instances.forEach((inst) => {
      if (inst.isPaused) return;
      inst.tweens.forEach((tween) => {
        gsap.to(tween, { timeScale: isScrollingDown ? 1 : -1 });
      });
    });
  };

  updateScrollDirection();
  window.addEventListener("scroll", updateScrollDirection);
};
