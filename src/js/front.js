import { wrap } from "./helpers.js";

const $ = require('jquery');
// const AOS = require('aos');

// Main JS
var ready = (callback) => {
if (document.readyState != "loading") callback();
else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {

  // Custom file input
  let customLabel = document.getElementById('custom-input-file')
  let inputFile = document.getElementById('formFileCustom');
  let customFilesName = customLabel.getElementsByClassName("files-chosen")[0];
  
  customLabel.addEventListener('change', (event) => {
    if(inputFile.files.length > 0) {
      customFilesName.innerHTML = "";
      for (let i = 0; i < inputFile.files.length; i++) {
        customFilesName.textContent += inputFile.files.item(i).name + ", ";
      }
      }

    else {
        customFilesName.innerHTML = "Aucun fichier choisi";
    }
  }) 


  // Bind select dropdown on ready
  let dropdownBind = document.getElementById('select1');

   function bindSelectDropdown(element) {
    let data = element.id;
    let selectValue = document.querySelectorAll(`[data-select='${data}']`)[0].value;
    
    let button = element.getElementsByTagName("button");
      button[0].innerHTML = selectValue;
  } 

  bindSelectDropdown(dropdownBind)

  // Bind select dropdown on change 
  
  dropdownBind.addEventListener('click', (event) => {
    let data = dropdownBind.id;
    var elem = event.target;
    var text = elem.innerHTML;
    let button = dropdownBind.getElementsByTagName("button");
    

    if (elem.classList.contains("dropdown-item")) {
        button[0].innerHTML = text;
        let selectValue = document.querySelectorAll(`[data-select='${data}']`)[0].value = text;
    };
  });

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

});


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
