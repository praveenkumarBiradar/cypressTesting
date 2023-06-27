///<reference types="cypress"/>

describe('Regrade', function () {
   
    const arr = [
      {
        "account": "praveenpub",
        "master": "masterspraveen"
    },
    {
        "account": "praveenpub",
        "master": "masterspraveen"
    }
       
        
    ]
      
      // for loop
     // for (let i = 0; i < data.length; i++) {
        ///<reference types="cypress"/>

        it('opens the about page', () => {
 
    cy.visit('http://edtest70.edcite-dev.com/usr/signin.html')
    cy.get('#userid').type('praveen1996')
    cy.get('#password').type('praveen')
    cy.get('#loginBtn').click()
    cy.wait(4000)
    cy.visit('http://edtest70.edcite-dev.com/publisher/addESCustomerPage');

    for (var index in arr) {
      //  cy.log(arr[index].name)
      //}


    cy.get('#publisher').type(arr[index].account)
    cy.get('#master').type(arr[index].master)
    cy.get('#addCustBtn').click()
    cy.wait(4000)
   // cy.get('.actionbtn').contains('Regrade All').click()
   // cy.get(':nth-child(2) > .actionbtn').click()
    //cy.wait(4000)
    cy.get('#publisher').clear()
    cy.get('#master').clear()
    cy.wait(3000)
    
        //console.log(data[i])
    }
  
 })
  
 });