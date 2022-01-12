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

const onClickButtonPriceDiscount = () =>{
    const InputPrice = document.getElementById('InputPrice');
    const InputDiscount = document.getElementById('InputDiscount');
    const priceValue = InputPrice.value;
    const discountValue = InputDiscount.value;

    const precioConDescuento =calcularPrecioConDescuento(priceValue, discountValue);
}

console.log(precioNew);