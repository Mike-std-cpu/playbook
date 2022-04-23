const UserServices = require('./../../app/models/userServices')//Enlazamos con la clase UseService
//UseServices esta enlazada con las clase user.

class View{

  static createUser(payload){
    if(payload === null){
      console.log("Error es null")
      return {error: "El payload no existe."}
    } else if(typeof payload._userName === 'string' && typeof payload._name === 'string' && typeof payload._id === 'number') {
      return UserServices.create(payload._id, payload._userName, payload._name);
    } else{
      return {error: "Error, las propiedades del payload necesitan tener un valor válido"}
    }
  }
}
// TypeOf sirve para exmainar el tipo de valor que sea una variable

module.exports = View