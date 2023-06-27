///<reference types="cypress"/>

describe('empty spec', () => {
    it('passes', () => {
        //Navigating to the URL
      cy.visit('https://example.cypress.io')
      //Click on Action link using both get and contains
      cy.get('.col-xs-12').contains('Actions').click()
      // It will click the button
      cy.get('.action-btn').click()
      // clicking in the center of the element is the default
      cy.get('#action-canvas').click('top')
      cy.get('#action-canvas').click('bottom')

      // .click() accepts a an x and y coordinate
      // that controls where the click occurs :)
      cy.get('#action-canvas')
      .click(50, 50)
      .click(100, 100)
      
      // click multiple elements by passing multiple: true
      cy.get('.action-labels>.label').click({ multiple: true })


   

      
    })
  })