const scriptURL = 'https://script.google.com/macros/s/AKfycbxEt7IYZeFq98Q230YXPMphi0gOkE-906EYJ36S9KGv5O4qifYmGODdapbFVaA2f0aP/exec';
const form = document.forms['appointments'];

form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button');
  btn.disabled = true;
  btn.innerText = "Booking...";

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
       window.location.href = "success.html"; 
    })
    .catch(error => {
       alert("Error! Please try again.");
       btn.disabled = false;
       btn.innerText = "Confirm Request";
    });
});
