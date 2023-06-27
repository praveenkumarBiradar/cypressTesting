import LoginPage from "./PageObject/LoginPage.cy.js";
describe('Destribution Folder  Options', () => {
 beforeEach(function () {
  
   const lp=new LoginPage()
   lp.visit()
   lp.fillUserid('cypresstesting')
   lp.fillPassword('praveen')
   lp.submit()
})

it('Add distribution to the folder', () => {
    cy.contains('CONTENT').click()
    cy.contains('District Distributions').click()
    cy.wait(4000)
    cy.contains('tr','Distribution 2').find('input').check();
    cy.wait(4000)
    cy.get('#folderActionsBtn').click()
    cy.contains('Add to Folder').click({force: true})
    cy.get('#addToFolderPanelUL').contains('Test').click()
    cy.get('#subMoveToFolderBtn').click()
    cy.get('#edciteStatusArea').contains('Added')
    cy.wait(4000)
    })
    it('Remove distribution from the folder', () => {
        cy.contains('CONTENT').click()
        cy.contains('District Distributions').click()
        cy.wait(4000)
        cy.contains('Test').click()
        cy.contains('tr','Distribution 2').find('input').check();
        cy.get('#remove-from-folder-li').contains('Remove from Folder').click({force:true})
        cy.get('#edciteStatusArea').contains('removed')
        })
})