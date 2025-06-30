let login

before(() =>{
Cypress.on('uncaught:exception',() =>{
return false
  })
})

before(() =>{
    cy.fixture("element").then((locators) =>{
        login = locators.login
    })
})
Cypress.Commands.add('invalidLogin', () =>{
 cy.get(login.accountBtn).click();
 cy.get(login.emailField).type('tester');
 cy.get(login.passwordField).type('password');
 cy.get(login.loginBtn).click();
 cy.get(login.UnsuccessfulLoginMessage).should('contain', 'Error: The username tester is not registered on this site. If you are unsure of your username, try your email address instead.');
})
Cypress.Commands.add('ValidLogin', () =>{
 const userName = "apptester";
 cy.get(login.accountBtn).click();
 cy.get(login.emailField).type(userName);
 cy.get(login.passwordField).type('@passwordA1');
 cy.get(login.loginBtn).click();
 cy.get(login.loginMessage).should('contain', `Hello ${userName}`);
   })