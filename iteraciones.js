
const carrito =[
    { nombre: "Monitor 20 pulgadas", precio: 500 },
    { nombre: "Television 50 pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 }
]

console.log("\n-----  for -----");

for (let i = 0; i < carrito.length; i++) {
    //Recorre arreglo comento
    console.log(carrito[i]);
}

console.log("\n-----  for eligiendo elementos -----");

for (let i = 0; i < carrito.length; i++) {
    //Recorre arreglo sombre nombre
    console.log(carrito[i].nombre);
}

console.log("\n----- forEach -----");

carrito.forEach(function(nuevoNombre) {
    //Recorre arreglo 
    console.log(`${nuevoNombre.nombre} -> Precio: ${nuevoNombre.precio}`);     
});

console.log("\n----- .map -----");
// Map crea un nuevo arreglo con los resultados de la función que 
// se le pasa como argumento y foreach no lo hace
// cada elemento del arreglo original((item) => item.nombre);
// cada elemento del arreglo original((item) => item.precio);

const nuevo = carrito.map(function(item) {
    return `Producto: ${item.nombre} -> Precio: ${item.precio}`;
}
   
);

console.log(nuevo); // Muestra el nuevo arreglo con los nombres de los productos