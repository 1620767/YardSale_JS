const navEmail = document.querySelector('.nav-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.icon-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarrito = document.querySelector('.nav-shopping-car');
const asideCarrito = document.querySelector('.shopping-container');
const productInfoContainer = document.querySelector('.productInfo-container');
const productDetailClose = document.querySelector('.product-detail-close');

const productList = [];
const cardsContainer = document.querySelector('.cards-container')


navEmail.addEventListener('click', toggleMenu);
iconMenu.addEventListener('click', toggleMobileMenu);
menuCarrito.addEventListener('click', toggleCarrito);
productDetailClose.addEventListener('click', closeDetailInfo)

function toggleMenu() {
    if (!asideCarrito.classList.contains('inactive')) {
        asideCarrito.classList.add('inactive')
    }

    if (!productInfoContainer.classList.contains('inactive')) {
        productInfoContainer.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    if (!asideCarrito.classList.contains('inactive')) {
        asideCarrito.classList.add('inactive')
    }

    if (!productInfoContainer.classList.contains('inactive')) {
        productInfoContainer.classList.add('inactive')
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

    if (!productInfoContainer.classList.contains('inactive')) {
        productInfoContainer.classList.add('inactive')
    }

    asideCarrito.classList.toggle('inactive')
    
}

productList.push({
    name: 'Nom Product',
    price: 120.00,
    image: '../assets/products/mueble.jpg'
})

productList.push({
    name: 'Nom Product',
    price: 120.00,
    image: '../assets/products/mueble.jpg'
})

productList.push({
    name: 'Nom Product',
    price: 120.99,
    image: '../assets/products/mueble.jpg'
})

productList.push({
    name: 'Nom Product',
    price: 120.99,
    image: '../assets/products/mueble.jpg'
})

productList.push({
    name: 'Nom Product',
    price: 120.99,
    image: '../assets/products/mueble.jpg'
})

productList.push({
    name: 'Nom Product',
    price: 120.99,
    image: '../assets/products/mueble.jpg'
})

productList.push({
    name: 'Nom Product',
    price: 120.99,
    image: '../assets/products/mueble.jpg'
})

function renderProducts(arr){
    for (product of arr) {
        const producCard = document.createElement('div');
        producCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
        img.addEventListener('click', openProductInfo)
    
        const producInfo = document.createElement('div');
        producInfo.classList.add('product-info');
    
    
        /* <div> */
        const producInfoDiv = document.createElement('div');
    
        const producPrice = document.createElement('p');
        producPrice.innerText = '$ ' + product.price;
    
        producInfoDiv.appendChild(producPrice)
    
        const producName = document.createElement('p');
        producName.innerText =  product.name;
    
        producInfoDiv.appendChild(producName)
    
        /* <figure> */
        const producInfoFigure = document.createElement('figure');
        const producImgCard = document.createElement('img') 
        producImgCard.setAttribute('src', '../assets/icons/bt_add_to_cart.svg')
        producInfoFigure.appendChild(producImgCard)
    
        
    
        /*  <div class="product-info"> */
        producInfo.append(producInfoDiv,producInfoFigure);
    
        /*  <div class="product-card">  */
        producCard.append(img,producInfo)
    
        cardsContainer.appendChild(producCard)
    }
}

renderProducts(productList)

function openProductInfo() {

    if (!asideCarrito.classList.contains('inactive')) {
        asideCarrito.classList.add('inactive')
    }
    
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add('inactive')
    }

    productInfoContainer.classList.remove('inactive')
}

function closeDetailInfo() {
    productInfoContainer.classList.add('inactive')
}