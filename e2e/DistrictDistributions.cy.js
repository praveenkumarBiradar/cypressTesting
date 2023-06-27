import LoginPage from "./PageObject/LoginPage.cy.js";
describe('Rosters - Core functions ', () => {
let rnum = Math.floor(Math.random() * 1001)
 beforeEach(function () {
  
   const lp=new LoginPage()
   lp.visit()
   lp.fillUserid('cypresstesting')
   lp.fillPassword('praveen')
   lp.submit()
})

it('Create distribution folder', () => {
cy.contains('CONTENT').click()
cy.contains('District Distributions').click()
cy.wait(6000)
cy.get('tbody > :nth-child(1) > :nth-child(5)').click()
cy.get('#folder-add-btn').click({force:true})
cy.get('#newFolderNameI').type(rnum)
cy.get('#newFolderSub').click()
cy.get('#edciteStatusArea').contains('Created')
cy.wait(4000)
})
it('Create distribution Sub-folder', () => {
    cy.contains('CONTENT').click()
    cy.contains('District Distributions').click()
    cy.wait(4000)
    cy.contains(rnum).click()
    cy.get('#folder-add-btn').click()
    cy.get('#newFolderNameI').type('Sub-Folder')
    cy.get('#newFolderSub').click()
    cy.get('#edciteStatusArea').contains('Created')
   
    })
    
      it('Add distribution to the folder', () => {
        cy.contains('CONTENT').click()
        cy.contains('District Distributions').click()
        cy.wait(4000)
        cy.contains('tr','Distribution 2').find('input').check();
        cy.wait(4000)
        cy.get('#add-to-folder-li').click({force:true})
        cy.get('#addToFolderPanelUL').contains(rnum).click()
        //cy.contains(rnum).click()
        cy.get('#subMoveToFolderBtn').click()
        })
        it('View Authorized Teachers', () => {
          cy.contains('CONTENT').click()
          cy.contains('District Distributions').click()
          cy.wait(4000)
          cy.contains(rnum).click()
          cy.get('#viewAuthPanelLI').click({force:true})
          cy.wait(3000)
          cy.get('#authorizegroup').contains('Authorized Teachers').should('be.visible')
      
          })
        it('Delete distribution folder', () => {
          cy.contains('CONTENT').click()
          cy.contains('District Distributions').click()
          cy.wait(4000)
          cy.contains(rnum).click()
          cy.get('.btn-group').contains('Delete Folder').click({force:true})
          cy.get('#edciteStatusArea').contains('deleted')
      
          })
})
