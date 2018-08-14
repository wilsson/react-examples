describe('App Shopping Cart', function() {
    beforeEach(function () {
        cy.visit('http://localhost:8080');
    })
    it('Login', () => {
        cy.login();
    })
})