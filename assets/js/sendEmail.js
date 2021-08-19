
function sendMail(contactForm) {
    console.log("contact form", contactForm)

emailjs.send("gmail","reception_request",{
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
