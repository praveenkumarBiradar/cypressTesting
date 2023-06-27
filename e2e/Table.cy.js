///<reference types="cypress"/>
require('cypress-plugin-tab')
describe('Assignment Options', () => {
 
    beforeEach(function () {
      cy.visit('http://edtest70.edcite-dev.com/usr/signin.html')
      cy.get('#userid').type('masterpraveen')
      cy.get('#password').type('praveen')
      cy.get('#loginBtn').click()
    
  })
 
     it('Assignment Report', () =>
     {
        
      cy.contains('CONTENT').click()
      cy.contains('District Assignments').click()
    // cy.contains('tr', 'June 30 CA').find('input').check();
      //cy.contains('June 30 CA').click()
      cy.visit('http://edtest70.edcite-dev.com/mstr/MasterAssignmentEditor?assignid=masterpraveen_1671431706218')
      cy.wait(3000)
      cy.get('.switch6-light > :nth-child(2) > :nth-child(2)').click()
     })
    })