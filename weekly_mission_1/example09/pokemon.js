export default class Pokemon{
    constructor (name){
        this.name = name;
    }
    sayHello() {
    console.log("Mi pokemon " + this.name+ " te saluda! :D")
    }
    sayMessage(menssage){
    console.log("Mi Pokemon " + this.name + " dice: " + menssage)
    }
}