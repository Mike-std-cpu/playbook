//Importamos la clase user:
const User = require('./../../app/models/user')

describe("Prueba de JEST clase USER twitter", () =>{

    test("Pureba 1 :", () =>{
        const user1 = new User(1,'mikelolp','Miguel Andrade','My bio')
        expect(user1._id).toBe(1);
        expect(user1._userName).toBe('mikelolp');
        expect(user1._name).toBe('Miguel Andrade');
        expect(user1._bio).toBe('My bio');
        expect(user1._dataCreated).not.toBeUndefined();
        expect(user1._dataCreated).not.toBeUndefined();

    })

    test("Pruebas 2: Fechas con tipos fechas: ", () => {
        const user2 = new User(2,'katygn','Sarai Gonzalez', 'Her bio');
        expect(user2._dataCreated).not.toBeUndefined();// para que no mande un valor indefinido
        expect(user2._lastUpdate).not.toBeUndefined();
        expect(user2._name).toBe('Sarai Gonzalez');
        expect(user2._userName).toBe('katygn');
        expect(user2._id).toBe(2);
        expect(user2._bio).toBe('Her bio');
    })

    test("Prueba 3: Getters section :", () => {
        const user3 = new User(3,'wavelol117', 'Eduardo Andrade', 'His bio')
        expect(user3.getUsername).toBe('wavelol117');
        expect(user3.getId).toBe(3);
        expect(user3.getName).toBe('Eduardo Andrade');
        expect(user3.getBio).toBe('His bio');
        expect(user3.getDateCreated).not.toBeUndefined();
        expect(user3.getLastUpdate).not.toBeUndefined();   
    })

    test("Pruebas 4: Setters section :", () => {
        const user4 = new User(4, 'Alexcril', 'Alex Lopez','His bio');
        expect(user4.getName).toBe('Alex Lopez');
        user4.setName = 'Alex Rio';
        expect(user4._name).toBe('Alex Rio');
    })
})