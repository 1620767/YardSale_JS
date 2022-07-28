const navEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.icon-menu') 
const mobileMenu = document.querySelector('.mobile-menu') 

navEmail.addEventListener('click', toggleMenu);
iconMenu.addEventListener('click', toggleMobileMenu);

function toggleMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}