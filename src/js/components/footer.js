/**
 * Footer Accordion
 * @description This function adds click event listeners to all elements with the class 'footer-nav-title' and toggles the active class and slide toggle for the next element when clicked.
 */

export const footerAccordion = () => {
    const footerAccordion = document.querySelectorAll('.footer-nav-title');

    if (window.matchMedia('(max-width: 767px)').matches) {
        footerAccordion.forEach((thisFooterAccordion) => {
            // Transform to button
            const button = document.createElement('button');
            button.type = 'button';
            button.className = thisFooterAccordion.className + ' btn btn-link btn-full';
            button.innerHTML = thisFooterAccordion.innerHTML;
            button.setAttribute('aria-expanded', 'false');
            thisFooterAccordion.parentNode.replaceChild(button, thisFooterAccordion);

            button.addEventListener('click', () => {
                const isExpanded = button.getAttribute('aria-expanded') === 'true';
                button.setAttribute('aria-expanded', !isExpanded);
                button.classList.toggle('active');
                button.nextElementSibling.slideToggle();

                // Focus on first link after toggle
                if (!isExpanded) {
                    setTimeout(() => {
                        const firstLink = button.nextElementSibling.querySelector('a');
                        if (firstLink) {
                            firstLink.focus();
                        }
                    }, 100); // Small delay to allow slideToggle to complete
                }
            });
        });
    } else {
        footerAccordion.forEach((thisFooterAccordion) => {
            thisFooterAccordion.addEventListener('click', () => {
                thisFooterAccordion.classList.toggle('active');
                thisFooterAccordion.nextElementSibling.slideToggle();

                // Focus on first link after toggle
                if (thisFooterAccordion.classList.contains('active')) {
                    setTimeout(() => {
                        const firstLink = thisFooterAccordion.nextElementSibling.querySelector('a');
                        if (firstLink) {
                            firstLink.focus();
                        }
                    }, 100); // Small delay to allow slideToggle to complete
                }
            });
        });
    }
}