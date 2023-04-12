import loginPageRepository from '../object-repository/loginPage.json';
import landingPageRepository from '../object-repository/landingPage.json'
class loginPage {

    navigateToLoginPage() {
        cy.get(landingPageRepository.login_register_btn).should('be.visible').click()
        return this;
    }

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

    verifyMessage(message) {
        cy.get(loginPageRepository.message).should('be.visible').contains(message);
    }

    verifyInvalidCredsMessage() {
        cy.get(loginPageRepository.message).should('be.visible')
    }
}
export default new loginPage();