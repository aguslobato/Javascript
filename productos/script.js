    let food = [
        //HAMBURGUESAS
        {nombre: "Cheese onion doble", precio: 920, categoria: "Hamburguesas", img: "../images/products/hamburguer/BK_WB_CHEESEONIONDOBLE_1200X800_140922.png", id: 1, stock: 55, cantidad: 1,},
        {nombre: "Halloking Whopper", precio: 980, categoria: "Hamburguesas", img: "../images/products/hamburguer/BK_WB_HALLOKINGWHOPPER_1200X800_140922.png", id: 2, stock: 65, cantidad: 1,},
        {nombre: "Doble Cuarto XL", precio: 890, categoria: "Hamburguesas", img: "../images/products/hamburguer/BK_WEB_DOBLE-CUARTO-XL_1200X800_020822.png", id: 3, stock: 34, cantidad: 1,},
        {nombre: "Stacker XL Triple", precio: 1200, categoria: "Hamburguesas", img: "../images/products/hamburguer/BK_WEB_STACKER-XL-_1200X800_020822.png", id: 4, stock: 43, cantidad: 1,},
        {nombre: "Whopper Guacamole", precio: 950, categoria: "Hamburguesas", img: "../images/products/hamburguer/BK_WEB_Whopper-Guacamole_1200X900_210922.png", id: 5, stock: 33, cantidad: 1,},
        {nombre: "Whopper Chimiburga de Carne", precio: 930, categoria: "Hamburguesas", img: "../images/products/hamburguer/Chimiburga_Carne.png", id: 7, stock: 23, cantidad: 1,},

        //ACOMPAÑAMIENTOS
        {nombre: "Aros de Cebolla", precio: 430, categoria: "Acompañamientos", img: "../images/products/additionals/aros-de-cebolla-mediano.png", id: 7, stock: 66, cantidad: 1,},
        {nombre: "Balde de Nuggets", precio: 520, categoria: "Acompañamientos", img: "../images/products/additionals/BaldeNuggets.png", id: 8, stock: 45, cantidad: 1,},
        {nombre: "Balde de Papas", precio: 550, categoria: "Acompañamientos", img: "../images/products/additionals/BaldePapas.png", id: 9, stock: 45, cantidad: 1,},
        {nombre: "Papas con Cheddar y Bacon", precio: 700, categoria: "Acompañamientos", img: "../images/products/additionals/Papas-Cheddar-y-Bacon.png", id: 10, stock: 65, cantidad: 1,},
        {nombre: "Papas con Cheddar", precio: 650, categoria: "Acompañamientos", img: "../images/products/additionals/Papas-Cheddar.png", id: 11, stock: 98, cantidad: 1,},
        {nombre: "Nuggets", precio: 670, categoria: "Acompañamientos", img: "../images/products/additionals/nuggets-x10.png", id: 12, stock: 99, cantidad: 1,},

        //POSTRES
        {nombre: "King Mix Jr. Mani", precio: 450, categoria: "Postres", img: "../images/products/dessert/BK_WEB_KING-MIX.png", id: 13, stock: 44, cantidad: 1,},
        {nombre: "King Mix Brownie", precio: 390, categoria: "Postres", img: "../images/products/dessert/King-Mix-Brownie.png", id: 14, stock: 38, cantidad: 1,},
        {nombre: "King Mix Cookie", precio: 380, categoria: "Postres", img: "../images/products/dessert/King-Mix-Cookies.png", id: 15, stock: 49, cantidad: 1,},
        {nombre: "King Mix Tossy Cookie XL", precio: 390, categoria: "Postres", img: "../images/products/dessert/KM-Toddy.png", id: 16, stock: 59, cantidad: 1,},
        {nombre: "King Mix Mani", precio: 370, categoria: "Postres", img: "../images/products/dessert/MENU_King-Mix-Mani-XL.png", id: 17, stock: 44, cantidad: 1,},
        {nombre: "King Mix Mani XL", precio: 450, categoria: "Postres", img: "../images/products/dessert/MENU_King-Mix-Mani.png", id: 18, stock: 36, cantidad: 1,},

        //ENSALADAS
        {nombre: "Ensalada de Atun", precio: 620, categoria: "Ensaladas", img: "../images/products/salad/BK1543_Final.png", id: 19, stock: 77, cantidad: 1,},
        {nombre: "Ensalada Caesar con pollo", precio: 820, categoria: "Ensaladas", img: "../images/products/salad/ensaladacaesar.png", id: 20, stock: 80, cantidad: 1,},

        //DESAYUNOS / MERIENDAS
        {nombre: "Brownie", precio: 390, categoria: "Desayunos", img: "../images/products/breakfast/Brownie.png", id: 21, stock: 55, cantidad: 1,},
        {nombre: "Tostado Pategras", precio: 990, categoria: "Desayunos", img: "../images/products/breakfast/BK_WB_CONO-RELLENO_1200X800_140922.png", id: 22, stock: 48, cantidad: 1,},
        {nombre: "Tostado de jamon y queso", precio: 880, categoria: "Desayunos", img: "../images/products/breakfast/BK_WEB_TOSTADO-DE-JAMON-Y-QUESO-_1200X800_020822.png", id: 23, stock: 48, cantidad: 1,},
        {nombre: "Baguetin Fresh", precio: 930, categoria: "Desayunos", img: "../images/products/breakfast/BK_WEB_BAGUETIN-FRESH_1200X800_240822.png", id: 24, stock: 56, cantidad: 1,},
        {nombre: "Cafe", precio: 400, categoria: "Desayunos", img: "../images/products/breakfast/Fotos-Menu-1200x800px-cafe.png", id: 25, stock: 120, cantidad: 1,},
        {nombre: "Lagrima", precio: 360, categoria: "Desayunos", img: "../images/products/breakfast/Fotos-Menu-1200x800px-lagrima.png", id: 26, stock: 130, cantidad: 1,},

        //VEGETAL
        {nombre: "Nuggets Vegetales", precio: 620, categoria: "Vegetal", img: "../images/products/vegetable/BK_WEB_SEPTIEMBRE_MENU_NUGGETS-PLANT-BASE_270922_1200x800_.png", id: 27, stock: 45, cantidad: 1,},
        {nombre: "King Vegetal", precio: 950, categoria: "Vegetal", img: "../images/products/vegetable/King-de-Pollo_2604.png", id: 28, stock: 55, cantidad: 1,}
    ]

    let carrito=[]

    const contenedor = document.querySelector('#contenedor')
    const carritoContenedor = document.querySelector('#carritoContenedor')
    const vaciarCarrito = document.querySelector('#vaciarCarrito')
    const precioTotal = document.querySelector('#precioTotal')

    document.addEventListener('DOMContentLoaded', () =>{
        carrito= JSON.parse(localStorage.getItem('carrito')) || []
        productoEnCarrito()
    })

    food.forEach((producto) =>{
        const {id, nombre, precio, categoria, stock, img} = producto
        contenedor.innerHTML += 
        `
            <div class="producto col-6 col-lg-4 p-3">
                <div class="row card-container d-flex flex-column justify-content-center align-items-center rounded-3">
                    <div class="col-12 col-lg-4">
                        <div class="card-container-head"><img class="image-product my-3 img-fluid" src=${img}></div>
                    </div>
                    <div class="col-12 col-lg-8">
                        <div class="card-container-body">
                            <h3 class="name-product mb-2">${nombre}</h3>
                            <span class="category-product me-2">${categoria}</span>
                            <h4 class="price-product">$${precio}</h4>
                            <button class="add-cart" onclick="agregarProducto(${id})"><i class='bx bxs-cart-add'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `
    })


    vaciarCarrito.addEventListener('click', () => {
        carrito.length = []
        productoEnCarrito()
    })

    function agregarProducto(id) {
        let controlStock = food.find(el => el.id === id)
        const productoExistente= carrito.some(producto => producto.id === id)
        if (controlStock.stock>0 ) {
            if (productoExistente) {
                const producto = carrito.map(producto =>{
                    if (producto.id === id) {
                        producto.cantidad++ 
                    }
                    Toastify({
                        text: "Producto agregado al carrito",
                        className: "info",
                        style: {
                            background: "#502314",
                        }
                    }).showToast();
                })
            }else{
                const item = food.find((producto) => producto.id === id)
                carrito.push(item)        
                Toastify({
                    text: "Producto agregado al carrito",
                    className: "info",
                    style: {
                        background: "#502314",
                    }
                }).showToast();
            }
        }
        else{
            Toastify({
                text: "This is a toast",
                className: "error",
                style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
        }

        productoEnCarrito()
    }

    const productoEnCarrito = () => {
        const modalBody = document.querySelector('.modal .modal-body')

        modalBody.innerHTML = ''
        carrito.forEach((producto) =>{
            const {id, nombre, precio, img, cantidad} = producto
            modalBody.innerHTML += `
                <div class="modal-contenedor py-3">
                    <div class="row">
                        <div class="col-4"><img class="img-fluid img-carrito" src="${img}"></div>
                        <div class="col-8"> 
                            <p class="name-product">Producto: ${nombre}</p>
                            <p class="price-product">Precio: $${precio}</p>
                            <p class="quantly-product">Cantidad: ${cantidad}</p>
                            <div class="d-flex justify-content-start align-items-center">
                                <div class="content-quantly me-2">
                                    <button class="btn btn-primary">+</button>
                                    <button class="btn btn-primary">-</button>
                                </div>
                                <div class="col-6"><button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar Producto</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })
    
        if (carrito.length === 0){
            modalBody.innerHTML = `<p class="text-center text-primary parrafo">¡Tu carrito esta vacio!</p>`
        }
        carritoContenedor.textContent = carrito.length
        precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0)
        almacenarStorage()
    }

    const procesarComprar = () => {
        const pedidoBody = document.querySelector('.pedido .pedido-body')

        pedidoBody.innerHTML = ''
        carrito.forEach((producto) => {
            const {id, nombre, precio, img, cantidad} = producto
            pedidoBody.innerHTML += `
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
            `
        })
    }


    function eliminarProducto(id){
        const insumoId = id
        carrito = carrito.filter((insumo) => insumo.id !== insumoId)
        productoEnCarrito()
    }

    function almacenarStorage(){
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }