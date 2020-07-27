var $ = require('jquery');
// var AOS = require('aos');

// Main JS
$(document).ready(function () {

  // CMS Table
  $('.cms-content table').wrap('<div class="table-responsive"></div>');

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
