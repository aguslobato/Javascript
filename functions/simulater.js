//SIMULADOR INVERSION
function simulador () {

  do {
    opcion = parseInt(prompt("ingrese 1 para comenzar\ningrese 0 para salir"))
    if (opcion === 1) {
        simuladorInversion()
    }
  } while (opcion != 0) 

  function simuladorInversion () {

    // Toma el monto invertido
    const montoInvertido = parseInt(prompt("Ingrese el monto a invertir")) 
    // El monto debe ser superior a 100 sino vuelve a iniciar la funcion
    if (isNaN(montoInvertido)) {
      return(
        alert("Solamente se pueden ingresar numeros"),
          simuladorInversion()
        )
    }
    if (montoInvertido < 10000){
      alert("ERROR, la inversion minima es de 10000 USD"),
        simuladorInversion()
    } 
    // Toma la criptomoneda que elije el cliente 
    const criptomoneda = prompt("Elija la criptomoneda en la cual quiere invertir (BNB) (BTC) (BUSD) (ETH)") 
    // Contenedor de criptomonedas y sus precios
    const switchObject = {
      bnb: 280,
      btc: 990,
      busd: 12,
      eth: 30
    }
      
    // Toma el monto de la inversion y lo divide al valor de la criptomoneda que eligio el clientes
    let resultadoInversion = Math.round(montoInvertido / switchObject [criptomoneda.toLowerCase()])
    // Toma el monto de la inversion para sacar el valor de la comision
    let comision = resultadoInversion % 5
    // Toma el resultado de la comision y del valor de las criptomonedas para sacar el valor total de lo que ganara el cliente
    let resultadoInversionComision = Math.round(resultadoInversion - comision)

    return (
      alert("Con tu monto de inversion, puedes comprar" + " " + resultadoInversion + " " + "de" + " " + criptomoneda),
      alert("Nosotros nos quedariamos con el 5% de tu compra" + " " + comision + " " + "unidades"),
      alert("El total de" + " " + criptomoneda + " " + "que adquiriste es de:" + " " + resultadoInversionComision + " " + "unidades")
    )

  }

}