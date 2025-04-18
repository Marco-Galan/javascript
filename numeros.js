//Creación de numero (No se especifica el tipo de dato, int, float, etc..)
const numero1 = 10;
const numero2 = 20;
const numero3 = "20";
const numero4 = 20.5;

console.log(numero1, numero2); // 1020

// Se crea un objeto de tipo Number
const objetoNumero = new Number(10); 
console.log(objetoNumero);

//Operaciones
console.log("--- Operaciones ---");
const suma = numero1 + numero2; // 30.2
const resta = numero1 - numero2; // -10.2
const multiplicacion = numero1 * numero2; // 202
const division = numero1 / numero2; // 0.4955357142857143
const modulo = numero1 % numero2; // 10
const potencia = numero1 ** 2; // 100

console.log("Suma:", suma);
console.log("Resta:",resta);
console.log("Multiplicacion:",multiplicacion);
console.log("Division:",division);
console.log("Modulo:",modulo);
console.log("Potencia:",potencia);


console.log("--- Pi y redondeo ---"); 

let resultado1 = Math.PI;
let resultado2 = Math.round(2.5);
let resultado3 = Math.ceil(2.4);
let resultado4 = Math.floor(2.6);


console.log("Pi = ", resultado1);
console.log("Math.rounde = ",resultado2);
console.log("Math.ceil = ",resultado3);
console.log("Math.floro = ",resultado4);


console.log("--- Incrementos ---"); 

let puntaje1 = 10;
let puntaje2 = 10;
let puntaje3 = 10;
let puntaje4 = 10;
let puntaje5 = 10;
let puntaje6 = 10;
let puntaje7 = 10;


puntaje2++; // 5
++puntaje3; // +
puntaje4--;
--puntaje5;
puntaje6 += 5; // 15
puntaje7 -= 5; // 10


console.log("Puntaje 1 = ", puntaje1);
console.log("Puntaje 2 = ", puntaje2);
console.log("Puntaje 3 = ", puntaje3);
console.log("Puntaje 4 = ", puntaje4);
console.log("Puntaje 5 = ", puntaje5);
console.log("Puntaje 6 = ", puntaje6);
console.log("Puntaje 7 = ", puntaje7);


console.log("--- Conversion de numeros ---"); 
console.log("Conversion de numeros a string: ", Number.parseInt(numero3));
console.log("Conversion de numeros a string: ", Number.parseFloat(numero4));

console.log("El numero 1 es entero = ", Number.isInteger(numero2)); // true
console.log("El numero 2 es entero = ",Number.isInteger(numero2)); // true
console.log("El numero 3 es entero = ",Number.isInteger(numero3)); // false
console.log("El numero 4 es entero = ",Number.isInteger(numero4)); // false

console.log("--- Operadores ---"); 

const n1 = 10;
const n2 = 20;
const n3 = 30;   

console.log("Numero ", n1,  "es mayor a", n2, "=", numero1 > numero2);  
console.log("Numero ", n2,  "es mayor a", n1, "=", numero1 < numero2); 
console.log("Numero ", n2,  "es igual a", n1, "=", numero1 == numero2);  
console.log("Numero ", n2,  "es igual a", n2, "=", numero2 == numero2);
// console.log(typeof n1); // number
// console.log(typeof n2); // number

//Comparadores

const comparador1 = "texto1";
const comparador2 = "texto2";

console.log(` ${comparador1} es igual ${comparador2} =`, comparador1 == comparador2); // false
console.log(` ${comparador1} es igual ${comparador1} =`, comparador1 == comparador1); // false
console.log(` ${comparador1} es diferente ${comparador2} =`, comparador1 != comparador2); // true
console.log(` ${comparador1} es diferente ${comparador1} =`, comparador1 !== comparador1); // false



console.log("--- Tipos de datos ---"); 

let dato1;
let dato2 = null; // null

console.log(dato1) //undefined
console.log(dato2); // null
console.log("Comparador:", dato1==dato2); //true
console.log("Comparador estricto:", dato1===dato2); // false
