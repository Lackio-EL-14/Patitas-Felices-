/*
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
    it("Deberia de llevarme a la página de detalles al hacer clic en 'Ver más'", () => {
        cy.visit("/VerAdopciones.html");    
        cy.get(".tarjeta-mascota").first().within(() => {
            cy.contains("Ver más").click();
        });
        cy.url().should("include", "/detallesAdopciones.html?id=");
        cy.get("#detalle-mascota").should("exist");
    });
  it("Volver al listado de mascotas desde la página de detalles", () => {
        cy.visit("/VerAdopciones.html");    

  });
  it("Deberia mostrar un mensaje de error si la mascota no existe", () => {
        cy.visit("/detallesAdopciones.html?id=9999");    
        cy.get("#detalle-mascota").should("contain", "No se encontró la mascota.");
    });

});
*/