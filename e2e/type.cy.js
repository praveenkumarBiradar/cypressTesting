///<reference types="cypress"/>

describe('empty spec', () => {
    it('passes', () => {
        //Navigating to the URL
      cy.visit('https://example.cypress.io')
      //Click on Action link using both get and contains
      cy.get('.col-xs-12').contains('Actions').click()
      //Type input into the input email box by giving delay and checking the entered input
      cy.get('#email1').type('praveen12@gmail.com1',{ delay: 100}).should('have.value', 'praveen12@gmail.com1')
      // It will enter one backspace 
      .type('{backspace}')
      // Enter input ito the disabled box by using force true
      cy.get('.action-disabled').type('form-control action-disabledf',{ force: true })
      .should('have.value', 'form-control action-disabledf')
      cy.get('.action-focus').focus()
      .should('have.class', 'focus')
      .prev().should('have.attr', 'style', 'color: orange;')

      
    })
  })