///<reference types="cypress"/>
import LoginPage from "./PageObject/LoginPage.cy.js";
describe(' Teacher Home Page ', () => {
//let rnum = Math.floor(Math.random() * 1001)

beforeEach(function () {

const lp=new LoginPage()
lp.visit()
lp.fillUserid('teacher5111')
lp.fillPassword('praveen')
lp.submit()
})
afterEach(function () {
cy.get('.user-name').click()
cy.contains('Logout').click()

})
it('Teacher Home Page Recent Assignment Footer',() => {
cy.title().should('eq', 'Teacher Home | Edcite')
cy.wait(4000)
cy.contains('Roster').click()
cy.get('.sec-nav > .selected > a').contains('My Classes').click()
cy.get('.sec-nav > :nth-child(2) > a').contains('My Students').click()
cy.contains('My Students').should('be.visible')
cy.get('.sec-nav > :nth-child(3) > a').contains('My Groups').click()
cy.contains('You dont have any active groups').should('be.visible')

})


})