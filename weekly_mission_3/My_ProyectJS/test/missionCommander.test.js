const MissionCommander = require("../app/missionCommander");

//Prueba basica.
describe("Pruebas de unidad de Ajolonauta", () => {
    test('Caso de prueba 1: Creación de objeto', () => {
        //Aqui se puede realizar el codigo como lo deseamos utilizar
        //Se puede probar CUALQUIER COSA.
      const carlo = new MissionCommander("Carlo");

      //Sirve para validar el resultado esperado
      expect(carlo.name).toBe("Carlo");
    });
  })
  