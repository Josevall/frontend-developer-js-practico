// Navbar-email desplegable

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}


// mobile-menu desplegable

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

// navbar-shopping-cart desplegable

const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuCartIcon.addEventListener('click', toggleCartAside);

function toggleCartAside() {
    aside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive')

}

// Agregando los productos con JS

const productList = []; // Creamos el array

const cardsContainer = document.querySelector('.cards-container'); 

productList.push({  // nombreDelArray.push para agregar elementos al final del array
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})
productList.push({
    name: 'Car',
    price: 660,
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg',
})
productList.push({
    name: 'Motorcycle',
    price: 120,
    image: 'https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Bus',
    price: 740,
    image: 'https://images.pexels.com/photos/2045249/pexels-photo-2045249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Plane',
    price: 1440,
    image: 'https://images.pexels.com/photos/113585/pexels-photo-113585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})
productList.push({
    name: 'Tren',
    price: 2880,
    image: 'https://images.pexels.com/photos/3121299/pexels-photo-3121299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
})


function renderProducts(arr) {
    for (product of productList) {  // un ciclo For mas sencillo
        const productCard = document.createElement('div'); // se crea el primer div como en el html
        productCard.classList.add('product-card'); //se le agrega la clase al div
    
        
    
        // product = {name, price, image} --> product.img para sacar la imagen que tengamos en el elemento del array. 
        const proudctImg = document.createElement('img');
        proudctImg.setAttribute('src', product.image); // 
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;  // --> igual que con la imagen, para sacar el precio que tengamos en el elemento del array price, ponemos .price
        const productName = document.createElement('p');
        productName.innerText = product.name; // --> igual que con la imagen y el precio, para sacar el nombre que tengamos en el elemento del array name, ponemos .name
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg"); // Ya que ahora la imagen no es dinamica sino hardcodeada
    
        //Procedemos a integrar a cada hijo dentro de sus padres, para ello usamos appen o appenChild... El apeendChild deja meter solo un elemento, mientras que append deja meter todos los elementos que se quieran.
    
        productInfoFigure.appendChild(productImgCart);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
        productCard.append(proudctImg, productInfo);
    
    
        //Para esto tuvimos que crear la constante cardsContainer que es el contenedor padre de todas las cards. Esta justo debajo del array creado en esta seccion.
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);