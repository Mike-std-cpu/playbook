class Logger { // Creacion de las clase Logger
    constructor (name) { // Constructor para las instancias
      this.count = 0
      this.name = name
    }
  
    log (message) { // Funcion
      this.count++ // Cada que se llame la funcion, a variable count aumentara
      console.log('[' + this.name + '] ' + message)
    }
  }
  
  module.exports = new Logger('DEFAULT') // Nuevo objeto instanciado
  module.exports.Logger = Logger // Clase