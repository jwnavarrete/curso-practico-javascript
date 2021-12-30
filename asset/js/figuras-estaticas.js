/******************* CUADRADO ***************************/

console.group("Cuadrados");
/*CALCULAR LADOS UN CUADRADO*/
const ladCuadrado = 5;
console.log(`Los lados del cuadrado miden: ${ladCuadrado} cm`);

/*CALCULAR EL PERIMETRO*/
const permitroCuadrado = ladCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${permitroCuadrado} cm`);

/*CALCULAR EL AREA DEL CUADREADO*/
const areaCuadrado = ladCuadrado * ladCuadrado;
console.log(`El area del cuadrado es: ${areaCuadrado} cm cuadrados`);
console.groupEnd();

/******************* FIN CUADRADO ***************************/

/******************* TRIANGULO ***************************/

console.group("Triangulos");
/*CALCULAR LADOS DEL TRIANGULO*/
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log(`Los lados del triangulo miden: 
    Lado 1: ${ladoTriangulo1} cm, 
    Lado 2: ${ladoTriangulo2} cm, 
    Base: ${baseTriangulo} cm
`);

/*CALCULAR EL PERIMETRO DEL TRIANGULO*/
const alturaTriangulo = 5.5;
console.log(`La altura del triangulo es : ${alturaTriangulo} cm`);

const permimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El permitero del triangulo es : ${permimetroTriangulo} cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del triangulo es : ${areaTriangulo} cm`);
console.groupEnd();

/******************* FIN TRIANGULO ***************************/

/******************* CIRCULO ***************************/
console.group("Circulo");
//RADIO
const radioCirculo = 4;
console.log(`El radio del circulo es : ${radioCirculo} cm`);
//DIAMTERO
const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es : ${diametroCirculo} cm`);
//PI
const PI = Math.PI;
console.log(`El PI del circulo es : ${PI}`);
//CIRCUNFERENCIA
const permitroCirculo = diametroCirculo * PI;
console.log(`El permitro del circulo es : ${permitroCirculo} cm`);
//AREA
const areaCirculo = radioCirculo * radioCirculo * PI;
console.log(`El area del circulo es : ${areaCirculo} cm cuadrados`);
console.groupEnd();