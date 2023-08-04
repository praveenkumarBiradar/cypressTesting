///<reference types="cypress"/>
import LoginPage from "./PageObject/LoginPage.cy.js";
describe(' Teacher home page My classes', () => {
    let rnum = Math.floor(Math.random() * 1001)
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(function () {

        const lp=new LoginPage()
        lp.visit()
        lp.fillUserid('teacher5111')
        lp.fillPassword('praveen')
        lp.submit()
    })

    it('Teacher Home Page Create Class And Add Students To Class',() => {
        cy.title().should('eq', 'Teacher Home | Edcite')
        cy.wait(4000)
        cy.get('.eg').click()
        cy.get('#fhClassName').type(rnum + 'Class')
        cy.get('.modal-footer > .eg').click()
        cy.wait(2000)
        cy.get('.sec-nav > :nth-child(1) > a').click()
        cy.get('.seach-classes-i').click({force : true}).type(rnum + 'Class')
        cy.contains('0 Assignments').should('be.visible')
        //Click on class name link
        cy.get('#my-classes-tab-pane-1 > .tc-card > .tc-top > .class-name-div > .class-title').click()
        cy.contains("This class doesn't have any students").should('be.visible')
        // Click on add students class
        cy.get('.empty-state-student-btn-div > :nth-child(1)').click()
        cy.get('.add-existing-div > .btn').click()
        cy.wait(4000)
        // Select Student
        cy.contains('tr', 'Student5111').find('input').check();
        cy.get('#stdnt-action-dd').click()
        cy.get('.dropdown-menu > :nth-child(3) > a').click()
        cy.get('#sel-tsgroup-dd').click()
        cy.contains(rnum + 'Class').click({force : true})
        cy.get('.eg').click()
        cy.contains('Added').should('be.visible')
        cy.wait(4000)
        cy.get('.user-name').click({force : true})
        cy.contains('Logout').click()
    })

})