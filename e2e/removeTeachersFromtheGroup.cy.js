
///<reference types="cypress"/>

describe('Copy master assignment and delete ', () => {
    //let date = new Date().toJSON(); 
   // let rnum = Math.floor(Math.random() * 1001)
    beforeEach(function () {
      cy.visit('/')
      cy.get('#userid').type('masterpraveen')
      cy.get('#password').type('praveen')
      cy.get('#loginBtn').click()
      cy.get('#arrow-down > img').click()
  })
  /*after(function () {
    cy.get('#arrow-down > img').click()
    cy.contains('Logout').click()
})*/

  
  it('Removing teachers from the group ', () =>
  {
    cy.contains('ROSTERS').click()
    cy.contains('District Teachers').click()
    cy.contains('new1').click({force:true})
    cy.get('[type="checkbox"]').click({multiple:true})
    cy.get('#removeFromGp').click({force:true})
    
    
   
  })     
      

    })