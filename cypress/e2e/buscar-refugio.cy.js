describe('Buscar Refugios - Final Feliz', () => {
  it('debe mostrar la página de refugios', () => {
    cy.visit('/VerRefugios.html');
    cy.contains('Todos los Refugios'); 
  });
  it('debe mostrar al menos un refugio en la lista', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="refugio-item"]').should('have.length.at.least', 1);
  });
});


describe('Buscar Refugios - Filtrar por nombre', () => {
  it('debe mostrar un campo de búsqueda por nombre', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="input-nombre"]').should('exist');
  });

  it('debe filtrar refugios cuando se escribe un nombre', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="input-nombre"]').type('Huellitas');
    cy.get('[data-testid="refugio-item"]').should('have.length', 1);
    cy.get('[data-testid="refugio-item"]').first().should('contain', 'Huellitas');
  });

  it('debe ser insensible a mayúsculas y minúsculas', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="input-nombre"]').type('huellitas');
    cy.get('[data-testid="refugio-item"]').should('have.length', 1);
    cy.get('[data-testid="refugio-item"]').first().should('contain', 'Huellitas');
  });

  it('debe mostrar todos los refugios cuando el campo está vacío', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="input-nombre"]').type('Huellitas');
    cy.get('[data-testid="refugio-item"]').should('have.length', 1);
    cy.get('[data-testid="input-nombre"]').clear();
    cy.get('[data-testid="refugio-item"]').should('have.length', 10);
  });
});

describe('Buscar Refugios - Filtrar por departamento', () => {
  it('debe mostrar un selector de departamento', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="select-departamento"]').should('exist');
  });

  it('debe filtrar refugios al seleccionar "La Paz"', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="select-departamento"]').select('La Paz');
    cy.get('[data-testid="refugio-item"]').should('have.length', 2);
    cy.get('[data-testid="refugio-item"]').each(($el) => {
      cy.wrap($el).should('contain', 'La Paz');
    });
  });

  it('debe filtrar refugios al seleccionar "Cochabamba"', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="select-departamento"]').select('Cochabamba');
    cy.get('[data-testid="refugio-item"]').should('have.length', 1);
    cy.get('[data-testid="refugio-item"]').first().should('contain', 'Cochabamba');
  });

  it('debe mostrar todos los refugios al seleccionar "Todos"', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="select-departamento"]').select('La Paz');
    cy.get('[data-testid="refugio-item"]').should('have.length', 2);
    cy.get('[data-testid="select-departamento"]').select('Todos');
    cy.get('[data-testid="refugio-item"]').should('have.length', 10);
  });

  it('debe combinar filtros de nombre y departamento', () => {
    cy.visit('/VerRefugios.html');
    cy.get('[data-testid="select-departamento"]').select('La Paz');
    cy.get('[data-testid="input-nombre"]').type('Esperanza');
    cy.get('[data-testid="refugio-item"]').should('have.length', 1);
    cy.get('[data-testid="refugio-item"]').first().should('contain', 'Esperanza');
    cy.get('[data-testid="refugio-item"]').first().should('contain', 'La Paz');
  });
});

