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
it('Distribution Settings ', () =>
{
cy.contains('CONTENT').click()
cy.contains('District Distributions').click()
cy.wait(4000)
// force click
cy.contains('647').click();
cy.wait(4000)
cy.get('#settingsBtn').click()
// click on hide scores and answer details
cy.get(':nth-child(5) > .settingsTabValue > .settingsTabInput').click()
cy.scrollTo('top')

// click on student tools
cy.contains('Student Tools').click()
// select None from disable text to speech
cy.get(':nth-child(5) > .settingsTabValue > .settingsTabInput > [value="None"]').click()
cy.get('#savechanges').click()
cy.get('#hdrlabel').contains('647').should('be.visible')


//cy.wait(2000)
//Continue with assignment


}) 
});