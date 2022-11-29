 let food = [
    //HAMBURGUESAS
    {name: "Cheese onion doble", price: 920, category: "Hamburguesas", imageURL: "../../images/products/hamburguer/BK_WB_CHEESEONIONDOBLE_1200X800_140922.png", id: 1, stock: 55},
    {name: "Halloking Whopper", price: 980, category: "Hamburguesas", imageURL: "../../images/products/hamburguer/BK_WB_HALLOKINGWHOPPER_1200X800_140922.png", id: 2, stock: 65},
    {name: "Doble Cuarto XL", price: 890, category: "Hamburguesas", imageURL: "../../images/products/hamburguer/BK_WEB_DOBLE-CUARTO-XL_1200X800_020822.png", id: 3, stock: 34},
    {name: "Stacker XL Triple", price: 1200, category: "Hamburguesas", imageURL: "../../images/products/hamburguer/BK_WEB_STACKER-XL-_1200X800_020822.png", id: 4, stock: 43},
    {name: "Whopper Guacamole", price: 950, category: "Hamburguesas", imageURL: "../../images/products/hamburguer/BK_WEB_Whopper-Guacamole_1200X900_210922.png", id: 5, stock: 33},
    {name: "Whopper Chimiburga de Carne", price: 930, category: "Hamburguesas", imageURL: "../../images/products/hamburguer/Chimiburga_Carne.png", id: 7, stock: 23},

    //ACOMPAÑAMIENTOS
    {name: "Aros de Cebolla", price: 430, category: "Acompañamientos", imageURL: "../../images/products/additionals/aros-de-cebolla-mediano.png", id: 7, stock: 66},
    {name: "Balde de Nuggets", price: 520, category: "Acompañamientos", imageURL: "../../images/products/additionals/BaldeNuggets.png", id: 8, stock: 45},
    {name: "Balde de Papas", price: 550, category: "Acompañamientos", imageURL: "../../images/products/additionals/BaldePapas.png", id: 9, stock: 45},
    {name: "Papas con Cheddar y Bacon", price: 700, category: "Acompañamientos", imageURL: "../../images/products/additionals/Papas-Cheddar-y-Bacon.png", id: 10, stock: 65},
    {name: "Papas con Cheddar", price: 650, category: "Acompañamientos", imageURL: "../../images/products/additionals/Papas-Cheddar.png", id: 11, stock: 98},
    {name: "Nuggets", price: 670, category: "Acompañamientos", imageURL: "../../images/products/additionals/nuggets-x10.png", id: 12, stock: 99},

    //POSTRES
    {name: "King Mix Jr. Mani", price: 450, category: "Postres", imageURL: "../../images/products/dessert/BK_WEB_KING-MIX.png", id: 13, stock: 44},
    {name: "King Mix Brownie", price: 390, category: "Postres", imageURL: "../../images/products/dessert/King-Mix-Brownie.png", id: 14, stock: 38},
    {name: "King Mix Cookie", price: 380, category: "Postres", imageURL: "../../images/products/dessert/King-Mix-Cookies.png", id: 15, stock: 49},
    {name: "King Mix Tossy Cookie XL", price: 390, category: "Postres", imageURL: "../../images/products/dessert/KM-Toddy.png", id: 16, stock: 59},
    {name: "King Mix Mani", price: 370, category: "Postres", imageURL: "../../images/products/dessert/MENU_King-Mix-Mani-XL.png", id: 17, stock: 44},
    {name: "King Mix Mani XL", price: 450, category: "Postres", imageURL: "../../images/products/dessert/MENU_King-Mix-Mani.png", id: 18, stock: 36},

    //ENSALADAS
    {name: "Ensalada de Atun", price: 620, category: "Ensaladas", imageURL: "../../images/products/salad/BK1543_Final.png", id: 19, stock: 77},
    {name: "Ensalada Caesar con pollo", price: 820, category: "Ensaladas", imageURL: "../../images/products/salad/ensaladacaesar.png", id: 20, stock: 80},

    //DESAYUNOS / MERIENDAS
    {name: "Brownie", price: 390, category: "Desayunos", imageURL: "../../images/products/breakfast/Brownie.png", id: 21, stock: 55},
    {name: "Tostado Pategras", price: 990, category: "Desayunos", imageURL: "../../images/products/breakfast/BK_WB_CONO-RELLENO_1200X800_140922.png", id: 22, stock: 48},
    {name: "Tostado de jamon y queso", price: 880, category: "Desayunos", imageURL: "../../images/products/breakfast/BK_WEB_TOSTADO-DE-JAMON-Y-QUESO-_1200X800_020822.png", id: 23, stock: 48},
    {name: "Baguetin Fresh", price: 930, category: "Desayunos", imageURL: "../../images/products/breakfast/BK_WEB_BAGUETIN-FRESH_1200X800_240822.png", id: 24, stock: 56},
    {name: "Cafe", price: 400, category: "Desayunos", imageURL: "../../images/products/breakfast/Fotos-Menu-1200x800px-cafe.png", id: 25, stock: 120},
    {name: "Lagrima", price: 360, category: "Desayunos", imageURL: "../../images/products/breakfast/Fotos-Menu-1200x800px-lagrima.png", id: 26, stock: 130},

    //VEGETAL
    {name: "Nuggets Vegetales", price: 620, category: "Vegetal", imageURL: "../../images/products/vegetable/BK_WEB_SEPTIEMBRE_MENU_NUGGETS-PLANT-BASE_270922_1200x800_.png", id: 27, stock: 45},
    {name: "King Vegetal", price: 950, category: "Vegetal", imageURL: "../../images/products/vegetable/King-de-Pollo_2604.png", id: 28, stock: 55}
]

  function datesPerson () {}

  function viewProducts () {

    let containerProducts = document.getElementById("list-products")

    for (const product of food) {
      let cardProduct = document.createElement("div")
      if (product.stock < 5) {
        cardProduct.className = "productoSinStock"
      } else {
        cardProduct.className = "product col-6 col-lg-3"
      }

      cardProduct.id = product.id
      cardProduct.innerHTML = `
        <div class="card-container d-flex flex-column align-items-start justify-content-center p-2 rounded-3 my-2 py-3">
          <div class="card-container-head"><h3 class="name-product mb-2">${product.name}</h3></div>
          <div class="card-container-body d-flex justify-content-center align-items-center"><img class="image-product my-3 img-fluid" src=${product.imageURL}></div>
          <div class="card-container-footer">
            <span class="category-product me-2">${product.category}</span>
            <h4 class="price-product">$${product.price}</h4>
            <button id="add-cart"><i class='bx bxs-cart-add'></i></button>
          </div>
        </div>
      `
      
      containerProducts.append(cardProduct)
    }
  }
  viewProducts()

  let filterCategory = document.getElementById("searchProduct").addEventListener("keypress", (e) => {
    const {value} = e.target
    filterOrder(value)
  })

  function filterOrder (value) {

    //Filtrar por categoria que pida el cliente
    let containerProducts = document.getElementById("list-products")
    containerProducts.innerHTML=""
    //filtra la categoria letra por letra hasta encontrar los productos
    for (const product of food.filter((product) => product.category.startsWith(value))) {
      let cardProduct = document.createElement("div")
      if (product.stock < 5) {
        cardProduct.className = "productoSinStock"
      } else {
        cardProduct.className = "product col-6 col-lg-3"
      }

      cardProduct.id = product.id
      cardProduct.innerHTML = `
        <div class="card-container d-flex flex-column align-items-start justify-content-center p-2 rounded-3 my-2 py-3">
          <h3 class="name-product mb-2">${product.name}</h3>
          <img class="image-product my-3 img-fluid" src=${product.imageURL}>
          <span class="category-product">Categoria: ${product.category}</span>
          <h4 class="price-product">$${product.price}</h4>
          <p class="stock-product">Quedan ${product.stock} u.</p>
          <button><i class='bx bxs-cart-add'></i></button>
        </div>
      `
      
      containerProducts.append(cardProduct)
    }

  }

  document.getElementById("add-cart").addEventListener("click", () => {
    localStorage.setItem("product", JSON.stringify(cardProduct))
  })



  function darkmode () {
    const botonColorMode = document.querySelector("#color-mode");
    const body = document.body;
  
    let darkMode = localStorage.getItem("dark-mode");
  
    function activarDarkMode() {
      body.className.add("dark-mode");
      localStorage.setItem("dark-mode", "activado");
    }
  
    function desactivarDarkMode() {
      body.className.remove("dark-mode");
      localStorage.setItem("dark-mode", "desactivado");
    }
  
    if (darkMode === "activado") {
      activarDarkMode();
    } else {
      desactivarDarkMode();
    }
  
    botonColorMode.addEventListener("click", () => {
      darkMode = localStorage.getItem("dark-mode");
      if (darkMode === "activado") {
        desactivarDarkMode();
      } else {
        activarDarkMode();
      }
    })
  }
  darkmode()

 
