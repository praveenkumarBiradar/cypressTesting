import LoginPage from "./PageObject/LoginPage.cy.js";
describe('Class Options', () => {
 beforeEach(function () {
  
   const lp=new LoginPage()
   lp.visit()
   lp.fillUserid('masterpraveen')
   lp.fillPassword('praveen')
   lp.submit()
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
                  
                        
                        

    })