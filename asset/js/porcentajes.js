/*
    const precioOriginal = 120;
    const descuento = 18;
*/

const calcularPrecioConDescuento = (precio, descuento) =>{
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

const precioNew = calcularPrecioConDescuento(250, 50)

console.log(precioNew);