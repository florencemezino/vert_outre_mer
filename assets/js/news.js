
// newsletter modal function

const subscribeBtn = document.querySelector('#subscribe-btn');

const ignore = document.getElementById('ignore');
ignore.addEventListener("click", () => {
    subscribeBtn.style.display = 'none';
});

const form = document.getElementById('form');
form.addEventListener("submit", (event) => {
    event.preventDefault();
    subscribeBtn.innerText = 'subscribed';
    subscribeBtn.pointerEvents = 'none';
});

