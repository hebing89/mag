describe('sales force', () => {
    it('should work', () => {
        cy.visit('http://velocity-uat.magmutual.com/mag20181uat/Velocity/login-weblogic.jsp');
        cy.get('[name="j_username"]').type('bhe');
        cy.get('[name="j_password"]').type('12@Wtsbs4mt');
        cy.get('[name="loginBtn"]').click();
        cy.pause();
        cy.get('[id="ui-id-4"]').click();
    })
})