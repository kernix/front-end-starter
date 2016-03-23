var $ = require(jQuery);

// Hammer js addon
// (function(factory) {
//   if (typeof define === 'function' && define.amd) {
//     define(['jquery', 'hammerjs'], factory);
//   } else if (typeof exports === 'object') {
//     factory(require('jquery'), require('hammerjs'));
//   } else {
//     factory(jQuery, Hammer);
//   }
// }(function($, Hammer) {
//   function hammerify(el, options) {
//     var $el = $(el);
//     if(!$el.data("hammer")) {
//       $el.data("hammer", new Hammer($el[0], options));
//     }
//   }
//
//   $.fn.hammer = function(options) {
//     return this.each(function() {
//       hammerify(this, options);
//     });
//   };
//
//   // extend the emit method to also trigger jQuery events
//   Hammer.Manager.prototype.emit = (function(originalEmit) {
//     return function(type, data) {
//       originalEmit.call(this, type, data);
//       $(this.element).trigger({
//         type: type,
//         gesture: data
//       });
//     };
//   })(Hammer.Manager.prototype.emit);
// }));
//
// // Custom functions
//
// var isMobile = false;
// var isiPad = navigator.userAgent.match(/iPad/i) != null;
//
// var site_opts = {
//   bodyOffset: {
//     active: true,
//     offsetAmount: $('.main-header').outerHeight()
//   },
//   dateSelector: {
//     active: true,
//     elementRef: '.datetime input',
//     opts: {
//       locale: 'fr',
//       format: 'DD.MM.YYYY'
//     }
//   },
//   rangeSlider: {
//     active: true,
//     elementRef: '.range-slider',
//     opts: {
//       tooltip: 'always',
//       formatter: function(value) {
//         return value + label;
//       }
//     }
//   },
//   backToTop: {
//     active: true,
//     elementRef: '#back-to-top'
//   }
// };
//
// $(function() {
//
//   var jBody = $('body');
//
//   if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//     jBody.addClass('touch-device');
//     document.addEventListener("touchstart", function() {}, false);
//     isMobile = true;
//   }
//
//   if(site_opts) {
//
//     // Body padding offset (fixed menu)
//     if(site_opts.bodyOffset.active) {
//       jBody.css('paddingTop', site_opts.bodyOffset.offsetAmount);
//     }
//
//     // Datetime loader
//     if(site_opts.dateSelector.active) {
//       var dateSelectors = $(site_opts.dateSelector.elementRef);
//       if(dateSelectors.length > 0) {
//         if(!isMobile) {
//           var opts = site_opts.dateSelector.opts;
//           dateSelectors.attr('type', 'text')
//             .datetimepicker( opts );
//         } else {
//           dateSelectors.focus(function() { $(this).attr('type', 'date') });
//         }
//       }
//     }
//
//     // Range slider
//     if(site_opts.rangeSlider.active) {
//       var rangeSliders = $(site_opts.rangeSlider.elementRef);
//       if(rangeSliders.length > 0) {
//         rangeSliders.each(function() {
//           var slider = $(this);
//           var label = slider.data('slider-label');
//           slider.slider( site_opts.rangeSlider.opts );
//         });
//       }
//     }
//
//     // Back to top button
//     if(site_opts.backToTop.active) {
//       $(site_opts.backToTop.elementRef).click(function(e) {
//         e.preventDefault();
//         jBody.animate({ scrollTop: 0 })
//       });
//     }
//
//   }
//
//   // WINDOW SCROLL FUNCTIONS
//   $(window).scroll(function () {
//     var $window = $(this);
//     var scrollTop = $window.scrollTop();
//
//     /*
//     Mettre ici tous les triggers au scroll.
//     Ex :
//
//      if(scrollTop > 50) {
//        // The magic
//      }
//      if(scrollTop <= 50) {
//        // Do stuffs
//      }
//
//      */
//
//   });
//
//   // Reveal div
//   var revealers = $('[data-reveal-trigger]');
//   if(revealers.length > 0) {
//     revealers.click(function() {
//       var $this = $(this);
//       var target = $($this.data('reveal-trigger'));
//       var n_height = target.children(':first').height();
//       target.css({ 'height': n_height });
//     });
//   }
//
//   // Data-hide
//   var hiders = $('[data-hide]');
//   if(hiders.length > 0) {
//     hiders.click(function() {
//       $($(this).data('hide')).animate({'opacity': 0}, function() { $(this).hide() });
//     });
//   }
//
//   // Jquery placeholder ie
//   $('input, textarea').placeholder();
//
//   // Dropdown
//   $(".dropdown-menu li a").click(function() {
//     var selText = $(this).text();
//     $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
//   });
//
//   // Panel Group
//   if (isMobile) {
//     $('.panel-group').on('shown.bs.collapse', function (e) {
//         var offset = $('.panel.panel-default > .panel-collapse.in').offset();
//         if(offset) {
//             $('html,body').animate({
//                 scrollTop: $('.panel-collapse.in').siblings('.panel-heading').offset().top
//             }, 500);
//         }
//     });
//   }
//
// });
//
// // Javascript trigger select open
// function openSelect(elem) {
//   if (document.createEvent) {
//     var e = document.createEvent("MouseEvents");
//     e.initMouseEvent("mousedown", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
//     elem[0].dispatchEvent(e);
//   } else if (element.fireEvent) {
//     elem[0].fireEvent("onmousedown");
//   }
// }
