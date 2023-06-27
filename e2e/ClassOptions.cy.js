import LoginPage from "./PageObject/LoginPage.cy.js";
describe('Class Options', () => {
 beforeEach(function () {
  
   const lp=new LoginPage()
   lp.visit()
   lp.fillUserid('masterpraveen')
   lp.fillPassword('praveen')
   lp.submit()
})
 
 
    it('Click on Rosters options Edit', () => {
        
      cy.contains('ROSTERS').click()
      cy.contains('District Classes').click()
      cy.get('tbody > :nth-child(1) > :nth-child(1) > input').click()
      cy.get('#openCss').click({force:true})
      cy.wait(2000)
      cy.get('#ocname').clear()
      cy.get('#ocname').type('1998 avd')
      cy.get('#sis-classID-input').clear().type('123456')
      cy.get('.form-horizontal > #form-numbers > [data-val="6"]').click()
      cy.get('#submitEditClass').click({force:true})
     
        
         })
         it('Click on Rosters options Multi Edit', () => {
        
          cy.contains('ROSTERS').click()
          cy.contains('District Classes').click()
          cy.get('tbody > :nth-child(1) > :nth-child(1) > input').click()
          cy.get('tbody > :nth-child(2) > :nth-child(1) > input').click()
          cy.get('#bulkEdit').click({force:true})
          cy.get('#edit-p-lab').click()
          cy.get('.bulk-e-field').contains('School').click({force:true}) 
          cy.get('#bulk-edit-submit').click()
          cy.wait(3000)
          cy.contains('BIJAPUR').should('be.visible')
             })

           it('Click on Rosters options Archive class and View archive ', () => 
           {       
              cy.contains('ROSTERS').click()
              cy.contains('District Classes').click()
              cy.get(':nth-child(5) > :nth-child(1) > input').click()
              cy.get('#archiveClass').click({force:true})
              cy.wait(5000)
              cy.get('#viewArchive').click({force:true})
              cy.get('#archivedCsTable_filter > label > input').type('demo')
              cy.get('#archivedCsTable > tbody > .odd > :nth-child(1) > input').click()
              cy.get('#unarchive-btn').click()
            })
              
               it('Change Class information ', () => {
        
                cy.contains('ROSTERS').click()
                cy.contains('District Classes').click()
                cy.get('tbody > :nth-child(6) > :nth-child(1) > input').click()
                cy.get('#openCss').click({force:true})
                cy.wait(2000)
                cy.get('#ocname').clear()
                cy.get('#ocname').type('July 01')
                cy.get('#sis-classID-input').clear().type('12345678')
                cy.get('.form-horizontal > #form-numbers > [data-val="6"]').click()
                cy.get('#submitEditClass').click({force:true})
                
                  
                   }) 
                   it('Adding and removing Co-Teachers to the class', () => {
        
                    cy.contains('ROSTERS').click()
                    cy.contains('District Classes').click()
                    cy.get('tbody > :nth-child(6) > :nth-child(1) > input').click()
                    cy.get('#openCss').click({force:true})
                    cy.wait(2000)
                    cy.get('#addCoTeacherBtn').click()
                    cy.get('#coTeacherTable > tbody > :nth-child(1) > :nth-child(1) > input').click()
                    cy.get('#confirm-coTeacher').click()
                    cy.wait(2000)
                    cy.get('.remove-cot-x').click()
                    //cy.get('#submitEditClass').click({force:true})
 
                    }) 
                    it('Adding and removing Students to the class', () => 
                    {
        
                      cy.contains('ROSTERS').click()
                      cy.contains('District Classes').click()
                      cy.get('tbody > :nth-child(6) > :nth-child(1) > input').click()
                      cy.get('#openCss').click({force:true})
                      cy.wait(2000)
                      cy.get('#add-student-btn').click()
                      cy.get('#studentsTable > tbody > :nth-child(1) > :nth-child(1)').click()
                      cy.get('#confirm-stdnts').click()
                      cy.wait(4000)
                      cy.get('#ocStudentsTable > tbody > .odd > :nth-child(1) > input').click()
                      cy.get('#remove-student-btn').click()
                      cy.wait(2000)
                      cy.get('#submitEditClass').click({force:true})
                      cy.wait(3000)
                      cy.get('#arrow-down > img').click()
                      cy.contains('Logout').click()

 
                         })
                        
                        

    })