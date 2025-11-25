
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
    /*
    it("Deberia de llevarme a la página de detalles al hacer clic en 'Ver más'", () => {
        cy.visit("/VerAdopciones.html");    
        cy.get(".tarjeta-mascota").first().within(() => {
            cy.contains("Ver más").click();
        });
        cy.url().should("include", "/detallesAdopciones.html?id=1");
        cy.get("h1").should("contain", "Detalle de la Mascota");
    });
  it("Volver al listado de mascotas desde la página de detalles", () => {
    cy.visit("/VerAdopciones.html");
    cy.get(".tarjeta-mascota").first().within(() => {
      cy.contains("Ver más").click();
    });
    cy.get("#volver").click();              
    cy.url().should("include", "/VerAdopciones.html");

  });
  it("Deberia mostrar un mensaje de error si la mascota no existe", () => {
        cy.visit("/detallesAdopciones.html?id=9999");    
        cy.get("#detalle-mascota").should("contain", "No se encontró la mascota.");
    });*/
    it("Buscar mascotas por nombre", () => {
        cy.visit("/VerAdopciones.html");
        cy.get("#input-busqueda").type("Firulais");
        cy.get(".tarjeta-mascota").should("have.length", 1);        
    });
    it("Buscar mascotas con nombre inexistente muestra cero resultados", () => {
        cy.visit("/VerAdopciones.html");
        cy.get("#input-busqueda").type("NombreInexistente");
        cy.get(".tarjeta-mascota").should("have.length", 0);        
    });
    it("Borrar el texto de búsqueda muestra todas las mascotas nuevamente", () => {
        cy.visit("/VerAdopciones.html");
        cy.get("#input-busqueda").type("Firulais");
        cy.get(".tarjeta-mascota").should("have.length", 1);  
        cy.get("#input-busqueda").clear();
        cy.get(".tarjeta-mascota").should("have.length.greaterThan", 1);  
    });
    it("verificar que el input de búsqueda sea sensible a mayúsculas y minúsculas", () => {
        cy.visit("/VerAdopciones.html");
        cy.get("#input-busqueda").type("PerrItA");
        cy.get(".tarjeta-mascota").should("have.length", 1);        
    });
});
