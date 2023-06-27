///<reference types="cypress"/>
import LoginPage from "./PageObject/LoginPage.cy.js";
describe('district student', () => {

  beforeEach(function () {
  
    const lp=new LoginPage()
    lp.visit()
    lp.fillUserid('masterpraveen')
    lp.fillPassword('praveen')
    lp.submit()
 })
 
 
 
    it('Click on Rosters options Edit', () => {
        
      cy.contains('ROSTERS').click()
      cy.contains('District Students').click()
      cy.get('label > input').type('Akarsha')
      cy.contains('aak1').should('be.visible')
      cy.get('#groupsUL > [data-val="1368"]').click()
      cy.contains('aak1').should('be.visible')
      cy.get('#schoolsGroupLabel').click()
      cy.wait(3000)
      cy.contains('Vidya Vaibhav').click()
      cy.contains('abhilash').should('be.visible')
      cy.get('#gradesGroupLabel').click()
      cy.get('#groupsUL > [data-val="0"]').click()
      cy.contains('Total Students').should('be.visible')
      cy.get('#helpLink').click()
      cy.contains('Master Students Help').should('be.visible')
      cy.get('#helpModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
    
        
    })
    after(function () {
   
      cy.get('#welcomelink').click()
      cy.contains('Logout').click()
    
  })
})
        
     