const scriptURL = 'https://script.google.com/macros/s/AKfycbzfGPTzT0eNEIxOg9P-047ar26ICPLdcp6-w5gOPAtntctmK8DqOl3egv1HJs-nVReN/exec'

const form = document.forms['form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you ! Your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error !', error.message))
})