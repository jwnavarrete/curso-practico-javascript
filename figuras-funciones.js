/******************* CUADRADO ***************************/
console.group("Cuadrados");
const __permitroCuadrado = (lado) => lado * 4;
const __areaCuadrado = (lado) => lado * lado;
console.log(`Perimetro: ${__permitroCuadrado(5)}, Area: ${__areaCuadrado(5)}`);
console.groupEnd();
/******************* CUADRADO ***************************/

/******************* TRIANGULO ***************************/
console.group("Triangulos");
const __permimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const __areaTriangulo = (baseTriangulo, alturaCuadrado) =>
  (baseTriangulo * alturaCuadrado) / 2;
console.log(
  `Perimetro: ${__permimetroTriangulo(6, 6, 6)}, Area: ${__areaTriangulo(
    6,
    5.5
  )}`
);
console.groupEnd();
/******************* TRIANGULO ***************************/

/******************* CIRCULO ***************************/
console.group("Circulo");
const __diametroCirculo = (radioCirculo) => radioCirculo * 2;
const __permitroCirculo = (radioCirculo) =>
  __diametroCirculo(radioCirculo) * Math.PI;
const __areaCirculo = (radioCirculo) => radioCirculo * radioCirculo * Math.PI;
console.log(
  `Diametro: ${__diametroCirculo(4)}, Perimetro: ${__permitroCirculo(
    4
  )}, Area: ${__areaCirculo(4)}`
);
console.groupEnd();
/******************* CIRCULO ***************************/