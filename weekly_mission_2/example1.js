console.log("2.- Creacion de un objeto con atributos");

const myObjet ={
    name: "Miguel",
    lastn: "Andrade",
    age: 24,
    mission: "Node JS",
    stack: ["JS","Node","react","vue"], //Arreglo
    //OBJETOS ANIDADOS
    blog: {url: "github.com/mike-std-cpu", post: 5} //Objeto dentro de un objeto = OBJETO ANIDADO
}
console.log(myObjet);
console.log(myObjet.name);//Accedemos a la propiedad de los objetos con el "ObjectName.atributo"