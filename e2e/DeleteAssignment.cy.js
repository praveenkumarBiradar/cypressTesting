///<reference types="cypress"/>

describe('Copy master assignment and delete ', () => {
 
    beforeEach(function () {
      cy.visit('http://edtest70.edcite-dev.com/usr/signin.html')
      cy.get('#userid').type('masterpraveen')
      cy.get('#password').type('praveen')
      cy.get('#loginBtn').click()
    
  })

  it('Click on Delete Assignment ', () =>
  {
     
   cy.contains('CONTENT').click()
   cy.contains('District Assignments').click()
   cy.get('tbody > :nth-child(1) > :nth-child(1) > input').check()
   cy.scrollTo('top')
   cy.get('#deleteAssign').click({ force : true})
   
  })              

    })