import Choices from "choices.js";

// Custom Select 
var ready = (callback) => {
if (document.readyState != "loading") callback();
else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {

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
    // let dropdownBind = document.getElementById('select1');
    // function bindSelectDropdown(element) {
    //   let data = element.id;
    //   let selectValue = document.querySelectorAll(`[data-select='${data}']`)[0].value;
      
    //   let button = element.getElementsByTagName("button");
    //     button[0].innerHTML = selectValue;
    // } 
    // bindSelectDropdown(dropdownBind);    
    // dropdownBind.addEventListener('click', (event) => {
    //   let data = dropdownBind.id;
    //   var elem = event.target;
    //   var text = elem.innerHTML;
    //   let button = dropdownBind.getElementsByTagName("button");
      
    //   if (elem.classList.contains("dropdown-item")) {
    //       button[0].innerHTML = text;
    //       let selectValue = document.querySelectorAll(`[data-select='${data}']`)[0].value = text;
    //   };
    // });
});