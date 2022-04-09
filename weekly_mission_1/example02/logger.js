// logger.js

// Esta es una función que se guardara en este módulo como info
exports.info = (message) => { // Funcion
    console.log(`info: ${message}`)
  }
  //export funciona que las funciones iran para afuera, esd ecir se podran usar en otros archvios
  
  // Esta es una función que se guardara en este módulo como verbose
  exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
  }
  

    const logger = require('./logger')
    logger.info('This is an informational message')
    logger.verbose('This is a verbose message')

  