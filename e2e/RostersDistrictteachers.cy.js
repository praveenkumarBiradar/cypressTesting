import LoginPage from "./PageObject/LoginPage.cy.js";

describe(' Login to master account', () => {

    before('Login', () =>
    {
    const lp=new LoginPage()
    lp.visit()
    lp.fillUserid('masterpraveen')
    lp.fillPassword('praveen')
    lp.submit()

        })
      
  
    it('Filter teacher page ', () =>
     {
        
        cy.contains('ROSTERS').click()
          cy.contains('District Teachers').click()
          cy.scrollTo('top')
          cy.get('#activeTsTable_filter > label > input').type('praveen').clear()
          cy.get('tbody > :nth-child(2) > :nth-child(4)').click()
          cy.get('#masterGroupsLabel').click()
          cy.get('[data-val="2696"] > .groupNameSpan').click({force:true})
        cy.wait(3000)
          cy.contains('No data available in table').should('be.visible')
          
 // filter by school
 cy.get('#schoolsGroupLabel').click()
 cy.get('[data-val="BIJAPUR"]').click()
 cy.scrollTo('top') 	
 cy.contains('Edcite Schools').should('be.visible')
 //filter by grade 
 cy.get('#gradesGroupLabel').click()
 cy.get('#groupsUL > [data-val="1"]').click()
 cy.scrollTo('top')
 cy.contains('edcite123.com').should('be.visible')
 //filter by subject
 cy.get('#subjectsGroupLabel').click()
 cy.get('[data-val="Grammar"]').click()
 cy.scrollTo('top') 
 cy.contains('praveen12').should('be.visible')
 cy.get('#helpLink').click()
 cy.contains('Master Teachers Help').should('be.visible')
 cy.get('#helpModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()  

         })   
         after(' Logout ', () => {
          cy.get('#welcomelink').click()
          cy.contains('Logout').click()
         })                
                 
    })
  