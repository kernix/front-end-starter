import { wrap } from "./helpers.js";

const $ = require('jquery');
// const AOS = require('aos');

// Main JS
var ready = (callback) => {
if (document.readyState != "loading") callback();
else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {

  // Table Responsive CMS
  let rwdTable = document.querySelectorAll('.cms-content table');
  rwdTable.forEach(thisRwdTable => {
    wrap(thisRwdTable, document.createElement('div'), 'table-responsive');
  });

  // Iframe responsive CMS
  let iframeCms = document.querySelectorAll('.cms-content iframe');
  iframeCms.forEach(thisiframeCms => {
    wrap(thisiframeCms, document.createElement('div'), 'cms-ratio');
  });

  // Video Play Placeholder
  //  const iframesPlay = document.querySelectorAll('.iframe-placeholder');
  //  for (const iframePlay of iframesPlay) {
  //    iframePlay.addEventListener('click', event => {
  //      event.preventDefault();
 
  //      fadeOut(iframePlay);
       
  //      const iframe = iframePlay.nextElementSibling.nodeName;
  //      if (iframe.length > 0 && iframe === 'IFRAME') {
  //        iframePlay.nextElementSibling.src += "&autoplay=1";
  //      } else if ( iframe.length > 0 && iframe === 'VIDEO') {
  //        iframePlay.nextElementSibling.play();
  //      } else {
  //        return;
  //      }
  //    });
  //  }
});


function fadeOut(element, toValue = 0, duration = 500) {
  const fromValue = parseFloat(element.style.opacity) || 1;
  const startTime = Date.now();
  const framerate = 1000 / 60; // 60fps
  
  let interval = setInterval(() => {
      const currentTime = Date.now();
      const timeDiff = (currentTime - startTime) / duration;
      const value = fromValue - (fromValue - toValue) * timeDiff;
      
      if (timeDiff >= 1) {
          clearInterval(interval);
          interval = 0;
      }
      
      element.style.opacity = value.toString();
      element.style.display = value > 0 ? 'block' : 'none';
  }, framerate)
}

// Main JS
$(document).ready(function () {

  // Btn back to top
  // if ($('#back-to-top').length) {
  //   var scrollTrigger = 100, // px
  //   backToTop = function () {
  //     var scrollTop = $(window).scrollTop();
  //     if (scrollTop > scrollTrigger) {
  //       $('#back-to-top').addClass('show');
  //     } else {
  //       $('#back-to-top').removeClass('show');
  //     }
  //   };
  //
  //   // Init
  //   backToTop();
  //
  //   // Scroll
  //   $(window).on('scroll', function () {
  //     backToTop();
  //   });
  //
  //   $('#back-to-top').on('click', function (e) {
  //       e.preventDefault();
  //       $('html,body').animate({
  //           scrollTop: 0
  //       }, 700);
  //   });
  // }

  // Menu
  // let btnMenu = $('.btn-menu');
  // btnMenu.click(function() {
  //   $(this).toggleClass('clicked');
  //   $('.header-wrap').toggleClass('active');
  //   $('html, body').toggleClass('overflow');
  //   $('.header-nav').slideToggle();
  // });

  // Input File Custom
  // $( '.form-file' ).each( function()
  // {
  //   var $input	 = $( this ),
  //     $label	 = $input.next( 'label' ),
  //     labelVal = $label.html();
  //
  //   $input.on( 'change', function( e )
  //   {
  //     var fileName = '';
  //
  //     if( this.files && this.files.length > 1 )
  //       fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
  //     else if( e.target.value )
  //       fileName = e.target.value.split( '\\' ).pop();
  //
  //     if( fileName )
  //       $label.find( 'span' ).html( fileName );
  //     else
  //       $label.html( labelVal );
  //   });
  //
  //   // Firefox bug fix
  //   $input
  //   .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
  //   .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
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
