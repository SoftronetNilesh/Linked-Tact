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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Initialization for server rout
 * @memberOf Cypress.Chainable#
 * @name initRout
 * @function
 * @param {String} link - element to target
 * @param {String} method - method of the request
 */

Cypress.Commands.add('initRout', (link, method) => {
    // Flaky? Sometimes fails for me.
    // Use cy.intercept to cover server and route; use of the latter is deprecated
    cy.server();
    cy.route(method, link).as(link);
});

/**
 * Wait for server to response
 * @memberOf Cypress.Chainable#
 * @name waitForResponse
 * @function
 * @param {String} link - element to target
 * @param {Number} statusCode - status code of the request
 */

Cypress.Commands.add('waitForResponse', (link, statusCode) => {
    cy.wait(`@${link}`).its('status').should('eq', statusCode);
});

Cypress.Commands.add('getUserAuth', ( username, password) => {
    cy.request({
        method:  "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        url:  '/api-v1/users/login',
        body: {
            username:`${username}`,
            password:`${password}`,
        }
    });
})

Cypress.Commands.add('clearUserData', (token) => {
    cy.request({
        method:  "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        url:  '/api-v1/clean-up?code=48976',
        body: {
            username:`${username}`,
            password:`${password}`,
        }
    });
})

Cypress.Commands.add('deleteCard', (token,cardId) => {
    cy.request({
        method:  "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        url:  `/api-v1/business-cards/${cardId}`,
    });
})