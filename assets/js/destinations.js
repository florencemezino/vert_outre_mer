// zoom hero image

$(document).ready(function() {

    $('.hero-container-fluid').mouseover(function() {

        $(this).find('.hero-img-holder').css('transform', 'scale(1.2)');
    });

    $('.hero-container-fluid').mouseout(function() {

        $(this).find('.hero-img-holder').css('transform', 'scale(1)');
    });
});
