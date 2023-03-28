import homePageRepository from '../object-repository/homePage.json';
class homePage {

    logout() {
        cy.get(homePageRepository.profileName).should('be.visible').trigger('mouseover').click();
        cy.get(homePageRepository.logoutBtn).should('be.visible').should('be.enabled').click();
        return this;
    }

}
export default new homePage();