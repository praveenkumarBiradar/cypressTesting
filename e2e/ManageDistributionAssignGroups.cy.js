///<reference types="cypress"/>
    
import LoginPage from "./PageObject/LoginPage.cy.js";

describe(' Login to master account', () => {
  let rnum = Math.floor(Math.random() * 1001)

    beforeEach('Login', () =>
    {
    const lp=new LoginPage()
    lp.visit()
    lp.fillUserid('cypresstesting')
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
cy.contains('CONTENT').click()
cy.contains('District Distributions').click()
cy.wait(4000)
// force click
cy.contains('tr', 'Distribution 2').find('input').check();
cy.contains('Manage Distribution').click({force:true})
cy.wait(5000)
cy.get('#openAddGs').click()
cy.wait(3000)
cy.contains('tr', 'Group 2').find('input').check();
cy.get('#assignGroupsBtn').click()
cy.wait(2000)
cy.get('.unassignGroup').click()
cy.get('#edciteStatusArea').contains('Unassigned')
//cy.get('.dataTables_empty').contains('No data available')*/
}) 
});