
 ///<reference types="cypress"/>
 
 import LoginPage from "./PageObject/LoginPage.cy.js";
 describe('District Assignment ', () => {
 
  beforeEach(function () {
   
    const lp=new LoginPage()
    lp.visit()
    lp.fillUserid('masterpraveen')
    lp.fillPassword('praveen')
    lp.submit()
})
  it('Copy Assignment ', () =>
  {
   cy.contains('CONTENT').click()
   cy.contains('District Assignments').click()
   cy.contains('tr', 'June 30 CA').find('input').check();
   cy.get('#copyAssign').click({force:true})
   cy.wait(20000)
   cy.get('.actionOnAe > .fa').click()
   cy.wait(5000)
   cy.get('.switch6').contains('Active').click()
   cy.wait(5000)
  })
 it('Delete Assignment ', () =>
  {  
   cy.contains('CONTENT').click()
   cy.contains('District Assignments').click()
   cy.contains('tr', 'June 30 CA').find('input').check();
   cy.scrollTo('top')
   cy.get('#deleteAssign').click({ force : true})
   cy.get('#edciteStatusArea').contains('Master Assignment(s) successfully deleted').should('be.visible')
  }) 
 
    it('Assignment Report', () =>
    {
       
     cy.contains('CONTENT').click()
     cy.contains('District Assignments').click()
     cy.contains('tr', 'June 30 CA').find('input').check();
     cy.scrollTo('top')
     cy.get('#assnReport').invoke("removeAttr", "target").click({ force : true}) 
     cy.wait(5000)
     cy.get('[data-etype="SCL_HANDLE_PREV_SUBMSN_CLICK_CARC"]').click()
        
    })
    
  
  it(' Archive Assignment ', () =>
  {
     
   cy.contains('CONTENT').click()
   cy.contains('District Assignments').click()
   cy.contains('tr', 'march 28 rubrics').find('input').check();
   cy.scrollTo('top')
   cy.get('#archiveAssign').click({ force : true})
   
  })
  it(' Unarchive Assignment ', () =>
  {
     
   cy.contains('CONTENT').click()
   cy.contains('District Assignments').click()
   cy.get('#archivedItemsLabel').click()
   cy.contains('tr', 'march 28 rubrics').find('input').check();
   cy.get('#restore-assn-archived-btn').click()
   cy.wait(3000)
  

  })
    })