///<reference types="cypress"/>
import LoginPage from "./PageObject/LoginPage.cy.js";

describe('Testing ', () => {
    //let date = new Date().toJSON(); 
    let rnum = Math.floor(Math.random() * 1001)
    let userid = Math.floor(Math.random() * 10001)
    beforeEach(function () {
  
        const lp=new LoginPage()
        lp.visit()
        lp.fillUserid('cypresstesting')
        lp.fillPassword('praveen')
        lp.submit()
     })


     it('Create new Destribution ', () =>
     {
     cy.contains('CONTENT').click()
     cy.contains('District Distributions').click()
     cy.wait(4000)
     // force click
     cy.get('tbody > :nth-child(1) > :nth-child(5)')
     cy.get('#createDist').contains('Create Distribution').click({force:true})
     //cy.get('[data-val="cypresstesting_1674016680093"]').click()
     cy.get(':nth-child(1) > :nth-child(6) > .btn').click()
     cy.get('#newDepLabel').type(rnum +'').click()
     cy.get('#newDeployBtn').click()
     cy.wait(3000)
     cy.get('#hdrlabel').contains(rnum).should('be.visible')
     cy.wait(3000)
     cy.get('#deleteDA').dblclick()
     cy.get('#pageHead').contains('ASSIGNMENTS').should('be.visible')
     
     }) 
    

})