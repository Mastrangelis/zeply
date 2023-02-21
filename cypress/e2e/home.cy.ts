/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/// <reference types="Cypress" />

describe('Home Screen', () => {
    beforeEach(() => cy.visit('/'));

    it('Should be able to load app on home page', () => {
        cy.location('pathname').should('eq', '/').end();
    });

    it('Should be able to load navbar component on home page', () => {
        cy.get('[data-cy="header"]')
            .should('be.visible')
            .and('have.css', 'background-color')
            .and('eq', 'rgb(43, 37, 55)');

        cy.get('[data-cy="header"]').within(() => {
            cy.get('[data-cy="header-logo"]')
                .should('be.visible')
                .and('have.css', 'animation')
                .and(
                    'eq',
                    '4s ease-in-out 0s infinite normal none running float-btc'
                );
            cy.get('[data-cy="header-title"]')
                .should('be.visible')
                .contains('BTCScan');
            cy.get('[data-cy="react-select"]').should('be.visible');
        });
    });

    it('Should be able to load main component on home page', () => {
        cy.get('[data-cy="main"]').should('be.visible');
        cy.get('[data-cy="main"]').within(() => {
            cy.get('[data-cy="tabs-controller"]').should('be.visible');
            cy.get('[data-cy="card"]').should('be.visible');
            cy.get('[data-cy="subscription-btn"]').should('be.visible');
        });
    });

    it('Should be able to load footer component on home page', () => {
        cy.get('[data-cy="footer"]').should('be.visible');
        cy.get('[data-cy="footer"]').within(() => {
            cy.get('[data-cy="divider"]')
                .should('be.visible')
                .and('have.css', 'border-color')
                .and('eq', 'rgb(231, 234, 243)');
            cy.get('[data-cy="footer-wrapper"]')
                .should('be.visible')
                .children()
                .first()
                .should('be.visible')
                .contains('Assignement for Zeply | FullStack JS Role');
            cy.get('[data-cy="footer-wrapper"]')
                .should('be.visible')
                .children()
                .last()
                .should('be.visible')
                .contains('@All rights reserved | BTCScan');
        });
    });
});

export {};
