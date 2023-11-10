// Tooltip standard
const tooltipTriggers = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltips = [...tooltipTriggers].map((trigger) => new bootstrap.Tooltip(trigger));

// Tooltip alternatif
const tooltipAltTriggers = document.querySelectorAll('[data-bs-toggle="tooltip-alt"]');
const tooltipAltOptions = {
  container: 'body',
  html: true,
  trigger: 'hover focus'
};
const tooltipAlts = [...tooltipAltTriggers].map((trigger) => new bootstrap.Tooltip(trigger, tooltipAltOptions));
