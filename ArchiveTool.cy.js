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
cy.contains('Archive Tool').click()
cy.wait(3000)
cy.get('#assnslink').contains('Assignments').click()
cy.wait(3000)
cy.contains('Name').should('be.visible')
//cy.get('a > .btn').click()
cy.get('#welcomelink').click()
cy.contains('Logout').click()

})

})