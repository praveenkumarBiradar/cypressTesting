///<reference types="cypress"/>
import LoginPage from "../MasterAccount/PageObject/LoginPage.cy.js";

describe('Home page - Core functions ', () => {
  
    beforeEach(function () {
        const lp=new LoginPage()
        lp.visit()
        lp.fillUserid('Cypresstesting')
        lp.fillPassword('praveen')
        lp.submit()
        cy.contains('HOME').should('be.visible')
    
  })
    it('Create assignment and view', () => {
      
      cy.get('#createMABtn').click()
      cy.contains('Active').click()
      cy.get('.assnname').clear().type('abc11')
      cy.wait(3000)
      //Click on find Existing
      cy.get('.aeFindExisting').click()
      cy.wait(2000)
      cy.contains('tr','Multiple').find('input').click();
      cy.wait(2000)
      cy.get('.selectionDiv > .btn').click()
      cy.get('.editorSaveBtn').click()
      cy.wait(3000)
      cy.contains('HOME').click()
      cy.get(':nth-child(1) > .view-btn').click()
      cy.contains('abc11').should('be.visible')
  
     
    
         })
        /* it('Click on teacher Upload and view', () => {
          cy.get(':nth-child(2) > [href="/mstr/UploadTeachers"]').click()
          cy.contains('File Upload - Create Teacher Accounts:').should('be.visible')
          cy.contains('HOME').click()
          cy.scrollTo('bottom')
          cy.get(':nth-child(2) > .view-btn').click()
          cy.contains('Teacher Groups').should('be.visible')
          cy.contains('HOME').click()
  
             })
             it('Click on classes Upload and view', () => {
              cy.get(':nth-child(3) > [href="/mstr/UploadClasses"]').click()
              cy.get('h3 > b').contains('File Upload - Create Classes').should('be.visible')
              cy.get('#home-root > a').click()
              cy.get(':nth-child(3) > .view-btn').click()
              cy.get('#allGroupsLabel').contains('ALL').should('be.visible')
         
              
      
                 })
                 it('Click on Students Add To Class and classes Upload and view', () => {
                  cy.get(':nth-child(4) > [href="/mstr/AddStudentsToClasses"]')
                  let a=cy.url()
                  cy.should('include', 'a')
                  cy.contains('HOME').click()
                  cy.get(':nth-child(4) > [href="/mstr/UploadStudents"]')
                  cy.contains('HOME').click()
                  cy.get(':nth-child(4) > .view-btn')
                  cy.contains('HOME').click()
                  cy.get('#welcomelink').click()
                  cy.contains('Logout').click()
                
                     })
                 */  
                 
    })
  