console.log("2.- Creacion de un objeto con atributos");

const explorer ={ // Objeto
    name: "Miguel",
    lastn: "Andrade",
    age: 24,
    mission: "Node JS",
    stack: ["JS","Node","react","vue"], //Arreglo
    //OBJETOS ANIDADOS
    blog: {url: "github.com/mike-std-cpu", post: 5} //Objeto dentro de un objeto = OBJETO ANIDADO
}
console.log(explorer);
console.log(explorer.name);//Accedemos a la propiedad de los objetos con el "ObjectName.atributo"

const ajoloNauta ={
    name: "Woppa",
    mission: "Node JS",
    sayHelloExplorers: function(){
        console.log("Soy un Ajolonauta Explorers, Hey!!!")
    },
    tellMeMore: function (){
        console.log("Mi nombre es: " + this.name); //Aqui usamos la propiedad del objeto, usamos sus atributos que no son publicos
    }
}

console.log("Ajolonauta: ");
console.log(ajoloNauta);
ajoloNauta.sayHelloExplorers(); // Se visualiza en comando o en terminals
ajoloNauta.tellMeMore();