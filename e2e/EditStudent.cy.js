import LoginPage from "./PageObject/LoginPage.cy.js";
describe('Student Options', () => {
 beforeEach(function () {
  
   const lp=new LoginPage()
   lp.visit()
   lp.fillUserid('masterpraveen')
   lp.fillPassword('praveen')
   lp.submit()
})
 
 
    it('Click on Rosters', () => {
        
      cy.contains('ROSTERS').click()
      cy.contains('District Students').click()
      cy.contains('tr', 'jan06').find('input').check();
      cy.get('#editSdt').contains('Edit Student').click({force : true})
      cy.wait(3000)
      cy.get('#studentNameI').clear()
      cy.get('#studentNameI').type('May 17')
      cy.get('#studentSchoolI').contains('BIJAPUR').click({force : true})
      cy.get('#setSettingsBtn').click()
      cy.contains('Updated information')
    
    })
        
         })