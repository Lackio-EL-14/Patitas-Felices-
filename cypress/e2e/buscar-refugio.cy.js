describe('Buscar Refugios - Final Feliz', () => {
  it('debe mostrar la página de refugios', () => {
    cy.visit('/VerRefugios.html');
    cy.contains('Todos los Refugios'); 
  });
});