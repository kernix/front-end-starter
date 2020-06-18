var $ = require('jquery');
// var AOS = require('aos');

// Main JS
$(document).ready(function () {

  // CMS Table
  $('.cms-content table').wrap('<div class="table-responsive"></div>');

  // Btn back to top
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 50) {
  //     $('#back-to-top').fadeIn();
  //   } else {
  //     $('#back-to-top').fadeOut();
  //   }
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
