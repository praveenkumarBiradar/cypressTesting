///<reference types="cypress"/>
    
import LoginPage from "./PageObject/LoginPage.cy.js";

describe(' Login to master account', () => {
  //let rnum = Math.floor(Math.random() * 1001)

    beforeEach('Login', () =>
    {
    const lp=new LoginPage()
    lp.visit()
    lp.fillUserid('cypresstesting')
    lp.fillPassword('praveen')
    lp.submit()

        })/*
after(function () {
cy.get('#arrow-down > img').click()
cy.contains('Logout').click()
})
*/
it('Delete Distribution ', () =>
{
cy.contains('CONTENT').click()
cy.contains('District Distributions').click()
cy.wait(4000)
// force click
cy.contains('tr', '647').find('input').check();
cy.contains('Delete Distribution').click({force:true})
cy.wait(5000)
cy.get('#edciteStatusArea').contains('deleted').should('be.visible')
cy.wait(2000)
cy.get('#deletedItemsLabel').contains('Deleted Distributions').click()
cy.contains('tr', '647').find('input').check();
cy.get('#restore-assn-btn').contains('Restore Distribution').click()
cy.get('#edciteStatusArea').contains('Distribution Restored').should('be.visible')




}) 
});