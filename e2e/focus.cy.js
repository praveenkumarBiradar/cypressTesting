///<reference types="cypress"/>

describe('empty spec', () => {
    it('passes', () => {
        //Navigating to the URL
      cy.visit('https://example.cypress.io')
      //Click on Action link using both get and contains
      cy.get('.col-xs-12').contains('Actions').click()
      cy.get('.action-focus').focus()
      .should('have.class', 'focus')
      .prev().should('have.attr', 'style', 'color: orange;')

    })
  })