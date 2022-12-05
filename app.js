
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

const productsList = document.querySelector('.container-items');

let allProducts = [];

let valorTotal = document.querySelector('.total-pay');

let countProducts = document.querySelector('#product-counter');


let minusPlus = document.querySelector('.glyphicon')


productsList.addEventListener('click', e => {

    if (e.target.classList.contains('btn-warning')) {
        const product = e.target.parentElement;

        const col = {
            quantity: 1,
            minus: product.querySelector('.glyphicon-minus'),
            title: product.querySelector('.card-title').textContent,
            plus: product.querySelector('glyphicon-plus'),
            price: product.querySelector('.card-text').textContent,
        };

        const exits = allProducts.some(product => product.title === col.title);

        if (exits){
            const products = allProducts.map(product => {
                if(product.title === col.title){
                    product.quantity++;
                    return product
                } else{
                    return product
                }

            });
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, col];
        }

        showHTML();
    }


});

rowProduct.addEventListener('click', (e) => {
    if(e.target.classList.contains('icon-close')){
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent

        allProducts = allProducts.filter(product => product.title !== title);

        showHTML();
    }
    
});



const showHTML = () => {

    if(!allProducts.length){
        containerCartProducts.innerHTML=`
        <p class= "cart-empty" id="cart-empty">El carrito esta vacio</p>
        `
    }

    rowProduct.innerHTML = '';

    let productMinusplus = 0;
    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="quantity-product-cart">${product.quantity}</span>
                <p><span class="glyphicon glyphicon-minus">${product.minus}</span></p> 
                <p class="product-cart-title">${product.title}</p>
                <p><span class="glyphicon glyphicon-plus">${product.plus}</span></p>
                <span class="product-cart-price">${product.price}</span>
                <i class="fa fa-close icon-close" style="font-size:15px"></i>
            </div>
        `;

        rowProduct.append(containerProduct);

        productMinusplus = productMinusplus + parseInt(product.quantity - product.minus);

        total = total + parseInt(product.quantity * product.price);
        totalOfProducts = totalOfProducts + product.quantity;

    });

    minusPlus.innerText = productMinusplus
    valorTotal.innerText = `${total}`;
    countProducts.innerText = totalOfProducts;

};