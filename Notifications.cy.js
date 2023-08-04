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
cy.get('[title="Notifications"]').click()
cy.get('.see-all-div > a').click()
cy.contains('Notification').should('be.visible')
cy.wait(3000)
cy.get('.user-name').click()
cy.contains('Logout').click()

})

})