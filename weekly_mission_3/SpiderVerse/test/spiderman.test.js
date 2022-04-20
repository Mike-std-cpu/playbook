const Spiderman = require("../app/spiderman");
//Prueba de JETS
describe("Unit Test for Spiderman", () => {
    test('1) Case 1 Get a spiderman', () => {
      const AndrewGarfield = new Spiderman("Andrew Garfield", 2, "Sony Pictures");
      expect(AndrewGarfield._name).toBe("Andrew Garfield");// Expect y toBe es sintaxis de JEST
      expect(AndrewGarfield._studio).toBe("Sony Pictures");
      expect(AndrewGarfield._movies).toBe(2);
    });
    test(' 2)  Get a method GetInfo: ', () => {
        const TomHolland = new Spiderman("Tom Holland", 3, "Marvel Studio");
        expect(TomHolland.getInfo()).toBe("Hey! I'm Tom Holland from Marvel Studio");
    });
  })