///<reference types="cypress"/>

describe('Tutorialspoint', function () {
    // test case

    beforeEach(function () {
      cy.visit('http://edtest70.edcite-dev.com/usr/signin.html')
      cy.get('#userid').type('masterpraveen')
      cy.get('#password').type('praveen')
      cy.get('#loginBtn').click()
    
  })
  it('opens the about page', () => {
   cy.contains('CONTENT').click()
   cy.contains('District Assignments').click()
   cy.get(':nth-child(2) > :nth-child(2) > .assnLink').should('have.attr', 'span').click()
   cy.wait(30000)
   cy.get('.fa fa-angle-double-down').click()
   })
   
  
   
 //})

 });