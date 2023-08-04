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
cy.contains('My Profile').click()
cy.wait(2000)
cy.get(':nth-child(3) > .edit-cont > .fas').click()
cy.get('#tinfo-role-dd').click()
cy.contains('India').click({force : true})
cy.get('#tif-state-fg').type('KA')
cy.get('[data-val="3"]').click()
cy.get('.eg').contains('Save').click()
//cy.contains('Modified').should('be.visible')
cy.get('.user-name').click()
cy.contains('Logout').click()

})

})