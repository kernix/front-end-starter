// Datepicker 
import flatpickr from "flatpickr";
import "flatpickr/dist/l10n/fr.js";

var ready = (callback) => {
if (document.readyState != "loading") callback();
else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {

  // Datepicker
  flatpickr(".datepicker", {
    dateFormat: "d/m/Y",
    locale: "fr",
    disableMobile: true
  });
  
});