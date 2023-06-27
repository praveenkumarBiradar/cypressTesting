///<reference types="cypress"/>
import LoginPage from "./PageObject/LoginPage.cy.js";
describe('Edit Teacher Details', () => {
 
  beforeEach('Login', () =>
  {
  const lp=new LoginPage()
  lp.visit()
  lp.fillUserid('masterpraveen')
  lp.fillPassword('praveen')
  lp.submit()

      })
  after(function() {
       cy.contains('Praveen').click()
       cy.contains('Logout').click()
  })
 
    it('Click on Rosters options', () => {
        
      cy.contains('ROSTERS').click()
        cy.contains('District Teachers').click()
        cy.get('[data-id="davem0901210"]').click()
        cy.get('#teacherNameI').clear()
        cy.get('#teacherNameI').type('Hello')
        cy.get('#editTeacherSubmit').click()

         })
                
    })