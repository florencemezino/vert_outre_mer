// zoom article photos

$(document).ready(function() {

    $('.article-container').mouseover(function() {

        $(this).find('.article-img-holder').css('transform', 'scale(1.2)');
    });

    $('.article-container').mouseout(function() {

        $(this).find('.article-img-holder').css('transform', 'scale(1)');
    });
});


// newsletter modal function

const subscribeBtn = document.querySelector('#subscribe-btn');

const ignore = document.getElementById('ignore');
ignore.addEventListener("click", () => {
    subscribeBtn.style.display = 'none';
})

const form = document.getElementById('form');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    subscribeBtn.innerText = 'subscribed';
    subscribeBtn.pointerEvents = 'none';
})


