describe('App Shopping Cart', function() {
    beforeEach(function () {
        cy.visit('http://localhost:8080')
    })
    it('Comprar producto', () => {
        cy.get('.qa-btn__login')
            .click();
        cy.get('input[name="name"]').type('wilson');
        cy.get('input[name="password"]').type('123456')
        cy.get('.qa-btn__login-go')
            .click();
        cy.get('.qa-btn_add-to-cart')
          .click({ multiple: true });
        cy.get('.qa-btn_checkout')
          .click();
        cy.get('.qa-btn_checkout-confirm')
          .click();
    })
})