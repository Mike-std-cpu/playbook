// 1. Creación de un objeto con propiedades

let myCar = new Object(); // Creación de un objeto
myCar.make = 'Ford'; // Guardando un valor dentro del objeto creado | Se podria decir que se crean atributos del objeto
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar) // Imprimiendo objeto

// 2. Declaración de un objeto con variables locales y públicas

const myModule = (() => { // Es una funcion con otra sintaxis

// Variables de contexto local
 const privateFoo = "NO QUIERO QUE VENA ESTO, soy un valor privado, solo me usan dentro de este objeto"
 const privateBar = [1,2,3,4]
 const baz = "Soy un valor que va a ser expuesto"

// Variable para guardar las variables locales
 const exported = {// Declaracion de un objeto dentro de una funcion MyModule
   publicFoo: "Valor público, pueden verme desde donde me llamen",
   publicBar: "Otro valor público",
   	publicBaz: "baz"
 }

// Exposición de variables locales
return exported; // Retornara las variables del objeto Exported
})()

console.log(myModule); // Solo imprimira lo publico, es decir
//  Si queremos imprimir las variables de la funcion, las llamamos
console.log(myModule)