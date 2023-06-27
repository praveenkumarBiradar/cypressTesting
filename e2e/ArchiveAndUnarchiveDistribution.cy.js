///<reference types="cypress"/>
    
import LoginPage from "../pageObject/LoginPage.cy.js";

describe(' Archive and Unarchive the distributions ', () => {
  //let rnum = Math.floor(Math.random() * 1001)

    beforeEach('Login', () =>
    {
    const lp=new LoginPage()
    lp.visit()
    lp.fillUserid('cypresstesting')
    lp.fillPassword('praveen')
    lp.submit()

        })/*

*/
it('Archive and Unarchive distributions ', () =>
{
cy.contains('CONTENT').click()
cy.contains('District Distributions').click()
cy.wait(4000)
// force click
cy.contains('tr', '37').find('input').check();
cy.contains('Archive Distribution').click({force:true})
cy.wait(5000)
cy.get('#edciteStatusArea').contains('archived').should('be.visible')
cy.wait(2000)
cy.get('#archivedItemsLabel').contains('Archived Distributions').click()
cy.contains('tr', '37').find('input').check();
cy.get('#unarchive-btn').contains('Restore Distribution').click()
cy.get('#edciteStatusArea').contains('Distribution restored').should('be.visible')


}) 
});