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
cy.contains('Set Profile Image').click()
cy.contains('Select image file for new profile picture').should('be.visible')
cy.get('#qupimgcimg').click()
//cy.contains('Modified').should('be.visible')
cy.get('.user-name').click()
cy.contains('Logout').click()

})

})