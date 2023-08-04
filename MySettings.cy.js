///<reference types="cypress"/>
import LoginPage from "./PageObject/LoginPage.cy.js";
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
    cy.get('.user-name').contains('teacher5111').click()
    cy.wait(3000)
    cy.get('.set-ul > :nth-child(1) > a').click()
    cy.wait(3000)
    cy.get('#fname').clear();
    cy.get('#fname').type('teacher511')
    cy.get('#femail').clear()
cy.get('#femail').type('teacher5111@gmail.com')

cy.get('#fgrade').clear()
cy.get('#fgrade').type('4')
cy.wait(3000)
//cy.get('#stop_standards').click()
//cy.get('#stop_standards').click()
cy.contains('US State Standards').click({force : true})
cy.get('[type="checkbox"]').first().check() 
cy.get('[type="checkbox"]').first().uncheck() 
cy.get('#savechanges').click()
cy.contains('Modified').should('be.visible')
cy.get('.user-name').click()
cy.contains('Logout').click()

})

})