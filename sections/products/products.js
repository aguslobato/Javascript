 let food = [
    //HAMBURGUESAS
    {name: "Cheese onion doble", price: 920, category: "Hamburguesas", imageURL: "../../images/products/hamburguer/BK_WB_CHEESEONIONDOBLE_1200X800_140922.png", id: 1, stock: 55},
    {name: "Halloking Whopper", price: 980, category: "Hamburguesas", imageURL: "../../images/products/hamburguer/BK_WB_HALLOKINGWHOPPER_1200X800_140922.png", id: 2, stock: 65},
    {name: "Doble Cuarto XL", price: 890, category: "Hamburguesas", imageURL: "../../images/products/hamburguer/BK_WEB_DOBLE-CUARTO-XL_1200X800_020822.pn", id: 3, stock: 34},
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
    {name: "King Vegetal", price: 950, category: "Vegetal", imageURL: "../../images/products/vegetable/King-de-Pollo_2604.png", id: 28, stock: 55},
    {name: "Whopper Vegetal", price: 820, category: "Vegetal", imageURL: "../../images/products/vegetable/WhopperVegetal_2604.png", id: 29, stock: 39}
]


  //Muestra el menu completo
  function fullMenu () {

    alert("Menu completo")
    let listProducts = food.forEach((product) => {alert(`${product.category}  ${product.name}  $${product.price}`)})
    filterOrder()
    const choiceProduct = prompt("Escribi el nombre del producto que quieres")
   
  }

  //Muestra el menu en promocion
  function menuPromotion () {

    let lookDiscount = food.filter(product => product.price > 900)

    alert("Menu en promocion")
    
    lookDiscount.forEach((product) => {alert(`${product.category}  ${product.name}  $${product.price}`)})

  }

  function filterOrder () {

    //Filtrar por categoria que pida el cliente
    let filterCategory = prompt("Elije la categoria que te gustaria ver")

    alert(food.filter((product) => product.category === filterCategory))

  }

  function simulaterOrder () {

    //Te da la promocion del dia aleatoriamente del array
    const promotionDay =  food[Math.floor(Math.random() * + food.length)]
      
    do {
    
      choiceCombo = prompt("Desea comprar la promocion del dia? (SI) (NO)")

      if (choiceCombo === "si") {

        alert(`La promocion del dia es: ${promotionDay.name}, ${promotionDay.category}, $${promotionDay.price}`)

        let priceWithPromotion = promotionDay.price - (promotionDay.price * 20 / 100) //Calcula el precio de la promocion con el descuento implementado y lo guarda en la variable

        alert(`Con el descuento del 20% te quedaria $${priceWithPromotion}`)

      } 
      
      pay()

    } while (order())

    function pay () {
          
        paymentMethod = prompt("Elija cual metodo de pago le gustaria utilizar: Tarjeta de Credito (1), Efectivo (2), Transferencia (3) \n 0 para salir")
        
        if (paymentMethod === 1) {
          creditCard()
        } 
        else if (paymentMethod === 2) {
              
        }
        else if (paymentMethod === 3) {}
        else (order())
    
    }

    function creditCard () {

        installments = prompt("Elija la cantidad de cuotas (3) (6) (9) (12) \n 0 para salir")
        
        if (installments === 3) {
          alert(`En 3 cuotas te quedaria un total de ${priceWithPromotion / 3} por mes`)
        } 
        else if (installments === 6) {
          alert(`En 6 cuotas te quedaria un total de ${priceWithPromotion / 6} por mes`)
        }
        else if (installments === 9) {
          alert(`En 9 cuotas te quedaria un total de ${priceWithPromotion / 9} por mes`)
        }
        else if (installments === 12) {
          alert(`En 12 cuotas te quedaria un total de ${priceWithPromotion / 12} por mes`)
        }
        else (order())
 
    }

  }


  function order () {

      opcion = parseInt(prompt("Ingrese 1 para ver el Menu Completo \n Ingrese 2 para ver el Menu en Promocion \n Ingrese 3 para simular orden \n Ingrese 0 para salir"))
      //Muestra el menu completo
      if (opcion === 1) {
       fullMenu()
      } 
      //Muestra el menu en promocion
      else if (opcion === 2) {
        menuPromotion()
      }
      else if (opcion === 3) {
       simulaterOrder()
      }
      else (opcion != 0)

  }
order()  