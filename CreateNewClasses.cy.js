///<reference types="cypress"/>
import LoginPage from "./PageObject/LoginPage.cy.js";
describe(' Teacher Home Page ', () => {
    let rnum = Math.floor(Math.random() * 1001)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    beforeEach(function () {

        const lp=new LoginPage()
        lp.visit()
        lp.fillUserid('teacher5111')
        lp.fillPassword('praveen')
        lp.submit()
    })

    it('Teacher Home Page Header',() => {
        cy.title().should('eq', 'Teacher Home | Edcite')
        cy.wait(4000)
        cy.get('.eg').click()
        cy.get('#fhClassName').type(rnum + 'Class')
        cy.get('.modal-footer > .eg').click()
        cy.wait(2000)
       
    })

})