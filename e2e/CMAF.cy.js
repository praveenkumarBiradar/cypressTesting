///<reference types="cypress"/>
describe('Group Options ', () => {
    //let date = new Date().toJSON(); 
    let rnum = Math.floor(Math.random() * 1001)
    beforeEach(function () {
      cy.visit('/')
      cy.get('#userid').type('masterpraveen')
      cy.get('#password').type('praveen')
      cy.get('#loginBtn').click()
      //cy.get('#arrow-down > img').click()
  })
  after(function () {
    cy.get('#arrow-down > img').click()
    cy.contains('Logout').click()
})

  it('District Assignment ', () =>
  {
   cy.contains('CONTENT').click()
   cy.contains('District Assignments').click()
   cy.get('tbody > :nth-child(1) > :nth-child(6)').click()
   cy.get('#folder-add-btn > .fa').click({force:true})
   cy.get('#newFolderNameI').type(rnum)
   cy.get('#newFolderSub').click({force : true})
   cy.contains(rnum).click()
   cy.get('#folder-add-btn > .fa').click()
   cy.get('#newFolderNameI').type(rnum+'Sub')
   cy.get('#newFolderSub').click()
   cy.wait(3000)
   cy.get('#allItems').click()
   cy.contains('tr', 'June 30 CA').find('input').check();
   //cy.get('tbody > :nth-child(1) > :nth-child(1) > input').click()

   cy.get('#add-to-folder-li').click({force:true})
   cy.get('#addToFolderPanelUL > [data-val="7323"] > .fNameSpan').click() // try to get the folder name
   cy.get('#subMoveToFolderBtn').click()
   cy.get('#folderPanelUL > [data-val="7323"] > .fNameSpan').click()
   cy.contains('June 30 CA').should('be.visible') // Try
   cy.contains(rnum).click()
   cy.get('#deleteFolderPanelLI').click({force:true})
   // add assertion for delete message
   cy.get('#edciteStatusArea').contains('delete').should('be.visible')
  }) 

   
})