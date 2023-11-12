/**
 * Custom select
 * @description This function initializes a custom select.
 */

import Choices from 'choices.js';

export const select = () => {
    // Select (Choices.js)
    const selectElements = document.querySelectorAll('select');
    selectElements.forEach((selectElement) => {
        const choices = new Choices(selectElement, {
            searchEnabled: false,
            placeholder: true,
            placeholderValue: 'Sélectionnez une option',
            itemSelectText: '',
        });
    });

    // Select dropdown
    // const dropdown = document.getElementById('select1');
    // function updateSelectDropdown(element) {
    //     const data = element.id;
    //     const selectValue = document.querySelectorAll(`[data-select='${data}']`)[0].value;
            
    //     const button = element.getElementsByTagName('button');
    //     button[0].innerHTML = selectValue;
    // } 
    // updateSelectDropdown(dropdown);    
    // dropdown.addEventListener('click', (event) => {
    //     const data = dropdown.id;
    //     const elem = event.target;
    //     const text = elem.innerHTML;
    //     const button = dropdown.getElementsByTagName('button');
            
    //     if (elem.classList.contains('dropdown-item')) {
    //         button[0].innerHTML = text;
    //         const selectValue = document.querySelectorAll(`[data-select='${data}']`)[0].value = text;
    //     }
    // });

}