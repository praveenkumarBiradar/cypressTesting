///<reference types="cypress"/>

import LoginPage from "../e2e/PageObject/LoginPage.cy.js";

describe(' Login to master account', () => {

    it('Login', () =>
    {
    const lp=new LoginPage()
    lp.visit()
    lp.fillUserid('masterpraveen')
    lp.fillPassword('praveen')
    lp.submit()

        })
   
})

