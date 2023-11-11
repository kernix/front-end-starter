// Video Play Placeholder
const iframesPlay = document.querySelectorAll('.iframe-placeholder');
iframesPlay.forEach((iframePlay) => {
  iframePlay.addEventListener('click', (event) => {
    event.preventDefault();

    fadeOut(iframePlay);

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