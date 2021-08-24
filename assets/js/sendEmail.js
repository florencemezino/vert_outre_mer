// emailjs submit contact form

const contactForm = document.querySelector('#form-details');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    

    const fields = {
        "customer_status": form.customer_status.value,
        "customer_name": form.customer_name.value,
        "customer_email": form.customer_email.value,
        "customer_request": form.customer_request.value,
    };
    console.log(emailjs);

    emailjs.send('gmail', 'email_request', fields)
        .then(function (response) {
            console.log('MESSAGE SENT!', response.status, response.text);
            contactForm.innerHTML = `<h4 style="color: #146A84; font-size: 60px; margin-top: 230px; text-align: center;"><i class="far fa-paper-plane"></i> Message sent!</h4><br>
            <h2 style="color=#fafafa; text-align: center;">Thank you for your request. We sent you an email confirmation. Please check your junk or spam folder.</h2>`;
        }, function (error) {
            console.log('FAILED...', error);
        });

});

