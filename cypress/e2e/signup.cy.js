describe('Sign up', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('Succesful Signup', () => {
      cy.signup();
    })
    it('Unsuccessful Signup', () => {
      cy.signupWithExistingUser();
  })
  })