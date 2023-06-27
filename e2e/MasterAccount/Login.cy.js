///<reference types="cypress"/>

import LoginPage from "../MasterAccount/PageObject/LoginPage.cy.js";


describe(' Login to master account', () => {

    it('Login', () =>
    {
    const lp=new LoginPage()
    lp.visit()
    lp.fillUserid('Cypresstesting')
    lp.fillPassword('praveen')
    lp.submit()
    cy.contains('HOME').should('be.visible')

        })
   
})