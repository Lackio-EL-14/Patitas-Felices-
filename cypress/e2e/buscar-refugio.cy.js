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