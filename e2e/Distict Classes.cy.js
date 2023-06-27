///<reference types="cypress"/>

describe('Group Options ', () => {
    //let date = new Date().toJSON(); 
    let nt = Math.floor(Math.random() * 1001)
    let userid = Math.floor(Math.random() * 10001)
    beforeEach(function () {
      cy.visit('/')
      cy.get('#userid').type('masterpraveen')
      cy.get('#password').type('praveen')
      cy.get('#loginBtn').click()
      cy.get('#arrow-down > img').click()
  })
 /* after(function () {
    cy.get('#arrow-down > img').click()
    cy.contains('Logout').click()
})
*/
  it(' District Classes', () =>
  { 
  cy.contains('ROSTERS').click()
   cy.contains('District Classes').click()
   cy.get('#groupsUL > [data-val="1216"]').click()
   cy.get('#schoolsGroupLabel').click()
   cy.contains('BIJAPUR').click()
   cy.contains('edtest70').should('be.visible')
   cy.get('#termsGroupLabel').click()
   cy.get('.termGroup').click()
  cy.contains('Demo3').should('be.visible')
   cy.get('#gradesGroupLabel').click()
   cy.get('#groupsUL > [data-val="1"]').click()
   cy.scrollTo('top')
   cy.contains('Total Classes').should('be.visible')
   cy.get('#subjectsGroupLabel').click()
   cy.get('[data-val="English"]').click()
   cy.contains('English').should('be.visible')
   cy.get('#helpLink').click()
   cy.contains('Master Classes Instructions').should('be.visible')
   cy.get('#helpModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
   cy.get('#arrow-down > img').click()
   cy.contains('Logout').click()

  })
  }) 