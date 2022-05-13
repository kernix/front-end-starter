var modalFocus = $(".modal");
modalFocus.on("shown.bs.modal", function() {
  $('.dialog-off-canvas-main-canvas').attr('aria-hidden', 'true');
  var modalFocusClose = $(this).children('.close');
  modalFocusClose.trigger('focus');
});
modalFocus.on('hidden.bs.modal', function (e) {
  $('.dialog-off-canvas-main-canvas').attr('aria-hidden', 'false');
})

var accessMobile = $('.access-mobile');
if ($(window).width() < 768) {
  accessMobile.removeAttr('tabindex').removeAttr('aria-hidden');
}
$(window).resize(function() {
  if ($(window).width() < 768) {
    accessMobile.removeAttr('tabindex').removeAttr('aria-hidden');
  } else {
    accessMobile.attr('tabindex', -1).attr('aria-hidden', true);
  }
});

// Focus Link
selectors = {
  container: '.html-core'},

classes = {
  containerHasFocus: 'html-focus' },

container = document.querySelector(selectors.container),
btn = document.querySelector(selectors.btn);

// Add the focus class to the container if the keyboard
// event is an element within the container
document.addEventListener('keyup', function(e) {
  if (container.contains(e.target)) {
    container.classList.add(classes.containerHasFocus);
  } else {
    container.classList.remove(classes.containerHasFocus);
  }
});

// Remove the focus class on mouse click
document.addEventListener('mousedown', function(e) {
  if (container.contains(e.target)) {
    container.classList.remove(classes.containerHasFocus);
  }
});
