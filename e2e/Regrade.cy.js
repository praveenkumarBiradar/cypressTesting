///<reference types="cypress"/>

describe('Regrade', function () {
   
    const arr = [
      
   
   
    {
        "assignid": "premiercharterschooladmin_16851233223580",
        "exid": "lgassessments_16781303441261815",
        "qnum": 1,
        "itemid": "lgassessments_164555445678101402414",
        "take": 1
    },
    {
        "assignid": "premiercharterschooladmin_168455132334434097580",
        "exid": "lgassessments_1678101261815",
        "qnum": 2,
        "itemid": "lgassessments_167815603982614",
        "take": 1
    }
       
        
    ]
      
      // for loop
     // for (let i = 0; i < data.length; i++) {
        ///<reference types="cypress"/>

        it('opens the about page', () => {
 
    cy.visit('http://ed11.edcite.com/usr/signin.html')
    cy.get('#userid').type('praveen1996')
    cy.get('#password').type('praveen')
    cy.get('#loginBtn').click()
    cy.wait(4000)
    cy.visit('http://ed11.edcite.com/devtools/massRegradeTool');

    for (var index in arr) {
      //  cy.log(arr[index].name)
      //}


    cy.get('#assignid').type(arr[index].assignid)
    cy.get('#exid').type(arr[index].exid)
    cy.get('#qnum').type(arr[index].qnum)
    cy.get('#newKey').type(arr[index].itemid)
    cy.get('#take').type(arr[index].take)
    cy.get('.actionbtn').contains('List Students').click()
    cy.wait(4000)
    cy.get('.actionbtn').contains('Regrade All').click()
   // cy.get(':nth-child(2) > .actionbtn').click()
    cy.wait(4000)
    cy.get('#assignid').clear()
    cy.get('#exid').clear()
    cy.get('#qnum').clear()
    cy.get('#newKey').clear()
    cy.get('#take').clear()
    cy.wait(3000)
    
        //console.log(data[i])
    }
  
 })
  
 });