const scriptURL = 'https://script.google.com/macros/s/AKfycbwkyVO2SqSM_5cUnK1EZ8GfOZk6ngGEnA9-PakFcOHGwblZk-o/exec';
const reCAPTCHAKey = '6LensIQfAAAAACMPaOr8HXs25IPktcbr-xMipoT6';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms['rsvp-form'];
  if (form) {
    form.addEventListener('submit', async (e) => {
      const submitButton = form.querySelector('#submit-button');
      submitButton.disabled = true;
      submitButton.innerHTML = 'Saving...'

      e.preventDefault()

      grecaptcha.ready(async () => {
        await grecaptcha.execute(reCAPTCHAKey, { action: 'submit' })

        const formData = new FormData(form);
        const attending = formData.get('Attending') === 'Yes';

        const response = await fetch(scriptURL, { method: 'POST', body: formData });
        if (response.status == 200) {
          form.innerHTML = `<div class='lead'><p>Thank you for responding.</p>${attending ? "We can't wait to see you at the wedding" : "We are sorry that you can't make it"}.</div>`
        }
      });
    });
  }
});