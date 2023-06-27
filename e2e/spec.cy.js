describe('empty spec', () => {
 
  before(function () {
    cy.visit('http://edtest70.edcite-dev.com/usr/signin.html')
    cy.get('#userid').type('masterpraveen')
    cy.get('#password').type('praveen')
    cy.get('#loginBtn').click()
    
  })
  
  after(function (){
    cy.get('#welcomelink').click()
    cy.contains('Logout').click()
  })
   
  it('Click on Students Add To Class and classes Upload and view', () => {
    
    
      cy.get(':nth-child(4) > [href="/mstr/AddStudentsToClasses"]')
      let a=cy.url()
      cy.should('include', 'a')
      cy.contains('HOME').click()
      cy.wait(3000)
      cy.get(':nth-child(4) > [href="/mstr/UploadStudents"]')
      cy.wait(3000)
      cy.contains('HOME').click()
      cy.get(':nth-child(4) > .view-btn')
      cy.contains('HOME').click()
    
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
        
             })
        
               
  
       })

     
          


           

