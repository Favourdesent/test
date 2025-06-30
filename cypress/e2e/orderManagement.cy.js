describe('Order Management', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('View All Orders', () => {
      cy.ValidLogin();
      cy.viewAllOrders();
    })
    it.only('View Single Order', () => {
      cy.ValidLogin();
      cy.viewSingleOrder();
  })
  })