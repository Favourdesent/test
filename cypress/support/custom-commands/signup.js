import {faker} from '@faker-js/faker'

let signup
before(() =>{
    Cypress.on('uncaught:exception',() =>{
        return false
    })
})
before(() =>{
    cy.fixture("element").then((locators) =>{
        signup = locators.signup
    })
})
Cypress.Commands.add('signup', () =>{
    const firstName = faker.person.firstName();
    cy.get(signup.accountBtn).click();
    cy.get(signup.usernameField).type(firstName);
    cy.get(signup.emailField).type(faker.internet.email());
    cy.get(signup.passwordField).type(faker.internet.password());
    cy.get(signup.registerBtn).click();
    cy.get(signup.signupMessage).should('contain', `Hello ${firstName}`);
    console.log(firstName);
})
Cypress.Commands.add('signupWithExistingUser', () =>{
    cy.get(signup.accountBtn).click();
    cy.get(signup.usernameField).type('billy');
    cy.get(signup.emailField).type('bill@yopmail.com');
    cy.get(signup.passwordField).type('@passwordA1');
    cy.get(signup.registerBtn).click();
    cy.get(signup.invalidSignupMessage).should('contain', 'Error: An account is already registered with your email address. Please log in.');
})