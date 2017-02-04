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
  // Custom functions
  var isMobile = false;
  // var isiPad = navigator.userAgent.match(/iPad/i) != null;

  $(function() {

    var jBody = $('body');

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      jBody.addClass('touch-device');
      document.addEventListener("touchstart", function() {}, false);
      isMobile = true;
    }

    // Jquery placeholder ie 9
    // $('input, textarea').placeholder();

    // Btn Back to top

    // Dropdown
    $(".dropdown-menu li a").click(function() {
      var selText = $(this).text();
      $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });

    // Panel Group
    if (isMobile) {
      $('.panel-group').on('shown.bs.collapse', function (e) {
          var offset = $('.panel.panel-default > .panel-collapse.in').offset();
          if(offset) {
              $('html,body').animate({
                  scrollTop: $('.panel-collapse.in').siblings('.panel-heading').offset().top
              }, 500);
          }
      });
    }

    // Input File Custom
    $( '.form-file' ).each( function()
    {
      var $input	 = $( this ),
        $label	 = $input.next( 'label' ),
        labelVal = $label.html();

      $input.on( 'change', function( e )
      {
        var fileName = '';

        if( this.files && this.files.length > 1 )
          fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else if( e.target.value )
          fileName = e.target.value.split( '\\' ).pop();

        if( fileName )
          $label.find( 'span' ).html( fileName );
        else
          $label.html( labelVal );
      });

      // Firefox bug fix
      $input
      .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
      .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
    });

    // Swipe Carousel
    $('#carousel').hammer().on('swipeleft', function(){
      $(this).carousel('next');
    });
    $('#carousel').hammer().on('swiperight', function(){
      $(this).carousel('prev');
    });

  });
});
