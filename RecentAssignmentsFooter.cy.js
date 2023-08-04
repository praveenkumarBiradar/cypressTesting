///<reference types="cypress"/>
import LoginPage from "./PageObject/LoginPage.cy.js";
describe(' Teacher Home Page ', () => {
//let rnum = Math.floor(Math.random() * 1001)
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
/*afterEach(function () {
cy.get('.user-name').click()
cy.contains('Logout').click()

})*/
it('Teacher Home Page Recent Assignment Footer',() => {
cy.title().should('eq', 'Teacher Home | Edcite')
cy.wait(4000)
cy.get('.switch6-light > :nth-child(2) > :nth-child(2)').click()

cy.scrollTo('bottom')
cy.get('.footer-items').contains('About').should('be.visible')
cy.visit('http://edtest70.edcite-dev.com/about.html')
cy.contains('ABOUT EDCITE').should('be.visible')
cy.go('back')

cy.get('.footer-items').contains('Team').should('be.visible')
cy.visit('http://edtest70.edcite-dev.com/edteam.html')
cy.contains('MANAGEMENT').should('be.visible')
cy.go('back')

cy.get('.footer-items').contains('Press').should('be.visible')
cy.visit('http://edtest70.edcite-dev.com/press.html')
cy.contains('EDCITE IN THE NEWS').should('be.visible')
cy.go('back')


cy.get('.footer-items').contains('Copyrights').should('be.visible')
cy.visit('http://edtest70.edcite-dev.com/help/copyrights.html')
cy.contains('COPYRIGHTS').should('be.visible')
cy.go('back')

cy.get('.footer-items').contains('Terms of Service').should('be.visible')
cy.visit('http://edtest70.edcite-dev.com/help/ServiceTOS.html')
cy.contains('TERMS OF SERVICE').should('be.visible')
cy.go('back')

cy.get('.footer-items').contains('Privacy Policy').should('be.visible') 
cy.visit('http://edtest70.edcite-dev.com/privacy-policy')
cy.contains('PRIVACY').should('be.visible')
cy.go('back')

cy.get('.footer-items').contains('Acknowledgments').should('be.visible') 
cy.get('.footer-items').contains('Blog').should('be.visible')
cy.get('.footer-items').contains('FAQ').should('be.visible') 
cy.get('.footer-items').contains('2023 Edcite Inc').should('be.visible')


})


})