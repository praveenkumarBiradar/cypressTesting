describe('Performance Test - Login Page', () => {
    it('should have a fast response time for login requests', () => {
      cy.intercept('GET', '/apps/TeacherHome').as('loginRequest');
  
      cy.visit('http://edtest70.edcite-dev.com/usr/signin.html')
    cy.get('#userid').type('praveen1476')
    cy.get('#password').type('pp')
    cy.get('#loginBtn').click()
  
      cy.wait('@loginRequest').then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
        expect(interception.response.duration).to.be.lessThan(1000); // Response time should be less than 1 second
      });
    });
  });
  