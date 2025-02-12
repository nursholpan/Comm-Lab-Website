// Navigation Bar Animation 
const menuBar = document.querySelector('.Menu');


window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        menuBar.classList.add('scrolled');
    } else {
        menuBar.classList.remove('scrolled');
    }
});