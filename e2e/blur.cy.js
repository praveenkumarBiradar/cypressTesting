///<reference types="cypress"/>

describe('empty spec', () => {
    it('passes', () => {
        //Navigating to the URL
      cy.visit('https://example.cypress.io')
      //Click on Action link using both get and contains
      cy.get('.col-xs-12').contains('Actions').click()
      cy.get('.action-blur').type('About to blur')
   

      
    })
  })
  cy.get(':nth-child(4) > [href="/mstr/AddStudentsToClasses"]')
  cy.get('#class1')
  cy.get('#home-root > a')
  cy.get(':nth-child(4) > [href="/mstr/UploadStudents"]')