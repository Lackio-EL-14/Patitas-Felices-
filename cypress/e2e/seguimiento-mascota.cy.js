

describe('Seguimiento de mascota adoptada', () => {

it('debería subir y mostrar la foto', () => {
  cy.visit('/seguimiento-mascota.html');


  cy.window().then((win) => {
    cy.stub(win, 'subirFoto').resolves({ url: 'ruta-mock.jpg' });
  });

  cy.get('[data-cy="input-foto"]').attachFile('foto-test.jpg');
  cy.get('[data-cy="btn-subir"]').click();

  cy.get('[data-cy="contenedor-fotos"] img')
    .should('have.attr', 'src', 'ruta-mock.jpg');
});

});

