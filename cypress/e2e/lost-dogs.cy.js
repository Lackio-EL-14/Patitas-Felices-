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
        cy.contains('h2', 'Luna', { timeout: 10000 }).should('be.visible');

        // Verifica el departamento y raza
        cy.contains('p', 'Departamento: La Paz').should('be.visible');
        cy.contains('p', 'Raza: Labrador Retriever').should('be.visible');

    });
    it("Deberia Verse toda la información de un animal rescatado", () => {
        cy.visit("lost-dogs.html");
        const perros = [
            { nombre: "Luna", raza: "Labrador Retriever", departamento: "La Paz" },
            { nombre: "Max", raza: "Pastor Alemán", departamento: "Cochabamba" },
            { nombre: "Bella", raza: "Beagle", departamento: "Santa Cruz" },
            // Puedes agregar más si quieres verificar todos
        ];

        cy.get("#info-animal > div").should("have.length.at.least", perros.length);

        perros.forEach((perro, index) => {
            cy.get("#info-animal > div").eq(index).within(() => {
                cy.get("h2").should("contain.text", perro.nombre);
                cy.contains("p", `Departamento: ${perro.departamento}`).should("exist");
                cy.contains("p", `Raza: ${perro.raza}`).should("exist");
            });
        });

    });

});
