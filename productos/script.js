    let food = []
    let carrito=[]

    const contenedor = document.querySelector('#contenedor')
    const carritoContenedor = document.querySelector('#carritoContenedor')
    const vaciarCarrito = document.querySelector('#vaciarCarrito')
    const precioTotal = document.querySelector('#precioTotal')
    const procesarPedido = document.querySelector('#procesarPedido')
    const clientName = document.querySelector('#clientName')

    document.addEventListener('DOMContentLoaded', () =>{
        carrito= JSON.parse(localStorage.getItem('carrito')) || []
        productoEnCarrito()
    })

    function ListaProductos(){
        food.forEach((producto) =>{
            const {id, nombre, precio, categoria, stock, img} = producto
            contenedor.innerHTML += 
            `
                <div class="producto col-6 col-lg-4 p-3">
                    <div class="row card-container p-0 d-flex justify-content-center align-items-center rounded-3">
                        <div class="col-lg-4">
                            <div class="card-container-head"><img class="image-product my-3 img-fluid" src=${img}></div>
                        </div>
                        <div class="col-lg-8">
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
    }

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
                })
                Toastify({
                    text: "Producto agregado al carrito",
                    className: "info",
                    style: {
                        background: "#502314",
                    }
                }).showToast();
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

    function restarProducto (id) {
        const producto = carrito.map(producto =>{
            if (producto.id === id) {
                if (producto.cantidad === 1) {
                    eliminarProducto(id)
                }
                producto.cantidad = producto.cantidad - 1
            }
        })
        productoEnCarrito()
    }

    const productoEnCarrito = () => {
        const modalBody = document.querySelector('.modal .modal-body')

        modalBody.innerHTML = ''
        carrito.forEach((producto) =>{
            const {id, nombre, precio, img, cantidad} = producto
            modalBody.innerHTML += `
                <div class="modal-contenedor py-4">
                    <div class="row">
                        <div class="col-4"><img class="img-fluid img-carrito" src="${img}"></div>
                        <div class="col-8"> 
                            <p class="name-product">Producto: ${nombre}</p>
                            <p class="price-product">Precio: $${precio}</p>
                            <p class="quantly-product">Cantidad: ${cantidad}</p>
                            <div class="d-flex justify-content-start align-items-center">
                                <div class="content-quantly me-2">
                                    <button class="btn btn-primary sumar" onclick="agregarProducto(${id})">+</button>
                                    <button class="btn btn-primary restar" onclick="restarProducto(${id})">-</button>
                                </div>
                                <div class="col-6"><button onclick="eliminarProducto(${id})" class="btn btn-danger">Eliminar Producto</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })
    
        if (carrito.length === 0){
            modalBody.innerHTML = `<p class="text-center text-danger parrafo">¡Tu carrito esta vacio!</p>`
        }
        carritoContenedor.textContent = carrito.length
        precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0)
        almacenarStorage()
    }

    function eliminarProducto(id){
        const insumoId = id
        carrito = carrito.filter((insumo) => insumo.id !== insumoId)
        productoEnCarrito()
    }

    function almacenarStorage(){
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }

    function pedido(){
        swal("Pedido Realizado", "Muchas gracias por su compra", "success");
        carrito.length = []
        productoEnCarrito()
    }
    
    async function pruebaAsync() {
        const respuesta = await fetch("./productos.json")
        const data = await respuesta.json()

        food = data
        ListaProductos()
      }
    pruebaAsync()

