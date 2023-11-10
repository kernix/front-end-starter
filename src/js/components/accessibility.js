const modalFocus = document.querySelectorAll('.modal');
modalFocus.forEach((modal) => {
  modal.addEventListener('shown.bs.modal', () => {
    document.querySelector('.dialog-off-canvas-main-canvas').setAttribute('aria-hidden', 'true');
    const modalFocusClose = modal.querySelector('.close');
    modalFocusClose.focus();
  });
  modal.addEventListener('hidden.bs.modal', () => {
    document.querySelector('.dialog-off-canvas-main-canvas').setAttribute('aria-hidden', 'false');
  });
});

const accessMobile = document.querySelector('.access-mobile');
if (window.innerWidth < 768) {
  accessMobile.removeAttribute('tabindex');
  accessMobile.removeAttribute('aria-hidden');
}
window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    accessMobile.removeAttribute('tabindex');
    accessMobile.removeAttribute('aria-hidden');
  } else {
    accessMobile.setAttribute('tabindex', '-1');
    accessMobile.setAttribute('aria-hidden', 'true');
  }
});

// Focus Link
const selectors = {
  container: '.html-core',
};

const classes = {
  containerHasFocus: 'html-focus',
};

const container = document.querySelector(selectors.container);
const btn = document.querySelector(selectors.btn);

// Add the focus class to the container if the keyboard
// event is an element within the container
document.addEventListener('keyup', (e) => {
  if (container.contains(e.target)) {
    container.classList.add(classes.containerHasFocus);
  } else {
    container.classList.remove(classes.containerHasFocus);
  }
});

// Remove the focus class on mouse click
document.addEventListener('mousedown', (e) => {
  if (container.contains(e.target)) {
    container.classList.remove(classes.containerHasFocus);
  }
});
