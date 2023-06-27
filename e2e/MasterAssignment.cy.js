///<reference types="cypress"/>

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
      cy.get('tbody > :nth-child(1) > :nth-child(1) > input').check()
      cy.scrollTo('top')
      cy.get('#assnReport').click({ force : true})
         
     })
     it('Copy Assignment ', () =>
     {
      cy.contains('CONTENT').click()
      cy.contains('District Assignments').click()
      cy.get('tbody > :nth-child(1) > :nth-child(1) > input').check()
      cy.scrollTo('top')
      cy.get('#copyAssign').click({ force : true})
      //cy.wait(5000)
      cy.get('.switch6-light > :nth-child(2) > :nth-child(2)').click({ force : true})
      cy.get('.editorSaveBtn').click({ force : true})
     })
     it(' Delete Assignment ', () =>
  {
     
   cy.contains('CONTENT').click()
   cy.contains('District Assignments').click()
   cy.get('tbody > :nth-child(1) > :nth-child(1) > input').check()
   cy.scrollTo('top')
   cy.get('#deleteAssign').click({ force : true})
 
   
  }) 
 
                 
    })