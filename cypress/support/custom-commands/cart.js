let cart

before(() =>{
    Cypress.on('uncaught:exception',() =>{
        return false
    })
})
before(() =>{
    cy.fixture("element").then((locators) =>{
        cart = locators.cart
    })
})
Cypress.Commands.add('addAndRemoveCart', () =>{
      cy.get(cart.storeBtn).click();
      cy.get(cart.cartCount).invoke('text').then((text) => {
      expect(text.trim()).to.eq('0');
      cy.get(cart.secondProduct).click();
      cy.wait(2000);
      cy.get(cart.cartCount).invoke('text').then((text) => {
      expect(text.trim()).to.eq('1');
      cy.get(cart.cartCount).click();
      cy.get(cart.removeCartBtn).click();
      cy.wait(3000);
      cy.get(cart.cartCount).invoke('text').then((text) => {
      expect(text.trim()).to.eq('0');
      })
    })
})
})
Cypress.Commands.add('addCartAndChecktOut', () =>{
      cy.get(cart.storeBtn).click();
      cy.get(cart.cartCount).invoke('text').then((text) => {
      expect(text.trim()).to.eq('0');
      cy.get(cart.firstProduct).click();
      cy.get(cart.secondProduct).click();
      cy.wait(2000);
      cy.get(cart.cartCount).invoke('text').then((text) => {
      expect(text.trim()).to.eq('2');
      cy.get(cart.cartCount).click();
      cy.get(cart.checkoutBtn).click();
      cy.get(cart.firstNameField).type('Billy');
      cy.get(cart.lastNameField).type('Bob');
      cy.get(cart.countryDropdown).click();
      cy.get(cart.searchCountryField).type("nigeria{enter}");
      cy.get(cart.addressField).should('be.visible').type('123 Main St');
      cy.get(cart.cityField).type('New York');
      cy.get(cart.stateField).click();
      cy.get(cart.searchCountryField).type("lagos{enter}");
      cy.get(cart.emailField).type('test@yopmail.com');
      cy.get(cart.placeOrderBtn).click();
      cy.get(cart.orderConfirmation).should('contain', 'Thank you. Your order has been received.');
    })
})
})
