describe("Ver sección de perritos extraviados", () => {
  it("Deberia visitar página de perritos extraviados", () => {
    cy.visit("lost-dogs.html"); //Inicializacion
    // cy.get("#nombre").type("Juan"); //Inicializacion
    // cy.get("#saludar-button").click(); //Verificacion
    // cy.get("#resultado-div").should("contain", "Hola Juan"); //Verificacion
  });
});