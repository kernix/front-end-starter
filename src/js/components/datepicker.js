// Datepicker 
import flatpickr from "flatpickr";
import "flatpickr/dist/l10n/fr.js";
import { ready } from '../utils/utils';

ready(() => {

  const datepickerOptions = {
    dateFormat: "d/m/Y",
    locale: "fr",
    disableMobile: true
  };

  const datepickerElements = document.querySelectorAll(".datepicker");

  datepickerElements.forEach((element) => {
    if (element) {
      flatpickr(element, datepickerOptions);
    }
  });
  
});

