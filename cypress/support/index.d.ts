/// <reference types="Cypress"/>
declare namespace Cypress {
    interface Chainable {
        getUserAuth(user: string,password: string):Cypress.Chainable<JQuery>;
        deleteCard(token: string,cardId: string):Cypress.Chainable<JQuery>;
    }
}