$(document).ready(function() {
  // var headerHeight = $('.m-highlight').innerHeight();
  // var footerHeight = $('.footer-wrap').innerHeight();
  // var galHeight = $('.workshop-gallery-wrap').innerHeight() + 130;
  // var FfHeight = footerHeight + galHeight;
  // $('.block-affix').affix({
  //   offset: {
  //     top: headerHeight,
  //     bottom: FfHeight
  //   }
  // }).on('affix.bs.affix', function() {
  //   $(this).css({});
  // }).on('affix-bottom.bs.affix', function() {
  //   $(this).css('bottom', 'auto');
  // });

  $("#navbar ul li a[href^='#']").on('click', function(e) {
    // prevent default anchor click behavior
    e.preventDefault();
    // animate
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 300, function() {

      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = this.hash;
    });

  });

  var alert = $('#alert');
  alert.click(function(event) {
    swal({
      title: "Error!",
      text: "Here's my error message!",
      type: "error",
      confirmButtonText: "Cool"
    });
  });

  $('body').scrollspy({
    target: '#navbar'
  })

  $('[data-spy="scroll"]').each(function() {
    var $spy = $(this).scrollspy('refresh')
  })

  $('#datetimepickerinline').datetimepicker({
    inline: true,
    sideBySide: true,
    locale: 'fr',
    format: 'DD.MM.YYYY'
  });
});
