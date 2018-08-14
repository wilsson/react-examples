describe('App Shopping Cart', function() {
    beforeEach(function () {
        cy.visit('http://localhost:8080');
        //cy.screenshot();
        cy.login();
    })
    it('Comprar producto', () => {
        cy.get('[data-test=btn-add-to-cart]')
          .click({ multiple: true });
        cy.get('[data-test=btn-checkout]')
          .click();
        cy.get('[data-test=btn-checkout-confirm]')
          .click();
        //cy.screenshot();
    })
})