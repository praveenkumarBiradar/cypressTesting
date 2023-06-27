
 ///<reference types="cypress"/>
 
 import LoginPage from "./PageObject/LoginPage.cy.js";
 describe('Rosters - Core functions ', () => {
 
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
   cy.wait(4000)
   cy.get('label > input').type('akarsh')
  })
})