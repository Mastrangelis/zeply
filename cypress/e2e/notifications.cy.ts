/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/// <reference types="Cypress" />

describe('Subscription to txns toaster', () => {
    beforeEach(() => cy.visit('/').wait(1000));

    it('Should be able to stop notifications', () => {
        cy.get('[data-cy="subscription-btn"]').should('be.visible').click();
    });

    it('Should be able to start notifications', () => {
        cy.get('[data-cy="subscription-btn"]')
            .should('be.visible')
            .click()
            .wait(1000)
            .click();
    });
});

export {};
