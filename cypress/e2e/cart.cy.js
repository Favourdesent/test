describe('Store Activities', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    describe('Add product to Cart', () => {
        it('Add product to Cart ', () => {
        cy.addAndRemoveCart();
          })
        it.only('Add product to Cart and Check Out ', () => {
            // cy.ValidLogin();
          cy.addCartAndChecktOut();
         })
    })
  })