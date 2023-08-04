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
/*afterEach(function () {
cy.get('.user-name').click()
cy.contains('Logout').click()

})*/
it('Teacher Home Page Header',() => {
cy.title().should('eq', 'Teacher Home | Edcite')
cy.wait(4000)
cy.get('.switch6-light > :nth-child(2) > :nth-child(2)').click()
//Click on 3 dots
cy.get(':nth-child(1) > .rc-foot > .right-actions > :nth-child(2) > .btn > .fa').click()
//Click on Assign
cy.get('.more-opts-dd > :nth-child(1)').click()
cy.contains('July 18 - Scheduler').should('be.visible')
cy.get('.close > [aria-hidden="true"]').click()
// Click on 3 dots
cy.get(':nth-child(1) > .rc-foot > .right-actions > :nth-child(2) > .btn > .fa').click()
//Click on manage
cy.get('.more-opts-dd > :nth-child(2)').click()
cy.contains('View Assignment Settings').should('be.visible')
//Close the model
cy.get('.close > [aria-hidden="true"]').click()
// Click on 3 dots
cy.get(':nth-child(1) > .rc-foot > .right-actions > :nth-child(2) > .btn > .fa').click()
//Click on Preview
cy.get('.more-opts-dd > :nth-child(3)').click()
cy.contains('Answer Key').should('be.visible')
//Close the model
cy.get('.close > [aria-hidden="true"]').click()
// Click on 3 dots
cy.get(':nth-child(1) > .rc-foot > .right-actions > :nth-child(2) > .btn > .fa').click()
//Click on Live Progress
cy.get('.more-opts-dd > :nth-child(4)').click()
cy.wait(4000)
//Click on Continue to this Assignment
cy.get('[data-etype="SCL_HANDLE_CONTINUE_CLICK_ESRC"]').click()
cy.wait(3000)
cy.get('.selSlide').contains('Progress')
//Click on Home button
cy.get('.first-layer-nav > :nth-child(1) > a').click()
cy.wait(3000)
// Click on 3 dots
cy.get(':nth-child(1) > .rc-foot > .right-actions > :nth-child(2) > .btn > .fa').click()
//Click on Edit
cy.get('.more-opts-dd > :nth-child(5)').click()
cy.wait(4000)
cy.contains('Description').should('be.visible')





})


})