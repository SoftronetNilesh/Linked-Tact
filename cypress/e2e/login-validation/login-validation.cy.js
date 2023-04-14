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
    it('login validation with valid credentials ', () => {
        loginPage.navigateToLoginPage()
            .inputEmail(loginData.valid.email)
            .inputPassword(loginData.valid.password)
            .clickSignIn()
            .verifyMessage(constants.message.LoggedIn)
        cy.location('pathname').should('include', '/app/admin/cards');
    });

    it('login validation with Invalid password ', () => {
        loginPage.navigateToLoginPage()
            .inputEmail(loginData.invalid.email)
            .inputPassword(loginData.invalid.password)
            .clickSignIn()
            .verifyMessage(constants.message.IncorrectPassword)
        cy.location('pathname').should('include', '/app/login');
    });
    it('login validation with Invalid User ', () => {
        loginPage.navigateToLoginPage()
            .inputEmail(Math.random().toString()+"@random.com")
            .inputPassword(loginData.invalid.password)
            .clickSignIn()
            .verifyMessage(constants.message.InValidUser)
        cy.location('pathname').should('include', '/app/login');
    });
    
    it('Get User Auth', () => {
        cy.getUserAuth(loginData.valid.email,loginData.valid.password).then((response)=>{
            let responseMessage=response['body']['message'];
            let authToken=response['body']['token'];
            cy.log(responseMessage)
            cy.log(authToken)
        })
    });
})