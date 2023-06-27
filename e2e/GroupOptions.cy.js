///<reference types="cypress"/>
    
    import LoginPage from "./PageObject/LoginPage.cy.js";

    describe(' Login to master account', () => {
      let rnum = Math.floor(Math.random() * 1001)
    
        beforeEach('Login', () =>
        {
        const lp=new LoginPage()
        lp.visit()
        lp.fillUserid('masterpraveen')
        lp.fillPassword('praveen')
        lp.submit()
    
            })/*
  after(function () {
    cy.get('#arrow-down > img').click()
    cy.contains('Logout').click()
})
*/
  it('Create new teacher group ', () =>
  {
   cy.contains('ROSTERS').click()
   cy.contains('District Teachers').click()
   cy.get('tbody > :nth-child(2) > :nth-child(4)').click()
   cy.get('#add-group-icon').click()
   cy.get('#newGroupNameInput').type(rnum +'Testing')
   cy.get('#newGroupNameSubmit').click()
   cy.wait(5000)

  }) 

  it('Adding teachers to the group ', () =>
  {

   cy.contains('ROSTERS').click()
   cy.contains('District Teachers').click()
   cy.get('.sorting_disabled > #selectAllChBx').click()
   cy.scrollTo('top')
   cy.get('#moveToGp').click({force:true})
   cy.contains(rnum +'Testing').click({force : true})
   cy.scrollTo('bottom')
   cy.get('#activeTsTable_info').contains('Total Teachers: 14').should('be.visible')
 
  })
  it('Removing teachers from the group ', () =>
  {
    cy.contains('ROSTERS').click()
    cy.contains('District Teachers').click()
    cy.get('tbody > :nth-child(1) > :nth-child(4)')
    cy.contains(rnum +'Testing').click({force:true})
    cy.wait(5000)
    cy.get('#selectAllChBx').click()
    cy.get('#removeFromGp').click({force:true})
    cy.wait(10000)
    cy.get('#selectAllChBx').click()
    cy.get('#removeFromGp').click({force:true})
    cy.wait(10000)

   
  })   
  it('Upload Teachers Groups', () =>
  {
    cy.contains('ROSTERS').click()
    cy.contains('District Teachers').click()
    //force click
    cy.get('tbody > :nth-child(1) > :nth-child(4)')
    cy.get('#uploadTchrGroupCSV').click({force:true})
    cy.contains('Teacher Groups').should('be.visible')
  })    
  /*
  it('Delete Teacher Groups ', () =>
  {
    cy.contains('ROSTERS').click()
    cy.contains('District Teachers').click()
    //force click
    cy.get('tbody > :nth-child(1) > :nth-child(4)').click()
    cy.get('[data-val="2699"] > .glyphicon').click()
    cy.get('#delete-teacher-group').click()
   
  })  */
})