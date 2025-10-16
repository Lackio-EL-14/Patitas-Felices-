describe("Saludador", () => {
  it("Deberia saludar por nombre", () => {
    cy.visit("/"); //Inicializacion
    cy.get("#nombre").type("Juan"); //Inicializacion
    cy.get("#saludar-button").click(); //Verificacion
    cy.get("#resultado-div").should("contain", "Hola Juan"); //Verificacion
  });
});