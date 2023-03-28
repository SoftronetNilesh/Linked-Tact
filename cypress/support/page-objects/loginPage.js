import loginPageRepository from '../object-repository/loginPage.json';
class loginPage {

    inputEmail(email) {
        cy.get(loginPageRepository.email).should('be.visible').should('be.enabled').type(email)
        return this;
    }

    inputPassword(password) {
        cy.get(loginPageRepository.password).should('be.visible').should('be.enabled').type(password)
        return this;
    }

    clickSignIn() {
        cy.get(loginPageRepository.loginBtn).should('be.visible').should('be.enabled').click();
        return this;
    }

    verifyInvalidCredsMessage() {
        cy.get('.notification').should('be.visible').contains('You have entered an incorrect username or password.')
        cy.get('.cbox_messagebox_error').should('be.visible').contains('You have entered an incorrect username or password.')
    }
}
export default new loginPage();