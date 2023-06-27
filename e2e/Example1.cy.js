///<reference types="cypress"/>

describe('empty spec', () => {

  it('passes', () => {
    cy.visit('https://www.edcite.com/usr/signin')
    cy.get('#userid').type('abd')
    cy.get('#password').type('praveen')
    cy.get('#loginBtn').click()
    cy.contains('Assignments').click()
    cy.window().then((win) => {
      cy.spy(win, 'open').as('redirect');
      cy.contains('Create Assignment').click()
      cy.contains('Active').click()
      cy.get('.assnname').clear().type('October11')
      cy.get('.aeFindExisting').click()

       });

  })
})