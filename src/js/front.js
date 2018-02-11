var $ = require('jquery');

// Hammer js addon
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'hammer'], factory);
  } else if (typeof exports === 'object') {
    factory(require('jquery'), require('hammer'));
  } else {
    factory(jQuery, Hammer);
  }
}(function($, Hammer) {
  function hammerify(el, options) {
    var $el = $(el);
    if(!$el.data("hammer")) {
      $el.data("hammer", new Hammer($el[0], options));
    }
  }

  $.fn.hammer = function(options) {
    return this.each(function() {
      hammerify(this, options);
    });
  };

  // extend the emit method to also trigger jQuery events
  Hammer.Manager.prototype.emit = (function(originalEmit) {
    return function(type, data) {
      originalEmit.call(this, type, data);
      $(this.element).trigger({
        type: type,
        gesture: data
      });
    };
  })(Hammer.Manager.prototype.emit);
}));

// Main JS
$(document).ready(function () {
  $(function() {

    var jBody = $('body');
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      jBody.addClass('touch-device');
    }

    // Fix Input Iphone
    if (/iPhone/.test(navigator.userAgent) && !window.MSStream) {
      $('input, textarea, select').mousedown(function(){
        $('meta[name=viewport]').remove();
        $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0">');
      })

      $('input, textarea, select').focusout(function(){
        $('meta[name=viewport]').remove();
        $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">' );
      })
    }

    // CMS Table
    $( ".cms-wrap table" ).wrap('<div class="table-responsive"></div>');

    // Swipe Carousel
    $('#carousel').hammer().on('swipeleft', function(){
      $(this).carousel('next');
    });
    $('#carousel').hammer().on('swiperight', function(){
      $(this).carousel('prev');
    });

    // Btn back to top
    // $(window).scroll(function () {
    //   if ($(this).scrollTop() > 50) {
    //     $('#back-to-top').fadeIn();
    //   } else {
    //     $('#back-to-top').fadeOut();
    //   }
    // });

    // Panel Group
    // if (isMobile) {
    //   $('.panel-group').on('shown.bs.collapse', function (e) {
    //       var offset = $('.panel.panel-default > .panel-collapse.in').offset();
    //       if(offset) {
    //           $('html,body').animate({
    //               scrollTop: $('.panel-collapse.in').siblings('.panel-heading').offset().top
    //           }, 500);
    //       }
    //   });
    // }

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
});
