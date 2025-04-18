// Un onjeto agrupa todo en una misma variable
// Un objeto es una variable que puede contener otras variables y funciones

const persona = {
    nombre: "Marco",
    edad: 100,
    ciudad: "México"
}

//Acceder a los valores de un objeto por la sintaxis de punto
console.log(persona.nombre); // Marco
console.log(persona['edad']); // 100

//Agregar propiedades a un objeto
persona.profesion = "Desarrollador";

//Eliminar propiedades de un objeto
delete persona.ciudad;

//Actualizar propiedades de un objeto
persona.nombre = "Antonio";

console.log(persona);

const objeto = {
    juguete: "Pelota",
    color: "Rojo",
    precio: 100
}

// Destructuración de objetos
const { juguete, precio } = objeto; 
console.log(juguete); 
console.log(precio); 

//Objeto anidado (objeto dentro de otro objeto)
console.log("\n----- Objeto -----");

const producto = {
    nombre: "Laptop",
    precio: 1500,
    marca: "Dell",
    caracteristicas: {
        procesador: "Intel i7",
        ram: "16GB",
        almacenamiento: "512GB SSD",
        fabricacion: {
            pais: "México",
            año: 2023
        }
    },

}
console.log(producto);
console.log("\n----- Accediendo al objeto anidado -----");
console.log("Procesador:", producto.caracteristicas.procesador); // Intel i7
console.log("Memoria ram:",producto.caracteristicas.ram); // 16GB
console.log("Origen:",producto.caracteristicas.fabricacion.pais); // México

console.log("\n----- Destructuración anidada -----");
const { nombre, caracteristicas: { procesador, fabricacion:{ pais}}} = producto;

console.log("Nombre:", nombre); // Laptop
console.log("Procesador:",procesador); // Intel i7
console.log("País:",pais); // México

//Los objetos se puede reasignar, pero no se puede cambiar la referencia de un objeto

/* use strict -> Para evitar errores de referencia
y habilitar object methods como Object.freeze(), Object.seal(), Object.preventExtensions() 
*/   


console.log("\n----- Reasignacion de objetos -----");


const auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: "2022"
}

// Congela el objeto, no se puede modificar
// Object.freeze(auto); 

// Se agrega una nueva propiedad al objeto auto
auto.disponible = true; 
auto.imagen = "auto.jpg";

//Saber si el objeto esta congelado
console.log("Objeto cobgelado:", Object.isFrozen(auto));

//Sellar el objeto, no se puede agregar ni eliminar propiedades, pero si se pueden modificar
console.log("Objeto sellado:", Object.isSealed(auto));

//Object methods
console.log(auto);


console.log("\n----- Unir dos objetos -----");

const medidas = {
    peso: "1 kg",
    medida: "1 mt"
}
 console.log(medidas);

const caja = {
    alto: "1 mt",
    ancho: "1 mt",
    largo: "1 mt"
}

console.log(caja);

// Unir dos objetos
console.log("\n----- Union con assing -----");
const cajaCompleta =Object.assign(caja, medidas); 
console.log(cajaCompleta);

// Rast operator -> Unir dos objetos
console.log("\n----- Union con Rest Operator -----");
const cajaCompleta2 = {...caja, ...medidas}
console.log(cajaCompleta2);



console.log("\n----- .this en objetos -----");
// This se refiere a la instancia del objeto en el que se encuentra
// En el caso de los objetos, this se refiere al objeto en sí mismo

const monitor =  {
    marca: "LG",
    modelo: "UltraWide",
    año: 2023,
    encender: function() {
        console.log("Se encendio el monitor", this.marca, "modelo ",this.modelo);
    }
}

monitor.encender(); // Encendiendo el monitor LG UltraWide



console.log("\n----- Object constructor -----");

// Constructor de objetos -> Se utiliza para crear objetos de forma mas rapida y sencilla
// Se utiliza la palabra reservada new para crear un nuevo objeto

function fruta(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const fruta1 = new fruta("Manzana", 100);
const fruta2 = new fruta("Pera", 200);
const fruta3 = new fruta("Naranja", 300);

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);

console.log("\n----- Object keys -----");
// Object.keys() -> Devuelve un array con las claves de un objeto
console.log(Object.keys(fruta1));

// object.values() -> Devuelve un array con los valores de un objeto
console.log(Object.values(monitor));

// object.entries() -> Devuelve un array con las claves y valores de un objeto
console.log(Object.entries(monitor)); 