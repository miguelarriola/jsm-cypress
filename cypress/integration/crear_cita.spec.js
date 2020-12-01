/// <reference types="cypress" />

describe('Llena los campos para la nueva cita', () => {
  it('Campos nueva cita', () => {
    cy.visit('/index.html');
    cy.get('[data-cy="mascota-input"]').type('Pure');
    cy.get('[data-cy="propietario-input"]').type('Mike');
    cy.get('[data-cy="telefono-input"]').type('88557744');
    cy.get('[data-cy="fecha-input"]').type('2020-12-03');
    cy.get('[data-cy="hora-input"]').type('20:30');
    cy.get('[data-cy="cintomas-textarea"]').type('Solo come y duerme');
    cy.get('[data-cy="submit-cita"]').click();
    cy.get('[data-cy="citas-heading"]')
      .invoke('text')
      .should('equal', 'Administra tus Citas');
    cy.get('[data-cy=alerta]')
      .invoke('text')
      .should('equal', 'Se agregó correctamente');
    cy.get('[data-cy=alerta]').should('have.class', 'alert-success');
  });
});
