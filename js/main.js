const navEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleMenu);

function toggleMenu() {
    desktopMenu.classList.toggle('inactive')
}