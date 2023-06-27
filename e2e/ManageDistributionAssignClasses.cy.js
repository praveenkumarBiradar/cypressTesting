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
//cy.get('.odd > :nth-child(6) > .tableDelete').click()
cy.get('#openAddCs').click()
cy.wait(3000)
cy.contains('tr', 'class1').find('input').check();
cy.get('#select-classes-modal > .modal-dialog > .modal-content > .modal-body > [style="text-align: center;"] > .btn').click()
cy.get('.tableDelete').click()
cy.get('.dataTables_empty').contains('No data available')
}) 
});