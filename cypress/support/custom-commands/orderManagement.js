let orderManagement
before(() =>{
    Cypress.on('uncaught:exception',() =>{
        return false
    })
})
before(() =>{
    cy.fixture("element").then((locators) =>{
        orderManagement = locators.orderManagement
    })
})
Cypress.Commands.add('viewAllOrders', () =>{
    cy.get(orderManagement.accountBtn).click();
    cy.get(orderManagement.ordersBtn).click();
    cy.url().should('include', '/account/orders/');
})
Cypress.Commands.add('viewSingleOrder', () =>{
    cy.get(orderManagement.accountBtn).click();
    cy.get(orderManagement.ordersBtn).click();
    cy.url().should('include', '/account/orders/');
    cy.get(orderManagement.viewOrderBtn).click();
    cy.get(orderManagement.orderDetails).should('be.visible');
    cy.get(orderManagement.orderDetails).invoke('text').then((message) => {
        expect(message).to.contain('Order details')
        cy.log(message)
    });

})