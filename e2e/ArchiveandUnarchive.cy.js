
///<reference types="cypress"/>

describe('Assignment Options', () => {
 
    beforeEach(function () {
      cy.visit('http://edtest70.edcite-dev.com/usr/signin.html')
      cy.get('#userid').type('masterpraveen')
      cy.get('#password').type('praveen')
      cy.get('#loginBtn').click()
    
  })

  it(' Archive Assignment ', () =>
  {
     
   cy.contains('CONTENT').click()
   cy.contains('District Assignments').click()
   cy.get('tbody > :nth-child(2) > :nth-child(1) > input').check()
   cy.scrollTo('top')
   cy.get('#archiveAssign').click({ force : true})
   
  })
})