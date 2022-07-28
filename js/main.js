const navEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.icon-menu') 
const mobileMenu = document.querySelector('.mobile-menu') 
const menuCarrito = document.querySelector('.nav-shopping-car')
const asideCarrito = document.querySelector('.product-detail')


navEmail.addEventListener('click', toggleMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarrito);

function toggleMenu() {
    if (!asideCarrito.classList.contains('inactive')) {
        asideCarrito.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    if (!asideCarrito.classList.contains('inactive')) {
        asideCarrito.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}


function toggleCarrito() {

    if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add('inactive')
    }

    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive')
    }

    asideCarrito.classList.toggle('inactive')
      
}