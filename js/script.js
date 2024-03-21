const hamburger = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.hamburger-nav');

// Hamburger toggle when smaller screen

if(hamburger) {
    hamburger.addEventListener('click', ()=> {
        navMenu.classList.toggle('open')
    });
}