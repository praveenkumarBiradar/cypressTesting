///<reference types="cypress"/>

describe('Home page - Core functions ', () => {

    beforeEach(function () {
      cy.visit('http://edtest70.edcite-dev.com/usr/signin.html')
      cy.get('#userid').type('masterpraveen')
      cy.get('#password').type('praveen')
      cy.get('#loginBtn').click()
    
  })
    it('Create teacher groups', () =>
     {
        
        cy.contains('ROSTERS').click()
          cy.contains('District Teachers').click()
          cy.scrollTo('top') 

          cy.get('tbody > :nth-child(1) > :nth-child(1) > input').check()        
          cy.get('#createGp').click({force: true})
          
          cy.get('#newGroupNameInput').type('Dec 17')
          cy.get('#newGroupNameSubmit').click()

          
       
         })
         
                   
                 
    })
  