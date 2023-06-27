///<reference types="cypress"/>

describe('empty spec', () => {
    it('passes', () => {
        //Navigating to the URL
      cy.visit('https://example.cypress.io')
      //Click on Action link using both get and contains
      cy.get('.col-xs-12').contains('Actions').click()
      
      cy.get('#description').type('Clear this text')
      .should('have.value', 'Clear this text')
      .clear() // clear the input value
      .should('have.value', '')
   
      //cy.get('#description').type('Hello welcome to Edcite').clear()

      
    })
  })




