///<reference types="cypress"/>

describe('empty spec', () => {
    it('passes', () => {
        //Navigating to the URL
      cy.visit('https://example.cypress.io')
      //Click on Action link using both get and contains
      cy.get('.col-xs-12').contains('Actions').click()
      cy.get('#couponCode1').type('Hello12345')
      cy.get('.action-form').submit().next().should('contain','Your form has been submitted!')
      
    
      
    })
  })

