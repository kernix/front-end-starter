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

  $('#datetimepickerinline').datetimepicker({
    inline: true,
    sideBySide: true,
    locale: 'fr',
    format: 'DD.MM.YYYY'
  });
});
