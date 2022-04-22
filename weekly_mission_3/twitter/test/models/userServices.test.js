/*
Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
Criterios de aceptación:
1. Esta clase deberá tener un método `create` que se pueda usar sin instanciar (static method), y que reciba solo los parámetros del `id`, `username` y `name`. 
2. El valor de `bio` deberá ser por default para todos los `user` creados.
*/

//Importamops el script de la clase
const User = require('../../app/models/user');
const UserServices = require('./../../app/models/userServices')

describe("Test of User service", () =>{
    test("Prueba 1: Nueva instancia de clase UserService:", () => {
        const user1 = UserServices.create(1, "Mikelolp", 'Miguel');// Create se usa igual para instanciar que el new.
        expect(user1._userName).toBe('Mikelolp');
        expect(user1._name).toBe('Miguel');
        expect(user1._id).toBe(1);
    })

    test("Prueba 2: Get en una lista de datos:", () => {
        const user = UserServices.create(1,'Mikelolp','Miguel');
        //La agregamos a una variable lista
        const myListInfo = UserServices.getInfo(user);
        expect(myListInfo[0]).toBe(1);
        expect(myListInfo[1]).toBe('Mikelolp');
        expect(myListInfo[2]).toBe('Miguel')
    })

    test("Prueba3: Actualziar userName:", () => {
        const user = UserServices.create(1, 'Mikelolp','Miguel');
        UserServices.updateUserUserName(user, "mikdev");
        expect(user._userName).toBe('mikdev');
    })

    test("Prueba 4: De una lista de usuarios, dar la lista de userNames", () => {
        const user1 = UserServices.create(1, 'miklolp', 'Miguel');
        const user2 = UserServices.create(2, 'miklolp2', 'Miguel2');
        const user3 = UserServices.create(3, 'miklolp3', 'Miguel3');
        const usernames = UserServices.getAllUsernames([user1,user2, user3]);

        expect(usernames).toContain("Mikelolp1");
        expect(usernames).toContain("Mikelolp2");
        expect(usernames).toContain("Mikelolp3");

    })
})