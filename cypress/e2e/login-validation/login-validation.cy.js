/// <reference types="cypress" />
import loginPage from '../../support/page-objects/loginPage';
import constants from '../../support/constants/Constants';
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
        loginPage.navigateToLoginPage()
            .inputEmail(loginData.valid.email)
            .inputPassword(loginData.valid.password)
            .clickSignIn()
            .verifyMessage(constants.message.LoggedIn)
        cy.location('pathname').should('include', '/app/admin/cards');
    });

    it('login validation with Invalid credentials ', () => {
        loginPage.navigateToLoginPage()
            .inputEmail(loginData.invalid.email)
            .inputPassword(loginData.invalid.password)
            .clickSignIn()
        cy.location('pathname').should('include', '/app/login');
    });
})