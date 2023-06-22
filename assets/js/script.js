/*
  || GET FORMS CONTACT SUBMITING
*/

/* GET VALUES OF FORM AND VERIFY */
const form = document.querySelector('form');
const popup = document.querySelector(".popup-message");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  popup.style.display = "block";
});
