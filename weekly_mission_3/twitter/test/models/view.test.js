const UserView = require('./../../app/models/view');

describe("Tests para clase vista:", () => {
    test("1.- Error en envio payload: ", () => {
        const payload = null;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/El payload no existe/);// toMatch sirve para comparar cadenas
        /*You can check strings against regular expressions with toMatch: */
        /* Comparadores como toBe, toEquals para numebrs */
        //DOCUMENTACION JEST :https://jestjs.io/docs/using-matchers#strings
        
        
    })
    /*
    Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor -
    - `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor válido`.
    */
    test("2.- Error de objeto con propiedas invalidas:", () => {
        const payload = {username: null, name: 12, id: null};
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/Necesitamos tener un valor valido/)
    })

    /* 
    Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando 
    `necesitan tener un valor válido`.
    */
   test("3.- Erro de objeto cundo se omiten parametros: ", () => {
       const payload = {username:'Mikelolp'};
       const result = UserView.createUser(payload);
       expect(result.error).toMatch(/Necesitamos tener un valor valido/);
   }) 
})