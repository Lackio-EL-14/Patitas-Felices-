describe ('Panel de Solicitudes', () => {
    it ('Deberiamos poder ser redirigidos a la ventana de solicitudes de adopcion', () => {
        cy.visit('/');
        cy.get('[data-cy="link-panel-solicitudes"]').should('have.attr', 'href', '/panel-solicitudes-adopcion.html');
        cy.get('[data-cy="link-panel-solicitudes"]').click();
        cy.url().should('include', '/panel-solicitudes-adopcion.html')  
    });
    it ('Deberiamos ver las solicitudes de adopcion en el panel', () => {
        const solicitudesMock = [
        { id: 1, nombre: 'Juan Perez', mascota: 'Fido', estado: 'Pendiente' }//,
        //{ id: 2, nombre: 'Ana Gomez', mascota: 'Misu', estado: 'Pendiente' }
        ];
        cy.intercept('GET', '/api/solicitudes', { body: solicitudesMock }).as('getSolicitudes');
        cy.visit('/panel-solicitudes-adopcion.html');
        cy.wait('@getSolicitudes');
        cy.contains('Juan Perez').should('be.visible');
    });
});

