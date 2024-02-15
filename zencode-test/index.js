const header = document.getElementById('header');
const amountText = document.getElementById('amount');
const mainSection = document.getElementById('main');
let scrollTimeout;

window.addEventListener('scroll', function() {

    let scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        header.classList.add('scrolled');
        amountText.classList.add('scrolled');
        mainSection.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        amountText.classList.remove('scrolled');
        mainSection.classList.remove('scrolled');
    }
});