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