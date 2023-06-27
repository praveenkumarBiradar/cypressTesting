///<reference types="cypress"/>

import LoginPage from "./PageObject/LoginPage.cy.js";
describe('District Student Options ', () => {
    let rnum = Math.floor(Math.random() * 1001)
 beforeEach(function () {
  
   const lp=new LoginPage()
   lp.visit()
   lp.fillUserid('Cypresstesting')
   lp.fillPassword('praveen')
   lp.submit()
})
     it('Create new Group', () => {
        
      cy.contains('ROSTERS').click()
      cy.contains('District Students').click()
      cy.get('tbody > :nth-child(1) > :nth-child(3)').click()
      cy.get('#createGp').click({force : true})
      cy.get('#newGroupNameInput').type(rnum)
      cy.get('#newGroupNameSubmit').click()
        
    })/*
   after(function () {
   
      cy.get('#welcomelink').click()
      cy.contains('Logout').click()
    
  })*/

    it('Upload Students to group', () => {
        
        cy.contains('ROSTERS').click()
        cy.contains('District Students').click()
        cy.get('tbody > :nth-child(2) > :nth-child(1) > input').click()
        cy.contains('Upload Students to Group').click({force:true})
        cy.contains('Student Groups').should('be.visible')
     
        })
        it('Group Settings', () => {
        
            cy.contains('ROSTERS').click()
            cy.contains('District Students').click()
            cy.wait(3000)
            cy.get('tbody > :nth-child(1) > :nth-child(5)').click()
            cy.get('#groupsUL').contains('New').click()
            cy.contains('No students to show').should('be.visible')
            cy.get('#groupSettings').click({force:true})
            cy.get(':nth-child(1) > .settingsTabValue > .settingsTabInput').click({force: true})
            cy.get('#savechanges').click()
            //cy.contains('New').click({force:true})
           // cy.contains('Student Groups').should('be.visible')
         
            })
            it('Add Students to group', () => {
        
                cy.contains('ROSTERS').click()
                cy.contains('District Students').click()
                cy.wait(5000)
                cy.get('.sorting_disabled > #select-all').click()
                cy.wait(5000)
                cy.get('#aStudentsTable_wrapper').click()
                cy.get('#group-actions-dd').click({force:true})
                cy.contains('Add to Group').click({force: true})
                cy.get('#move-group-dd').contains(rnum).click({force: true})
                cy.wait(5000)
                cy.contains(rnum).click({force:true})
                cy.contains('Total Students: 4').should('be.visible')
             
                })
                it('Remove Students from group', () => {
        
                    cy.contains('ROSTERS').click()
                    cy.contains('District Students').click()
                    cy.wait(5000)
                    cy.get('tbody > :nth-child(2) > :nth-child(3)').click()
                    cy.get('#groupsUL').contains(rnum).click({force:true})
                    cy.get('#select-all').click()
                    cy.wait(5000)
                    cy.get('#select-all').click()
                    cy.contains('Remove from Group').click({force:true})
                    //cy.contains('Total Students: 4').should('be.visible')
                 
                    })
})