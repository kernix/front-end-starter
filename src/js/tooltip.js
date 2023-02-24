// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Tooltip Alt
const tooltipTriggerAltList = document.querySelectorAll('[data-bs-toggle="tooltip-alt"]')
const tooltipAltList = [...tooltipTriggerAltList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {
  container: tooltipTriggerEl.parentElement,
  html: true,
  trigger: 'hover focus'
}))
