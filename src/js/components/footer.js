/**
 * Footer Accordion
 * @description This function adds click event listeners to all elements with the class 'footer-nav-title' and toggles the active class and slide toggle for the next element when clicked.
 */

export const footerAccordion = () => {
    const footerAccordion = document.querySelectorAll('.footer-nav-title');

    footerAccordion.forEach((thisFooterAccordion) => {
        thisFooterAccordion.addEventListener('click', (event) => {
            thisFooterAccordion.classList.toggle('active');
            thisFooterAccordion.nextElementSibling.slideToggle();
        });
    });
}