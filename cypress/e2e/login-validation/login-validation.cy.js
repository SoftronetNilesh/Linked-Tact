/// <reference types="cypress" />
import loginPage from '../../support/page-objects/loginPage';
import homePage from '../../support/page-objects/homePage';

let loginData;
describe('Login Validation test suite', () => {
    beforeEach(() => {
        cy.fixture('credentials').then((credential) => {
            loginData = credential;
        });
        cy
            .visit('/')
    });
    it.only('login validation with valid credentials ', () => {
        loginPage.inputEmail(loginData.valid.email)
            .inputPassword(loginData.valid.password)
            .clickSignIn();
        cy.location('pathname').should('include', '/account/dashboard');
        // Example for cy.route()
        //cy.initRout('/envelope/*', 'GET').waitForResponse('/envelope/*', 200);
        homePage.logout();
        cy.location('pathname').should('include', '/login');
    });

    it.only('login validation with Invalid credentials ', () => {
        loginPage.inputEmail(loginData.invalid.email)
            .inputPassword(loginData.invalid.password)
            .clickSignIn()
            .verifyInvalidCredsMessage();
        cy.location('pathname').should('include', '/login');
    });
})