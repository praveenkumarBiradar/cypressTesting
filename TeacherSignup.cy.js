
describe(' Teacher Signup',()=>{
let rnum = Math.floor(Math.random() * 1000001)
it (' Create new teacher ', ()=>{

cy.visit('http://edtest70.edcite-dev.com/pub/apps/tani/1/edciteLP_v3.html')
cy.scrollTo('bottom')
cy.wait(2000)
cy.get('.free-signup-n > b').click()
cy.get('#fullName').type(rnum+'Newteacher')
cy.get('#emailid').type(rnum+'@newgmail.com')
cy.get('#userid').type('rnum')
cy.get('#pwd').type('rnum')
cy.get('#pwd1').type('rnum')
cy.get('#submit-signup-btn').click();
cy.contains('Edcite')
    
})


});