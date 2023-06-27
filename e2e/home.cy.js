
///<reference types="cypress"/>

describe('Copy master assignment and delete ', () => {
 
    beforeEach(function () {
      cy.visit('/')
      cy.get('#userid').type('masterpraveen')
      cy.get('#password').type('praveen')
      cy.get('#loginBtn').click()
    
  })

  it('Copy Assignment ', () =>
  {

    cy.contains('Nov 11 New Dest')
    .invoke("removeAttr", "target")
    .click()
    cy.wait(4000)
    cy.get('#saveDA').click()  
  })
})
