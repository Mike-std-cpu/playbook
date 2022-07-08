// node main.js

const logger = require('./logger') // Conexion y le nombre del archvio del cual se va areferenciar
// Esto permite usar los exports que estan en el logger. Todo lo que se toma del logger, ponlo en esta variable logger en el main

logger.info('This is an informational message')
logger.verbose('This is a verbose message')

/**
 *  Podemos deducir que al ejecutar el main, se ejcutara la exportacion de logger, mostrando informacion del mismo -
    para proseguir con el demas bloques de codigo que se tenga.
 */