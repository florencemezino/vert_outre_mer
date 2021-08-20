// emailjs  : autoreply sent to user and to data sent to host

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

    // contact form modal submit confirmation

    $('#form').submit(function(e) {
        $('#messages').removeClass('hide').addClass('alert alert-success alert-dismissible').slideDown().show();
        $('#messages_content').html('<h4>Message sent!</h4>');
        $('#modal').modal('show');
        e.preventDefault();
    });