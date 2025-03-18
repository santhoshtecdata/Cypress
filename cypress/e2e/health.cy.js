Cypress.Commands.add('login', (username, password) => {
    describe('vizza portal1', () => {
    it('health',()=>{
    cy.visit('https://vizzainsurance.com/pos')
    cy.wait(2000)
    cy.get('input[formcontrolname="username"]').first().type(username)
    cy.get('input[formcontrolname="password"]').first().type(password)
    cy.wait(2000)
    cy.get('button[type="submit"]').first().click()

});
});
  });