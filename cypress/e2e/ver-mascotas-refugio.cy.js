describe('Buscar Refugios - Ver mascotas por refugio', () => {
  it('debe mostrar un botón para ver mascotas en cada refugio', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="btn-ver-mascotas"]').should('have.length', 10);
  });

  it('debe mostrar las mascotas cuando se hace clic en "Ver mascotas"', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="refugio-item"]').first().within(() => {
      cy.get('[data-testid="btn-ver-mascotas"]').click();
    });
    cy.get('[data-testid="lista-mascotas"]').should('exist');
    cy.get('[data-testid="mascota-nombre"]').should('have.length.at.least', 1);
  });

  it('debe mostrar exactamente 3 mascotas del primer refugio', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="refugio-item"]').first().within(() => {
      cy.get('[data-testid="btn-ver-mascotas"]').click();
    });
    cy.get('[data-testid="mascota-nombre"]').should('have.length', 3);
    cy.get('[data-testid="mascota-nombre"]').first().should('contain', 'Firulais');
  });

  it('debe ocultar las mascotas cuando se vuelve a hacer clic', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="refugio-item"]').first().within(() => {
      cy.get('[data-testid="btn-ver-mascotas"]').click();
    });
    cy.get('[data-testid="lista-mascotas"]').should('exist');
    cy.get('[data-testid="refugio-item"]').first().within(() => {
      cy.get('[data-testid="btn-ver-mascotas"]').click();
    });
    cy.get('[data-testid="lista-mascotas"]').should('not.exist');
  });

  it('debe mostrar mascotas diferentes para cada refugio', () => {
    cy.visit('/VerRefugios.html');
    
    cy.get('[data-testid="refugio-item"]').eq(0).within(() => {
      cy.get('[data-testid="btn-ver-mascotas"]').click();
    });
    cy.get('[data-testid="mascota-nombre"]').first().should('contain', 'Firulais');
    
    cy.get('[data-testid="refugio-item"]').eq(0).within(() => {
      cy.get('[data-testid="btn-ver-mascotas"]').click();
    });
    
    cy.get('[data-testid="refugio-item"]').eq(1).within(() => {
      cy.get('[data-testid="btn-ver-mascotas"]').click();
    });
    cy.get('[data-testid="mascota-nombre"]').first().should('contain', 'Luna');
  });
});