const UserServices = require('./../../app/models/userServices')//Enlazamos con la clase UseService
//UseServices esta enlazada con las clase user.

class View{

  static createUser(payload){
    if(payload === null){
      console.log("Error es null")
      return {error: "El payload no existe."}
    } 
    else if(typeof payload._userName === 'string' && typeof payload._name === 'string' && typeof payload._id === 'number') {
        return UserServices.create(payload._id, payload._userName, payload._name);
    }else{
        return {error: "Necesitamos tener un valor valido"}
    }
  }
}
// TypeOf sirve para exmainar el tipo de valor que sea una variable
/* El primer else if compara los tipos de datos que se instancien y estan comparados con AND, donde necesariamente deben
  estar todos llenos para poder returnar los valores dados en la instancia, en otro caso --> regresara el error.*/

module.exports = View