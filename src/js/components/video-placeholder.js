/**
 * Video Play Placeholder
 * @description This function allows to play a video or an iframe by clicking on link with the class iframe-placeholder.
 */

import { fadeOut } from '../utils/utils';

export const videoPlaceholder = () => {

  const iframesPlay = document.querySelectorAll('.iframe-placeholder');
  
  iframesPlay.forEach((iframePlay) => {
    iframePlay.addEventListener('click', (event) => {
      event.preventDefault();

      fadeOut(iframePlay);

      iframePlay.setAttribute('aria-hidden', 'true');
      iframePlay.setAttribute('tabindex', '1');

      iframePlay.nextElementSibling.focus();

      const iframe = iframePlay.nextElementSibling.nodeName;

      if (iframe.length > 0 && iframe === 'IFRAME') {
        iframePlay.nextElementSibling.src += "&autoplay=1";
      } else if (iframe.length > 0 && iframe === 'VIDEO') {
        iframePlay.nextElementSibling.play();
      } else {
        return;
      }
    });
  });
};

export const playPauseVideoBg = () => {
  const videoBlocks = document.querySelectorAll('.info-text-bg-block');

  if (!videoBlocks.length) return;

  // Check if device is iPhone and in low power mode
  const isIphone = /iPhone/.test(navigator.userAgent);
  const isLowPowerMode = isIphone && ('getBattery' in navigator) && navigator.getBattery().then(battery => battery.charging === false);

  videoBlocks.forEach((block) => {
    const videoBg = block.querySelector('.info-text-bg-video');
    const btnPlayPause = block.querySelectorAll('.btn-play-pause');
    const btnPlay = block.querySelector('.btn-bg-play');
    const btnPause = block.querySelector('.btn-bg-pause');

    if (!videoBg || !btnPlayPause.length || !btnPlay || !btnPause) return;

    // Hide play/pause buttons if iPhone in low power mode
    if (isLowPowerMode) {
      btnPlayPause.forEach(btn => {
        btn.style.display = 'none';
      });
      return;
    }

    btnPlayPause.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (videoBg.paused) {
          videoBg.play();
          btnPlay.style.display = 'none'; 
          btnPause.style.display = 'block';
        } else {
          videoBg.pause();
          btnPlay.style.display = 'block';
          btnPause.style.display = 'none';
        }
      });
    });
  });
}