describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Invalid Login', () => {
    cy.invalidLogin();
  })
  it.only('Valid Login', () => {
    cy.ValidLogin();
})
})