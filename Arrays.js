/* Un arreglo es una estructura de datos que permite almacenar una colección de elementos, todos del mismo tipo, en una sola variable.
   son objetos especiales que permiten almacenar múltiples valores en una sola variable.
   Los arreglos son dinámicos, lo que significa que su tamaño puede cambiar durante la ejecución del programa.
   Los arreglos se pueden crear utilizando la sintaxis de corchetes [] o el constructor Array().

  Los areglos utilizan indices para acceder a sus elementos, comenzando desde 0.
  Por ejemplo, para acceder al primer elemento de un arreglo, se utiliza el índice 0.
*/

// Arreglo vacío
let vacio = [];

// Arreglo de números
let numeros = [10,20,30,40,50,60,70,80,90,100]; 

// Arreglo de cadenas de texto
let frutas = ["manzana", "banana", "naranja", "uva"]; 

//Arreglo con constructor
let meses = new Array("febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");

// Arreglo de booleanos
let booleanos = [true, false, true, false];

const deTodo = ["hola", true, null, { nombre: "Antonio", ocupacion: "programador" }, [1, 2, 3]]; // Arreglo con diferentes tipos de datos

console.log(deTodo); 

// Muestra el arreglo en forma de tabla
console.table(deTodo); 


// Acceder al primer elemento del arreglo por su índice
console.log(deTodo[4]); 

// Cambiar el valor del otro elemento por posicion
meses[11] = "Ultimo"; 

//Recorrer el arreglo con el iterador for loop
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i]);
}


//Ejemplo de un carrito de compras

const carrito = [];

const ropa = [
    { nombre: "camisa", precio: 20 },
    { nombre: "pantalón", precio: 30 }
];

const celular = [
    { nombre: "samsung", precio: 200 }
];

const tv= [
    { nombre: "LG", precio: 500 }
];

// Agregar un producto al carrito
carrito.push(ropa); 
carrito.push(celular);
carrito.unshift(tv);

// Mostrar el carrito de compras
console.table(carrito); 



//Forma de unir arreglos imperativa
let resultado1 = [...carrito, ropa];
let resultado2= [ropa, ...carrito]; // Unir los arreglos

console.log(resultado1);
console.log(resultado2);

// Elimina el último elemento del arreglo
carrito.pop(); 
console.table(carrito);

// Elimina el primer elemento del arreglo
carrito.shift(); 
console.table(carrito);

// Elimina el segundo elemento del arreglo
// (1,1) Posicion uno y uno los elementos a eliminar
carrito.splice(1, 1); 
console.table(carrito);

//Desructuración de arreglos

const producto = {
    nombre: "camisa",
    precio: 20,
    talla: "M",
    color: "rojo"
};

const { nombre } = producto;
console.log(nombre); 

// Desestructura con arreglos
const numerox = [1, 2, 3, 4, 5];

// Desestructura el arreglo
const [uno, dos, tres] = numerox; 

console.log(uno);
console.log(dos);   



