const UserView = require('./../../app/models/view');

describe("Tests para clase vista:", () => {
    test("Error en envio payload: ", () => {
        const payload = null;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/El payload no existe/);// toMatch sirve para comparar cadenas
        /*You can check strings against regular expressions with toMatch: */
        /* Comparadores como toBe, toEquals para numebrs */
        //DOCUMENTACION JEST :https://jestjs.io/docs/using-matchers#strings
        
        
    })
})