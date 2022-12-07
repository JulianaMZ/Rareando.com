const addProductButton = document.querySelectorAll(".btn")

addProductButton.forEach(variable => {
    variable.addEventListener('click', addToCartClicked)
});

const addProductTramitar = document.querySelector(".btn-go-to-cart")
addProductTramitar.addEventListener('click', addToCartClicked)

const shoppingBasketCardContainer = document.querySelector('.basket');
let productsBasket = []

function addToCartClicked(event) {
    const button = event.target;
    const card = button.closest('.card');

    const cardTitle = card.querySelector('.card-title').textContent;
    const cardPrice = card.querySelector('.card-text').textContent;
    const cardImage = card.querySelector('.card-img-top').src;
   
    productsBasket.push({cardTitle, cardPrice, cardImage});
    console.log(productsBasket);
    return productsBasket;
   
};

console.log(productsBasket)


function addCardToShoppingBasket(array) {

    for (const product of array) {
        const shoppingBasketContent = `
        <div class="row-shopping-basket">
            <img src="${product.cardImage}" alt="" class="basket-img">
            <div id="basket-title">${product.cardTitle}</div>
            <div id="basket-price">${product.cardPrice}</div>
            <p>+</p>
            <div id="quantity"></div>          
            <p>-</p>
            <div id="bin"></div>
        </div>`
    
     const productBasketDivElement = document.createElement('div');
     productBasketDivElement.innerHTML = shoppingBasketContent;
     shoppingBasketCardContainer.appendChild(productBasketDivElement)

}}

addCardToShoppingBasket(productsBasket)

console.log( addCardToShoppingBasket(productsBasket)
)
