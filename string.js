// Formas de escribir string

const producto1 = " String 1 ";
const producto2 = String('String 2');
const producto3 = new String("Objeto Strig");
const producto4 = " \"Dobles comillas\" ";
const producto5 = '\"Comillas simples\"';

console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);

// Conocer la cantidad de caracteres con lenght (Incluye espacios)
console.log(producto1.length);

//Formas de concatenación en strings
const precio = '30 usd';

console.log(producto1.concat(precio));
console.log(producto1 + " precio final "+ precio);
console.log(producto1," precio final", precio);
 
//Template Strings (ES6)
console.log(`El producto ${producto1} tiene un precio de ${precio}`);

//Eliminar espacios al inicio y al final de un string
console.log(producto1.trimStart());
console.log(producto1.trimEnd());

console.log(producto1.trimStart().trimEnd());
console.log(producto1.trim());


// Remplazar texto de una cadena
console.log(producto1.replace("String", "Producto"));

//Slice para cortar texto de posicion 0 a 5 (sin incluir el 5)
console.log(producto1.slice(0, 5)); 

// Si solo se pasa un argumento, se corta desde el argumento hasta el final
console.log(producto1.slice(5)); 

// Substring para cortar texto muestra de 0 a 5 (sin incluir el 5)
console.log(producto1.substring(0, 5));

const usuario = "Nombre";

//Mostrar la primera letra de un string de dos maneras
//Accediendo a la posición 0 del string
console.log(usuario.substring(0,1)); 
//Extrae a la posición 0 del string
console.log(usuario.charAt(0)); 



//Repeat para repetir un string
const repetido = "Hola ".repeat(3);
console.log(repetido);

const repetido2 = "Hola ";
console.log(repetido2.repeat(3));

//Split para separar un string en un array
const actividad = "Aprendiendo JavaScript";
console.log(actividad.split(" ")); //Separar por espacio

const hobbies = "Leer, Jugar, Dormir";
console.log(hobbies.split(",")); //Separar por coma

//Transformar texto a mayusculas y minusculas
const texto = "Hola Mundo";
console.log(texto.toUpperCase()); //Transformar a mayusculas
console.log(texto.toLowerCase()); //Transformar a minusculas

const numero = 300;
console.log(numero.toString()); //Transformar a string
console.log(typeof numero); //typeof muestra tipo de dato