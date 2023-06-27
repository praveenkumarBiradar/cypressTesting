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
it('Distribution Options Live Progress ', () =>
{
cy.contains('CONTENT').click()
cy.contains('District Distributions').click()
cy.wait(4000)
// force click
cy.contains('tr', '647').find('input').check();
cy.contains('View Live Progress').click({force:true})
cy.wait(5000)
cy.contains('Continue with assignment').click()
cy.wait(5000)
cy.get('#react-tabs-2').click()
cy.get('.dbclsCount').contains('Classes')

//cy.wait(2000)
//Continue with assignment


}) 
});