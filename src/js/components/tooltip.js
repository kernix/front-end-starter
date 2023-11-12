/**
 * Default Tooltip
 * @description This function initializes a Bootstrap tooltip.
 */

export const tooltip = () => {

  const tooltipTriggers = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltips = [...tooltipTriggers].map((trigger) => new bootstrap.Tooltip(trigger));

}

/**
 * Alternatif tooltip
 * @description This function initializes a Bootstrap tooltip with alternative options.
 */
export const altTooltip = () => {

  const tooltipAltTriggers = document.querySelectorAll('[data-bs-toggle="tooltip-alt"]');
  const tooltipAltOptions = {
    container: 'body',
    html: true,
    trigger: 'hover focus'
  };
  const altTooltips = [...tooltipAltTriggers].map((trigger) => new bootstrap.Tooltip(trigger, tooltipAltOptions));
}