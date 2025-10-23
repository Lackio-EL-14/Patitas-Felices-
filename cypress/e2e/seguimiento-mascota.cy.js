


describe('Seguimiento de mascota adoptada', () => {

  it('debería subir y mostrar la foto', () => {
    cy.visit('/seguimiento-mascota.html');
    cy.window().then((win) => {
      cy.stub(win, 'subirFoto').resolves({ url: 'ruta-mock.jpg' });
    });
    cy.get('[data-cy="input-descripcion"]').type('Esta es una descripción de prueba.');
    cy.get('[data-cy="input-foto"]').attachFile('foto-test.jpg');
    cy.get('[data-cy="btn-subir"]').click();
    cy.get('[data-cy="contenedor-fotos"] img')
      .should('have.attr', 'src', 'ruta-mock.jpg');
  });

   it('debería subir una foto con una descripción y mostrar ambas', () => {
    cy.visit('/seguimiento-mascota.html');

    cy.window().then((win) => {
      cy.stub(win, 'subirFoto').resolves({ url: 'ruta-mock.jpg' });
    });
    const descripcionTexto = 'Fido está muy contento y ha aprendido a dar la patita.';
    cy.get('[data-cy="input-descripcion"]').type(descripcionTexto);

    cy.get('[data-cy="input-foto"]').attachFile('foto-test.jpg');

    cy.get('[data-cy="btn-subir"]').click();
    cy.get('[data-cy="seguimiento-item"]').should('exist');

    cy.get('[data-cy="seguimiento-item"] img')
      .should('have.attr', 'src', 'ruta-mock.jpg');
    cy.get('[data-cy="seguimiento-item"]')
      .should('contain.text', descripcionTexto);
  });


  it('no debería mostrar un recordatorio si se acaba de publicar', () => {
    cy.visit('/seguimiento-mascota.html');

    cy.window().then((win) => {
      cy.stub(win, 'subirFoto').resolves({ url: 'ruta-mock.jpg' });
    });

   
    cy.get('[data-cy="input-descripcion"]').type('Acabo de publicar, sin recordatorios por favor.');
    cy.get('[data-cy="input-foto"]').attachFile('foto-test.jpg');
    cy.get('[data-cy="btn-subir"]').click();


    cy.get('[data-cy="recordatorio"]').should('not.be.visible');
  });
 


 
  it('debería mostrar un recordatorio si la última publicación fue hace más de 7 días', () => {
    // Calculamos una fecha de hace unos minutos por fines practicos 
    const hoy = new Date();
    const fechaAntigua = new Date(hoy.setDate(hoy.getDate() - 8));

  
    cy.visit('/seguimiento-mascota.html', {
      onBeforeLoad(win) {
        win.localStorage.setItem('ultimaPublicacion', fechaAntigua.toISOString());
      }
    });

    cy.get('[data-cy="recordatorio"]')
      .should('be.visible')
      .and('contain.text', 'Es hora de subir una nueva foto de tu mascota');
  });

});

