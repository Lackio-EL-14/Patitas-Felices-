// Descripción:
// Como usuario adoptador
// Quiero visualizar la sección de adopciones
// Para buscar un animalito para adoptar

// Criterios de Confirmación:
// Ingresar a la Sección de adopciones
// Ver todas las mascotas que se encuentran disponibles para adopcion
// Mostrar un mensaje claro en caso de que no haya mascotas en adopción actualmente.

 //describe("Mascota", () => {
//     it("publicar una mascota", () => {
//         cy.visit("/");
//         cy.get("#nombre-mascota").type("firulai");
//         cy.get("#raza").type("salchicha");
//         cy.get("#edad").type("2 años");
//         cy.get("#publicar-button").click();
//         cy.get("#resultado-div").should("contain", "Nombre: Firulai, Raza: Salchicha, Edad: 2 años");
//     });
// });
describe("Sección de Adopciones", () => {
    it("Ingresar a la Sección de Adopciones", () => {
        cy.visit("/");
        cy.contains("Adopciones").click();
        cy.url().should("include", "/VerAdopciones.html");
    });       
    it("Ver todas las mascotas disponibles para adopción", () => {
        cy.visit("/VerAdopciones.html");
        cy.get(".tarjeta-mascota").should("have.length.greaterThan", 0);
    });
});