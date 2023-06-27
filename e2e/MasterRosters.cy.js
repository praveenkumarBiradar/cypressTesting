///<reference types="cypress"/>

describe('Rosters - Core functions ', () => {
 
    before(function () {
      cy.visit('http://edtest70.edcite-dev.com/usr/signin.html')
      cy.get('#userid').type('masterpraveen')
      cy.get('#password').type('praveen')
      cy.get('#loginBtn').click()
    
  })
 
    it('Click on Rosters options', () => {
        
      cy.contains('ROSTERS').click()
        cy.contains('District Teachers').click()
        cy.wait(5000)
        cy.contains('aksp').should('be.visible')

        cy.contains('ROSTERS').click()
        cy.contains('District Classes').click()
        cy.wait(5000)
        cy.contains('Mr. prav2Testing').should('be.visible')

        cy.contains('ROSTERS').click()
        cy.contains('District Students').click({force: true}) 
        cy.wait(5000)
        cy.contains('aak').should('be.visible')
      
        cy.contains('ROSTERS').click()
        cy.contains('Upload Teachers').click()
        cy.contains('File Upload - Create Teacher Accounts:').should('be.visible')
        cy.contains('HOME').click()
        cy.contains('ROSTERS').click()
        cy.contains('Upload Classes').click()
        cy.contains('File Upload - Create Classes').should('be.visible')
        cy.contains('HOME').click()
        cy.contains('ROSTERS').click()
        cy.contains('Upload Students').click()
        cy.contains('File Upload - Create Student Accounts:').should('be.visible') 
        cy.contains('HOME').click()
        cy.contains('ROSTERS').click()
        cy.contains('Upload Class Rosters').click()
        cy.contains('File Upload - Add Students to Classes').should('be.visible')

        cy.contains('Praveen').click()
        cy.contains('Logout').click()

         })
            
    })