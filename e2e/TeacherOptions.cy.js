
///<reference types="cypress"/>
import LoginPage from "./PageObject/LoginPage.cy.js";

describe('Group Options ', () => {
    //let date = new Date().toJSON(); 
    let nt = Math.floor(Math.random() * 1001)
    let userid = Math.floor(Math.random() * 10001)
    beforeEach(function () {
      
      const lp=new LoginPage()
      lp.visit()
      lp.fillUserid('masterpraveen')
      lp.fillPassword('praveen')
      lp.submit()
  
          })


   it(' Create New Teacher', () =>
  { 
   cy.contains('ROSTERS').click()
   cy.contains('District Teachers').click()
   cy.wait(3000)
   cy.get('tbody > :nth-child(1) > :nth-child(4)').click()
   cy.get('#createNewT').click({force:true})
   cy.get('#ntNameI').type(nt+'@gmail.com')
   cy.get('#ntEdciteID').type(userid)
   cy.get('#ntPasswordI').type(userid)
   cy.get('#ntEmailI').type(nt+'@gmail.com')
  // cy.get('[value="154056"]').click({force:true})
   //cy.contains('BIJAPUR').click()
   cy.get('.modal-footer').contains('Create').click()
   
   //madhavi1ss010+1234@gmail.com	
   

  }) 
 
  it(' Invite Teacher', () =>
  { 
   cy.contains('ROSTERS').click()
   cy.contains('District Teachers').click()
   cy.get('tbody > :nth-child(1) > :nth-child(4)').click()
   cy.get('#inviteExT').click({force:true})
   cy.get('#temail').type('vi1ss010+1234@gmail.com')
   cy.get('#doInviteTeacherBtn').click()  
   //madhavi1ss010+1234@gmail.com	
   
  }) 
  
  it(' List of pending teachers', () =>
  { 
   cy.contains('ROSTERS').click()
   cy.contains('District Teachers').click()
   cy.wait(3000)
   cy.get('tbody > :nth-child(1) > :nth-child(4)').click()
   cy.get('#pendingTs').click({force:true})
   cy.contains('List of Pending Teachers').should('be.visible')
   
  }) 
  
  it(' Edit teachers', () =>
  { 
   cy.contains('ROSTERS').click()
   cy.contains('District Teachers').click()
   cy.get('tbody > :nth-child(1) > :nth-child(1) > input').click()
   cy.scrollTo('top')
   cy.get('#editT').click({force:true})
   cy.wait(5000)
   cy.get('#teacherNameI').clear().type('edit@gmail.com')
   cy.get('#form-numbers > [data-val="3"]').click()
   cy.get('#editTeacherSubmit').click()

  })
  

  it(' Multi Edit teachers', () =>
  { 
   cy.contains('ROSTERS').click()
   cy.contains('District Teachers').click()
   cy.get('tbody > :nth-child(1) > :nth-child(1) > input').click()
   cy.get('tbody > :nth-child(2) > :nth-child(1) > input').click()
   cy.get('#bulkEdit').click({force:true})
   
  })
   
  it(' Email teachers', () =>
  { 
   cy.contains('ROSTERS').click()
   cy.contains('District Teachers').click()
   cy.get('tbody > :nth-child(1) > :nth-child(1) > input').click()
   cy.get('#emailSel').click({force:true})
   
  })
   it(' Archive teachers', () =>
  { 
   cy.contains('ROSTERS').click()
   cy.contains('District Teachers').click()
   cy.wait(3000)
   cy.contains('tr', 'AKSPP').find('input').check();
   cy.get('#archiveTeachers').click({force:true})
   cy.wait(3000)
  })
   
  it(' view Archive teachers', () =>
  { 
   cy.contains('ROSTERS').click()
   cy.contains('District Teachers').click()
   cy.wait(3000)
   cy.get('tbody > :nth-child(2) > :nth-child(4)') 
   cy.get('#viewArchived').click({force:true})
   cy.contains('tr', 'AKSPP').find('input').check();
   cy.get('#unarchive-btn').click()

  })
    })
