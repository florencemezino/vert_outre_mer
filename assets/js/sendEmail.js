function sendMail(contactForm) {
    emailjs.send("gmail","reception_confirmation",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "general_request": contactForm.generalrequest.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error)
            });
}

