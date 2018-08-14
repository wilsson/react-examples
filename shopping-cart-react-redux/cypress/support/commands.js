// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add('login', () => {
    cy.fixture('user/admin.json').as('userJSON');
    cy.get('@userJSON')
        .then((user) => {
            cy.get('[data-test=btn-modal-login]')
                .click();
            cy.get('input[name="name"]')
                .type(user.email)
                .should('have.value', user.email);
            cy.get('input[name="password"]')
                .type(user.password)
                .should('have.value', user.password);
            cy.get('[data-test=btn-login]')
                .click();
        });
})