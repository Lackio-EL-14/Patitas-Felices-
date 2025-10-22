describe ('Panel de Solicitudes', () => {
    it ('Deberiamos poder ser redirigidos a la ventana de solicitudes de adopcion', () => {
        cy.visit('/');
        cy.get('[data-cy="link-panel-solicitudes"]').should('have.attr', 'href', '/panel-solicitudes-adopcion.html');
        cy.get('[data-cy="link-panel-solicitudes"]').click();
        cy.url().should('include', '/panel-solicitudes-adopcion.html')
       
    });
});