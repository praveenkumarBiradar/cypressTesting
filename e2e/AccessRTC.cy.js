///<reference types="cypress"/>
    
import LoginPage from "./PageObject/LoginPage.cy.js";

describe(' RTC', () => {
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
it('Access RTC From Manage Distribution Page', () =>
{
cy.contains('CONTENT').click()
cy.visit('http://edtest70.edcite-dev.com/mstr/MasterAssessment?deployid=cypresstesting_12A5A8')
cy.wait(3000)
cy.scrollTo('bottom')
cy.get('.tableRTConnect').click()
//cy.get('.pageHead').contains('MANAGE DISTRIBUTION').should('be.visible')
cy.get('#assnInfo').contains('Real-time Connect').should('be.visible')

}) 
});