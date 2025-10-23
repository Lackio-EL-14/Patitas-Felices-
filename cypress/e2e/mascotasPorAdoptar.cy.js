describe("Sección de Adopciones", () => {
    it("Ingresar a la Sección de Adopciones", () => {
        cy.visit("/");
        cy.contains("Adopciones").click();
        cy.url().should("include", "/VerAdopciones.html");
    }); 
});