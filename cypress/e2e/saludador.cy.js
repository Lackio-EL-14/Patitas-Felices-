describe("Saludador", () => {
  it("Mostrar un saludo mas usuario", () => {
    cy.visit("/");
    cy.get("#nombre").type("Juan");
    cy.get("#saludar-button").click();
    cy.get("#resultado-div").should("contain", "Hola Juan");
  });
});