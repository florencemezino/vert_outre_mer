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
            contactForm.innerHTML = `<h2 style="font-size:100px; margin: 200px;">Message sent!</h2><br>
            <span style="font-size: 50px; margin: 200px;">Thank you for your request. We sent you an email confirmation. Please check your junk or spam folder.</span>`;
        }, function (error) {
            console.log('FAILED...', error);
        });

});

// change text from the image on the right when form is submitted

