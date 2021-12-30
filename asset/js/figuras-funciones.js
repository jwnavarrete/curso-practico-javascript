/******************* CUADRADO ***************************/
console.group("Cuadrados");
const __perimetroCuadrado = (lado) => lado * 4;
const __areaCuadrado = (lado) => lado * lado;
console.log(`Perimetro: ${__perimetroCuadrado(5)}, Area: ${__areaCuadrado(5)}`);
console.groupEnd();
/******************* CUADRADO ***************************/

/******************* TRIANGULO ***************************/
console.group("Triangulos");
const __perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const __areaTriangulo = (baseTriangulo, alturaTriangulo) =>
  (baseTriangulo * alturaTriangulo) / 2;
console.log(
  `Perimetro: ${__perimetroTriangulo(6, 6, 6)}, Area: ${__areaTriangulo(
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

function calcularPerimetroCuadrado() {
  const input = document.getElementById("sideSquare");
  const value = input.value;
  const perimetro = __perimetroCuadrado(value);
  document.getElementById("squareResult").value = `Perimeter: ${perimetro}`;
}

function calcularAreaCuadrado() {
  const input = document.getElementById("sideSquare");
  const area = __areaCuadrado(input.value);
  document.getElementById("squareResult").value = `Area: ${area}`;
}

function calcularPerimetroTriangulo() {
  const sideA = document.getElementById("sideA");
  const sideB = document.getElementById("sideB");
  const base = document.getElementById("base");  
  const perimetro = __perimetroTriangulo(sideA.value, sideB.value, base.value);
  document.getElementById("triangleResult").value = `Perimeter: ${perimetro}`;
}

function calcularAreaTriangulo() {  
  const base = document.getElementById("base");
  const height = document.getElementById("height");
  const area = __areaTriangulo(base.value, height.value);
  document.getElementById("triangleResult").value = `Area: ${area}`;
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("radio");    
    const perimetro = __permitroCirculo(radio.value);
    document.getElementById("circleResult").value = `Perimeter: ${perimetro}`;
  }
  
  function calcularAreaCirculo() {  
    const radio = document.getElementById("radio");
    const area = __areaCirculo(radio.value);
    document.getElementById("circleResult").value = `Area: ${area}`;
  }