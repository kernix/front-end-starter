// Wrap function
export function wrap(el, wrapper, className) {
  el.parentNode.insertBefore(wrapper, el);
  wrapper.appendChild(el);
  if (className) {
    wrapper.classList.add(className);
  }
}
