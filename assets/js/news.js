// zoom article photos

$(document).ready(function() {

    $('.article-container').mouseover(function() {

        $(this).find('.article-img-holder').css('transform', 'scale(1.2)');
    });

    $('.article-container').mouseout(function() {

        $(this).find('.article-img-holder').css('transform', 'scale(1)');
    });
});


// newsletter close modal

$('#button').submit(function(e) {
    e.preventDefault();
    // Coding
    $('#popup').modal('toggle'); //or  $('#IDModal').modal('hide');
    return false;
});


