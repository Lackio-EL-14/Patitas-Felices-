// /*
//  Como refugio de mascotas 
//  quierp [publicar una mascota en estado de adopcion
//  para acelerar su proceso de adopcion, haciendo visible a la mascota a una mayor cantidad de publico.

//  Criterios de aceptacion:
//  - Dado que registro una mascora con nombre: firulai, de raza: salchicha, edad: 2 anos y registro la mascota deberia ver la mascota en una lista de mascotas en adopcion
//  - Dado que no completo todos los campos del formulario de registro de mascota, cuando intento registrar la mascota, entonces deberia ver un mensaje de error indicando que todos los campos son obligatorios
//  - Dado que registro una mascota con una edad negativa, cuando intento registrar la mascota, entonces deberia ver un mensaje de error indicando que la edad debe ser un numero positivo
// */

// describe("Mascota", () => {
//     it("publicar una mascota", () => {
//         cy.visit("/");
//         cy.get("#nombre-mascota").type("firulai");
//         cy.get("#raza").type("salchicha");
//         cy.get("#edad").type("2 años");
//         cy.get("#publicar-button").click();
//         cy.get("#resultado-div").should("contain", "Nombre: Firulai, Raza: Salchicha, Edad: 2 años");
//     });
// });
