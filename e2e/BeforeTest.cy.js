
///<reference types="cypress"/>

describe('Integration Tests', function () {
 
    it('Login', function () {
        cy.visit('/')
        cy.get('#userid').type('masterpraveen')
        cy.get('#password').type('praveen')
        cy.get('#loginBtn').click()
        
      })
    it('first it', function () {
      cy.contains('ROSTERS').click()
    })
    it('2nd it', function () {
        cy.contains('HOME').click()
      })
})