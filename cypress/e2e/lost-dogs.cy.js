describe("Ver sección de perritos extraviados", () => {
    it("Deberia visitar página de perritos extraviados", () => {
        cy.visit("lost-dogs.html"); //Inicializacion
        // cy.get("#nombre").type("Juan"); //Inicializacion
        // cy.get("#saludar-button").click(); //Verificacion
        // cy.get("#resultado-div").should("contain", "Hola Juan"); //Verificacion
    });
    it("Deberia Verse toda la información de un animal rescatado", () => {
        cy.visit("lost-dogs.html");
        cy.get("#info-animal h2", { timeout: 10000 }).should("contain.text", "Luna");
        cy.get('h2[name="nombre"]').should("contain.text", "Luna");
        cy.get('p[name="departamento"]').should("contain.text", "La Paz");
        cy.get('p[name="raza"]').should("contain.text", "Labrador Retriever");
    });
});
