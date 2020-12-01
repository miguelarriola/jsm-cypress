/// <reference types="cypress" />

describe('Carga la pagina principal', () => {
  it('Carga la pagina principal', () => {
    cy.visit('/index.html');
    /* MALA PRACTICA usar un selector tan generico */
    // cy.contains('h1', 'Administrador de Pacientes de Veterinaria');
    // Verificar el elemento y su texto
    cy.contains(
      '[data-cy="titulo-proyecto"]',
      'Administrador de Pacientes de Veterinaria'
    );
    // cy.get('h1').should('exist');
    // veruficar que exista
    cy.get('[data-cy="titulo-proyecto"]').should('exist');
    // Verificarexista el elemensto y contenga un texto
    cy.get('[data-cy="titulo-proyecto"]')
      .invoke('text')
      .should('equal', 'Administrador de Pacientes de Veterinaria');
    //  Verificar el texto de las citas
    cy.get('[data-cy="citas-heading"]')
      .invoke('text')
      .should('equal', 'No hay Citas, comienza creando una');
    cy.get('[data-cy="citas-heading"]')
      .invoke('text')
      .should('not.equal', 'Miguel');
  });
});
