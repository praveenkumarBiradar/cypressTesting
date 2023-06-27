describe('Performance Testing', () => {
    beforeEach(() => {
        cy.visit('http://edtest70.edcite-dev.com/usr/signin.html')
        cy.get('#userid').type('masterpraveen')
        cy.get('#password').type('praveen')
        cy.get('#loginBtn').click(); // Replace with your application's URL
    });
  
    it('Measures Page Load Time', () => {
        cy.visit('http://edtest70.edcite-dev.com/mstr/ReportsHub')
      cy.window().then((window) => {
        const startTime = window.performance.timing.navigationStart;
        const loadTime = window.performance.now() - startTime;
        
        cy.log(`Page Load Time: ${loadTime} ms`);
      });
    });
  
   
  
    it('Simulates Load', () => {
      const concurrency = 10; // Number of concurrent users
  
      Cypress.Promise.map(Array(concurrency), () => {
      //  return cy.visit('http://edtest70.edcite-dev.com/mstr/ReportsHub'); // Replace with your application's URL
        cy.window().then((window) => {
            
            const startTime = window.performance.timing.navigationStart;
            const loadTime = window.performance.now() - startTime;
            
            cy.log(`Page Load Time: ${loadTime} ms`);
          });});
    });
  });
  