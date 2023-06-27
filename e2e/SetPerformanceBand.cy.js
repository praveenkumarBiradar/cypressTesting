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
it('Create new teacher group ', () =>
{
cy.contains('CONTENT').click()
cy.contains('District Distributions').click()
cy.wait(4000)
// force click
cy.contains('Distribution 1').click();
cy.wait(2000)
//cy.get('#saveDA').click()
cy.wait(4000)
cy.contains('Set Performance Bands').click({force:true})
cy.wait(4000)
cy.get(':nth-child(4) > :nth-child(6) > .glyphicon').click()
//cy.wait(4000)
cy.get('.perTblDiv > .btn').click()
cy.get(':nth-child(4) > :nth-child(1) > .form-control').type('Advanced')
cy.get('tbody > :nth-child(4) > :nth-child(2) > .form-control').type('70')
cy.get(':nth-child(4) > :nth-child(3) > .form-control').type('100')
cy.get('#authTabDiv > .modal-footer > .btn').click()
cy.get('#saveDA').click()



}) 
});