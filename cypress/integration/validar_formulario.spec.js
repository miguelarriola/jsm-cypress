/// <reference types="cypress" />

describe('validar el fotmulario', () => {
  it('Submit al formulario y mostrar la alerta del error', () => {
    cy.visit('/index.html');
    cy.get('[data-cy="formulario"]').submit();
    cy.get('[data-cy=alerta]')
      .invoke('text')
      .should('equal', 'Todos los campos son Obligatorios');
    cy.get('[data-cy=alerta]').should('have.class', 'alert-danger');
  });
});
