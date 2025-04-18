// true o false

const bool1 = true; // true
const bool2 = false; // false
const bool3 = "true"; // false

console.log("----- Booleanos ------"); // true
console.log(bool1); // true
console.log(bool2); // false
console.log(bool1 === bool3); // false
console.log(bool1 === true); // true


const bool4 = new Boolean(true); // true

//Los constructores crean objetos
console.log(bool4); // [Boolean: true]
console.log(typeof bool4); // object

const autenticado = true; 

//Ejemolo if

if (autenticado) {
    console.log('Esta autenticado'); // false
}
else {
    console.log('No esta autenticado'); // true
}

// Operador ternario
// ? : 'true' : 'false'

console.log( autenticado ? 'Esta autenticado' : 'No esta autenticado'); 