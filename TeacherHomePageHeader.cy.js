///<reference types="cypress"/>
import LoginPage from "../PageObject/LoginPage.cy.js";
describe(' Teacher Home Page ', () => {

    beforeEach(function () {

        const lp=new LoginPage()
        lp.visit()
        lp.fillUserid('teacher5111')
        lp.fillPassword('praveen')
        lp.submit()
    })
    
    it('Teacher Home Page Header',() => {
        cy.title().should('eq', 'Teacher Home | Edcite')
       
    
    })   

})  