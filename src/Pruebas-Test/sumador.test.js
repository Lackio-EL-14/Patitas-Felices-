  import sumar from "../Ejemplos base/sumador";

 describe("Sumar", () => {
   it("deberia sumar dos numeros", () => {
     expect(sumar(3, 2)).toEqual(5);
   });
 });


