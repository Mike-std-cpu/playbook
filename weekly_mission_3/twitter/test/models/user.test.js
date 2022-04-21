//Importamos la clase user:
const User = require('./../../app/models/user')

describe("Prueba de JEST clase USER twitter", () =>{

    test("Pureba 1 :", () =>{
        const user1 = new User(1,'mikelolp','Miguel Andrade','My bio','12/02/2016','13/04/2022')
        expect(user1._id).toBe(1);
        expect(user1._userName).toBe('mikelolp');
        expect(user1._name).toBe('Miguel Andrade');
        expect(user1._bio).toBe('My bio');
        expect(user1._dataCreated).toBe('12/02/2016');
        expect(user1._lastUpdate).toBe('13/04/2022');

    })
})