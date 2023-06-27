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
it('Create new teacher group ', () =>
{
cy.contains('CONTENT').click()
cy.contains('District Distributions').click()
cy.wait(4000)
// force click
cy.contains('tr', 'Distribution 1').find('input').check();
cy.contains('Manage Distribution').click({force:true})
cy.wait(5000)
cy.get('#saveDA').click()
cy.visit('http://edtest70.edcite-dev.com/v4apps/AdminReportsContainer?atype=dist&report=live-progress&deployid=cypresstesting_F3Y1Q7')
cy.wait(4000)
cy.get('[data-etype="SCL_HANDLE_CONTINUE_CLICK_CARC"]').click()
cy.wait(3000)
cy.get('.dbAssnViewLink').contains('Assignment 1').should('be.visible')

}) 
});