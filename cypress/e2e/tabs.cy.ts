/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/// <reference types="Cypress" />

describe('Tabs Controller Navigation', () => {
    beforeEach(() => cy.visit('/').wait(2000));

    it('Should be able to change tabs', () => {
        cy.location('pathname').should('eq', '/').end();

        cy.get('[data-cy="tabs-controller"]').should('be.visible');
        cy.get('[data-cy="tab"]').first().contains('Last five transactions');

        cy.get('[data-cy="tab"]')
            .first()
            .should('have.css', 'text-decoration-line')
            .and('eq', 'underline');

        cy.get('[data-cy="tab"]').last().click().wait(500);

        cy.get('[data-cy="tab"]')
            .last()
            .should('have.css', 'text-decoration-line')
            .and('eq', 'underline');
    });
});

export {};
