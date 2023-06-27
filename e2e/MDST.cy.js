///<reference types="cypress"/>
    
import LoginPage from "./PageObject/LoginPage.cy.js";

describe(' Login to master account', () => {
  let rnum = Math.floor(Math.random() * 1001)

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
it('Delete distribution ', () =>
{
cy.contains('CONTENT').click()
cy.contains('District Distributions').click()
cy.wait(4000)
// force click
cy.contains('tr', 'Distribution 1').find('input').check();
cy.contains('Manage Distribution').click({force:true})
cy.wait(5000)
cy.get('#saveDA').click()
cy.wait(2000)
cy.get('#deleteDA').click({force : true})
cy.wait(2000)
cy.contains('CONTENT').click()
cy.contains('District Distributions').click()
cy.wait(4000)
cy.get('#deletedItemsLabel').click()
cy.contains('tr', 'Distribution 1').find('input').check();
cy.get('#restore-assn-btn').click()

}) 
});