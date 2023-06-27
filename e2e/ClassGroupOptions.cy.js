///<reference types="cypress"/>
describe('Class Group Options ', () => {
    //let date = new Date().toJSON(); 
    let rnum = Math.floor(Math.random() * 1001)
    beforeEach(function () {
      cy.visit('/')
      cy.get('#userid').type('masterpraveen')
      cy.get('#password').type('praveen')
      cy.get('#loginBtn').click()
      
  })

  after(function () {
    cy.get('#arrow-down > img').click()
    cy.contains('Logout').click()
    
})
/*
  it('Create new Class group and Delete ', () =>
  {
   cy.contains('ROSTERS').click()
   cy.contains('District Classes').click()
   cy.get('tbody > :nth-child(1) > :nth-child(6)').click()
   cy.get('#createGp').click({force:true})
   cy.get('#newGroupNameInput').type(rnum +'')
   cy.get('#newGroupNameSubmit').click()
   cy.wait(3000)
   cy.contains(rnum).get('#delete-group-folder').click({force: true})


    })
  */
  it('Adding and removing class from the group ', () =>
  {
   cy.contains('ROSTERS').click()
   cy.contains('District Classes').click()
   cy.contains('tr', 'bld').find('input').check();
  // cy.get('tbody > :nth-child(1) > :nth-child(1) > input').click()
   cy.get('#moveToGp').click({force:true})
   cy.contains('NewClass').click({force:true})
   cy.wait(3000)
   cy.get('.folderNameSpan').contains('NewClass').click({force:true})
   cy.contains('Total Classes: 1').should('be.visible')
   cy.contains('tr', 'bld').find('input').check();
   cy.get('#removeFromGp').click({force:true}) 
   cy.wait(3000)
   cy.get('.folderNameSpan').contains('NewClass').click({force:true})
   cy.contains('No classes to show').should('be.visible')

  }) 

  
})