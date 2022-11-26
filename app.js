/*const stockProductos = [
    {
        id: 1,
        nombre: "Zapacuario",
        cantidad: 1,
        desc: "zapato y acuario",
        precio: 70,
        img: "./images/zapacuario.jpg"
    },
    {
        id: 2,
        nombre: "Arnes para gallo",
        cantidad: 1,
        desc: "Arnes para Gallo",
        precio: 20,
        img: "./images/arnesgallo.jpg" 
    },
    {
        id: 3,
        nombre: "Secador manos libres",
        cantidad: 1,
        desc: "Secador manos libres",
        precio: 99,
        img: "./images/zapacuario.jpg" 
    },
    {
        id: 4,
        nombre: "Pezchancla",
        cantidad: 1,
        desc: "Chanclas de pez",
        precio: 70,
        img: "./images/pezchancla.jpeg" 
    },
    {
        id: 5,
        nombre: "Tocador para puerta",
        cantidad: 1,
        desc: "zapato y acuario",
        precio: 90,
        img: "./images/zapacuario.jpg" 
    },
    {
        id: 6,
        nombre: "MiniGolf baño",
        cantidad: 1,
        desc: "zapato y acuario",
        precio: 70,
        img: "./images/minigolf.png" 
    }
    ];

let carrito = []


const contenedor = document.querySelector('#container')

stockProductos.forEach((prod) => {
    const {id, nombre, precio, desc, img, cantidad} = prod
    contenedor.innerHTML += `
    <div class="card">
    <img src="${img}" class="card-img-top" alt="Zapato y Acuario">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">${precio}</p>
      <p class="card-text">Cantidad:${cantidad}</p>
      <button onclick="agregarProducto(${id})" type="button" class="btn btn-warning">¡Lo Quiero!</button>
    </div>
  </div>
   
    `
})

function agregarProducto(id){
    const item = stockProductos.find((prod) => prod.id ===id)
    console.log(carrito)
}*/

const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})
