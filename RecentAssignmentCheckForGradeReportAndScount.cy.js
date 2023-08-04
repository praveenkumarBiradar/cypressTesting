///<reference types="cypress"/>
import LoginPage from "./PageObject/LoginPage.cy.js";
describe(' Teacher Home Page ', () => {
let rnum = Math.floor(Math.random() * 1001)

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
it('Teacher Home Page Header',() => {
cy.title().should('eq', 'Teacher Home | Edcite')
cy.wait(4000)
cy.get('.switch6-light > :nth-child(2) > :nth-child(2)').click()

cy.get(':nth-child(2) > .rc-foot').contains('Grade').should('be.visible')
cy.get(':nth-child(2) > .rc-foot').contains('Report').should('be.visible')
cy.get('.sub-ratio').contains('0 / 1 Submitted').should('be.visible')

})


})