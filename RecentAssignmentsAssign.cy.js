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
cy.get('.eg').contains('Assign').click()
cy.contains('Assign to Classes').should('be.visible')
cy.contains('tr','class1').find('input').check()
cy.get('.action-btns-div > .eg').click()
cy.contains('Manage Assignment').click()
cy.get('.clsUnassign > .btn').click()
cy.wait(4000)
cy.contains('Unassigned').should('be.visible')
cy.get('.manageFooter > .btn').click()

})


})