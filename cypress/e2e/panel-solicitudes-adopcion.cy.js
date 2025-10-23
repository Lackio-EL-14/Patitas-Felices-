

describe ('Panel de Solicitudes', () => {
    it ('Deberiamos poder ser redirigidos a la ventana de solicitudes de adopcion', () => {
        cy.visit('/');
        cy.get('[data-cy="link-panel-solicitudes"]').should('have.attr', 'href', '/panel-solicitudes-adopcion.html');
        cy.get('[data-cy="link-panel-solicitudes"]').click();
        cy.url().should('include', '/panel-solicitudes-adopcion.html')  
    });
    it ('Deberiamos ver las solicitudes de adopcion en el panel', () => {
        const solicitudesMock = [
        { id: 1, nombre: 'Juan Perez', mascota: 'Fido', estado: 'Pendiente' },
        { id: 2, nombre: 'Ana Gomez', mascota: 'Misu', estado: 'Pendiente' },
        { id: 3, nombre: 'Luis Martinez', mascota: 'Rex', estado: 'Aprobada' },
        { id: 4, nombre: 'Maria Lopez', mascota: 'Luna', estado: 'Rechazada' },
        { id: 5, nombre: 'Carlos Sanchez', mascota: 'Max', estado: 'Pendiente' }
        ];
        cy.intercept('GET', '/api/solicitudes', { body: solicitudesMock }).as('getSolicitudes');
        cy.visit('/panel-solicitudes-adopcion.html');
        cy.wait('@getSolicitudes');
        cy.contains('Juan Perez').should('be.visible');
        cy.contains('Ana Gomez').should('be.visible');
        cy.contains('Luis Martinez').should('be.visible');
        cy.contains('Maria Lopez').should('be.visible');
        cy.contains('Carlos Sanchez').should('be.visible');
    });
    it('debería mostrar los detalles de una solicitud al hacer clic en "Ver Detalle"', () => {
        const solicitudesMock = [
            { id: 1, nombre: 'Juan Perez', mascota: 'Fido', estado: 'Pendiente' },
            { id: 2, nombre: 'Ana Gomez', mascota: 'Misu', estado: 'Pendiente' }
        ];
        cy.intercept('GET', '/api/solicitudes', { body: solicitudesMock }).as('getSolicitudes');
        const detalleMock = { 
            id: 1, 
            nombre: 'Juan Perez', 
            mascota: 'Fido', 
            email: 'juan.perez@email.com', 
            motivo: 'Me encantan los perros' 
        };
        cy.intercept('GET', '/api/solicitudes/1', { body: detalleMock }).as('getDetalle');
        cy.visit('/panel-solicitudes-adopcion.html');
        cy.wait('@getSolicitudes'); 
        cy.get('[data-cy="btn-detalle-1"]').click();
        cy.wait('@getDetalle'); 
        
        cy.get('#modal-detalle').should('be.visible');
        cy.get('#modal-detalle').contains('juan.perez@email.com');
        cy.get('#modal-detalle').contains('Me encantan los perros');
    });
    it('debería aprobar una solicitud al hacer clic en "Aprobar"', () => {

        const solicitudesMock = [{ id: 1, nombre: 'Juan Perez', mascota: 'Fido' }];
        cy.intercept('GET', '/api/solicitudes', { body: solicitudesMock }).as('getSolicitudes');
        cy.intercept('PUT', '/api/solicitudes/1/aprobar', { statusCode: 200, body: { success: true } }).as('aprobarSolicitud');
        cy.visit('/panel-solicitudes-adopcion.html');
        cy.wait('@getSolicitudes');
        cy.get('[data-cy="btn-aprobar-1"]').click();
        cy.wait('@aprobarSolicitud'); 
        cy.get('[data-cy="btn-aprobar-1"]').should('be.disabled');
        cy.get('[data-cy="btn-rechazar-1"]').should('be.disabled');
        cy.get('[data-cy="solicitud-1"]').contains('Estado: Aprobada');
    });
    it('debería rechazar una solicitud al hacer clic en "Rechazar"', () => {
        const solicitudesMock = [{ id: 1, nombre: 'Juan Perez', mascota: 'Fido' }];
        cy.intercept('GET', '/api/solicitudes', { body: solicitudesMock }).as('getSolicitudes');
        cy.intercept('PUT', '/api/solicitudes/1/rechazar', { statusCode: 200, body: { success: true } }).as('rechazarSolicitud');
        cy.visit('/panel-solicitudes-adopcion.html');
        cy.wait('@getSolicitudes');
        cy.get('[data-cy="btn-rechazar-1"]').click();
        cy.wait('@rechazarSolicitud'); 
        cy.get('[data-cy="btn-aprobar-1"]').should('be.disabled');
        cy.get('[data-cy="btn-rechazar-1"]').should('be.disabled');
        cy.get('[data-cy="solicitud-1"]').contains('Estado: Rechazada');
    });
});

