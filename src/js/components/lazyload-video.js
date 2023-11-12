/**
 * Lazyload video
 * @description This function lazyloads videos.
 */

export const lazyloadVideo = () => {

  if (document.querySelectorAll('.autoplay-lazyload-video').length > 0) {
    const videoLazy = () => {
      const realisationVideo = document.querySelectorAll('.autoplay-lazyload-video');
      realisationVideo.forEach((el) => {
        if (window.scrollY + window.innerHeight > el.offsetTop) {
          el.play();
        }
      });
    };

    videoLazy();

    window.addEventListener('scroll', videoLazy);
  }
}